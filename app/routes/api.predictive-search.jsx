import { json } from '@shopify/remix-oxygen'

import { NO_PREDICTIVE_SEARCH_RESULTS } from '~/components/Search'
import { applyTrackingParams } from '~/lib/search'

const DEFAULT_SEARCH_TYPES = [
  'ARTICLE',
  'COLLECTION',
  'PAGE',
  'PRODUCT',
  'QUERY',
]

/**
 * Fetches the search results from the predictive search API
 * requested by the SearchForm component
 * @param {LoaderFunctionArgs}
 */
export async function loader({ request, params, context }) {
  const search = await fetchPredictiveSearchResults({
    params,
    request,
    context,
  })

  return json(search, {
    headers: { 'Cache-Control': `max-age=${search.searchTerm ? 60 : 3600}` },
  })
}

/**
 * @param {Pick<LoaderFunctionArgs, 'params' | 'context' | 'request'>}
 */
async function fetchPredictiveSearchResults({ params, request, context }) {
  const url = new URL(request.url)
  const searchParams = new URLSearchParams(url.search)
  const searchTerm = searchParams.get('q') || ''
  const limit = Number(searchParams.get('limit') || 10)
  const rawTypes = String(searchParams.get('type') || 'ANY')

  const searchTypes =
    rawTypes === 'ANY'
      ? DEFAULT_SEARCH_TYPES
      : rawTypes
          .split(',')
          .map((t) => t.toUpperCase())
          .filter((t) => DEFAULT_SEARCH_TYPES.includes(t))

  if (!searchTerm) {
    return {
      searchResults: { results: null, totalResults: 0 },
      searchTerm,
      searchTypes,
    }
  }

  const data = await context.storefront.query(PREDICTIVE_SEARCH_QUERY, {
    variables: {
      limit,
      limitScope: 'EACH',
      searchTerm,
      types: searchTypes,
    },
  })

  if (!data) {
    throw new Error('No data returned from Shopify API')
  }

  const searchResults = normalizePredictiveSearchResults(
    data.predictiveSearch,
    params.locale,
  )

  return { searchResults, searchTerm, searchTypes }
}

/**
 * Normalize results and apply tracking qurery parameters to each result url
 * @param {PredictiveSearchQuery['predictiveSearch']} predictiveSearch
 * @param {LoaderFunctionArgs['params']['locale']} locale
 */
export function normalizePredictiveSearchResults(predictiveSearch, locale) {
  let totalResults = 0
  if (!predictiveSearch) {
    return {
      results: NO_PREDICTIVE_SEARCH_RESULTS,
      totalResults,
    }
  }

  const localePrefix = locale ? `/${locale}` : ''
  const results = []

  if (predictiveSearch.queries.length) {
    results.push({
      type: 'queries',
      items: predictiveSearch.queries.map((query) => {
        const trackingParams = applyTrackingParams(
          query,
          `q=${encodeURIComponent(query.text)}`,
        )

        totalResults++
        return {
          __typename: query.__typename,
          handle: '',
          id: query.text,
          image: undefined,
          title: query.text,
          styledTitle: query.styledText,
          url: `${localePrefix}/search${trackingParams}`,
        }
      }),
    })
  }

  if (predictiveSearch.products.length) {
    results.push({
      type: 'products',
      items: predictiveSearch.products.map((product) => {
        totalResults++
        const trackingParams = applyTrackingParams(product)
        return {
          __typename: product.__typename,
          handle: product.handle,
          id: product.id,
          image: product.variants?.nodes?.[0]?.image,
          title: product.title,
          url: `${localePrefix}/products/${product.handle}${trackingParams}`,
          price: product.variants.nodes[0].price,
        }
      }),
    })
  }

  if (predictiveSearch.collections.length) {
    results.push({
      type: 'collections',
      items: predictiveSearch.collections.map((collection) => {
        totalResults++
        const trackingParams = applyTrackingParams(collection)
        return {
          __typename: collection.__typename,
          handle: collection.handle,
          id: collection.id,
          image: collection.image,
          title: collection.title,
          url: `${localePrefix}/collections/${collection.handle}${trackingParams}`,
        }
      }),
    })
  }

  if (predictiveSearch.pages.length) {
    results.push({
      type: 'pages',
      items: predictiveSearch.pages.map((page) => {
        totalResults++
        const trackingParams = applyTrackingParams(page)
        return {
          __typename: page.__typename,
          handle: page.handle,
          id: page.id,
          image: undefined,
          title: page.title,
          url: `${localePrefix}/pages/${page.handle}${trackingParams}`,
        }
      }),
    })
  }

  if (predictiveSearch.articles.length) {
    results.push({
      type: 'articles',
      items: predictiveSearch.articles.map((article) => {
        totalResults++
        const trackingParams = applyTrackingParams(article)
        return {
          __typename: article.__typename,
          handle: article.handle,
          id: article.id,
          image: article.image,
          title: article.title,
          url: `${localePrefix}/blogs/${article.blog.handle}/${article.handle}/${trackingParams}`,
        }
      }),
    })
  }

  return { results, totalResults }
}

const PREDICTIVE_SEARCH_QUERY = `#graphql
  fragment PredictiveArticle on Article {
    __typename
    id
    title
    handle
    blog {
      handle
    }
    image {
      url
      altText
      width
      height
    }
    trackingParameters
  }
  fragment PredictiveCollection on Collection {
    __typename
    id
    title
    handle
    image {
      url
      altText
      width
      height
    }
    trackingParameters
  }
  fragment PredictivePage on Page {
    __typename
    id
    title
    handle
    trackingParameters
  }
  fragment PredictiveProduct on Product {
    __typename
    id
    title
    handle
    trackingParameters
    variants(first: 1) {
      nodes {
        id
        image {
          url
          altText
          width
          height
        }
        price {
          amount
          currencyCode
        }
      }
    }
  }
  fragment PredictiveQuery on SearchQuerySuggestion {
    __typename
    text
    styledText
    trackingParameters
  }
  query predictiveSearch(
    $country: CountryCode
    $language: LanguageCode
    $limit: Int!
    $limitScope: PredictiveSearchLimitScope!
    $searchTerm: String!
    $types: [PredictiveSearchType!]
  ) @inContext(country: $country, language: $language) {
    predictiveSearch(
      limit: $limit,
      limitScope: $limitScope,
      query: $searchTerm,
      types: $types,
    ) {
      articles {
        ...PredictiveArticle
      }
      collections {
        ...PredictiveCollection
      }
      pages {
        ...PredictivePage
      }
      products {
        ...PredictiveProduct
      }
      queries {
        ...PredictiveQuery
      }
    }
  }
`

/**
 * @typedef {| 'ARTICLE'
 *   | 'COLLECTION'
 *   | 'PAGE'
 *   | 'PRODUCT'
 *   | 'QUERY'} PredictiveSearchTypes
 */
/** @typedef {Class<loader>} PredictiveSearchAPILoader */

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @typedef {import('~/components/Search').NormalizedPredictiveSearch} NormalizedPredictiveSearch */
/** @typedef {import('~/components/Search').NormalizedPredictiveSearchResults} NormalizedPredictiveSearchResults */
/** @typedef {import('storefrontapi.generated').PredictiveArticleFragment} PredictiveArticleFragment */
/** @typedef {import('storefrontapi.generated').PredictiveCollectionFragment} PredictiveCollectionFragment */
/** @typedef {import('storefrontapi.generated').PredictivePageFragment} PredictivePageFragment */
/** @typedef {import('storefrontapi.generated').PredictiveProductFragment} PredictiveProductFragment */
/** @typedef {import('storefrontapi.generated').PredictiveQueryFragment} PredictiveQueryFragment */
/** @typedef {import('storefrontapi.generated').PredictiveSearchQuery} PredictiveSearchQuery */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
