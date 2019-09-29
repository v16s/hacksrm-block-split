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
    },
    'splitter_manager.sol': {
      content: readFileSync('./server/contracts/splitter_manager.sol', 'UTF-8')
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
console.log(output)
const bytecode =
  output.contracts['splitter.sol']['Splitter'].evm.bytecode.object
const manager_bytecode =
  output.contracts['splitter_manager.sol']['test3'].evm.bytecode.object
const manager_abi = output.contracts['splitter_manager.sol']['test3'].abi
const abi = output.contracts['splitter.sol']['Splitter'].abi

const provider = new Web3.providers.HttpProvider(
  'http://ropsten.infura.io/v3/bac5ce8d49534c289eb0c6838fedc5f6'
)

const web3 = new Web3(provider)

const split_contract = new web3.eth.Contract(
  abi,
  '0xa23C588885718B80CA40955F3cC9227427C7a7bC'
)

contract.post('/init', (req, res) => {
  res.json({ data: manager_bytecode, abi: manager_abi })
})

export { contract }
