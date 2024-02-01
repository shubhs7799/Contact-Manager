import { SlCheck } from "react-icons/sl";
import "../css/Popup.css"

const ImportComplete = (props) => {
    const {onClose} = props

  return (
    <div className="popup-overlay">
      <div className="popup-content">
      <span className="close-btn" onClick={() => onClose()}>
            &times;
          </span>
        <SlCheck className="icon-style" />
        <h5>Import Complete</h5>
        <p className="text-style">CSV File is Uploaded</p>
      </div>
    </div>
  );
};

export default ImportComplete;