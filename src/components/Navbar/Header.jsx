import React from "react";
import {  Routes, Route, Link } from "react-router-dom"; 
import Home from "../../Pages/HomePage/Home";
import ContactUs from "../../Pages/ContactPage/ContactUs";
import Media from "../../Pages/MediaPage/Media";

function Header() {

// const nav = document.querySelector(".navbar");

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 0) {
//     nav.classList.add("fixed");
//   } else {
//     nav.classList.remove("fixed");
//   }
// });



  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <Link className="navbar-brand"to="/">
            Logo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page"to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"to="/ContactUs">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"to="/Media">
                  Media
                </Link>
              </li>
            </ul>
            <Link to="/Login" className="redBtn" >LOGIN</Link>
          </div>
        </div>
      </nav>


      {/* <Routes >
        <Route path="/" element={<Home />} ></Route>
        <Route path="/ContactUs" element={ <ContactUs />  } ></Route>
        <Route path="/Media" element={ <Media /> } ></Route>
      </Routes> */}
    </div>
  );
}

export default Header;
