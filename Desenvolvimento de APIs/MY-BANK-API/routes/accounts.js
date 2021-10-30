import express from 'express'
import { promises as fs } from 'fs'

const { readFile, writeFile } = fs

const router = express.Router()

router.post('/', async (req, res) => {
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
    res.status(400).send({ error: err.message })
  }
})

router.get('/', async (_req, res) => {
  try {
    const data = JSON.parse(await readFile(global.fileName))

    // Deleta a informação 'nextId' pois não é interessante ao usuário
    // Obs.: O arquivo JSON não é alterado, apenas a visualização para o usuário 
    delete data.nextId
    res.send(data)
  } catch (err) {
    res.status(400).send({ error: err.message })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const data = JSON.parse(await readFile(global.fileName))
    const account = data.accounts.find(
      account => account.id === parseInt(req.params.id))
    res.send(account)
  } catch (err) {
    res.status(400).send({ error: err.message })
  }
})

export default router