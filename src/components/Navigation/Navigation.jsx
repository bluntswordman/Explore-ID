import React from 'react';
import { Dropdown, Nav, Container } from "react-bootstrap";
import { Icon } from '@iconify/react';
import { useLogOutUser } from '../../hooks/users/logout';
import { useProfile } from '../../hooks/users/profile';
import './Navigation.css';

const Navigation = () => {
  const {logOutUser} = useLogOutUser();
  const {name} = useProfile();
  const isTrue = !name;
  
  return (
    <Nav className="navbar navbar-light bg-secondary text-dark bg-opacity-10">
      <Container>
        <Nav.Item>
          <Nav.Link href="/" className="navbar-brand title-nav">Explore ID</Nav.Link>
        </Nav.Item>
      <Dropdown alignRight className="dropdown m-0">
        <Dropdown.Toggle className='btn-core'>
          <Icon icon="bxs:user-pin" color="#41436a" height="20" />
        </Dropdown.Toggle>
          <Dropdown.Menu style={{ 
            margin: '0 auto',
          }}>
            {
              isTrue ? (
                <>
                  <Dropdown.Item href="/login">Masuk</Dropdown.Item>
                </>
              ) : (
                <>
                  <Dropdown.Item href='/dashboard'>Dashboard</Dropdown.Item>
                  <Dropdown.Item onClick={logOutUser}>Keluar</Dropdown.Item>
                </>
              )
            }
          </Dropdown.Menu>
      </Dropdown>
    </Container>
  </Nav>
  )
};

export default Navigation;
