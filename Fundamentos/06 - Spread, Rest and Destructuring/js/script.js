window.addEventListener('load', () => {
  doSpread()
  doRest()
  doDestructuring()
})

function doSpread() {
  const marriedMen = people.results.filter(person => person.name.title === 'Mr')
  const marriedWomen = people.results.filter(person => person.name.title === 'Ms')

  const marriedPeople = [...marriedMen, ...marriedWomen, {msg: 'Oi'}]

  console.log(marriedPeople)
}

function doRest() {
  console.log(infiniteSum(1, 2))
  console.log(infiniteSum(1, 2, 1000))
  console.log(infiniteSum(1, 20, 102, 454, 33, 43, 55, 75, 63, 92, 82))
}

function infiniteSum(...numbers) {
  return numbers.reduce((accumulate, current) => accumulate + current, 0)
}

function doDestructuring() {
  const first = people.results[0]

  // // Sem destructuring (repetitivo)
  // const username = first.login.username
  // const password = first.login.password

  // Com destructuring
  const { username, password } = first.login

  console.log(username)
  console.log(password)
}