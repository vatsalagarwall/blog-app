import * as React from "react";
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
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div class="card" style={{ width: "18rem" }}>
        <img class="card-img-top" src={image} alt="Blog image" />
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
    </div>
  );
}
