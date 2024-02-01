import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { MdDeleteOutline } from "react-icons/md";
import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import { MdOutlineDashboard } from "react-icons/md";
import { MdContacts } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";

import "../css/contactlist.css";
import contactListData from "../utils/contactListData";
import { useState, useEffect } from "react";
import ImportCSVFile from "../popUp/ImportCSVDATA";
import DeleteContact from "../popUp/DeleteContact";
import DeletedContactPopup from "../popUp/DeletedContactPopup";
import PrimarySearchAppBar from "./HeaderBar";
import Button from "@mui/material/Button";
import { CSVLink } from "react-csv";
import { CiExport } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";


const drawerWidth = 240;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

// const useStyles = makeStyles((theme) => ({
//   listItemHover: {
//     '&:hover': {
//       backgroundColor: 'blue',
//     },
//   },
// }));

// const StyledListItemButton = styled(ListItemButton)({
//   '&:hover': {
//     backgroundColor: 'blue',
//   },
// });

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [orderDirection, setOrderDirection] = useState("asc");
  const [rowData, setRowData] = useState(
    contactListData.map((data) => ({ ...data, isSelected: false }))
  );
  const [selectAll, setSelectAll] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [contactToDelete, setContactToDelete] = useState(null);
  const [showDeletePopUp, setShowDeletePopUp] = useState(false);
  const [showDeleteCompletePopup, setShowDeleteCompletePopup] = useState(false);

  const handleSelectAllClick = () => {
    const newSelectedState = !selectAll;
    setSelectAll(newSelectedState);
    setRowData(
      rowData.map((row) => ({ ...row, isSelected: newSelectedState }))
    );
  };

  const handleRowCheckboxClick = (id) => {
    const newData = rowData.map((row) => {
      if (row.id === id) {
        return { ...row, isSelected: !row.isSelected };
      }
      return row;
    });
    setRowData(newData);

    // Update main checkbox state based on individual row selection
    setSelectAll(newData.every((row) => row.isSelected));
  };
  //---------------------------------------------------------
  const designationSortArray = (arr, orderBy) => {
    // Create a shallow copy of the array to avoid modifying the original array
    const sortedArray = [...arr];

    switch (orderBy) {
      case "asc":
      default:
        return sortedArray.sort((a, b) => {
          const designationA = a.designation || "";
          const designationB = b.designation || "";
          return designationA.localeCompare(designationB);
        });

      case "desc":
        return sortedArray.sort((a, b) => {
          const designationA = a.designation || "";
          const designationB = b.designation || "";
          return designationB.localeCompare(designationA);
        });
    }
  };

  const companySortArray = (arr, orderBy) => {
    // Create a shallow copy of the array to avoid modifying the original array
    const sortedArray = [...arr];

    switch (orderBy) {
      case "asc":
      default:
        return sortedArray.sort((a, b) => {
          const companyA = a.company || "";
          const companyB = b.company || "";
          return companyA.localeCompare(companyB);
        });

      case "desc":
        return sortedArray.sort((a, b) => {
          const companyA = a.company || "";
          const companyB = b.company || "";
          return companyB.localeCompare(companyA);
        });
    }
  };

  const industrySortArray = (arr, orderBy) => {
    // Create a shallow copy of the array to avoid modifying the original array
    const sortedArray = [...arr];

    switch (orderBy) {
      case "asc":
      default:
        return sortedArray.sort((a, b) => {
          const industryA = a.industry || "";
          const industryB = b.industry || "";
          return industryA.localeCompare(industryB);
        });

      case "desc":
        return sortedArray.sort((a, b) => {
          const industryA = a.industry || "";
          const industryB = b.industry || "";
          return industryB.localeCompare(industryA);
        });
    }
  };

  const handleDesignationSortRequest = () => {
    setRowData(designationSortArray(contactListData, orderDirection));
    setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
  };

  const handleCompanySortRequest = () => {
    setRowData(companySortArray(contactListData, orderDirection));
    setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
  };

  const handleIndustrySortRequest = () => {
    setRowData(industrySortArray(contactListData, orderDirection));
    setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
  };

  //---------------------- pagenation------------
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  //--------------------------------------------
  // ----------------- import ------------------

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
    const reader = new FileReader();

    reader.onload = (e) => {
      const csvData = e.target.result;
      const jsonData = convertCSVTOJson(csvData);
      setRowData((prevContacts) => [...prevContacts, ...jsonData]);
    };
    reader.readAsText(file);
  };

  //----------------------------------------------------
  //-------------------Delete Contacts------------------
  const handleDelete = () => {
    if (contactToDelete !== null) {
      setRowData(rowData.filter((contact) => contact.id !== contactToDelete));
      setContactToDelete(null);
      setShowDeletePopUp(false);
      setShowDeleteCompletePopup(true);
    }
  };

  const closeDeletePopUp = () => {
    setShowDeleteCompletePopup(false);
  };

  const showPopUpDelete = (id) => {
    setContactToDelete(id);
    setShowDeletePopUp(true);
  };

  const closePopup = () => {
    setShowDeletePopUp(false);
    document.body.style.overflow = "auto"; // Optional: Unfreeze the background
  };

  //----------------------------------------------------
  //-------------Comman delete--------------------------

  const onCommanDelete = () => {
    const updatedRowData = rowData.filter((row) => !row.isSelected);
    setRowData(updatedRowData);
  };

  //-----------------------------------------------------
  //------------- Search Bar ----------------------------
  const textenter = (e) => {
    if (e.target.value.length > 0) {
      const updateContact = rowData.filter(
        (obj) => e.target.value === obj.email.slice(0, e.target.value.length)
      );
      setRowData(updateContact);
    } else {
      setRowData(
        contactListData.map((data) => ({ ...data, isSelected: false }))
      );
    }
  };

  //----------------------------------------------------
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "space-between" }}>
      <CssBaseline  />
      <AppBar position="fixed" open={open}  sx={{ backgroundColor: 'white' }}>
        <Toolbar  >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }),color:"black" }}
          >
            <MenuIcon />
          </IconButton>
          <PrimarySearchAppBar onTextenter={textenter} />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor:"#cef3ff",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {" "}
          <ListItemButton sx={{ "&:hover": { backgroundColor: '#2da5fc' } }}><MdOutlineDashboard style={{ marginRight: '10px'}}/>  Dashboard</ListItemButton>
          <ListItemButton sx={{ "&:hover": { backgroundColor: '#2da5fc' } }}><MdContacts style={{ marginRight: '10px' }}/>Total Contacts</ListItemButton>
        </List>
        <Divider />
  <List>
    
    <ListItemButton sx={{ "&:hover": { backgroundColor: '#2da5fc' } }} style={{ marginTop: '500px' }}>
    <IoLogOutOutline style={{ marginRight: '10px' }}/>Logout
    </ListItemButton>
  </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <div className="importExport-btn">
          <Button
            variant="outlined"
            onClick={onCommanDelete}
            style={{ textTransform: "none" }}
          >
            {" "}
            <MdDeleteOutline />Delete
          </Button>
          <ImportCSVFile
            importCSV={handleCSVInputChange}
            convertCSVJson={convertCSVTOJson}
          />
          <CSVLink data={rowData} className="csv-download-btn">
            <Button variant="outlined" style={{ textTransform: "none" }}>
              {" "}
              <CiExport /> Export
            </Button>
          </CSVLink>
        </div>

        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead style={{backgroundColor : "#b2dfff"}}>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    indeterminate={
                      rowData.some((row) => row.isSelected) && !selectAll
                    }
                    checked={selectAll}
                    onChange={handleSelectAllClick}
                  />
                </TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell
                  align="left"
                  onClick={handleDesignationSortRequest}
                >
                  <TableSortLabel active={true} direction={orderDirection}>
                    | Designation
                  </TableSortLabel>
                </TableCell>
                <TableCell align="left" onClick={handleCompanySortRequest}>
                  <TableSortLabel active={true} direction={orderDirection}>
                    | Company
                  </TableSortLabel>
                </TableCell>
                <TableCell align="left" onClick={handleIndustrySortRequest}>
                  <TableSortLabel active={true} direction={orderDirection}>
                    | Industry
                  </TableSortLabel>
                </TableCell>
                <TableCell align="left">| Email</TableCell>
                <TableCell align="left">| Phone number</TableCell>
                <TableCell align="left">| Country</TableCell>
                <TableCell align="left">| Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.id} style= { row.id % 2 == 0 ? {backgroundColor : "#e4f2fc"} : {backgroundColor : "inhernt"} }>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={row.isSelected}
                        onChange={() => handleRowCheckboxClick(row.id)}
                      />
                    </TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.designation}</TableCell>
                    <TableCell align="left">{row.company}</TableCell>
                    <TableCell align="left">{row.industry}</TableCell>
                    <TableCell align="left">
                      <Tooltip arrow title={<span>{row.email}</span>}>
                        {row.email}
                      </Tooltip>
                    </TableCell>
                    <TableCell align="left">{row.phone_number}</TableCell>
                    <TableCell align="left">{row.country}</TableCell>
                    <TableCell align="left">
                    <GrEdit style={{ fontSize: '1.5em', color: '#2da5fc', cursor: 'pointer' }}/>
                    {"   "}
                      <RiDeleteBin6Line onClick={() => showPopUpDelete(row.id)} style={{ fontSize: '1.5em', color: 'red', cursor: 'pointer' }}/>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rowData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
        {showDeletePopUp && (
          <DeleteContact deletebtn={handleDelete} closeThisPopup={closePopup} />
        )}
        {showDeleteCompletePopup && !showDeletePopUp && (
          <DeletedContactPopup closePopUpD={closeDeletePopUp} />
        )}
      </Main>
    </Box>
  );
}
