import { Route, BrowserRouter, Routes, Outlet } from "react-router-dom";
import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Offers from "./components/Offers";
import Contact from "./components/Contact";
import Singletour from "./components/Singletour";
import Login from "./components/Login";
import Billing from "./components/Billing";
import Profile from "./components/Profile";
import Signup from "./components/Sign-up";

const Layout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
};

function App() {
  const [auth, setAuth] = useState(sessionStorage.getItem("user"));
  // const [role_id, setRole] = useState(sessionStorage.getItem("role"));

  return (
    <>
      <BrowserRouter>
        {auth ? (
          <>
            <Layout />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Blogs" element={<Blogs />} />
              <Route path="/Offers" element={<Offers />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Singletour/:id" element={<Singletour />} />
              <Route path="/Billing/:id" element={<Billing />} />
              <Route path="/Profile/:id" element={<Profile />} />
            </Routes>
            <Footer />
          </>
        ) : (
          <>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Registration" element={<Signup />} />
            </Routes>
          </>
        )}
      </BrowserRouter>
    </>
  );
}
export default App;
