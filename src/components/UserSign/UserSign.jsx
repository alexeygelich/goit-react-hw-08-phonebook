import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
//import { Test } from './UserSign.styles';

const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 8,
    marginRight: 10,
    border: 0,
    borderRadius: 5,
    fontWeight: 700,
    backgroundColor: "#bdc4c7",
    color: "#2A363B",
  },
};

const UserSign = (props) => (
  <>
    <NavLink style={styles.link} to="/register">
      Register
    </NavLink>
    <NavLink style={styles.link} to="/login">
      Login
    </NavLink>
  </>
);

UserSign.propTypes = {
  // bla: PropTypes.string,
};

UserSign.defaultProps = {
  // bla: 'test',
};

export default UserSign;
