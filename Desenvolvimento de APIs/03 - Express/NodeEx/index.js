import express, { response } from "express"

const app = express()
// Serve para trabalharmos com json nas requisições
//app.use(express.json())

/* Requisições com Express */
app.get('/', (_req, res) => {
  res.send('Hello World GET!')
})

app.post('/', (_req, res) => {
  res.send('Hello World POST!')
})

// Funcionará com qualquer método utilizado na requisição
app.all('/testAll', (req, res) => {
  res.send(req.method)
})

// Quando utilizado '?' ele pega o caminho ou o caminho menos a última letra
// Ex: /test || /teste
app.get('/teste?', (_req, res) => {
  res.send('/teste?')
})

// Quando utilizado '+' pode repetir a última letra quantas vezes quiser
// Ex: /buzz || /buzzzzzz || /buz (se retirar a letra dá erro)
app.get('/buzz+', (_req, res) => {
  res.send('/buzz+')
})

// Quanto utilizado '*' pode ser escrito qualquer coisa no intervalo
// Ex: /oneAnythingBlue || /onesmmamskelbaBlue
app.get('/one*Blue', (_req, res) => {
  res.send('/one*Blue')
})

// Quando utilizado '()' o conjunto é tratado como 1 caractere
// Ex: /test || /testing || /testin (esse não irá funcionar)
app.post('/test(ing)?', (req, res) => {
  console.log(req.body)
  res.send('/test(ing)?')
})

// Expressões Regulares
app.get(/.*Red$/, (_req, res) => {
  res.send('/.*Red$/')
})

// parametros na rota
app.get('/testParam/:id', (req, res) => {
  res.send(req.params.id)
})

// parametros via query
// Ex: /testQuery?nome=marlon&idade=22
app.get('/testQuery', (req, res) => {
  res.send(req.query)
})

// next - Podem haver n funções, mas a última obrigatoriamente tem que retornar algo ou finalizar
app.get('/testMultipleHandlers', (_req, _res, next) => {
  console.log('Callback 1')
  next()
}, (_req, res) => {
  console.log('Callback 2')
  res.end()
})

// next com array
const callback1 = (_req, _res, next) => {
  console.log('callback 1')
  next()
}
const callback2 = (_req, _res, next) => {
  console.log('callback 2')
  next()
}
const callback3 = (_req, res) => {
  console.log('callback 3')
  res.end()
}
app.get('/testMultipleHandlersArray', [callback1, callback2, callback3])

// route
app.route('/testRoute')
  .get((_req, res) => {
    res.send('/testRoute GET')
  })
  .post((_req, res) => {
    res.send('/testRoute POST')
  })
  .delete((_req, res) => {
    res.send('/testRoute DELETE')
  })

// Criando o servidor
app.listen(3000, () => console.log('API Started!'))