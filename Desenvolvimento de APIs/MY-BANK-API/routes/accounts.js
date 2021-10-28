import express from 'express'
import { promises as fs } from 'fs'

const { readFile, writeFile } = fs

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    let account = req.body
    const data = JSON.parse(await readFile('accounts.json'))

    account = { id: data.nextId++, ...account }
    data.accounts.push(account)

    // Stringify recebe como 3° parâmetro o espaçamento no JSON.
    // No caso de transportar este arquivo, não é interessante colocar em muitas linhas...
    // ...apenas utilizar sem espaçamentos nestes casos!
    await writeFile('accounts.json', JSON.stringify(data, null, 2))

    res.send(account)
  } catch (err) {
    res.status(400).send({ error: err.message })
  }
})

export default router