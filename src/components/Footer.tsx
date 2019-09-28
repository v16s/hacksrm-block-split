import React from 'react';
import { Link } from 'react-router-dom';

import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from 'reactstrap';

class Footer extends React.Component {
  render() {
    return (
      <footer className='footer'>
        <Container>
          <Row>
            <Col md='3'>
              <h1 className='title'>Block | Split</h1>
            </Col>
            <Col md='3'>
              <Nav>
                <NavItem>
                  <NavLink to='/' tag={Link}>
                    Home
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md='3'>
              <Nav>
                <NavItem>
                  <NavLink to='/landing-page' tag={Link}>
                    App
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md='3'>
              <Nav>
                <NavItem>
                  <NavLink href='https://opensource.org/licenses/MIT'>
                    License
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export { Footer };
