import React, { useState, useEffect } from 'react';
import { Button, Input } from 'reactstrap';
import Web3 from 'web3';
import axios from 'axios';
import { UncontrolledAlert } from 'reactstrap';
import { withRouter } from 'react-router-dom';
declare global {
  interface Window {
    web3: any;
    ethereum: any;
  }
}
class ContractBase extends React.Component<{ address: string; history: any }> {
  render() {
    return (
      <UncontrolledAlert
        className='alert'
        color='info'
        onClick={e => this.props.history.push('/search/' + this.props.address)}
      >
        <b>{this.props.address}</b>
      </UncontrolledAlert>
    );
  }
}
const Contract = withRouter(ContractBase);
export { Contract };
