import { Outlet, ScrollRestoration } from "react-router-dom";
import Nav from "./components/shared/Nav";

const Root = () => {
    return (
        <div className="font-poppins">
            <Nav></Nav>
            <Outlet></Outlet>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Root;
