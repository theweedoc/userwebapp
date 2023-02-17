import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import InfoIcon from "@mui/icons-material/Info";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import {ImageSearchIcon} from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchBarAutoComplete from "../Search/SearchBarAutoComplete";
import SearchBox from "../Search/SearchBox";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const IconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, -4, 0, 0),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "15ch",
    },
  },
}));

export const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  //searchSelected
  const [searchSelected, setSearchSelected] = React.useState(false);

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  //setSocialMobileMoreAnchorEl

  const [socialMobileMoreAnchorE2, setSocialMobileMoreAnchorE2] =
    React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isSocialMenuOpen = Boolean(anchorE2);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isSocialMobileMenuOpen = Boolean(socialMobileMoreAnchorE2);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  //SocialMenu
  const handleSocialMenuOpen = (event) => {
    setAnchorE2(event.currentTarget);
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

  const handleSocialMobileMenuClose = () => {
    setSocialMobileMoreAnchorE2(null);
  };

  const handleSocialMenuClose = () => {
    setAnchorE2(null);
    handleSocialMobileMenuClose();
  };

  const handleSocialMobileMenuOpen = (event) => {
    setSocialMobileMoreAnchorE2(event.currentTarget);
  };
  const handleSearchSelected = () => {
    setSearchSelected(false);
  };

  const menuId = "primary-search-account-menu";
  const socialId = "primary-social-account-menu";

  const SocialMenu = (
    <Menu
      anchorEl={anchorE2}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={socialId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isSocialMenuOpen}
      onClose={handleSocialMenuClose}
    >
      <MenuItem onClick={handleSocialMenuClose}>Facebook</MenuItem>
      <MenuItem onClick={handleSocialMenuClose}>Instagram</MenuItem>
      <MenuItem onClick={handleSocialMenuClose}>Twitter</MenuItem>
      <MenuItem onClick={handleSocialMenuClose}>Others</MenuItem>
    </Menu>
  );
  const mobileMenuId = "primary-search-account-menu-mobile";
  const mobileSocialMenuId = "primary-social-account-menu-mobile";

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" color="inherit">
          <AddCircleIcon />
        </IconButton>
        Create
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem onClick={handleSocialMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-social-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <InfoIcon />
        </IconButton>
        <p>Social</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 6 }}
          >
            <img src="logo.png" width={"72px"}/>
          </IconButton>

          <Box
            sx={{ display: { xs: "none", md: "flex" } }}
            justifyContent="center"
            zIndex="1"
            alignItems="center"
            display="flex"
            marginLeft="40%"
          >
            <h2>The WeeDoc</h2>
          </Box>
          <Box
            sx={{ display: { xs: "flex", md: "none" } }}
            justifyContent="center"
            zIndex="1"
            alignItems="center"
            display="flex"
            marginLeft="25%"
          >
            The WeeDoc{" "}
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/* <IconButton size="large" edge="end"> */}
            {/* <SearchBarAutoComplete/>
              <SearchIcon /> */}

            {/* </IconButton> */}
            <div className="header">
              <SearchBox />
            </div>

            <IconButton
              size="large"
              edge="end"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={5} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <IconButton size="large" edge="end" color="inherit">
              <Link
                href="videoupload"
                style={{ textDecoration: false, color: "inherit" }}
              >
                {" "}
                <AddCircleIcon />{" "}
              </Link>
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Link
                href="profile"
                style={{ textDecoration: false, color: "inherit" }}
              >
                <AccountCircle />{" "}
              </Link>
            </IconButton>

            <IconButton
              aria-controls={menuId}
              aria-haspopup="true"
              size="large"
              edge="end"
              onClick={handleSocialMenuOpen}
              color="inherit"
            >
              <InfoIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {SocialMenu}
    </Box>
  );
};
export default Header;
