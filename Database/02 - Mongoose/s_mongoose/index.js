import mongoose from 'mongoose'

// Conectando ao MongoDB pelo Mongoose
await mongoose.connect(
  'mongodb+srv://root:root@firstmongoatlas.gknfg.mongodb.net/grades?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
)
