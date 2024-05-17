export const configLuckyOrange = (customer) => {
  const customerEmail = customer?.email
  const customerName = `${customer?.first_name} ${customer?.last_name}`

  if (customerEmail && customerName) {
    window.LO.$internal.ready('visitor').then(() => {
      window.LO.visitor.identify({
        Email: customerEmail,
        Name: customerName,
      })
    })
  }
}
