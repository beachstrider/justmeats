export const getCustomerByEmail = async (email, context) => {
  const res = await fetch(
    `${context.env.PUBLIC_RECHARGE_ADMIN_API_URL}/customers?email=${email}&limit=1`,
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

export const getCustomerFirstAddressPhone = async (id, context) => {
  const res = await fetch(
    `${context.env.PUBLIC_RECHARGE_ADMIN_API_URL}/addresses?customer_id=${id}&sort_by=updated_at-desc&limit=1`,
    {
      headers: {
        'X-Recharge-Version': '2021-11',
        'X-Recharge-Access-Token':
          context.env.PUBLIC_RECHARGE_ADMIN_ACCESS_TOKEN,
      },
    },
  )

  const { addresses } = await res.json()

  return addresses.length > 0 ? addresses[0].phone : null
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
