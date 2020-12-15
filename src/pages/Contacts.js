import FormAddContactsContainer from "../components/FormAddContacts/FormAddContactsContainer";
import FilterContainer from "../components/Filter/FilterContainer";
import ContactListContainer from "../components/ContactList/ContactListContainer";
import { CSSTransition } from "react-transition-group";

const Contacts = ({ contacts }) => (
  <>
    <FormAddContactsContainer />
    <section>
      <h2>Contacts</h2>
      <CSSTransition in={contacts.length > 1} timeout={500} classNames="fade-filter" unmountOnExit>
        <FilterContainer />
      </CSSTransition>
      <ContactListContainer />
    </section>
  </>
);

export default Contacts;
