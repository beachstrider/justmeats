export const PRODUCT_ITEM_FRAGMENT = `#graphql
  fragment MoneyProductItem on MoneyV2 {
    amount
    currencyCode
  }
  fragment ProductItem on Product {
    id
    tags
    handle
    title
    description
    requiresSellingPlan
    images(first: 100) {
      nodes {
        altText
        height
        url
        width
      }
    }
    featuredImage {
      id
      altText
      url
      width
      height
    }
    priceRange {
      minVariantPrice {
        ...MoneyProductItem
      }
      maxVariantPrice {
        ...MoneyProductItem
      }
    }
    variants(first: 10) {
      nodes {
        id
        title
        image {
          id
          altText
          url
          width
          height
        }
      }
    }
    collections(first: 3) {
      edges {
        node {
          id
          title
          handle
        }
      }
    }
    sellingPlanGroups(first:2) {
      nodes {
        name
        options {
          name
          values
        }
        sellingPlans(first: 2) {
          nodes {
            id
            name
          }
        }
      }
    }

    nutration: metafield(namespace: "custom", key: "nutration") {
      value
    }
    cardDescription: metafield(namespace: "custom", key: "card_description") {
      value
    }
    servings: metafield(namespace: "custom", key: "_servings") {
      value
    }
    weight: metafield(namespace: "custom", key: "weight") {
      value
    }
    calories: metafield(namespace: "custom", key: "calories") {
      value
    }
    protein: metafield(namespace: "custom", key: "protein") {
      value
    }
    carbs: metafield(namespace: "custom", key: "carbs") {
      value
    }
    fat: metafield(namespace: "custom", key: "fat") {
      value
    }
    ingredients: metafield(namespace: "custom", key: "ingredients") {
      value
    }
    product_information: metafield(namespace: "custom", key: "product_information") {
      value
    }
    allergens: metafield(namespace: "custom", key: "allergens") {
      value
    }
    background_color: metafield(namespace: "custom", key: "background_color") {
      value
    }
    serving_type: metafield(namespace: "custom", key: "serving_type") {
      value
    }
    meat_type: metafield(namespace: "custom", key: "meat_type") {
      value
    }
    special_type: metafield(namespace: "custom", key: "special_type") {
      value
    }
    cart_drawer_img: metafield(namespace: "custom", key: "cart_drawer_img") {
      reference {
        ... on MediaImage {
          image {
            url
          }
        }
      }
    }
    product_icon_1: metafield(namespace: "custom", key: "product_icon_1") {
      reference {
        ... on MediaImage {
          image {
            url
          }
        }
      }
    }
  }
`

export const ALL_PRODUCTS_QUERY = `#graphql
  query AllProducts(
    $country: CountryCode
    $language: LanguageCode
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(country: $country, language: $language) {
    products(first: $first, last: $last, before: $startCursor, after: $endCursor) {
      nodes {
        ...ProductItem
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
  ${PRODUCT_ITEM_FRAGMENT}
`

export const PRODUCT_VARIANT_FRAGMENT = `#graphql
  fragment ProductVariant on ProductVariant {
    availableForSale
    compareAtPrice {
      amount
      currencyCode
    }
    id
    image {
      __typename
      id
      url
      altText
      width
      height
    }
    price {
      amount
      currencyCode
    }
    product {
      title
      handle
    }
    selectedOptions {
      name
      value
    }
    sku
    title
    unitPrice {
      amount
      currencyCode
    }
  }
`

export const PRODUCT_FRAGMENT = `#graphql
  fragment Product on Product {
    id
    title
    vendor
    handle
    descriptionHtml
    description
    options {
      name
      values
    }
    variants(first: 10) {
      nodes {
        ...ProductVariant
      }
    }
    seo {
      description
      title
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
`

export const PRODUCT_BY_HANDLE_QUERY = `#graphql
  query Product(
    $country: CountryCode
    $handle: String!
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...Product
    }
  }
  ${PRODUCT_FRAGMENT}
`

export const PRODUCT_VARIANTS_FRAGMENT = `#graphql
  fragment ProductVariants on Product {
    variants(first: 250) {
      nodes {
        ...ProductVariant
      }
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
`

export const VARIANTS_QUERY = `#graphql
  ${PRODUCT_VARIANTS_FRAGMENT}
  query ProductVariants(
    $country: CountryCode
    $language: LanguageCode
    $handle: String!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...ProductVariants
    }
  }
`

export const METAFIELDS_QUERY = `#graphql
  query Metafields($productId: ID!) {
    node(id: $productId) {
      ... on Product {
        metafields(first: 10) {
          edges {
            node {
              namespace
              key
              value
            }
          }
        }
      }
    }
  }
`

export const PRODUCT_QUERYTT = `#graphql
  query getProductById($id: ID!) {
    product(id: $id) {
      id
      handle
    }
  }
`

export const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
`
