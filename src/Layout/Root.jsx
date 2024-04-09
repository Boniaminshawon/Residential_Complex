import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div>
            <div className="h-[73px]">
                <Navbar></Navbar>
            </div>
            <div className="container mx-auto  ">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;