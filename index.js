import express from 'express'
import { PORT } from './config.js'
import { UserRepository } from './user-repository.js'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.post('/login', (req, res) => {})
app.post('/register', (req, res) => {
  const { username, password } = req.body
  try {
    const id = UserRepository.create({ username, password })
    res.send({ id })
  } catch (e) {
    res.status(400).send(e.message)
  }
})
app.post('/logout', (req, res) => {})

app.get('/protected', (req, res) => {})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
