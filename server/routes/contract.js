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
const bytecode =
  output.contracts['splitter.sol']['Splitter'].evm.bytecode.object
const manager_bytecode =
  output.contracts['splitter_manager.sol']['test3'].evm.bytecode.object
const manager_abi = output.contracts['splitter_manager.sol']['test3'].abi
const abi = output.contracts['splitter.sol']['Splitter'].abi

const provider = new Web3.providers.HttpProvider(
  'https://ropsten.infura.io/v3/bac5ce8d49534c289eb0c6838fedc5f6'
)

const web3 = new Web3(provider)

const split_contract = new web3.eth.Contract(
  manager_abi,
  '0x8C014E3AB599FdaED123AB093e937f644288590a'
)

contract.post('/init', (req, res) => {
  res.json({ data: manager_bytecode, abi: manager_abi })
})
contract.post('/list', (req, res) => {
  let { address } = req.body
  split_contract
    .getPastEvents('NewContract', { fromBlock: 0, toBlock: 'latest' })
    .then(events => {
      res.json(
        events
          .filter(
            e =>
              e.returnValues.senderAddress.toLowerCase() ==
                address.toLowerCase() ||
              address.toLowerCase() in
                e.returnValues.participants.map(d => d.toLowerCase())
          )
          .map(d => d.returnValues.contractAddress)
      )
    })
})
contract.post('/resolves', (req, res) => {
  let { address } = req.body
  const resolve_contract = new web3.eth.Contract(abi, address)
  resolve_contract
    .getPastEvents('Request', { fromBlock: 0, toBlock: 'latest' })
    .then(events => {
      res.json(events.map(e => ({ result: e.returnValues })))
    })
})
export { contract }
