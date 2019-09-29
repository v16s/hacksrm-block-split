import React from 'react';
import { Link } from 'react-router-dom';
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar as BootstrapNavbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from 'reactstrap';

class Navbar extends React.Component<
  any,
  {
    collapseOpen: boolean;
    color: string;
    collapseOut?: string;
  }
> {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: 'navbar-transparent',
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.changeColor);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.changeColor);
  }
  changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      this.setState({
        color: 'bg-info',
      });
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        color: 'navbar-transparent',
      });
    }
  };
  toggleCollapse = () => {
    document.documentElement.classList.toggle('nav-open');
    this.setState({
      collapseOpen: !this.state.collapseOpen,
    });
  };
  onCollapseExiting = () => {
    this.setState({
      collapseOut: 'collapsing-out',
    });
  };
  onCollapseExited = () => {
    this.setState({
      collapseOut: '',
    });
  };
  render() {
    return (
      <BootstrapNavbar
        className={'fixed-top ' + this.state.color}
        color-on-scroll='100'
        expand='lg'
      >
        <Container>
          <div className='navbar-translate'>
            <NavbarBrand
              data-placement='bottom'
              to='/'
              rel='noopener noreferrer'
              title='A payment splitter on the blockchain'
              tag={Link}
            >
              <span>Block | Split</span>
            </NavbarBrand>
            <button
              aria-expanded={this.state.collapseOpen}
              className='navbar-toggler navbar-toggler'
              onClick={this.toggleCollapse}
            >
              <span className='navbar-toggler-bar bar1' />
              <span className='navbar-toggler-bar bar2' />
              <span className='navbar-toggler-bar bar3' />
            </button>
          </div>
          <Collapse
            className={'justify-content-end ' + this.state.collapseOut}
            navbar
            isOpen={this.state.collapseOpen}
            onExiting={this.onCollapseExiting}
            onExited={this.onCollapseExited}
          >
            <div className='navbar-collapse-header'>
              <Row>
                <Col className='collapse-brand' xs='6'>
                  <a href='#pablo' onClick={e => e.preventDefault()}>
                    Block | Split
                  </a>
                </Col>
                <Col className='collapse-close text-right' xs='6'>
                  <button
                    aria-expanded={this.state.collapseOpen}
                    className='navbar-toggler'
                    onClick={this.toggleCollapse}
                  >
                    <i className='tim-icons icon-simple-remove' />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav navbar>
              <NavItem>
                <NavLink tag={Link} to='/'>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='https://github.com/v16s/hacksrm-block-split'>
                  Source Code
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </BootstrapNavbar>
    );
  }
}

export { Navbar };
