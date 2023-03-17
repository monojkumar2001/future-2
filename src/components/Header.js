import React from "react";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { HashLink as HashLink } from "react-router-hash-link";

import Web3 from "web3";
import Web3Modal from "web3modal";
import { useHistory, useLocation } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
function Header() {
  const [navActive, setNavActive] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);

  const [menuActive, setMenuActive] = useState(false);
  const _toggleSidebar = () => {
    setMenuActive(!menuActive);
  };
  AOS.init();
  const [isHovering, setIsHovering] = useState(1);

  return (
    <>
      <header className="header-mobile" id="home">
        <div className="nav-left">
          <Link to="/">
            {" "}
            <div className="nav-logo">
              <img src="./images/logo.png" alt="" />
            </div>{" "}
          </Link>
        </div>
        <button className="hum-btn" onClick={_toggleSidebar} id="burger-menu">
          <img
            src={`images/${menuActive ? "x" : "burger-menu"}.svg`}
            alt="Menu"
          />{" "}
        </button>

        <nav id="mobile-nav" className={`${menuActive ? "hidden" : ""} `}>
          <HashLink to="/">
            <a
              onClick={_toggleSidebar}
              href="/"
              className="active-nav nav-link mobile-link"
            >
              Home{" "}
            </a>
          </HashLink>

          <HashLink to="/#talent">
            <a
              onClick={_toggleSidebar}
              href="#talent"
              className="nav-link mobile-link"
            >
              Talent Pool
            </a>
          </HashLink>
          <HashLink to="/#virtual">
            <a
              onClick={_toggleSidebar}
              href="#virtual"
              className="nav-link mobile-link"
            >
              Virtual
            </a>
          </HashLink>
          <HashLink to="/#remote">
            <a
              onClick={_toggleSidebar}
              href="#remote"
              className="nav-link mobile-link"
            >
              Remote
            </a>
          </HashLink>
          <HashLink to="/#cummunity">
            <a
              onClick={_toggleSidebar}
              href="#cummunity"
              className="nav-link mobile-link"
            >
              Cummunity
            </a>
          </HashLink>
          <HashLink to="/#backer">
            <a
              onClick={_toggleSidebar}
              href="#backer"
              className="nav-link mobile-link"
            >
              Backer
            </a>
          </HashLink>
          <div className="header-link-mobile">
            <div className="social-mob">
            <a href="https://pentonium.medium.com/" target={"_blank"}>
     
     <img src="./images/medium.png" alt="" />
   </a>
   <a href="https://twitter.com/pentonium_ptm" target={"_blank"}>

     <img src="./images/twitter-logo.png" alt="" />
   </a>
   <a href="" target={"_blank"}>
     <img src="./images/discord-logo.png" alt="" />
   </a>
            </div>
          </div>
          <button className="join-discord-btn-nav">
            <a href="">
              <img src="./images/join-discord-btn.png" alt="" />
            </a>
          </button>
        </nav>
      </header>

      <header>
        <div className="nav-left">
          <Link to="/">
            {" "}
            <div className="nav-logo">
              <img src="./images/logo.png" alt="" />
            </div>{" "}
          </Link>
        </div>
        <div className="nav-right"></div>
      </header>
    </>
  );
}

export default Header;
