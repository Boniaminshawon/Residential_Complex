import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div>
            <div className="md:h-[74px] h-[64px]">
                <Navbar></Navbar>
            </div>
            <div className="lg:container md:mx-1  lg:mx-auto  ">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;