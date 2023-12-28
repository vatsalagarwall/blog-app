// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import {
// //   Box,
// //   AppBar,
// //   Toolbar,
// //   Button,
// //   Typography,
// //   Tabs,
// //   Tab,
// // } from "@mui/material";
// // import { Link } from "react-router-dom";
// // import { useSelector, useDispatch } from "react-redux";
// // import { authActions } from "../redux/store";
// // import toast from "react-hot-toast";

// // const Header = () => {
// //   //global state
// //   let isLogin = useSelector((state) => state.isLogin);
// //   isLogin = isLogin || localStorage.getItem("userId");
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
// //   // console.log(isLogin);
// //   //state
// //   const [value, setValue] = useState();

// //   //handle logout
// //   const handleLogout = () => {
// //     try {
// //       dispatch(authActions.logout());
// //       localStorage.clear();
// //       toast.success("Logout Successfull");
// //       navigate("/login");
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };
// //   return (
// //     <>
// //       <AppBar position="sticky">
// //         <Toolbar>
// //           <Typography variant="h4">My Blog App</Typography>
// //           {isLogin && (
// //             <Box display={"flex"} marginLeft="auto" marginRight={"auto"}>
// //               <Tabs
// //                 textColor="inherit"
// //                 value={value}
// //                 onChange={(e, val) => setValue(val)}
// //               >
// //                 <Tab label="Blogs" LinkComponent={Link} to="/blogs" />
// //                 <Tab label="My Blogs" LinkComponent={Link} to="/my-blogs" />
// //                 <Tab
// //                   label="Create Blog"
// //                   LinkComponent={Link}
// //                   to="/create-blog"
// //                 />
// //               </Tabs>
// //             </Box>
// //           )}
// //           <Box display={"flex"} marginLeft="auto">
// //             {!isLogin && (
// //               <>
// //                 {" "}
// //                 <Button
// //                   sx={{ margin: 1, color: "white" }}
// //                   LinkComponent={Link}
// //                   to="/login"
// //                 >
// //                   Login
// //                 </Button>
// //                 <Button
// //                   sx={{ margin: 1, color: "white" }}
// //                   LinkComponent={Link}
// //                   to="/register"
// //                 >
// //                   Register
// //                 </Button>
// //               </>
// //             )}
// //             {isLogin && (
// //               <Button sx={{ margin: 1, color: "white" }} onClick={handleLogout}>
// //                 Logout
// //               </Button>
// //             )}
// //           </Box>
// //         </Toolbar>
// //       </AppBar>
// //     </>
// //   );
// // };

// // export default Header;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";

// import {
//   Box,
//   AppBar,
//   Toolbar,
//   Button,
//   Typography,
//   Tabs,
//   Tab,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { authActions } from "../redux/store";
// import toast from "react-hot-toast";

// const Header = () => {
//   // global state
//   let isLogin = useSelector((state) => state.isLogin);
//   isLogin = isLogin || localStorage.getItem("userId");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

//   // state
//   const [value, setValue] = useState();

//   // handle logout
//   const handleLogout = () => {
//     try {
//       dispatch(authActions.logout());
//       localStorage.clear();
//       toast.success("Logout Successful");
//       navigate("/login");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       <AppBar position="sticky" sx={{ background: "white", color: "black" }}>
//         <Toolbar>
//           <Typography variant="h4">BlogSphere</Typography>
//           {isLogin && (
//             <>
//               {isSmallScreen ? (
//                 // Render a responsive dropdown menu for small screens
//                 <Box marginLeft="auto" marginRight="auto">
//                   <Button
//                     sx={{ margin: 1, color: "black" }}
//                     aria-controls="menu"
//                     aria-haspopup="true"
//                     onClick={(e) => setValue(e.currentTarget)}
//                   >
//                     Menu
//                   </Button>
//                   <Menu
//                     id="menu"
//                     anchorEl={value}
//                     keepMounted
//                     open={Boolean(value)}
//                     onClose={() => setValue(null)}
//                   >
//                     <MenuItem component={Link} to="/blogs">
//                       Blogs
//                     </MenuItem>
//                     <MenuItem component={Link} to="/my-blogs">
//                       My Blogs
//                     </MenuItem>
//                     <MenuItem component={Link} to="/create-blog">
//                       Create Blog
//                     </MenuItem>
//                   </Menu>
//                 </Box>
//               ) : (
//                 // Render Tabs for larger screens
//                 <Tabs
//                   textColor="inherit"
//                   value={value}
//                   onChange={(e, val) => setValue(val)}
//                 >
//                   <Tab label="Blogs" component={Link} to="/blogs" />
//                   <Tab label="My Blogs" component={Link} to="/my-blogs" />
//                   <Tab label="Create Blog" component={Link} to="/create-blog" />
//                 </Tabs>
//               )}
//             </>
//           )}
//           <Box marginLeft="auto">
//             {!isLogin && (
//               <>
//                 <Button
//                   sx={{ margin: 1, color: "black" }}
//                   component={Link}
//                   to="/login"
//                 >
//                   Login
//                 </Button>
//                 <Button
//                   sx={{ margin: 1, color: "black" }}
//                   component={Link}
//                   to="/register"
//                 >
//                   Register
//                 </Button>
//               </>
//             )}
//             {isLogin && (
//               <Button sx={{ margin: 1, color: "black" }} onClick={handleLogout}>
//                 Logout
//               </Button>
//             )}
//           </Box>
//         </Toolbar>
//       </AppBar>
//     </>
//   );
// };

// export default Header;

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
      <AppBar position="sticky" sx={{ background: "white", color: "black" }}>
        <Toolbar>
          <Typography variant="h4">BlogSphere</Typography>
          {isLogin && (
            <>
              {isSmallScreen ? (
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
              ) : (
                <Tabs
                  textColor="inherit"
                  value={getActiveTab()}
                  onChange={handleTabChange}
                >
                  <Tab label="Blogs" component={Link} to="/blogs" />
                  <Tab label="My Blogs" component={Link} to="/my-blogs" />
                  <Tab label="Create Blog" component={Link} to="/create-blog" />
                </Tabs>
              )}
            </>
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
