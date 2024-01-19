import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import HomeDesktopLayout from "./layouts/HomeDesktopLayout";
import SignUp from "./pages/SignUp";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomeDesktopLayout>
              {" "}
              <Home />
            </HomeDesktopLayout>
          }
        />
        <Route
          path="/:userId"
          element={
            <HomeDesktopLayout>
              {" "}
              <Profile />
            </HomeDesktopLayout>
          }
        />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
