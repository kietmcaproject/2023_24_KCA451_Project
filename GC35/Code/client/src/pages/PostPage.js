import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";
import Commentcomp from "./Commentcomp";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";

export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  // const [blog, setBlog] = useState(null);
  const [comment, setComment] = useState(null);
  const [commenttmsg, setCommentmsg] = useState("");
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);

  // for comments
  useEffect(() => {
    fetch(`http://localhost:4000/comments/${id}`).then((response) => {
      response.json().then((commentInfo) => {
        setComment(commentInfo);
      });
    });
  }, []);

  if (!postInfo) return "";

  // comment functionllaity

  function onchangeHandler(e) {
    setCommentmsg(([e.target.name] = e.target.value));
  }

    async function clickHandler(e) {
      e.preventDefault();
      console.log(commenttmsg);
      const userinfo = {
        content: commenttmsg,
        user_id: postInfo.author._id,
      };
      // console.log(userinfo);
      try {
        const res=await axios
          .post("http://localhost:4000/comment/" + postInfo._id, userinfo);
          // .then((res) => {
          //   // console.log(res);
            setComment("hello");
          // })
          // .catch((err) => {
          //   console.log(err);
          // });
      } catch (error) {
        console.log(error+"in comment!!");
      }
    }

  return (
    <div className="post-page">
      <h1 className="font-bold text-xl">{postInfo.title}</h1>
      <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
      <div className="author">by @{postInfo.author.username}</div>
      {userInfo.id === postInfo.author._id && (
        <div className="edit-row flex justify-center">
          <Link className="edit-btn m-1 " to={`/edit/${postInfo._id}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
            Edit this post
          </Link>
          <Link className="edit-btn m-1" to={`/delete/${postInfo._id}`}>
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg> */}
            <MdDeleteForever className="text-xl font-bold" />
            Delete this post
          </Link>

          {/* <button onClick={}>
            Delete this post
          </button> */}
          {/* <button className="edit-btn m-1 delete-btn" onClick={handleDelete}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
          Delete this post
          </button> */}
        </div>
      )}
      <div className="image">
        <img src={`http://localhost:4000/${postInfo.cover}`} alt="" />
      </div>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: postInfo.content }}
      />

      {/* new comment data */}
      <div className="mt-5 ">
        <div className="max-w-sm flex items-center rounded-md space-x-3">
          <div>
            <img
              className="w-14 h-14 rounded-lg"
              src="http://imgs.search.brave.com/RSH2MPgnMPPQdCsrXCAsD8-7SLJmwYriB7gIttwKSLg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTIvQXZh/dGFyLVByb2ZpbGUt/UE5HLVBob3Rvcy5w/bmc"
              alt="not found"
            ></img>
          </div>
          <div>
            <div className="text-medium font-medium text-black">
              Author
              <p className=" text-slate-500"></p>
            </div>
          </div>
        </div>
      </div>

      {/* comment data 2 */}
      <div className="mt-1 ">
        <div>
          <form onSubmit={clickHandler}>
            <input
              type="text"
              placeholder="Add a comment"
              className="border-violet-700 mt-2"
              onChange={onchangeHandler}
              name="content"
            />
            <div className="w-36">
              <button
                value="Comment"
                className="rounded-xl mt-2 px-3 bg-blue-700 hover:bg-blue-600"
              >
                Comment
              </button>
            </div>
          </form>
        </div>
        <div className="mt-4">
          {comment
            ? comment.map((info) => {
                return (
                  <Commentcomp 
                    key={info._id}
                    user={info.username}
                    msg={info.content}
                  />
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
}
