export const configLuckyOrange = (customer) => {
  const customerEmail = customer?.emailAddress?.emailAddress
  const customerName = `${customer?.firstName} ${customer?.lastName}`

  if (customerEmail && customerName) {
    window.LO.$internal.ready('visitor').then(() => {
      window.LO.visitor.identify({
        Email: customerEmail,
        Name: customerName,
      })
    })
  }
}
