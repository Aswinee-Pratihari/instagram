import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import HomeDesktopLayout from "./layouts/HomeDesktopLayout";
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
        <Route path="/:userId" element={<Profile />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
