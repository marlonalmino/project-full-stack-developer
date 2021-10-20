'use strict' // O JavaScript acusa mais erros

// ----- VAR x LET ----- //

// var tem escopo abrangente
// var tem escopo reduzido

function withVar() {
  for (var i = 0; i < 10; i++) {
    console.log('var ' + i)
  }

  i = 20
  console.log(i)
}

function withLet() {
  for (let i = 0; i < 10; i++) {
    console.log('let ' + i)
  }

  // i = 20 // Está gerando erro
  // console.log(i)
}

withVar()
withLet() // Vai gerar um erro na declaração do i por causa do escopo reduzido

// ------- CONST ------- //

// const - não podemos reatribuir valores

// const c = 10
// c = 20 // Vai gerar erro, pois const não pode variar

const d = []
console.log(d)

d.push(1)
console.log(d)

// ----- FUNCTIONS ----- //

function sum(a, b) {
  return a + b
}

// função anônima
const sum2 = function(a, b) {
  return a + b
}

// arrow function
const sum3 = (a, b) => {
  return a + b
}

// arrow function reduzida
const sum4 = (a, b) => a + b

console.log(sum(2, 3))
console.log(sum2(5, 4))
console.log(sum3(10, 2))
console.log(sum4(7, 8))

// ----- TEMPLATE LITERALS ----- //

const name = 'Marlon'
const surName = 'Almino'
const text1 = 'Meu nome é ' + name + ' ' + surName
const text2 = `Meu nome é ${name} ${surName}`

console.log(text1)
console.log(text2)

// ----- DEFAULT PARAMETERS ----- //

const sum5 = (a = 0, b = 0) => a + b
console.log(sum5(12))
console.log(sum5(null, 5))
console.log(sum5(25, null))