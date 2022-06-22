import React from 'react';
import { Nav, Container, Navbar } from "react-bootstrap";
import { Icon } from '@iconify/react';
import { useLogOutUser } from '../../hooks/users/logout';
import { Personal } from '../../hooks/users/profile';
import './Navigation.css';

const Navigation = () => {
  const {logOutUser} = useLogOutUser();
  const {name} = Personal();
  const isTrue = !name;
  
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/" className="fs-4 fw-bold" style={{color: '#0F4334'}}>Explore ID</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          {isTrue ? (
            <>  
              <div class="collapse navbar-collapse justify-content-end" id="navbarNavDarkDropdown">
                <ul class="navbar-nav">
                  <li class="nav-item dropstart">
                    <a class="nav-link" href="/" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <Icon icon="ep:setting" color="#0F4334" height="30" />
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                      <li><Nav.Link href="/login" className="mx-2">Masuk</Nav.Link></li>
                      <li><Nav.Link href="/register" className="mx-2">Daftar</Nav.Link></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <div class="collapse navbar-collapse justify-content-end" id="navbarNavDarkDropdown">
                <ul class="navbar-nav">
                  <li class="nav-item dropstart">
                    <a class="nav-link" href="/" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <Icon icon="healthicons:ui-user-profile" color="#0F4334" height="30" />
                    </a>
                    <ul ul class="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                      <li><Nav.Link href="/dashboard" className="mx-2">Dashboard</Nav.Link></li>
                      <li><Nav.Link onClick={logOutUser} className="mx-2">Keluar</Nav.Link></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default Navigation;
