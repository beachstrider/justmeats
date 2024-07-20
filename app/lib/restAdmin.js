export const getShopSuccessInfo = async (context) => {
  const storeDomain = context.env.PUBLIC_STORE_DOMAIN
  const accessToken = context.env.PRIVATE_ADMIN_API_ACCESS_TOKEN

  const res1 = fetch(
    `https://${storeDomain}/admin/api/2024-07/customers/count.json`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': accessToken,
      },
    },
  )

  const [data1] = await Promise.all([res1])

  const { count: customerCount } = await data1.json()

  return { customerCount }
}
