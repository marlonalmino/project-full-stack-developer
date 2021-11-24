import mongoose from 'mongoose'

// Conectando ao MongoDB pelo Mongoose
await mongoose.connect(
  'mongodb+srv://root:root@firstmongoatlas.gknfg.mongodb.net/grades?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
)

// Criando modelo
const studentSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },

  subject: {
    type: String,
    require: true,
  },

  type: {
    type: String,
    require: true,
  },

  value: {
    type: Number,
    require: true,
  },

  lastModified: {
    type: Date,
    default: Date.now(),
  },
})

// Definindo o modelo da coleção
mongoose.model('student', studentSchema, 'student')

const student = mongoose.model('student')

new student({
  name: 'Marlon Almino',
  subject: 'Matemática',
  type: 'Trabalho Prático',
  value: 22,
})
  .save()
  .then(() => console.log('Documento inserido'))
  .catch((err) => console.log('Falha ao inserir documento', err))
