import { useState } from "react";

const AddContact = ({take}) => {
    const [name, setName] = useState("");
    const [numb, setNumb] = useState("");

    const send = (e) => {
      e.preventDefault();
      if (name.length === 0) {
        alert("Please enter contact name!")
          document.getElementById("name").focus();
      }
      else if (numb.length === 0) {
          alert("Please enter number!");
          document.getElementById("number").focus();
      }
      else if (numb.length < 11) {
        alert("Number length must be 11 digits!")
        document.getElementById("number").focus()
      }
      else {
        take(name, numb);
        setName("");
        setNumb("");
        document.getElementById("name").focus()
      }
    }

  return (
    <div className="addContact">
      <form className="ui form" onSubmit = {send}  >
        <div className="field">
          <label htmlFor="name">
            {" "}
            <h3>Name </h3>
            <input type="text" placeholder="Enter Name" id="name" value={name} onChange = {e => setName(e.target.value)}  />
          </label>
        </div>
        <div className="field">
          <label htmlFor="number">
            {" "}
            <h3> Number</h3>
            <input type="number" placeholder="Enter Number" id="number" value = {numb} onChange = {e => setNumb(e.target.value)}  />
          </label>
              </div>
              
              <button className = "ui button blue">Add</button>
      </form>
    </div>
  );
};

export default AddContact;
