import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaLinkedin,
    FaTwitterSquare,
  } from "react-icons/fa";
  import { Link } from "react-router-dom";
  import logo from "../../../public/ehfccac.jpg";
  
  const Footer = () => {
    return (
      <div className="bg-green-600 text-white p-5">
        <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl">
          <div className="flex justify-center w-1/2 md:w-2/6 lg:w-1/6 h-auto mx-auto">
            <img className="" src={logo} alt="" />
          </div>
  
          <footer className="footer place-items-center p-10">
            <nav>
              <header className="footer-title text-black font-bold">Quick Links</header>
              <Link to="/program-courses">
                <a className="link link-hover">Programs and Courses</a>
              </Link>
              <Link to="/research">
                <a className="link link-hover">Research</a>
              </Link>
              <Link to="/services">
                <a className="link link-hover">Services</a>
              </Link>
              <Link to="/contact-us">
                <a className="link link-hover">Contact Us</a>
              </Link>
            </nav>
            {/* <nav>
              <header className="footer-title text-black font-bold">Academics</header>
              <Link to="/academics/schools">
                <a className="link link-hover">Privacy Policy</a>
              </Link>
              <Link to="/academics/departments">
                <a className="link link-hover">Terms Of Service</a>
              </Link>
            </nav> */}
            <nav>
              <header className="footer-title text-black font-bold">Follow Us On</header>
              <Link to="/academics/schools">
                <p className="link link-hover flex gap-3 items-center"><span><FaFacebookSquare /></span>Facebook</p>
              </Link>
              <Link to="/academics/schools">
                <p className="link link-hover flex gap-3 items-center"><span><FaInstagramSquare /></span>Instagram</p>
              </Link>
              <Link to="/academics/schools">
                <p className="link link-hover flex gap-3 items-center"><span><FaTwitterSquare /></span>Twitter</p>
              </Link>
              <Link to="/academics/schools">
                <p className="link link-hover flex gap-3 items-center"><span><FaLinkedin /></span>LinkedIn</p>
              </Link>
            </nav>
          </footer>
          <footer className="p-10 flex flex-col gap-3">
            <nav className="flex justify-center items-center gap-5 text-base text-white">
              {" "}
              {/* Use 'items-center' to center vertically */}
              <p className="link link-hover text-nowrap">
                Privacy Policy
              </p>
              <p>|</p>
              <p className="link link-hover text-nowrap">
                Terms Of Service
              </p>
              
            </nav>
            <p className="font-normal text-xl text-center">
            Ethical Hacking and Forensic Cyber Crime Analysis Center (EHFCAC) | Canadian University Of Bangladesh
            </p>
          </footer>
        </div>
        <footer className="footer footer-center p-4 bg-green-600 text-white">
          <aside>
            <p>
              © 2024 EHFCAC - Canadian University of Bangladesh. All rights reserved |
            </p>
          </aside>
        </footer>
      </div>
    );
  };
  
  export default Footer;
  