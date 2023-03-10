import React from 'react';
import SideBar from './User_Template/sidebar';
import ToDoPage from './User_Template/todo_page';
import PostsPage from './User_Template/post_page';
import LandingPage from './User_Template/landing_page';
import ProfilePage from './User_Template/profile_page';
import GalleryPage from './User_Template/gallery_page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<SideBar />} >
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/todo" element={<ToDoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
