import React, { useState, useCallback } from "react";
import { FaFileImport } from "react-icons/fa";
import "../css/Popup.css"; // Import your CSS for styling
import ImportComplete from "./ImportComplete";
import { MdImportExport } from "react-icons/md";
import Button from '@mui/material/Button';


const ImportCSVFile = ({ importCSV }) => {
  const [dragging, setDragging] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isImportComplete, setImportComplete] = useState(false);

  // Handle file drop
  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setDragging(false);

      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) { const file = e.dataTransfer.files[0];
        importCSV(file); // Process the file
        setImportComplete(true);
        e.dataTransfer.clearData();
      }
    },
    [importCSV]
  );

  // Prevent default behavior for drag events
  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  // Update dragging state
  const handleDragIn = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  }, []);

  const handleDragOut = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  }, []);

  const openPopup = () => {
    setPopupOpen(true);
    setImportComplete(false);
    document.body.style.overflow = "hidden"; // Freeze background
  };

  const closePopup = () => {
    setPopupOpen(false);
    setImportComplete(false);

    document.body.style.overflow = 'auto'; // Optional: Unfreeze the background
  };

  return (
    <div>
      <Button variant="outlined" onClick={openPopup} style={{ textTransform: 'none' }}> <MdImportExport />  Import</Button>

      {isPopupOpen && !isImportComplete &&
      <div className="popup-overlay">
        <div className="popup-content">
          <span className="close-btn" onClick={closePopup}>
            &times;
          </span>
          <FaFileImport className="icon-style" />
          <h4>Import File</h4>
          <div
            className={`dropzone ${dragging ? "dragging" : ""}`}
            onDrop={handleDrop}
            onDragOver={handleDrag}
            onDragEnter={handleDragIn}
            onDragLeave={handleDragOut}
          >
            <p className="text-style">Drag & Drop a CSV File to Upload</p>
          </div>
          <button className="cancel-btn" onClick={closePopup}>
            Cancel
          </button>
        </div>
      </div>}
      {isImportComplete && <ImportComplete onClose={closePopup} />}
    </div>
  );
};

export default ImportCSVFile;
