import express from 'express'
import carrosRouter from './carrosRouter.js'

const app = express()
app.use(express.json())

app.use('/carros', carrosRouter)

// A função 'use()' faz com que determinada ação ocorra
// sempre que alguma rota for acessada.
app.use((_req, _res, next) => {
  console.log(new Date())
  next()
})

app.get('/teste', (_req, res) => {
  res.end()
})

app.listen(3000, () => {
  console.log('API Started')
})