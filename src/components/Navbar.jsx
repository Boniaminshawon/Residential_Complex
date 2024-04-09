import { NavLink } from "react-router-dom";


const Navbar = () => {
    const links = <>
        <NavLink to='/' className={({ isActive }) => isActive ? ' rounded-lg font-bold border-white border' : 'text-[#131313CC] font-semibold'}> 
        <button className="p-2 btn-ghost rounded-lg ">Home</button> </NavLink>


    </>
    return (
        <div className="navbar bg-[#004274] text-white fixed z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                       {links}
                    </ul>
                </div>
                {/* <a className="btn btn-ghost text-xl"> Residential Complex</a> */}
               <div className="bg-[#00aeff] px-4 py-2 font-bold text-2xl rounded-lg flex items-center">
               <h3>Residential Complex</h3>
                <p></p>
               </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-[#00aeff] border-[#00aeff] text-xl text-white">Sign In</a>
            </div>
        </div>
    );
};

export default Navbar;