import React, { useState } from 'react';
import {
  Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from 'reactstrap';
import Web3 from 'web3';
import { Splits } from '../components';
const App: React.FC = () => {
  const [toAddress, setToAddress] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [hideForm, showForm] = useState(true);

  function onSubmit() {
    if (
      toAmount.match(new RegExp('.+', 'g'))
      //   &&
      //   Web3.utils.isAddress(toAddress)
    ) {
      showForm(false);
    }
  }

  if (hideForm) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          width: '100vw',
          minHeight: 'calc(100vh - 76px)',
        }}
      >
        <h3 style={{ marginBottom: 0 }}>
          <span>Payment</span>
        </h3>

        <p style={{ margin: '2em' }}>
          Enter the amount and the address of the person to send the amount to.
        </p>
        <div
          style={{
            width: '95%',
            maxWidth: '600px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Input
              defaultValue=''
              placeholder='Ethereum Address'
              type='text'
              style={{
                width: '65%',
              }}
              value={toAddress}
              onChange={e => setToAddress(e.target.value)}
            />
            <Input
              defaultValue=''
              placeholder='Amount'
              type='text'
              style={{
                width: '32%',
              }}
              value={toAmount}
              onChange={e => setToAmount(e.target.value)}
            />
          </div>
          <div
            style={{
              margin: '5px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button
              className='btn-round'
              color='primary'
              type='button'
              onClick={onSubmit}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <Splits toAddress={toAddress} toAmount={parseFloat(toAmount)}></Splits>
  );
};
export { App };
