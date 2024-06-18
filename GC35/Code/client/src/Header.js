import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "./UserContext";

export default function Header() {
  const {setUserInfo,userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="font-bold  title">BlogFuse <br />
      <span className=" text-sm/[1px] font-cursive text-yellow-900 font-bold tagline"> Uniting Thoughts Igniting Ideas </span>
      </Link>

      <nav>
        {username && (
          <>
            <Link to="/create" className="font-bold bg-blue-400 p-2 rounded-lg hover:text-white">Create new post</Link>
            <a onClick={logout} className="font-bold bg-blue-400 p-2 rounded-lg hover:text-white">Logout ({username})</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login" className="font-bold bg-green-400 text-white p-2 px-5 rounded-lg hover:text-black">Login</Link>
            <Link to="/register" className="font-bold bg-green-400 p-2 px-4 text-white rounded-lg hover:text-black">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
