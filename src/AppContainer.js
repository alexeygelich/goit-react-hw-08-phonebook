import React, { Component } from "react";
import { connect } from "react-redux";
import phonebookSelectors from "./redux/phonebook/phonebookSelectors";
import phonbookOperation from "./redux/phonebook/phonebookOperation";
import authOpetations from "./redux/auth/authOpetations";
import App from "./App";

class AppContainer extends Component {
  componentDidMount() {
    const { getCurrentUser } = this.props;
    getCurrentUser();
  }

  render() {
    return <App {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  contacts: phonebookSelectors.getContacts(state),
});

const mapDispatchToProps = {
  fetchContact: phonbookOperation.fetchContact,
  getCurrentUser: authOpetations.getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
