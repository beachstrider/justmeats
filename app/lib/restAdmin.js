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
  const res2 = fetch(
    `https://${storeDomain}/admin/api/2024-07/orders/count.json`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': accessToken,
      },
    },
  )

  const [data1, data2] = await Promise.all([res1, res2])

  const { count: customerCount } = await data1.json()
  const { count: ordersCount } = await data2.json()

  // const res3 = await fetch(
  //   `https://${storeDomain}/admin/api/2024-07/orders.json`,
  //   {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'X-Shopify-Access-Token': accessToken,
  //     },
  //   },
  // )
  // const data3 = await res3.json()
  // console.debug('🚀 - data3:', data3)

  return { customerCount }
}
