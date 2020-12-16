import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
//import { Test } from './UserSign.styles';

const UserSign = (props) => (
  <>
  <NavLink to="/register">Register</NavLink>
  <NavLink to="/login">Login</NavLink>
  </>
);

UserSign.propTypes = {
  // bla: PropTypes.string,
};

UserSign.defaultProps = {
  // bla: 'test',
};

export default UserSign;
