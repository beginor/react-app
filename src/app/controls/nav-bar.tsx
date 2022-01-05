import {
    Navbar, Nav, Container
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import './nav-bar.scss';

export function NavBar(): JSX.Element {
    return (
      <Navbar className='app-navbar fixed-top' bg='dark' expand='md' variant='dark'>
        <Container fluid={true}>
          <NavLink className='navbar-brand' to='/'>
            <img className='d-inline-block align-text-bottom me-1'
                 height='20' width='20' src='./react.svg' />
            React App
          </NavLink>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse role='navigation'>
            <Nav className='me-auto'>
              <NavLink className='nav-link' to='/'>Home</NavLink>
              <NavLink className='nav-link' to='/about'>About</NavLink>
              <NavLink className='nav-link' to='/users'>Users</NavLink>
              <NavLink className='nav-link' to='/topics'>Topics</NavLink>
              <NavLink className='nav-link' to='/timer'>Timer</NavLink>
              <NavLink className='nav-link' to='/todo'>Todo</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
