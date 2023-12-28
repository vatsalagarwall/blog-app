// import * as React from "react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
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
//   };
//   const [selectedTitle, setSelectedTitle] = useState("");

//   const handleDelete = async () => {
//     try {
//       const { data } = await axios.delete(`/api/v1/blog/delete-blog/${id}`);
//       if (data?.success) {
//         alert("Blog Deleted");
//         window.location.reload();
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const handleReadMore = () => {
//     setSelectedTitle(title);
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-4 mb-4">
//           <div className="card" style={{ width: "18rem", height: "35rem" }}>
//             <img
//               className="card-img-top"
//               src={image}
//               alt="Blog image"
//               style={{ height: "180px" }}
//             />
//             <div className="card-body">
//               {isUser && (
//                 <div className="d-flex justify-content-between align-items-center mb-3">
//                   <button
//                     onClick={handleEdit}
//                     style={{ backgroundColor: "white", border: "none" }}
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       stroke-width="2"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       class="lucide lucide-pencil"
//                     >
//                       <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
//                       <path d="m15 5 4 4" />
//                     </svg>{" "}
//                   </button>
//                   <button
//                     onClick={handleDelete}
//                     style={{ backgroundColor: "white", border: "none" }}
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       stroke-width="2"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       class="lucide lucide-trash-2"
//                     >
//                       <path d="M3 6h18" />
//                       <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
//                       <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
//                       <line x1="10" x2="10" y1="11" y2="17" />
//                       <line x1="14" x2="14" y1="11" y2="17" />
//                     </svg>{" "}
//                   </button>
//                 </div>
//               )}
//               <p>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   class="lucide lucide-user"
//                 >
//                   <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
//                   <circle cx="12" cy="7" r="4" />
//                 </svg>
//                 {username}
//               </p>
//               <p>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   class="lucide lucide-calendar"
//                 >
//                   <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
//                   <line x1="16" x2="16" y1="2" y2="6" />
//                   <line x1="8" x2="8" y1="2" y2="6" />
//                   <line x1="3" x2="21" y1="10" y2="10" />
//                 </svg>
//                 {formattedTime}
//               </p>
//               <h5 className="card-title">{title}</h5>
//               <p className="card-text" style={{ fontSize: "15px" }}>
//                 {description.substring(0, 200)}...
//               </p>

//               <button
//                 type="button"
//                 className="btn btn-outline-dark card-button"
//                 data-bs-toggle="modal"
//                 data-bs-target={`#exampleModal-${id}`}
//                 onClick={handleReadMore}
//               >
//                 Read More
//               </button>

//               <div
//                 className="modal fade"
//                 id={`exampleModal-${id}`}
//                 tabIndex="-1"
//                 aria-labelledby={`exampleModalLabel-${id}`}
//                 aria-hidden="true"
//               >
//                 <div className="modal-dialog">
//                   <div className="modal-content">
//                     <div className="modal-header">
//                       <h5
//                         className="modal-title"
//                         id={`exampleModalLabel-${id}`}
//                       >
//                         {selectedTitle}
//                       </h5>
//                       <button
//                         type="button"
//                         class="btn-close"
//                         data-bs-dismiss="modal"
//                         aria-label="Close"
//                       ></button>
//                     </div>
//                     <div className="modal-body">{description}</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const [selectedTitle, setSelectedTitle] = useState("");

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
  const handleReadMore = () => {
    setSelectedTitle(title);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card" style={{ width: "18rem", height: "35rem" }}>
            <img
              className="card-img-top"
              src={image}
              alt="Blog image"
              style={{ height: "180px", objectFit: "cover" }}
            />
            <div className="card-body">
              {isUser && (
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <button
                    onClick={handleEdit}
                    style={{ backgroundColor: "transparent", border: "none" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-pencil"
                    >
                      <path d="M17 3a2.85 2.83 0 0 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                      <path d="M15 5 19 9" />
                    </svg>{" "}
                  </button>
                  <button
                    onClick={handleDelete}
                    style={{ backgroundColor: "transparent", border: "none" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-trash-2"
                    >
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M16 6l-1 16H9L8 6" />
                      <path d="M2 6H22" />
                    </svg>{" "}
                  </button>
                </div>
              )}
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-user"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                {username}
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-calendar"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                </svg>
                {formattedTime}
              </p>
              <h5 className="card-title">{title}</h5>
              <p className="card-text" style={{ fontSize: "15px" }}>
                {description.substring(0, 200)}...
              </p>

              <button
                type="button"
                className="btn btn-outline-dark card-button"
                data-bs-toggle="modal"
                data-bs-target={`#exampleModal-${id}`}
                onClick={handleReadMore}
              >
                Read More
              </button>

              <div
                className="modal fade"
                id={`exampleModal-${id}`}
                tabIndex="-1"
                aria-labelledby={`exampleModalLabel-${id}`}
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5
                        className="modal-title"
                        id={`exampleModalLabel-${id}`}
                      >
                        {selectedTitle}
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">{description}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
