import ContactCard from "./ContactCard";

const ContactList = (props) => {
    const { contacts ,removeContact } = props;
  return (
    <div className="ui celled list">
      <h1>Contact List</h1>
      <ContactCard contacts={contacts} removeContact={removeContact} />
    </div>
  );
};

export default ContactList;
