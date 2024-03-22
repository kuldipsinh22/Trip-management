import React, { useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
  Outlet,
} from "react-router-dom";
import Header from "./View/Header.jsx";
import Footer from "./View/Footer";
import Sidebar from "./View/Sidebar";
//import Dashboard from "./View/Dashboard"
import Admin from "./View/Admin";
import Contact_us from "./View/Contact_us";
import About_us from "./View/About_us";
import User from "./View/User";
import Company from "./View/Company";
import Manage_bookings from "./View/Manage_bookings";
import Tour_packages from "./View/Tour_packages";
import Highlights from "./View/Highlights";
import Feedbacks from "./View/Feedbacks";
import Login from "./View/Login";
import Add_admin from "./View/Add_admin";
import Add_company from "./View/Add_company";
import Add_user from "./View/Add_user";
import Add_Contact from "./View/Add_contact";
import Add_about from "./View/Add_about";
import Add_packages from "./View/Add_packages";
import Add_booking from "./View/Add_booking";
import Add_inquiries from "./View/Add_inquiries";
import Add_highlight from "./View/Add_highlight";
import Add_feedback from "./View/Add_feedback";
import Inquiries from "./View/Inquiries";
import Booking from "./View/Booking";

const Layout = () => {
  return (
    <div>
      <Header></Header>
      <Sidebar />
      <Outlet />
    </div>
  );
};
//const router=createBrowserRouter([
//{
//path:"/",
// element:<Layout />,
//children:[
//{
//path:"/Admin",
//element:<Admin />,
//},
//{
// path:"/Company",
//element:<Company />,
//},
//{
//path:"/User",
//element:<User />,
//},
//{
//path:"/Contact_us",
//element:<Contact_us />,
//},
//{
// path:"/About_us",
// element:<About_us />,
// },
//{
// path:"/Manage_bookings",
// element:<Manage_bookings />,
//},
//{
//path:"/Tour_packages",
//element:<Tour_packages />,
//},
//{
//path:"/Highlights",
//element:<Highlights />,
//},
//{
//path:"/Inquiries",
//element:<Inquiries />,
//},
//{
//path:"/Feedbacks",
//element:<Feedbacks />,
//},
//{
//path:"/Login",
//element:<Login />,
//},
//{
//path:"/Booking",
//element:<Booking />,
//},
//{
//path:"/Add_Admin",
//element:<Add_admin/>
//},
//{
//path:"/Add_Admin/:id",
//element:<Add_admin/>
//},
//{
//path:"/Add_company",
//element:<Add_company />,
//},
//{
//path:"/Add_company/:id",
//element:<Add_company />,
//},
//{
//path:"/Add_user",
//element:<Add_user />,
//},
//{
//path:"/Add_user/:id",
//element:<Add_user />,
//},
//{
//path:"/Add_Contact",
//element:<Add_Contact/>
//},
//{
//path:"/Add_Contact/:id",
//element:<Add_Contact/>
//},
//{
// path:"/Add_About",
//element:<Add_about/>
//},
//{
//path:"/Add_About/:id",
//element:<Add_about/>
//},
//{
//path:"/Add_Packages",
//element:<Add_packages/>
//},
//{
//path:"/Add_Packages/:id",
//element:<Add_packages/>
//},
//{
//path:"/Add_Booking",
//element:<Add_booking/>
//},
//{
//path:"/Add_Booking/:id",
//element:<Add_booking/>
//},
//{
//path:"/Add_inquiries",
//element:<Add_inquiries />
//},
//{
//path:"/Add_inquiries/:id",
//element:<Add_inquiries />
//},
//{
//path:"/Add_highlight",
//element:<Add_highlight/>
//},
//{
//path:"/Add_highlight/:id",
//element:<Add_highlight/>
//},
//  {
//  path:"/Add_feedback",
// element:<Add_feedback/>
//},
//{
//path:"/Add_feedback/:id",
// element:<Add_feedback/>
//},
//]
// }
//]);

function App() {
  const [auth, setAuth] = useState(sessionStorage.getItem("admin"));
  const [role_id, setRole] = useState(sessionStorage.getItem("role"));

  return (
    <>
      <BrowserRouter>
        {auth && role_id == 1 ? (
          <>
            <>
              <Routes>
                <Route path="/" element={<Admin />} />
                <Route path="/Admin" element={<Admin />} />
                <Route path="/Add_admin" element={<Add_admin />} />
                <Route path="/Add_admin/:id" element={<Add_admin />} />
                <Route path="/Contact_us" exact element={<Contact_us />} />
                <Route path="/About_us" element={<About_us />} />
                <Route path="/User" element={<User />} />
                <Route path="/Company" element={<Company />} />
                <Route path="/Manage_bookings" element={<Manage_bookings />} />
                <Route path="/Tour_packages" element={<Tour_packages />} />
                <Route path="/Highlights" element={<Highlights />} />
                <Route path="/Inquiries" element={<Inquiries />} />
                <Route path="/Feedbacks" element={<Feedbacks />} />
                <Route path="/Booking" element={<Booking />} />
                <Route path="/Add_company" element={<Add_company />} />
                <Route path="/Add_company/:id" element={<Add_company />} />
                <Route path="/Add_user" element={<Add_user />} />
                <Route path="/Add_user/:id" element={<Add_user />} />
                <Route path="/Add_Contact" element={<Add_Contact />} />
                <Route path="/Add_Contact/:id" element={<Add_Contact />} />
                <Route path="/Add_about" element={<Add_about />} />
                <Route path="/Add_about/:id" element={<Add_about />} />
                <Route path="/Add_Packages" element={<Add_packages />} />
                <Route path="/Add_Packages/:id" element={<Add_packages />} />
                <Route path="/Add_Booking" element={<Add_booking />} />
                <Route path="/Add_Booking/:id" element={<Add_booking />} />
                <Route path="/Add_inquiries" element={<Add_inquiries />} />
                <Route path="/Add_inquiries/:id" element={<Add_inquiries />} />
                <Route path="/Add_highlight" element={<Add_highlight />} />
                <Route path="/Add_highlight/:id" element={<Add_highlight />} />
                <Route path="/Add_feedback" element={<Add_feedback />} />
                <Route path="/Add_feedback/:id" element={<Add_feedback />} />
                <Route path="/Header" element={<Header />} />
              </Routes>
              <Footer></Footer>
              <Layout />
            </>
          </>
        ) : auth && role_id == 2 ? (
          <>
            <>
              <Routes>
                <Route path="/Tour_packages" element={<Tour_packages />} />
                <Route path="/Highlights" element={<Highlights />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Add_Packages" element={<Add_packages />} />
                <Route path="/Add_Packages/:id" element={<Add_packages />} />
                <Route path="/Add_highlight" element={<Add_highlight />} />
                <Route path="/Add_highlight/:id" element={<Add_highlight />} />
                <Route path="/Header" element={<Header />} />
              </Routes>
              <Footer></Footer>
              <Layout />
            </>
          </>
        ) : (
          <>
            <Routes>
              <Route path="/" element={<Login />} />
            </Routes>
          </>
        )}
        
      </BrowserRouter>
    </>
  );
}
export default App;
