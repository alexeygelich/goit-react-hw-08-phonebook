import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import UserMenu from "../../components/UserMenu/UserMenuContainer";

const Header = (props) => (
  <Container>
    <Row>
      <Col>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <UserMenu />
        {/* <Button variant="primary" onClick={() => props.history.push({ pathname: "/register" })}>
          Register
        </Button>
        <Button variant="primary" onClick={() => props.history.push({ pathname: "/login" })}>
          Login
        </Button>
        <Button variant="primary" onClick={() => props.history.push({ pathname: "/contacts" })}>
          Contacts
        </Button> */}
      </Col>
    </Row>
  </Container>
);

export default Header;
