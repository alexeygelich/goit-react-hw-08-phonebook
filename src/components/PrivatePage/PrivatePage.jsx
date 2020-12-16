import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import authSelectors from "../../redux/auth/authSelectors";
import { Route, Redirect } from "react-router-dom";

const PrivatePage = ({ component: Component, isAuthenticated, ...routeProps }) => (
  <Route
    {...routeProps}
    render={(props) => {
      return isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />;
    }}
  />
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuth(state),
});

export default connect(mapStateToProps)(PrivatePage);
