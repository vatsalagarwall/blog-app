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
// import toast from "react-hot-toast";
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
    <div class="card" style={{ width: "18rem" }}>
      <img class="card-img-top" src="..." alt="Card image cap" />
      <div class="card-body">
        {isUser && (
          <div>
            <p onClick={handleDelete}>Delete </p>
            <p onClick={handleEdit}>Edit </p>
          </div>
        )}
        <p>{username}</p>
        <p>At: {formattedTime}</p>
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description}</p>
      </div>
    </div>
  );
}
