// // import * as React from "react";
// // import Card from "@mui/material/Card";
// // import CardHeader from "@mui/material/CardHeader";
// // import CardMedia from "@mui/material/CardMedia";
// // import CardContent from "@mui/material/CardContent";
// // import Avatar from "@mui/material/Avatar";
// // import Typography from "@mui/material/Typography";
// // import { red } from "@mui/material/colors";
// // import ModeEditIcon from "@mui/icons-material/ModeEdit";
// // import DeleteIcon from "@mui/icons-material/Delete";
// // import { Box, IconButton } from "@mui/material";
// // import { useNavigate } from "react-router-dom";
// // import toast from "react-hot-toast";
// // import axios from "axios";

// // export default function BlogCard({
// //   title,
// //   description,
// //   image,
// //   username,
// //   time,
// //   id,
// //   isUser,
// // }) {
// //   const navigate = useNavigate();
// //   const handleEdit = () => {
// //     toast.success("Blog Edited");
// //     navigate(`/blog-details/${id}`);
// //   };

// //   const handleDelete = async () => {
// //     try {
// //       const { data } = await axios.delete(`/api/v1/blog/delete-blog/${id}`);
// //       if (data?.success) {
// //         toast.success("Blog Deleted");
// //         window.location.reload();
// //       }
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };
// //   return (
// //     <Card
// //       sx={{
// //         width: "40%",
// //         margin: "auto",
// //         mt: 2,
// //         padding: 2,
// //         boxShadow: "5px 5px 10px #ccc",
// //         ":hover:": {
// //           boxShadow: "10px 10px 20px #ccc",
// //         },
// //       }}
// //     >
// //       {isUser && (
// //         <Box display={"flex"}>
// //           <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
// //             <ModeEditIcon color="info" />
// //           </IconButton>
// //           <IconButton onClick={handleDelete}>
// //             <DeleteIcon color="error" />
// //           </IconButton>
// //         </Box>
// //       )}
// //       <CardHeader
// //         avatar={
// //           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
// //             {username}
// //           </Avatar>
// //         }
// //         title={username}
// //         subheader={time}
// //       />
// //       <CardMedia component="img" height="194" image={image} alt="Blog Image" />
// //       <CardContent>
// //         <Typography variant="h6" color="text.secondary">
// //           Title : {title}
// //         </Typography>
// //         <Typography variant="body2" color="text.secondary">
// //           Description : {description}
// //         </Typography>
// //       </CardContent>
// //     </Card>
// //   );
// // }
// // import * as React from "react";
// // import Card from "@mui/material/Card";
// // import CardHeader from "@mui/material/CardHeader";
// // import CardMedia from "@mui/material/CardMedia";
// // import CardContent from "@mui/material/CardContent";
// // import Avatar from "@mui/material/Avatar";
// // import Typography from "@mui/material/Typography";
// // import { red } from "@mui/material/colors";
// // import ModeEditIcon from "@mui/icons-material/ModeEdit";
// // import DeleteIcon from "@mui/icons-material/Delete";
// // import { Box, IconButton } from "@mui/material";
// // import { useNavigate } from "react-router-dom";
// // import toast from "react-hot-toast";
// // import axios from "axios";

// // export default function BlogCard({
// //   title,
// //   description,
// //   image,
// //   username,
// //   time,
// //   id,
// //   isUser,
// // }) {
// //   const navigate = useNavigate();
// //   const handleEdit = () => {
// //     toast.success("Blog Edited");
// //     navigate(`/blog-details/${id}`);
// //   };

// //   const handleDelete = async () => {
// //     try {
// //       const { data } = await axios.delete(`/api/v1/blog/delete-blog/${id}`);
// //       if (data?.success) {
// //         toast.success("Blog Deleted");
// //         window.location.reload();
// //       }
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   return (
// //     <Card
// //       sx={{
// //         width: "30%", // Adjusted width to accommodate 3 cards in one row
// //         margin: "auto",
// //         mt: 2,
// //         padding: 2,
// //         boxShadow: "5px 5px 10px #ccc",
// //         ":hover:": {
// //           boxShadow: "10px 10px 20px #ccc",
// //         },
// //       }}
// //     >
// //       {isUser && (
// //         <Box display={"flex"}>
// //           <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
// //             <ModeEditIcon color="info" />
// //           </IconButton>
// //           <IconButton onClick={handleDelete}>
// //             <DeleteIcon color="error" />
// //           </IconButton>
// //         </Box>
// //       )}
// //       <CardHeader
// //         avatar={
// //           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
// //             {username}
// //           </Avatar>
// //         }
// //         title={username}
// //         subheader={time}
// //       />
// //       <CardMedia component="img" height="194" image={image} alt="Blog Image" />
// //       <CardContent>
// //         <Typography variant="h6" color="text.secondary">
// //           Title: {title}
// //         </Typography>
// //         <Typography variant="body2" color="text.secondary">
// //           Description: {description}
// //         </Typography>
// //       </CardContent>
// //     </Card>
// //   );
// // }
// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import Avatar from "@mui/material/Avatar";
// import Typography from "@mui/material/Typography";
// import { red } from "@mui/material/colors";
// import ModeEditIcon from "@mui/icons-material/ModeEdit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { Box, IconButton } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import axios from "axios";

// export default function BlogCard({
//   title,
//   description,
//   image,
//   username,
//   time,
//   id,
//   isUser,
// }) {
//   const navigate = useNavigate();
//   const handleEdit = () => {
//     toast.success("Blog Edited");
//     navigate(`/blog-details/${id}`);
//   };

//   const handleDelete = async () => {
//     try {
//       const { data } = await axios.delete(`/api/v1/blog/delete-blog/${id}`);
//       if (data?.success) {
//         toast.success("Blog Deleted");
//         window.location.reload();
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <Card
//       sx={{
//         width: "100%", // Full width on small screens
//         maxWidth: "30%", // 30% width on larger screens
//         margin: "auto",
//         mt: 2,
//         padding: 2,
//         boxShadow: "5px 5px 10px #ccc",
//         ":hover:": {
//           boxShadow: "10px 10px 20px #ccc",
//         },
//         "@media (max-width: 600px)": {
//           maxWidth: "100%", // Full width on extra-small screens
//         },
//       }}
//     >
//       {isUser && (
//         <Box display={"flex"}>
//           <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
//             <ModeEditIcon color="info" />
//           </IconButton>
//           <IconButton onClick={handleDelete}>
//             <DeleteIcon color="error" />
//           </IconButton>
//         </Box>
//       )}
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             {username}
//           </Avatar>
//         }
//         title={username}
//         subheader={time}
//       />
//       <CardMedia component="img" height="194" image={image} alt="Blog Image" />
//       <CardContent>
//         <Typography variant="h6" color="text.secondary">
//           Title: {title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Description: {description}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// }

import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

export default function BlogCard({
  title,
  description,
  image,
  username,
  time,
  id,
  isUser,
}) {
  const navigate = useNavigate();
  const formattedTime = new Date(time).toLocaleString();
  const handleEdit = () => {
    toast.success("Blog Edited");
    navigate(`/blog-details/${id}`);
  };

  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(`/api/v1/blog/delete-blog/${id}`);
      if (data?.success) {
        toast.success("Blog Deleted");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card
      sx={{
        width: "100%", // Full width on small screens
        maxWidth: "30%", // 30% width on larger screens
        margin: "auto",
        mt: 2,
        padding: 2,
        boxShadow: "5px 5px 10px #ccc",
        ":hover:": {
          boxShadow: "10px 10px 20px #ccc",
        },
        "@media (max-width: 600px)": {
          maxWidth: "100%", // Full width on extra-small screens
        },
        border: "2px solid #ccc", // Border added
      }}
    >
      {isUser && (
        <Box display={"flex"}>
          <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
            <ModeEditIcon color="info" />
          </IconButton>
          <IconButton onClick={handleDelete}>
            <DeleteIcon color="error" />
          </IconButton>
        </Box>
      )}
      {/* <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="username">
            {username}
          </Avatar>
        }
        title={username}
        sx={{ color: "black" }}
        subheader={time}
      /> */}
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {/* {username} */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-user"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </Avatar>
        }
        title={
          <Typography variant="h6" fontWeight="bold">
            {username}
          </Typography>
        }
        subheader={formattedTime}
      />

      <CardMedia component="img" height="194" image={image} alt="Blog Image" />
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          Title: {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Description: {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
