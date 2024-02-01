import Row from "./Row";
import contactListData from "../utils/contactListData";
import { useState } from "react";
import { CSVLink } from "react-csv";
import "../css/contactlist.css";
import ImportCSVFile from "../popUp/ImportCSVDATA";
import DeleteContact from "../popUp/DeleteContact";
import DeletedContactPopup from "../popUp/DeletedContactPopup";

const ContactList = () => {
  const [contacts, setContacts] = useState(
    contactListData.map((contact) => ({ ...contact, selected: false }))
  );
  const [selectAll, setSelectAll] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);
  const [showDeletePopUp, setShowDeletePopUp] = useState(false);
  const [showDeleteCompletePopup,setShowDeleteCompletePopup] = useState(false)

  const handleDelete = () => {
    if (contactToDelete !== null) {
      setContacts(contacts.filter((contact) => contact.id !== contactToDelete));
      setContactToDelete(null);
      setShowDeletePopUp(false);
      setShowDeleteCompletePopup(true);
    }
  };

  const closeDeletePopUp = () => {
    setShowDeleteCompletePopup(false);
  }

  const showPopUpDelete = (id) => {
    setContactToDelete(id);
    setShowDeletePopUp(true);
  };

  
  const closePopup = () => {
    setShowDeletePopUp(false);
    document.body.style.overflow = 'auto'; // Optional: Unfreeze the background
  };

  const handleAllSelect = (e) => {
    const newContact = contacts.map((contact) => ({
      ...contact,
      selected: e.target.checked,
    }));
    setContacts(newContact);
    setSelectAll(e.target.checked);
  };

  const handleRowSelect = (id) => {
    const newContacts = contacts.map((contact) => {
      if (contact.id === id) {
        return { ...contact, selected: !contact.selected };
      }
      return contact;
    });
    setContacts(newContacts);

    // const stateSelectA = contacts.every((contact) => contact.selected);
    // setSelectAll(stateSelectA)
  };

  const convertCSVTOJson = (csvData) => {
    const lines = csvData.split("\n");
    const headers = lines[0]
      .split(",")
      .map((header) => header.trim().replace(/^"|"$/g, ""));
    const result = [];

    for (let i = 1; i < lines.length; i++) {
      const obj = {};
      const currentLine = lines[i]
        .split(",")
        .map((curL) => curL.trim().replace(/^"|"$/g, ""));

      for (let j = 0; j < headers.length; j++) {
        obj[headers[j].trim()] = currentLine[j].trim();
      }
      result.push(obj);
    }
    return result;
  };

  const handleCSVInputChange = (file) => {
    // const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const csvData = e.target.result;
      const jsonData = convertCSVTOJson(csvData);
      setContacts((prevContacts) => [...prevContacts, ...jsonData]);
    };
    reader.readAsText(file);
  };

  return (
    <div>
      
     
      <div className="importExport-btn">
      <button>Delete</button>
      <CSVLink data={contacts} className="csv-download-btn">
         <button>Export</button>
      </CSVLink>

      <ImportCSVFile
        importCSV={handleCSVInputChange}
        convertCSVJson={convertCSVTOJson}
      />

      </div>
 

      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleAllSelect}
              />
            </th>
            <th>Name</th>
            <th>Designation</th>
            <th>Company</th>
            <th>Industry</th>
            <th>Email</th>
            <th>Phone number</th>
            <th>Country</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((personDetals) => (
            <Row
              key={personDetals.id}
              personData={personDetals}
              onDelete={() => showPopUpDelete(personDetals.id)}
              onRowselect={handleRowSelect}
            />
          ))}
        </tbody>
      </table>
      {showDeletePopUp && <DeleteContact deletebtn={handleDelete} closeThisPopup= {closePopup}/>}
      {showDeleteCompletePopup && !showDeletePopUp && <DeletedContactPopup closePopUpD = {closeDeletePopUp}/>}
    </div>
  );
};

export default ContactList;
