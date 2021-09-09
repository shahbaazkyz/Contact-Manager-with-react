import user from "../image/user.png";

const ContactCard = ({ contacts, removeContact }) => {
  return (
    <>
      {contacts.map((val) => {
        return (
          <div className="item" key={val.id}>
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content">
              <div className="header">{val.name}</div>
              <div>{val.numb}</div>
              <i
                className=" trash alternate outline icon "
                style={{ color: "red" }}
                        onClick={() => {
                    removeContact(val.id); 
                }}
              ></i>
            </div>
          </div>
        );
      })}
    </>
  );
};
 
export default ContactCard;