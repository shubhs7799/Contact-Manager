import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#DCDCDC",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#070707",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar(props) {
  const { onTextenter } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ display: { xs: "none", sm: "block" }, color: "#6a6a6a" }}
      >
        Total Contacts
      </Typography>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          color: "#6a6a6a",
        }}
      >
        <Search onKeyUp={onTextenter}>
          <SearchIconWrapper>
            <SearchIcon color="black" />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search by Email Id ........"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          {/* <AccountCircle style={{ fontSize: 40 }}/> */}
          <img
            src="https://crictoday.com/wp-content/uploads/2023/03/virat-kohli-5-1.jpg" // Replace with the actual path to your image
            alt="User Logo"
            style={{ width: 50, height: 50, borderRadius: "50%" }} // You can adjust the width, height, and other styles
          />
        </IconButton>
      </Box>
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="custom image"
              aria-controls="your-menu-id"
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="blue"
              style={{ border: '1px solid red' }} 
            >
              <img src="https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774" alt="pics" style={{ width: 24, height: 24 , border: '1px solid green'}}/>
              <MoreIcon />
            </IconButton>
          </Box>
      <Box sx={{ display: { xs: "none", md: "flex", color: "#A9A9A9" } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginRight: 1,
          }}
        >
          <Typography variant="caption" color="black">
            Virat kohli
          </Typography>
          <Typography variant="caption" color="inherit">
            Admin
          </Typography>
        </Box>
        {/* ... other items ... */}
      </Box>
    </>
  );
}

// export default SearchBar;
