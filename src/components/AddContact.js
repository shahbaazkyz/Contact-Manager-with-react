import { useState } from "react";

const AddContact = ({take}) => {
    const [name, setName] = useState("");
    const [numb, setNumb] = useState("");

    const send = (e) => {
        e.preventDefault();
        take(name, numb);
        setName("");
        setNumb("");
        document.getElementById("name").focus()
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
