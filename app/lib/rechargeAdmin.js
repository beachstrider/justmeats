export const getCustomerByEmail = async (email, context) => {
  const res = await fetch(
    `${context.env.PUBLIC_RECHARGE_ADMIN_API_URL}/customers?email=${email}&include=addresses&limit=1`,
    {
      headers: {
        'X-Recharge-Version': '2021-11',
        'X-Recharge-Access-Token':
          context.env.PUBLIC_RECHARGE_ADMIN_ACCESS_TOKEN,
      },
    },
  )

  const { customers } = await res.json()

  return customers.length > 0 ? customers[0] : null
}

export const updateCustomer = async (id, data, context) => {
  await fetch(`${context.env.PUBLIC_RECHARGE_ADMIN_API_URL}/customers/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'X-Recharge-Version': '2021-11',
      'X-Recharge-Access-Token': context.env.PUBLIC_RECHARGE_ADMIN_ACCESS_TOKEN,
    },
    method: 'PUT',
    body: JSON.stringify(data),
  })

  return true
}
