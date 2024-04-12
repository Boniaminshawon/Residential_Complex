import { Link, NavLink } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";


const Navbar = () => {

    const { user, logOut } = UseAuth();
   

    const links = <>
        <NavLink to='/' className={({ isActive }) => isActive ? ' rounded-lg font-bold border-[#ffff99] text-[#ffff99] border' : ' font-semibold'}>
            <button className="p-2 btn-ghost rounded-lg ">Home</button> </NavLink>
        <NavLink to='/blogs' className={({ isActive }) => isActive ? ' rounded-lg font-bold border-[#ffff99] text-[#ffff99] border' : ' font-semibold'}>
            <button className="p-2 btn-ghost rounded-lg ">Blog</button> </NavLink>


    </>
    return (
        <div  className="navbar bg-[#004274] text-white fixed z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>

<div>
    <img className="w-[39%] rounded" src="https://i.ibb.co/0txvr1G/image11.png" alt="" />
</div>
               
          
                {/* <div className="bg-[#00aeff] px-4 py-2 font-bold text-xl rounded-lg flex items-center">
                    <h3>Residential Complex</h3>
                </div> */}

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>




            <div className="navbar-end">
                {user?
                    <div className=" gap-2 flex">
                        <div className="w-12 ">
                            <img className="rounded-full" alt="" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                        <div>
                            <button onClick={logOut} className="btn bg-[#00aeff] border-[#00aeff] text-xl text-white">Log Out</button>
                        </div>

                    </div>

                    :
                    <Link to={'/login'}> <button className="btn rounded bg-[#00aeff] border-[#00aeff] text-xl text-white">Login</button></Link>
                }
            </div>




        </div>
    );
};

export default Navbar;