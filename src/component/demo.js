// export default function SortedTable() {
//   const [orderDirection, setOrderDirection] = useState("asc");
//   const [rowData, setRowData] = useState(
//     contactListData.map((data) => ({ ...data, isSelected: false }))
//   );
//   const [selectAll, setSelectAll] = useState(false);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [contactToDelete, setContactToDelete] = useState(null);
//   const [showDeletePopUp, setShowDeletePopUp] = useState(false);
//   const [showDeleteCompletePopup, setShowDeleteCompletePopup] = useState(false);

//   const handleSelectAllClick = () => {
//     const newSelectedState = !selectAll;
//     setSelectAll(newSelectedState);
//     setRowData(
//       rowData.map((row) => ({ ...row, isSelected: newSelectedState }))
//     );
//   };

//   const handleRowCheckboxClick = (id) => {
//     const newData = rowData.map((row) => {
//       if (row.id === id) {
//         return { ...row, isSelected: !row.isSelected };
//       }
//       return row;
//     });
//     setRowData(newData);

//     // Update main checkbox state based on individual row selection
//     setSelectAll(newData.every((row) => row.isSelected));
//   };
//   //---------------------------------------------------------
//   const designationSortArray = (arr, orderBy) => {
//     // Create a shallow copy of the array to avoid modifying the original array
//     const sortedArray = [...arr];

//     switch (orderBy) {
//       case "asc":
//       default:
//         return sortedArray.sort((a, b) => {
//           const designationA = a.designation || "";
//           const designationB = b.designation || "";
//           return designationA.localeCompare(designationB);
//         });

//       case "desc":
//         return sortedArray.sort((a, b) => {
//           const designationA = a.designation || "";
//           const designationB = b.designation || "";
//           return designationB.localeCompare(designationA);
//         });
//     }
//   };

//   const companySortArray = (arr, orderBy) => {
//     // Create a shallow copy of the array to avoid modifying the original array
//     const sortedArray = [...arr];

//     switch (orderBy) {
//       case "asc":
//       default:
//         return sortedArray.sort((a, b) => {
//           const companyA = a.company || "";
//           const companyB = b.company || "";
//           return companyA.localeCompare(companyB);
//         });

//       case "desc":
//         return sortedArray.sort((a, b) => {
//           const companyA = a.company || "";
//           const companyB = b.company || "";
//           return companyB.localeCompare(companyA);
//         });
//     }
//   };

//   const industrySortArray = (arr, orderBy) => {
//     // Create a shallow copy of the array to avoid modifying the original array
//     const sortedArray = [...arr];

//     switch (orderBy) {
//       case "asc":
//       default:
//         return sortedArray.sort((a, b) => {
//           const industryA = a.industry || "";
//           const industryB = b.industry || "";
//           return industryA.localeCompare(industryB);
//         });

//       case "desc":
//         return sortedArray.sort((a, b) => {
//           const industryA = a.industry || "";
//           const industryB = b.industry || "";
//           return industryB.localeCompare(industryA);
//         });
//     }
//   };

//   const handleDesignationSortRequest = () => {
//     setRowData(designationSortArray(contactListData, orderDirection));
//     setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
//   };

//   const handleCompanySortRequest = () => {
//     setRowData(companySortArray(contactListData, orderDirection));
//     setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
//   };

//   const handleIndustrySortRequest = () => {
//     setRowData(industrySortArray(contactListData, orderDirection));
//     setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
//   };

//   //---------------------- pagenation------------
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };
//   //--------------------------------------------
//   // ----------------- import ------------------

//   const convertCSVTOJson = (csvData) => {
//     const lines = csvData.split("\n");
//     const headers = lines[0]
//       .split(",")
//       .map((header) => header.trim().replace(/^"|"$/g, ""));
//     const result = [];

//     for (let i = 1; i < lines.length; i++) {
//       const obj = {};
//       const currentLine = lines[i]
//         .split(",")
//         .map((curL) => curL.trim().replace(/^"|"$/g, ""));

//       for (let j = 0; j < headers.length; j++) {
//         obj[headers[j].trim()] = currentLine[j].trim();
//       }
//       result.push(obj);
//     }
//     return result;
//   };

//   const handleCSVInputChange = (file) => {
//     const reader = new FileReader();

//     reader.onload = (e) => {
//       const csvData = e.target.result;
//       const jsonData = convertCSVTOJson(csvData);
//       setRowData((prevContacts) => [...prevContacts, ...jsonData]);
//     };
//     reader.readAsText(file);
//   };

//   //----------------------------------------------------
//   //-------------------Delete Contacts------------------
//   const handleDelete = () => {
//     if (contactToDelete !== null) {
//       setRowData(rowData.filter((contact) => contact.id !== contactToDelete));
//       setContactToDelete(null);
//       setShowDeletePopUp(false);
//       setShowDeleteCompletePopup(true);
//     }
//   };

//   const closeDeletePopUp = () => {
//     setShowDeleteCompletePopup(false);
//   };

//   const showPopUpDelete = (id) => {
//     setContactToDelete(id);
//     setShowDeletePopUp(true);
//   };

//   const closePopup = () => {
//     setShowDeletePopUp(false);
//     document.body.style.overflow = "auto"; // Optional: Unfreeze the background
//   };

//   //----------------------------------------------------
//   //-------------Comman delete--------------------------

//   const onCommanDelete = () => {
//     const updatedRowData = rowData.filter((row) => !row.isSelected);
//     setRowData(updatedRowData);
//   };

//   //-----------------------------------------------------
//   //------------- Search Bar ----------------------------
//   const textenter = (e) => {
//     if (e.target.value.length > 0) {
//       const updateContact = rowData.filter(
//         (obj) => e.target.value === obj.email.slice(0, e.target.value.length)
//       );
//       setRowData(updateContact);
//     } else {
//       setRowData(
//         contactListData.map((data) => ({ ...data, isSelected: false }))
//       );
//     }
//   };

//   //----------------------------------------------------
//   return (
//     <>
//       <PrimarySearchAppBar />

//       <div className="importExport-btn">
//         <Button variant="outlined" onClick={onCommanDelete} style={{ textTransform: 'none' }}> <MdDeleteOutline  /> Delete</Button>
//         <ImportCSVFile
//           importCSV={handleCSVInputChange}
//           convertCSVJson={convertCSVTOJson}
//         />
//            <CSVLink data={rowData} className="csv-download-btn">
//            <Button variant="outlined" style={{ textTransform: 'none' }}> <CiExport/> Export</Button>

//       </CSVLink>
//       </div>

//       <TableContainer component={Paper}>
//         <Table aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell padding="checkbox">
//                 <Checkbox
//                   indeterminate={
//                     rowData.some((row) => row.isSelected) && !selectAll
//                   }
//                   checked={selectAll}
//                   onChange={handleSelectAllClick}
//                 />
//               </TableCell>
//               <TableCell align="center">Name</TableCell>
//               <TableCell align="center" onClick={handleDesignationSortRequest}>
//                 <TableSortLabel active={true} direction={orderDirection}>
//                   Designation
//                 </TableSortLabel>
//               </TableCell>
//               <TableCell align="center" onClick={handleCompanySortRequest}>
//                 <TableSortLabel active={true} direction={orderDirection}>
//                   Company
//                 </TableSortLabel>
//               </TableCell>
//               <TableCell align="center" onClick={handleIndustrySortRequest}>
//                 <TableSortLabel active={true} direction={orderDirection}>
//                   Industry
//                 </TableSortLabel>
//               </TableCell>
//               <TableCell align="center">Email</TableCell>
//               <TableCell align="center">Phone number</TableCell>
//               <TableCell align="center">Country</TableCell>
//               <TableCell align="center">Action</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rowData
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row) => (
//                 <TableRow key={row.id}>
//                   <TableCell padding="checkbox">
//                     <Checkbox
//                       checked={row.isSelected}
//                       onChange={() => handleRowCheckboxClick(row.id)}
//                     />
//                   </TableCell>
//                   <TableCell align="center">{row.name}</TableCell>
//                   <TableCell align="center">{row.designation}</TableCell>
//                   <TableCell align="center">{row.company}</TableCell>
//                   <TableCell align="center">{row.industry}</TableCell>
//                   <TableCell align="center">
//                     <Tooltip arrow title={<span>{row.email}</span>}>
//                       {row.email}
//                     </Tooltip>
//                   </TableCell>
//                   <TableCell align="center">{row.phone_number}</TableCell>
//                   <TableCell align="center">{row.country}</TableCell>
//                   <TableCell align="center">
//                     <button onClick={() => showPopUpDelete(row.id)}>
//                       Delete
//                     </button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//           </TableBody>
//         </Table>
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={rowData.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </TableContainer>
//       {showDeletePopUp && (
//         <DeleteContact deletebtn={handleDelete} closeThisPopup={closePopup} />
//       )}
//       {showDeleteCompletePopup && !showDeletePopUp && (
//         <DeletedContactPopup closePopUpD={closeDeletePopUp} />
//       )}
//     </>
//   );
// }

