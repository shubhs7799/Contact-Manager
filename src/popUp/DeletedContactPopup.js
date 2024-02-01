import "../css/Popup.css"
import { SlCheck } from "react-icons/sl";

const DeletedContactPopup = (props) =>{
    const {closePopUpD} = props;
    return(
        <div className="popup-overlay">
        <div className="popup-content">
        <span className="close-btn" onClick={closePopUpD}>
              &times;
            </span>
          <SlCheck className="icon-style" />
          <h5>Deleted Contacts</h5>
        </div>
      </div>
    )
}

export default DeletedContactPopup;