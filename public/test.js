const email = 'test@test.com'
const fullName = `Test User`

console.log('LO started')
window.LO.$internal.ready('visitor').then(() => {
  window.LO.visitor.identify({
    Email: email,
    Name: fullName,
  })
  console.log('LO ended')
})
