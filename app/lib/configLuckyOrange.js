export const configLuckyOrange = (customer) => {
  if (customer) {
    const email = customer?.emailAddress?.emailAddress
    const name = `${customer?.firstName} ${customer?.lastName}`
    console.log('==', name, window.LOQ)
    window.LOQ = window.LOQ || []
    window.LOQ.push([
      'ready',
      function (LO) {
        LO.$internal.ready('visitor').then(function () {
          LO.visitor.identify({
            email,
            name,
          })
        })
      },
    ])
  }
}
