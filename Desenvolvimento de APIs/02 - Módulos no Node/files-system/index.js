import { promises as fs } from 'fs'

// async/await

init()
writeReadJson()

async function init() {
  try {
    await fs.writeFile('teste.txt', 'this is the text into txt')
    await fs.appendFile('teste.txt', '\nteste append file')
    const data = await fs.readFile('teste.txt', 'utf-8')
    console.log(data)

  } catch (err) {
    console.log(err)
  }
}

async function writeReadJson() {
  try {
    // escrita om valores iniciais
    const arrayCarros = ['Gol', 'Palio', 'Uno']
    const obj = { carros: arrayCarros }
    await fs.writeFile('teste.json', JSON.stringify(obj))

    // leitura do conteudo atual
    const data = JSON.parse(await fs.readFile('teste.json'))
    console.log(data)

    // conteudo modificado
    data.carros.push('Sandero')

    // sobrescrever o arquivo com o conteudo modificado
    await fs.writeFile('teste.json', JSON.stringify(data))
    console.log(data)

  } catch (err) {
    console.log(err)
  }
}

// With promises

/*import { promises as fs } from 'fs'
fs.writeFile('teste.txt', 'this is the text into txt').then(() => {
  fs.appendFile('teste.txt', '\nteste append file').then(() => {
    fs.readFile('teste.txt', 'utf-8').then(resp => {
      console.log(resp)
    }).catch(err => console.log(err))
      .catch(err => console.log(err))
  }).catch(err => console.log(err))
})*/

// With callbacks

/*import fs from 'fs'
fs.writeFile('teste.txt', 'this is the text into txt', err => {
  if (err) {
    console.log(err)
  } else {
    fs.appendFile('teste.txt', '\nteste append file', err => {
      if (err) {
        console.log(err)
      } else {
        fs.readFile('teste.txt', 'utf-8', (err, data) => {
          err ? console.log(err) : console.log(data)
        })
      }
    })
  }
})*/

// Sync Method
/*console.log('1')
fs.writeFileSync('teste.txt', 'this is the text into txt')
console.log('2')
const data = fs.readFileSync('teste.txt', 'utf-8')
console.log(data)
console.log('3')*/