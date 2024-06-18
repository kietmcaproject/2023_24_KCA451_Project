// import React from "react";
// import { useState } from "react";
// import { Navigate, useParams } from "react-router-dom";

// const DeletePost = () => {
//   const { id } = useParams();
//   const [redirect, setRedirect] = useState(false);

//   async function deletePost() {
//     console.log("in delete function");
//     const data = new FormData();
//     // data.set("id", id);
//     const response = await fetch("http://localhost:4000/delete/${id}", {
//       method: "DELETE",
//       body: data,
//       credentials: "include",
//     });

//     console.log(response);
//     if (response.ok) {
//       return <Navigate to={"/"} />;
//       // setRedirect(true);
//     }
//   }
//   if (redirect) {
//   }

//   return(
//      <>
//       <button onClick={deletePost}>Delete this post</button>
//      </>
//     );
// };

// export default DeletePost;

import React from "react";
import { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

const DeletePost = () => {
  const { id } = useParams();

  const [redirect, setRedirect] = useState(false);
  // useEffect(() => {
  //   fetch(`http://localhost:4000/post/${id}`)
  //     .then(response => {
  //       response.json().then(postInfo => {
  //         // setPostInfo(postInfo);
  //       });
  //     });
  // }, []);
  async function deletePost() {
    console.log("in delete function");
    console.log("id ==" + id);
    // const data = new FormData();
    // data.set("id", id);
    // console.log(id+"id");
    try {
      const response = await fetch("http://localhost:4000/delete/" + id, {
        method: "DELETE",
        body: { id },
        credentials: "include",
        headers: {
          "Content-Type": "text/plain",
        },
      });
      console.log(response);
      if (response.ok) {
        setRedirect(true);
      }
    } catch (error) {
      console.log(error);
    }
  }
  // navigating to home page
  if (redirect) {
    alert("Deleted succesfully!!");
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <button onClick={deletePost}>Delete this post</button>
    </>
  );
};

export default DeletePost;
