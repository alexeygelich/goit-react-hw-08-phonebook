import FormAddContactsContainer from "../components/FormAddContacts/FormAddContactsContainer";
import FilterContainer from "../components/Filter/FilterContainer";
import ContactListContainer from "../components/ContactList/ContactListContainer";
import { CSSTransition } from "react-transition-group";

const styles = {
  wrapper: {
    margin: "0 auto",
    width: "420px",
  },
};

const Contacts = ({ contacts }) => (
  <div style={styles.wrapper}>
    <FormAddContactsContainer />
    <section>
      <h2>Contacts</h2>
      <CSSTransition in={contacts.length > 1} timeout={500} classNames="fade-filter" unmountOnExit>
        <FilterContainer />
      </CSSTransition>
      <ContactListContainer />
    </section>
  </div>
);

export default Contacts;
