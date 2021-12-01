import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./Header.scss";

const Header = () => {
  return (
    <Navbar bg="light" expand="md">
      <Navbar.Brand href="#lab">무한매수법 백테스트</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#lab">연구소</Nav.Link>
          <Nav.Link className="position-relative" href="#rsi">
            RSI<span className="new">NEW</span>
          </Nav.Link>
          {/*<Nav.Link href="#recommend">종목추천</Nav.Link>*/}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
