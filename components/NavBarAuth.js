/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';
import NameSearch from './NameSearch';

export default function NavBarAuth() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>
            <Image
              src="/CCDBLogo.jpg"
              width={20}
              height={20}
              className="d-inline-block align-top"
              alt="CCDB Logo"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/">
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link passHref href="/Collections/Collections">
              <Nav.Link>My Collections</Nav.Link>
            </Link>
            <Link passHref href="/Collections/new">
              <Nav.Link>Create a Collection</Nav.Link>
            </Link>
            <Link passHref href="/Sets/SetPage">
              <Nav.Link>View Sets</Nav.Link>
            </Link>
            <Link passHref href="/Collections/Community">
              <Nav.Link>Community</Nav.Link>
            </Link>
            {/* <Link passHref href="/CardSearch">
              <Nav.Link>Search Cards</Nav.Link>
            </Link> */}
            <NameSearch />
            <Button variant="danger" onClick={signOut}>Sign Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
