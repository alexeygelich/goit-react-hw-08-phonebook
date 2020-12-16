import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import UserMenu from "../../components/UserMenu/UserMenuContainer";
import authSelectors from "../../redux/auth/authSelectors";
import UserSign from "../../components/UserSign";

const Header = ({ isAuth }) => (
  <Container>
    <Row>
      <Col>
        {isAuth && <NavLink to="/contacts">Contacts</NavLink>}
        {isAuth ? <UserMenu /> : <UserSign />}
      </Col>
    </Row>
  </Container>
);

const mapStateToProps = (state) => ({
  isAuth: authSelectors.isAuth(state),
});

export default connect(mapStateToProps)(Header);
