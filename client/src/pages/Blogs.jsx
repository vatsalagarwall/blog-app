// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import BlogCard from "../components/BlogCard";
// const Blogs = () => {
//   const [blogs, setBlogs] = useState([]);
//   //get blogs
//   const getAllBlogs = async () => {
//     try {
//       const { data } = await axios.get("/api/v1/blog/all-blog");
//       if (data?.success) {
//         setBlogs(data?.blogs);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     getAllBlogs();
//   }, []);
//   return (
//     <div>
//       {blogs &&
//         blogs.map((blog) => (
//           <BlogCard
//             id={blog?._id}
//             // isUser={localStorage.getItem("userId") === blog?.user?._id}
//             title={blog?.title}
//             description={blog?.description}
//             image={blog?.image}
//             username={blog?.user?.username}
//             // username={localStorage.getItem("username")}
//             time={blog.createdAt}
//           />
//         ))}
//     </div>
//   );
// };

// export default Blogs;
import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  // get blogs
  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get("/api/v1/blog/all-blog");
      if (data?.success) {
        setBlogs(data?.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  // const [news, setNews] = useState("");
  // function searchNews() {
  //   axios.get("https://dev.to/api/articles/latest").then((res) => {
  //     console.log(res.data);
  //     console.log(res.data.map((item) => item.title));
  //   });
  // }
  // useEffect(() => {
  //   searchNews();
  // }, []);

  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <div className="row">
        {/* <div onLoad={() => searchNews()}></div> */}
        {blogs &&
          blogs.map((blog) => (
            <div key={blog?._id} className="col-md-4 mb-4">
              <BlogCard
                id={blog?._id}
                title={blog?.title}
                description={blog?.description}
                image={blog?.image}
                username={blog?.user?.username}
                time={blog.createdAt}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Blogs;
