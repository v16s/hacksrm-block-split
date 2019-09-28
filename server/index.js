import express from 'express'
import { createServer } from 'http'
import bodyParser from 'body-parser'
import cors from 'cors'
import { contract } from './routes'

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/contract', contract)

const server = createServer(app)

server.listen(5000, () => {
  console.log('Listening on 5000 🚀')
})
