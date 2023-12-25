import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { authActions } from "../redux/store";
// import toast from "react-hot-toast";

const Header = () => {
  const [value, setValue] = useState();
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h4">My Blog App</Typography>
          <Box display={"flex"} marginLeft="auto" marginRight={"auto"}>
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <Tab label="Blogs" LinkComponent={Link} to="/blogs" />
              <Tab label="My Blogs" LinkComponent={Link} to="/my-blogs" />
              {/* <Tab label="Create Blog" LinkComponent={Link} to="/create-blog" /> */}
            </Tabs>
          </Box>
          <Box display={"flex"} marginLeft="auto">
            <Button
              sx={{ margin: 1, color: "white" }}
              LinkComponent={Link}
              to="/login"
            >
              Login
            </Button>
            <Button
              sx={{ margin: 1, color: "white" }}
              LinkComponent={Link}
              to="/register"
            >
              Register
            </Button>
            <Button sx={{ margin: 1, color: "white" }}>Logout</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
