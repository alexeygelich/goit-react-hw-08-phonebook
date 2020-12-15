import React from "react";
import PropTypes from "prop-types";
//import { Test } from './UserMenu.styles';

const UserMenu = ({ email, handleLogOut }) => (
  <>
    {email && (
      <>
        <span>email: {email}</span>{" "}
        <button type="button" onClick={handleLogOut}>
          Log Out
        </button>
      </>
    )}
  </>
);

export default UserMenu;
