import './App.css';
import Post from "./Post";
import Header from "./Header";
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import {UserContextProvider} from "./UserContext";
import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/PostPage";
import EditPost from "./pages/EditPost";
import DeletePost from './pages/DeletePost';
import LoginPage2 from './pages/LoginPage2';
import Register2 from './pages/Register2';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route path="/login" element={<LoginPage2 />} />
          {/* <Route path="/register" element={<RegisterPage />} /> */}
          <Route path="/register" element={<Register2 />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/delete/:id" element={<DeletePost/>} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
