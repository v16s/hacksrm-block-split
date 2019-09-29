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
class ResolveBase extends React.Component<any, any> {
  render() {
    return (
      <UncontrolledAlert
        className='alert'
        color='info'
        onClick={e => {
          if (
            window.web3.currentProvider.selectedAddress.toLowerCase() ==
            this.props.address.toLowerCase()
          ) {
            let web3 = new Web3(window.web3.currentProvider);
            web3.eth.sendTransaction({
              from: window.web3.currentProvider.selectedAddress,
              value: this.props.value,
            });
          }
        }}
      >
        <b>{this.props.address}</b>
        <br />
        Owed: {Web3.utils.fromWei(this.props.value, 'ether')} ETH
      </UncontrolledAlert>
    );
  }
}
const Resolve = withRouter(ResolveBase);
export { Resolve };
