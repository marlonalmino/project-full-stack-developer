/*
console.log('Olá, mundo!')

var title = document.querySelector('h1')
title.textContent = 'Modificado por Marlon Almino'


var resposta = ''
var dia = 1

// Switch
switch (dia) {
  case 1: resposta = 'Domingo'
  break;
  case 2: resposta = 'Segunda'
  break;
  case 3: resposta = 'Terça'
  break;
  case 4: resposta = 'Quarta'
  break;
  case 5: resposta = 'Quinta'
  break;
  case 6: resposta = 'Sexta'
  break;
  case 7: resposta = 'Sábado'
  break;
  
  default: r = 'Dia inválido'
  break;
}

console.log(resposta)

a = 6
b = 6

if (a > b) {
  console.log(a + ' é maior que ' + b)
} else if (a < b) {
  console.log(a + ' é menor que ' + b)
} else {
  console.log('São iguais')
}

// Operador Ternário
resposta = a > b ? 'maior' : a < b ? 'menor' : 'iguais'

console.log(resposta)
*/

// Somatório com while
var count = 1
var soma = 0

while (count <= 10) {
  soma += count
  count++
}
console.log('A soma é ' + soma)

// do ~ while
count = 1
soma = 0

do {
  soma += count
  count ++
} while (count <= 10)
console.log('A soma é ' + soma)

// for
soma = 0
for (count = 1; count <= 10; count++) {
  soma += count
}
console.log('A soma é ' + soma)