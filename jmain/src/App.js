import { Route, BrowserRouter, Routes, Outlet } from "react-router-dom";
import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Offers from "./components/Offers";
import Contact from "./components/Contact";

const Layout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
};

function App() {
  // const [auth, setAuth] = useState(sessionStorage.getItem("user"));
  // const [role_id, setRole] = useState(sessionStorage.getItem("role"));

  return (
    <>
      <BrowserRouter>
        <>
          <Layout />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Blogs" element={<Blogs />} />
            <Route path="/Offers" element={<Offers />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
          <Footer />
        </>
      </BrowserRouter>
    </>
  );
}
export default App;
