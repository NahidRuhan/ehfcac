import { Outlet, ScrollRestoration } from "react-router-dom";
import Nav from "./components/shared/Nav";
import SecondaryNav from "./components/shared/SecondaryNav";
import Footer from "./components/shared/Footer";

const Root = () => {
    return (
        <div className="font-poppins">
            <SecondaryNav></SecondaryNav>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Root;
