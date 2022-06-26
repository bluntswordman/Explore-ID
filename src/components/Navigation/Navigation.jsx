import React from 'react';
import { Nav, Container, Navbar, Dropdown } from "react-bootstrap";
import { useLogOutUser } from '../../hooks/users/logout';
import { Personal } from '../../hooks/users/profile';
import './Navigation.css';

const Navigation = () => {
  const {logOutUser} = useLogOutUser();
  const {name} = Personal();
  const isTrue = !name;
  
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid className="align-items-center">
          <Navbar.Brand 
            href="/"
            className="brand-self"
          >
            Explore ID
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className='m-2'/>
          <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
            <Nav className="mr-auto">
              {isTrue ? (
                <>
                  <Nav.Link href="/register" className="mx-1">Daftar</Nav.Link>
                  <Nav.Link href="/login" className="mx-1">Masuk</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link href="/location" className="mx-2">Map</Nav.Link>
                  <Nav.Link href="/dashboard" className="mx-2">Dashboard</Nav.Link>
                  <Dropdown.Divider />
                  <Nav.Link onClick={logOutUser} className="mx-2">Keluar</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
};

export default Navigation;
