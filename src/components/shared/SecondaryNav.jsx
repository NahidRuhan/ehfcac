import { Link } from "react-router-dom";
import { TbMinusVertical } from "react-icons/tb";


const SecondaryNav = () => {


  return (
    <div className="bg-red-200">
      <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl hidden lg:flex gap-0 justify-end font-roboto font-normal text-center items-center text-lg">
            <Link to='/' className="nav-link"><p className="hover:text-red-500 nav-text">Apply Now</p></Link>
            <p className="text-white text-xl"><TbMinusVertical /></p>
            <Link to='/' className="nav-link"><p className="hover:text-red-500 nav-text">Request Info</p></Link>
            <p className="text-white text-xl"><TbMinusVertical /></p>
            <Link to='/' className="nav-link"><p className="hover:text-red-500 nav-text">Join Our Newsletter</p></Link>
      </div>
    </div>
  );
};

export default SecondaryNav;
