window.addEventListener('load', function () {

  doFetch()
  doFetchAsync()
  
  divisionPromise(12, 6).then(result => {
    console.log(result)
  })

  executeDivisionPromise()
  executeDivisionPromiseAsyncAwait()
})

function showData(data) {
  const user = document.querySelector('#user')
  user.textContent = data.login + ': ' + data.name
}

function divisionPromise(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject('Não é possível dividir por 0')
    }

    resolve(a / b)
  })
}

function executeDivisionPromise() {
  divisionPromise(12, 6)
  .then(result => {
    console.log(result)
  })
  .catch(errorMessage => {
    console.log('Falha na divisão ' + errorMessage)
  })
}

async function executeDivisionPromiseAsyncAwait() {
  const division = await divisionPromise(12, 2)
  console.log(division)
}

function doFetch() {
    fetch('https://api.github.com/users/marlonalmino')
    .then(resource => {
      resource.json().then(data => {
        showData(data)
      })
    })
    .catch(error => {
      console.log('Erro na requisição')
    })
}

async function doFetchAsync() {
  const res = await fetch('https://api.github.com/users/marlonalmino')
  const json = await res.json()
  console.log(json)
}