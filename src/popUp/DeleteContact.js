import "../css/Popup.css";
import { MdDeleteOutline } from "react-icons/md";

const DeleteContact = (props) => {
  const {deletebtn,closeThisPopup} = props
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <span className="close-btn" onClick={closeThisPopup}>
          &times;
        </span>
        <MdDeleteOutline className="icon-style" />
        <h4>Delete Contacts</h4>

        <p className="text-style">Sure you want to delete this Contacts?</p>

        <div className="btn">
          <button className="cancel-btn" onClick={closeThisPopup}>
            Cancel
          </button>
          <button className="ok-btn" onClick={deletebtn}>
            ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteContact;
