import { promises as fs } from 'fs'

// async/await

init()

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