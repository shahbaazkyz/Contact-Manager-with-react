import user from "../image/user.png";
import "../App.css"

const ContactCard = ({ contacts, removeContact }) => {
  return (
    <>
      
      {
        contacts.length > 0 ?  <>     {contacts.map((val) => {
        return (
          <div className="item" key={val.id}>
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content">
              <div className="header">{val.name}</div>
                 <i
                className=" trash alternate outline icon "
                style={{ color: "red" , float : "right" , marginTop : "-16px" }}
                        onClick={() => {
                    removeContact(val.id); 
                }}
              ></i>
              <div>{val.numb}
            </div>
              
            </div>
            
          </div>
        );
      })} </> : <> <h1 className = "noContact" >Please Add contacts</h1> </>
      }
    </>
  );
};
 
export default ContactCard;