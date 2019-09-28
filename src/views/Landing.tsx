import React, { useEffect } from 'react';

import { Button, Row, Col } from 'reactstrap';

import { useHistory } from 'react-router-dom';

// core components
import { Navbar, Footer } from '../components';

const LandingPage: React.FC = () => {
  let history = useHistory();
  useEffect(() => {
    document.body.classList.toggle('landing-page');
    return () => {
      document.body.classList.toggle('landing-page');
    };
  });
  return (
    <>
      <Navbar />
      <div className='wrapper'>
        <div className='page-header'>
          <img
            alt='...'
            className='path'
            src={require('../assets/img/blob.png')}
          />
          <img
            alt='...'
            className='path2'
            src={require('../assets/img/path2.png')}
          />
          <img
            alt='...'
            className='shapes triangle'
            src={require('../assets/img/triunghiuri.png')}
          />
          <img
            alt='...'
            className='shapes wave'
            src={require('../assets/img/waves.png')}
          />
          <img
            alt='...'
            className='shapes squares'
            src={require('../assets/img/patrat.png')}
          />
          <img
            alt='...'
            className='shapes circle'
            src={require('../assets/img/cercuri.png')}
          />
          <div className='content-center'>
            <Row className='row-grid justify-content-between align-items-center text-left'>
              <Col lg='6' md='6'>
                <h1 className='text-white'>
                  Make splitting after transactions on the blockchain <br />
                  <span className='text-white'>easier</span>
                </h1>
                <p className='text-white mb-3'>
                  <strong>Block | Split</strong> aims to make transactions
                  easier for the people who are involved in trusted transactions
                  where even splitting is a need.
                </p>
                <Button
                  className='btn-round'
                  color='primary'
                  type='button'
                  onClick={() => history.push('/app')}
                >
                  Split & Send
                </Button>
              </Col>
              <Col lg='4' md='5'>
                <img
                  alt='...'
                  className='img-fluid'
                  src={require('../assets/img/etherum.png')}
                />
              </Col>
            </Row>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export { LandingPage };
