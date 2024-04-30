export const configLuckyOrange = (customer) => {
  const email = customer?.emailAddress?.emailAddress
  const name = `${customer?.firstName} ${customer?.lastName}`

  console.log('LO started')
  window.LO.$internal.ready('visitor').then(() => {
    window.LO.visitor.identify({
      email,
      name,
    })
    console.log('LO ended')
  })
}
