import React, { useState, useEffect } from 'react';
import { Button, Input } from 'reactstrap';
import Web3 from 'web3';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { UncontrolledAlert, Container } from 'reactstrap';
import { Contract } from '../components';
declare global {
  interface Window {
    web3: any;
    ethereum: any;
  }
}
const Search: React.FC = () => {
  const [events, setEvents] = useState([]);
  let web3 = new Web3();
  useEffect(() => {
    axios
      .post('http://localhost:5000/contract/list', {
        address: window.web3.currentProvider.selectedAddress,
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
          <h3>Active Splits</h3>
          {events.map(e => (
            <Contract address={e}></Contract>
          ))}
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
export { Search };
