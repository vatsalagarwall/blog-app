import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Typography,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
  Hidden,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/store";
import toast from "react-hot-toast";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [value, setValue] = useState();

  let isLogin = useSelector((state) => state.isLogin);
  isLogin = isLogin || localStorage.getItem("userId");
  const dispatch = useDispatch();

  const handleLogout = () => {
    try {
      dispatch(authActions.logout());
      localStorage.clear();
      toast.success("Logout Successful");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const getActiveTab = () => {
    const path = location.pathname;
    switch (path) {
      case "/blogs":
        return 0;
      case "/my-blogs":
        return 1;
      case "/create-blog":
        return 2;
      default:
        return null;
    }
  };

  const handleTabChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="static" sx={{ background: "white", color: "black" }}>
        <Toolbar>
          <Typography variant="h4">BlogSphere</Typography>
          <Hidden smDown>
            {isLogin && (
              <Tabs
                textColor="inherit"
                value={getActiveTab()}
                onChange={handleTabChange}
              >
                <Tab label="Blogs" component={Link} to="/blogs" />
                <Tab label="My Blogs" component={Link} to="/my-blogs" />
                <Tab label="Create Blog" component={Link} to="/create-blog" />
                {/* <Button sx={{ margin: 1, color: "black" }}>
                  Hi, {localStorage.getItem("username")}
                </Button> */}
                <MenuItem variant="body1" sx={{ margin: 1.5, color: "black" }}>
                  Hi, {localStorage.getItem("username")}
                </MenuItem>
              </Tabs>
            )}
          </Hidden>
          {isLogin && isSmallScreen && (
            <Box marginLeft="auto" marginRight="auto">
              <Button
                sx={{ margin: 1, color: "black" }}
                aria-controls="menu"
                aria-haspopup="true"
                onClick={(e) => setValue(e.currentTarget)}
              >
                Menu
              </Button>
              <Menu
                id="menu"
                anchorEl={value}
                keepMounted
                open={Boolean(value)}
                onClose={() => setValue(null)}
              >
                <MenuItem variant="body1" sx={{ margin: 1.5, color: "black" }}>
                  Hi, {localStorage.getItem("username")}
                </MenuItem>
                <MenuItem component={Link} to="/blogs">
                  Blogs
                </MenuItem>
                <MenuItem component={Link} to="/my-blogs">
                  My Blogs
                </MenuItem>
                <MenuItem component={Link} to="/create-blog">
                  Create Blog
                </MenuItem>
              </Menu>
            </Box>
          )}
          <Box marginLeft="auto">
            {!isLogin && (
              <>
                <Button
                  sx={{ margin: 1, color: "black" }}
                  component={Link}
                  to="/login"
                >
                  Login
                </Button>
                <Button
                  sx={{ margin: 1, color: "black" }}
                  component={Link}
                  to="/register"
                >
                  Register
                </Button>
              </>
            )}
            {isLogin && (
              <Button sx={{ margin: 1, color: "black" }} onClick={handleLogout}>
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
