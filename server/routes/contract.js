import { Router } from 'express'

const contract = Router()

contract.post('/init', (req, res) => {
  let { manifest } = req.body
  res.sendStatus(200)
})

export { contract }
