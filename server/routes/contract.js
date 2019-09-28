import { Router } from 'express'
import { readFileSync } from 'fs'
import solc from 'solc'
import Web3 from 'web3'

const contract = Router()
const input = {
  language: 'Solidity',
  sources: {
    'splitter.sol': {
      content: readFileSync('./server/contracts/splitter.sol', 'UTF-8')
    }
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*']
      }
    }
  }
}

const output = JSON.parse(solc.compile(JSON.stringify(input)))
const bytecode =
  output.contracts['splitter.sol']['Splitter'].evm.bytecode.object
const abi = output.contracts['splitter.sol']['Splitter'].abi

const provider = new Web3.providers.HttpProvider(
  'http://ropsten.infura.io/v3/bac5ce8d49534c289eb0c6838fedc5f6'
)

const web3 = new Web3(provider)

contract.post('/init', (req, res) => {
  let { manifest, to } = req.body

  let addresses = Object.keys(manifest)
  let values = Object.values(manifest)
  values = values.map(d => Web3.utils.toWei(d))

  res.json({ data: bytecode, arguments: [addresses, to, values], abi: abi })
})

export { contract }
