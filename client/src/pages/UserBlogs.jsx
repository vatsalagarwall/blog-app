// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import BlogCard from "../components/BlogCard";
// // const UserBlogs = () => {
// //   const [blogs, setBlogs] = useState([]);

// //   //get user blogs
// //   const getUserBlogs = async () => {
// //     try {
// //       const id = localStorage.getItem("userId");
// //       const { data } = await axios.get(`/api/v1/blog/user-blog/${id}`);
// //       if (data?.success) {
// //         setBlogs(data?.userBlog.blogs);
// //       }
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   useEffect(() => {
// //     getUserBlogs();
// //   }, []);
// //   console.log(blogs);
// //   return (
// //     <div>
// //       {blogs && blogs.length > 0 ? (
// //         blogs.map((blog) => (
// //           <BlogCard
// //             id={blog._id}
// //             isUser={true}
// //             title={blog.title}
// //             description={blog.description}
// //             image={blog.image}
// //             username={blog?.user?.username}
// //             time={blog.createdAt}
// //           />
// //         ))
// //       ) : (
// //         <h1>You Haven't Created a blog yet</h1>
// //       )}
// //     </div>
// //   );
// // };

// // export default UserBlogs;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import BlogCard from "../components/BlogCard";
// const UserBlogs = () => {
//   const [blogs, setBlogs] = useState([]);

//   //get user blogs
//   const getUserBlogs = async () => {
//     try {
//       const id = localStorage.getItem("userId");
//       const { data } = await axios.get(`/api/v1/blog/user-blog/${id}`);
//       if (data?.success) {
//         setBlogs(data?.userBlog.blogs);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getUserBlogs();
//   }, []);
//   console.log(blogs);
//   return (
//     <div>
//       {blogs && blogs.length > 0 ? (
//         blogs.map((blog) => (
//           <BlogCard
//             id={blog._id}
//             isUser={true}
//             title={blog.title}
//             description={blog.description}
//             image={blog.image}
//             username={blog.user.username}
//             // username={blog?.user ? blog.user.username : "Unknown User"}
//             time={blog.createdAt}
//           />
//         ))
//       ) : (
//         <h1>You Havent Created a blog</h1>
//       )}
//     </div>
//   );
// };

// export default UserBlogs;
import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";

const UserBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  // get user blogs
  const getUserBlogs = async () => {
    try {
      const id = localStorage.getItem("userId");
      const { data } = await axios.get(`/api/v1/blog/user-blog/${id}`);
      if (data?.success) {
        setBlogs(data?.userBlog.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserBlogs();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {blogs && blogs.length > 0 ? (
          blogs.map((blog) => (
            <div key={blog._id} className="col-md-4 mb-4">
              <BlogCard
                id={blog._id}
                isUser={true}
                title={blog.title}
                description={blog.description}
                image={blog.image}
                username={blog?.user?.username}
                time={blog.createdAt}
              />
            </div>
          ))
        ) : (
          <div className="col">
            <h1>You Haven't Created a Blog Yet</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserBlogs;
