import React, { useState, useEffect } from 'react';
import { Button, Input } from 'reactstrap';
import Web3 from 'web3';
import axios from 'axios';
import { useHistory, useParams } from 'react-router';
import { UncontrolledAlert, Container } from 'reactstrap';
import { Resolve } from '../components';
declare global {
  interface Window {
    web3: any;
    ethereum: any;
  }
}
const Split: React.FC = () => {
  const [events, setEvents] = useState([]);

  let params: any = useParams();

  useEffect(() => {
    axios
      .post('http://localhost:5000/contract/resolves', {
        address: params.address,
      })
      .then(res => {
        setEvents(res.data);
      });
    return () => {};
  }, [events]);
  let history = useHistory();

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
      <div
        style={{
          width: '95%',
          maxWidth: '600px',
        }}
      >
        <Container>
          <div className='space' />
          <h3>Current Resolves</h3>
          {events.map(e => {
            return (
              <Resolve address={e.result.payee} value={e.result.val}></Resolve>
            );
          })}
        </Container>

        <div
          style={{
            margin: '5px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            className='btn-round'
            color='default'
            onClick={e => history.push('/')}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};
export { Split };
