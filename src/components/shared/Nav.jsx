import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import logo from "../../../public/ehfccac.jpg";

const NavigationBar = () => {
  const navigate = useNavigate();

  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);
  const navDrawerRef = useRef(null);

  // Function to close the nav drawer
  const closeNavDrawer = () => {
    setIsNavDrawerOpen(false);
  };

  //edit

  // Function to handle clicks outside the nav drawer
  const handleClickOutside = (event) => {
    if (navDrawerRef.current && !navDrawerRef.current.contains(event.target)) {
      closeNavDrawer();
    }
  };

  useEffect(() => {
    // Event listener to close nav drawer on outside click
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="navbar z-10 sticky top-0 font-bold bg-green-600 max-h-14 lg:max-h-24 justify-between">
        <div>
          <div className="dropdown">
            <button
              className="btn btn-ghost lg:hidden"
              onClick={() => setIsNavDrawerOpen(!isNavDrawerOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            {/* Navigation Drawer for Mobile View */}
            <div
              ref={navDrawerRef}
              className={`border border-gray-200 shadow-lg fixed top-0 left-0 w-3/4 bg-white h-full z-50 transform transition-transform ${
                isNavDrawerOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <button className="btn btn-ghost" onClick={closeNavDrawer}>
                Close
              </button>
              <ul className="menu p-4">
                <li onClick={closeNavDrawer}>
                  <Link className="rounded-lg hover:bg-logoRed hover:text-white" to="/">
                    Home
                  </Link>
                </li>
                <li onClick={closeNavDrawer}>
                  <Link className="rounded-lg hover:bg-logoRed hover:text-white" to="/about-us">
                    About Us
                  </Link>
                </li>
                <li onClick={closeNavDrawer}>
                  <Link className="rounded-lg hover:bg-logoRed hover:text-white" to="/program-courses">
                    Program and Courses
                  </Link>
                </li>
                <li onClick={closeNavDrawer}>
                  <Link className="rounded-lg hover:bg-logoRed hover:text-white" to="/research">
                    Research
                  </Link>
                </li>
                <li onClick={closeNavDrawer}>
                  <Link className="rounded-lg hover:bg-logoRed hover:text-white" to="/services">
                    Services
                  </Link>
                </li>
                <li onClick={closeNavDrawer}>
                  <Link className="rounded-lg hover:bg-logoRed hover:text-white" to="/news-events">
                    News and Events
                  </Link>
                </li>
                <li onClick={closeNavDrawer}>
                  <Link className="rounded-lg hover:bg-logoRed hover:text-white" to="/resources">
                    Resources
                  </Link>
                </li>
                <li onClick={closeNavDrawer}>
                  <Link className="rounded-lg hover:bg-logoRed hover:text-white" to="/contact-us">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <img
            onClick={() => navigate("/")}
            className="hidden lg:flex w-32 h-16 px-4"
            src={logo}
            alt="logo"
          />
        </div>

        {/* Desktop Nav */}
        <div className="text-nowrap">
          <div className="hidden lg:flex">
            <div className="dropdown dropdown-hover">
              <label
                onClick={closeNavDrawer}
                tabIndex={0}
                className="btn btn-ghost m-1 text-white font-poppins font-semibold xl:text-lg"
              >
                <Link className="hover:border-b-4 hover:border-white" to="/">
                  Home
                </Link>
              </label>
            </div>
            <div className="dropdown dropdown-hover">
              <label
                onClick={closeNavDrawer}
                tabIndex={0}
                className="btn btn-ghost m-1 text-white font-poppins font-semibold xl:text-lg"
              >
                <Link className="hover:border-b-4 hover:border-white" to="/about-us">
                  About Us
                </Link>
              </label>
            </div>
            <div className="dropdown dropdown-hover">
              <label
                onClick={closeNavDrawer}
                tabIndex={0}
                className="btn btn-ghost m-1 text-white font-poppins font-semibold xl:text-lg"
              >
                <Link className="hover:border-b-4 hover:border-white" to="/program-courses">
                  Program and Courses
                </Link>
              </label>
            </div>
            <div className="dropdown dropdown-hover">
              <label
                onClick={closeNavDrawer}
                tabIndex={0}
                className="btn btn-ghost m-1 text-white font-poppins font-semibold xl:text-lg"
              >
                <Link className="hover:border-b-4 hover:border-white" to="/research">
                  Research
                </Link>
              </label>
            </div>
            <div className="dropdown dropdown-hover">
              <label
                onClick={closeNavDrawer}
                tabIndex={0}
                className="btn btn-ghost m-1 text-white font-poppins font-semibold xl:text-lg"
              >
                <Link className="hover:border-b-4 hover:border-white" to="/services">
                  Services
                </Link>
              </label>
            </div>
            <div className="dropdown dropdown-hover">
              <label
                onClick={closeNavDrawer}
                tabIndex={0}
                className="btn btn-ghost m-1 text-white font-poppins font-semibold xl:text-lg"
              >
                <Link className="hover:border-b-4 hover:border-white" to="/news-events">
                  News and Events
                </Link>
              </label>
            </div>
            <div className="dropdown dropdown-hover">
              <label
                onClick={closeNavDrawer}
                tabIndex={0}
                className="btn btn-ghost m-1 text-white font-poppins font-semibold xl:text-lg"
              >
                <Link className="hover:border-b-4 hover:border-white" to="/resources">
                  Resources
                </Link>
              </label>
            </div>
            <div className="dropdown dropdown-hover">
              <label
                onClick={closeNavDrawer}
                tabIndex={0}
                className="btn btn-ghost m-1 text-white font-poppins font-semibold xl:text-lg"
              >
                <Link className="hover:border-b-4 hover:border-white" to="/contact-us">
                  Contact Us
                </Link>
              </label>
            </div>
          </div>
          <img
            onClick={() => navigate("/")}
            className="lg:hidden w-16 h-10"
            src={logo}
            alt="logo"
          />
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
