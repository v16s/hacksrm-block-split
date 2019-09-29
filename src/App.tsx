import React, { useEffect } from 'react';
import './assets/css/nucleo-icons.css';
import './assets/scss/blk-design-system-react.scss?v=1.0.0';
import './assets/demo/demo.css';
import './App.css';
import Web3 from 'web3';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LandingPage, App, Search, Split } from './views';

const Root: React.FC = () => {
  let web3: any;
  useEffect(() => {
    {
      window.addEventListener('load', async () => {
        // Modern dapp browsers...
        if (window.ethereum) {
          web3 = new Web3(window.ethereum);
          try {
            // Request account access if needed
            await window.ethereum.enable();
            // Acccounts now exposed
            console.log(window.web3);
          } catch (error) {
            // User denied account access...
            console.log(error);
          }
        }
        // Legacy dapp browsers...
        else if (window.web3) {
        }
        // Non-dapp browsers...
        else {
          console.log(
            'Non-Ethereum browser detected. You should consider trying MetaMask!'
          );
        }
        console.log(window.web3.currentProvider);
      });
    }
    return () => {};
  });
  return (
    <Router>
      <Switch>
        <Route path='/search/:address'>
          <Split></Split>
        </Route>
        <Route path='/search'>
          <Search></Search>
        </Route>
        <Route path='/app'>
          <App web3={web3}></App>
        </Route>
        <Route path='/'>
          <LandingPage></LandingPage>
        </Route>
      </Switch>
    </Router>
  );
};
export default Root;
