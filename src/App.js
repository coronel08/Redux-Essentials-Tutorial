import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom"

import { Navbar } from './app/Navbar';
import Home from "./features/Home"
import PostsList from "./features/posts/PostsList"
import { SinglePostPage } from './features/posts/SinglePostPage';
import { EditPostForm } from './features/posts/EditPostform'
import { UserList } from './features/users/UsersList'
import { UserPage } from './features/users/UserPage';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostsList />} />
        <Route path="/posts/:postId" element={<SinglePostPage />} />
        <Route path="/editPost/:postId" element={<EditPostForm />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:userId" element={<UserPage />} />
        {/* <Route path="/posts" element={<PostsList />}>
        <Route path=":postId" element={<SinglePostPage />} />
      </Route> */}
      </Routes>
    </>
  );
}

export default App;
