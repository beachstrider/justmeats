export const configLuckyOrange = (customer) => {
  const email = customer?.emailAddress?.emailAddress
  const name = `${customer?.firstName} ${customer?.lastName}`

  window.LOQ = window.LOQ || []
  window.LOQ.push([
    'ready',
    async (LO) => {
      // Track an event
      console.log('==', name)

      // Or, identify a visitor
      await LO.$internal.ready('visitor')
      LO.visitor.identify({
        email,
        name,
      })
    },
  ])
}
