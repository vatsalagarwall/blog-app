// import * as React from "react";

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
//   const formattedTime = new Date(time).toLocaleString();
//   const handleEdit = () => {
//     navigate(`/blog-details/${id}`);
//     // toast.success("Blog Edited");
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
//     <div class="card" style={{ width: "18rem" }}>
//       <img src={image} class="card-img-top" alt="blog-image" />
//       <div class="card-body">
//         {isUser && (
//           <div>
//             <svg
//               onClick={handleEdit}
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               stroke-width="2"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               class="lucide lucide-pencil"
//             >
//               <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
//               <path d="m15 5 4 4" />
//             </svg>

//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               stroke-width="2"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               class="lucide lucide-trash-2"
//               onClick={handleDelete}
//             >
//               <path d="M3 6h18" />
//               <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
//               <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
//               <line x1="10" x2="10" y1="11" y2="17" />
//               <line x1="14" x2="14" y1="11" y2="17" />
//             </svg>
//             <p class="card-text">
//               <small>
//                 By: {username} at {formattedTime}
//               </small>
//             </p>
//           </div>
//         )}
//         <h5 class="card-title">{title}</h5>
//         <p class="card-text">{description}</p>

//         {/* <a href="#" class="btn btn-primary">
//           Go somewhere
//         </a> */}
//       </div>
//     </div>
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
  const handleEdit = () => {
    navigate(`/blog-details/${id}`);
  };

  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(`/api/v1/blog/delete-blog/${id}`);
      if (data?.success) {
        alert("Blog Deleted");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Card
      sx={{
        width: "40%",
        margin: "auto",
        mt: 2,
        padding: 2,
        boxShadow: "5px 5px 10px #ccc",
        ":hover:": {
          boxShadow: "10px 10px 20px #ccc",
        },
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
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {username}
          </Avatar>
        }
        title={username}
        subheader={time}
      />
      <CardMedia component="img" height="194" image={image} alt="Paella dish" />
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          Title : {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Description : {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
