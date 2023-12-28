// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { useNavigate, useParams } from "react-router-dom";
// import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
// const BlogDetails = () => {
//   const [blog, setBlog] = useState({});
//   const id = useParams().id;
//   const navigate = useNavigate();
//   const [inputs, setInputs] = useState({});
//   // get blog details
//   const getBlogDetail = async () => {
//     try {
//       const { data } = await axios.get(`/api/v1/blog/get-blog/${id}`);
//       if (data?.success) {
//         setBlog(data?.blog);
//         setInputs({
//           title: data?.blog.title,
//           description: data?.blog.description,
//           image: data?.blog.image,
//         });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getBlogDetail();
//   }, [id]);

//   // input change
//   const handleChange = (e) => {
//     setInputs((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };
//   //form
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.put(`/api/v1/blog/update-blog/${id}`, {
//         title: inputs.title,
//         description: inputs.description,
//         image: inputs.image,
//         user: localStorage.getItem("userId"),
//       });
//       if (data?.success) {
//         toast.success("Blog Updated");
//         navigate("/my-blogs");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   console.log(blog);
//   return (
//     <v>
//       <form onSubmit={handleSubmit}>
//         <Box
//           width={"50%"}
//           border={3}
//           borderRadius={10}
//           padding={3}
//           margin="auto"
//           boxShadow={"10px 10px 20px #ccc"}
//           display="flex"
//           flexDirection={"column"}
//           marginTop="30px"
//         >
//           <Typography
//             variant="h2"
//             textAlign={"center"}
//             fontWeight="bold"
//             padding={3}
//             color="gray"
//           >
//             Update A Post
//           </Typography>
//           <InputLabel
//             sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
//           >
//             Title
//           </InputLabel>
//           <TextField
//             name="title"
//             value={inputs.title}
//             onChange={handleChange}
//             margin="normal"
//             variant="outlined"
//             required
//           />
//           <InputLabel
//             sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
//           >
//             Description
//           </InputLabel>
//           <TextField
//             name="description"
//             value={inputs.description}
//             onChange={handleChange}
//             margin="normal"
//             variant="outlined"
//             required
//           />
//           <InputLabel
//             sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
//           >
//             Image URL
//           </InputLabel>
//           <TextField
//             name="image"
//             value={inputs.image}
//             onChange={handleChange}
//             margin="normal"
//             variant="outlined"
//             required
//           />
//           <Button type="submit" color="warning" variant="contained">
//             UPDATE
//           </Button>
//         </Box>
//       </form>
//     </v>
//   );
// };

// export default BlogDetails;
import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Button,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";

const BlogDetails = () => {
  const [blog, setBlog] = useState({});
  const id = useParams().id;
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  // get blog details
  const getBlogDetail = async () => {
    try {
      const { data } = await axios.get(`/api/v1/blog/get-blog/${id}`);
      if (data?.success) {
        setBlog(data?.blog);
        setInputs({
          title: data?.blog.title,
          description: data?.blog.description,
          image: data?.blog.image,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogDetail();
  }, [id]);

  // input change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`/api/v1/blog/update-blog/${id}`, {
        title: inputs.title,
        description: inputs.description,
        image: inputs.image,
        user: localStorage.getItem("userId"),
      });
      if (data?.success) {
        toast.success("Blog Updated");
        navigate("/my-blogs");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <form onSubmit={handleSubmit}>
          <Box
            border={3}
            borderRadius={10}
            padding={3}
            boxShadow={"10px 10px 20px #ccc"}
            display="flex"
            flexDirection={"column"}
            marginTop="30px"
          >
            <Typography
              variant="h4"
              textAlign={"center"}
              fontWeight="bold"
              padding={3}
              color="gray"
            >
              Update a Post
            </Typography>
            <InputLabel sx={{ mb: 1, fontSize: "18px", fontWeight: "bold" }}>
              Title
            </InputLabel>
            <TextField
              name="title"
              value={inputs.title}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              required
            />
            <InputLabel sx={{ mb: 1, fontSize: "18px", fontWeight: "bold" }}>
              Description
            </InputLabel>
            <TextField
              name="description"
              value={inputs.description}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              required
            />
            <InputLabel sx={{ mb: 1, fontSize: "18px", fontWeight: "bold" }}>
              Image URL
            </InputLabel>
            <TextField
              name="image"
              value={inputs.image}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              required
            />
            <Button
              type="submit"
              color="warning"
              variant="contained"
              style={{ marginTop: "20px" }}
            >
              UPDATE
            </Button>
          </Box>
        </form>
      </Grid>
    </Grid>
  );
};

export default BlogDetails;
