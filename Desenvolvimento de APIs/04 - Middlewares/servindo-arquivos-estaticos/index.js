import express from 'express'

const app = express()
app.use(express.json())

// http://localhost:3000/favorite.jpg
app.use(express.static('public'))
// http://localhost:3000/images/favorite.jpg
// Rota de acesso definida como /images
app.use('/images', express.static('public'))

app.listen(3000, () => {
  console.log('API STARTED')
})