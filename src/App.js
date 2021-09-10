import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Header from "./components/Header";
import { uuid } from "uuidv4";

import "./App.css"
import { useEffect, useState } from "react";
import Footer from "./components/footer";


function App() {

  const [contacts, setContact] = useState([]);

  useEffect(() => {
    const prevContacts = JSON.parse(localStorage.getItem("contacts"));
    if (prevContacts){
    setContact(prevContacts)
  }
    }, []);
  
  useEffect(() => {
   localStorage.setItem("contacts" , JSON.stringify(contacts))
  }, [contacts])

  const take = (a, b) => {
   const data = [...contacts , { id : uuid() , name : a , numb : b  }]
   setContact(data)
  }
  
  const removeContact = (a) => {
    const newContactList = contacts.filter(
      contact => {
        return contact.id !== a;
        }
    )
    
    setContact(newContactList)
  }

  return (
    <div className = "ui container" >
      <Header  />
      <AddContact take = {take}  />
      <ContactList contacts={contacts} removeContact={removeContact} />
      <Footer />
    </div>
  );
}

export default App;