import express from 'express'
import { promises as fs } from 'fs'

const { readFile, writeFile } = fs

const router = express.Router()

router.post('/', async (req, res, next) => {
  try {
    let account = req.body
    const data = JSON.parse(await readFile(global.fileName))

    account = { id: data.nextId++, ...account }
    data.accounts.push(account)

    // Stringify recebe como 3° parâmetro o espaçamento no JSON.
    // No caso de transportar este arquivo, não é interessante colocar em muitas linhas...
    // ...apenas utilizar sem espaçamentos nestes casos!
    await writeFile(global.fileName, JSON.stringify(data, null, 2))

    res.send(account)
  } catch (err) {
    next(err)
  }
})

router.get('/', async (_req, res, next) => {
  try {
    const data = JSON.parse(await readFile(global.fileName))

    // Deleta a informação 'nextId' pois não é interessante ao usuário
    // Obs.: O arquivo JSON não é alterado, apenas a visualização para o usuário 
    delete data.nextId
    res.send(data)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const data = JSON.parse(await readFile(global.fileName))
    const account = data.accounts.find(
      account => account.id === parseInt(req.params.id))
    res.send(account)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const data = JSON.parse(await readFile(global.fileName))
    data.accounts = data.accounts.filter(
      account => account.id !== parseInt(req.params.id))

    await writeFile(global.fileName, JSON.stringify(data, null, 2))

    res.end()
  } catch (err) {
    next(err)
  }
})

router.put('/', async (req, res, next) => {
  try {
    let account = req.body

    const data = JSON.parse(await readFile(global.fileName))
    const index = data.accounts.findIndex(a => a.id === account.id)

    data.accounts[index] = account

    await writeFile(global.fileName, JSON.stringify(data))

    res.send(account)
  } catch (err) {
    next(err)
  }
})

router.patch('/updateBalance', async (req, res, next) => {
  try {
    let account = req.body

    const data = JSON.parse(await readFile(global.fileName))
    const index = data.accounts.findIndex(a => a.id === account.id)

    data.accounts[index].balance = account.balance

    await writeFile(global.fileName, JSON.stringify(data))

    res.send(data.accounts[index])
  } catch (err) {
    next(err)
  }
})

router.use((err, req, res, next) => {
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`)
  res.status(400).send({ error: err.message })
})

export default router