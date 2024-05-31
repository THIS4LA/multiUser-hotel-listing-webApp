// Importing necessary modules from React and other libraries
import React, { useEffect, useRef } from "react";
import logo from "../../assets/images/logo-asgard.png"; // Importing the logo image
import { NavLink, Link } from "react-router-dom"; // Importing NavLink and Link components from react-router-dom for navigation
import userImg from "../../assets/images/avatar-icon.png"
import { BiMenu } from "react-icons/bi"; // Importing menu icon from react-icons

// Defining navigation links for the menu
const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/owners",
    display: "Find a Place",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

// Header component definition
const Header = () => {
  // useRef hook to create references for header and menu elements
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  // Function to handle sticky header on scroll
  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      // Adding or removing 'sticky_header' class based on scroll position
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  // useEffect hook to add and clean up scroll event listener
  useEffect(() => {
    handleStickyHeader();

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener("scroll", handleStickyHeader);
  }, []);

  // Function to toggle menu visibility on small screens
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    // Header element with reference and class names
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo section */}
          <div>
<<<<<<< HEAD
           <Link to="/home"><img src={logo} alt="logo" /></Link>
=======
            <img src={logo} alt="logo" />
>>>>>>> b2cdb2dba2114758798ff4a5a19f083d713152f3
          </div>

          {/* Navigation menu section */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {/* Mapping through navLinks to create menu items */}
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path} // Corrected to link.path
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-pink-100 text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-pink-100"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Right section of the header with user icon, login button, and menu icon */}
          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full">
                  <img src={userImg} className="w-full rounded-full" alt="dp" />
                </figure>
              </Link>
            </div>
            {/* Login button */}
            <Link to="/login">
              <button
                className="bg-redColor py-2 px-6 text-white font-[600] h-[44px] flex items-center
                justify-center rounded-[50px]"
              >
                Login
              </button>
            </Link>
            {/* Sidebar menu icon for small screens */}
            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
