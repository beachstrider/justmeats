import { Link, useLoaderData } from '@remix-run/react'
import { json } from '@shopify/remix-oxygen'

/**
 * @param {LoaderFunctionArgs}
 */
export async function loader({ context }) {
  const data = await context.storefront.query(POLICIES_QUERY)
  const policies = Object.values(data.shop || {})

  if (!policies.length) {
    throw new Response('No policies found', { status: 404 })
  }

  return json({ policies })
}

export default function Policies() {
  /** @type {LoaderReturnData} */
  const { policies } = useLoaderData()

  return (
    <div className="policies">
      <h1>Policies</h1>
      <div>
        {policies.map((policy) => {
          if (!policy) return null
          return (
            <fieldset key={policy.id}>
              <Link to={`/policies/${policy.handle}`}>{policy.title}</Link>
            </fieldset>
          )
        })}
      </div>
    </div>
  )
}

const POLICIES_QUERY = `#graphql
  fragment PolicyItem on ShopPolicy {
    id
    title
    handle
  }
  query Policies ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    shop {
      privacyPolicy {
        ...PolicyItem
      }
      shippingPolicy {
        ...PolicyItem
      }
      termsOfService {
        ...PolicyItem
      }
      refundPolicy {
        ...PolicyItem
      }
      subscriptionPolicy {
        id
        title
        handle
      }
    }
  }
`

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
