import { MongoClient } from 'mongodb'
const uri =
  'mongodb+srv://root:root@firstmongoatlas.gknfg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
client.connect(async (err) => {
  // Obter coleção: student
  const collection = client.db('grades').collection('student')

  // Buscar todos os documentos
  const documents = await collection.find().toArray()
  console.log(documents)

  // Obter lista dos DBs no servidor conectado
  const databaseList = await client.db().admin().listDatabases()
  console.log('Databases:')
  databaseList.databases.forEach((db) => {
    console.log(` - ${db.name}`)
  })

  client.close()
})
