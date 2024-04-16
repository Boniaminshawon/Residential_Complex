import { Link, NavLink } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";


const Navbar = () => {
    const { user, logOut } = UseAuth();


    const links = <>
        <NavLink to='/' className={({ isActive }) => isActive ? ' rounded bg-[#00aeff] font-bold  border' : ' font-semibold'}>
            <button className="px-3  py-2 hover:bg-[#00aeff] btn-ghost rounded  ">Home</button> </NavLink>

        <NavLink to='/blogs' className={({ isActive }) => isActive ? ' rounded bg-[#00aeff] font-bold  border' : ' font-semibold'}>
            <button className="px-3  py-2  hover:bg-[#00aeff] btn-ghost rounded ">Blog</button> </NavLink>

        <NavLink to={'/profile'} className={({ isActive }) => isActive ? ' rounded bg-[#00aeff] font-bold  border' : ' font-semibold'}>
            <button className="px-3 py-2 btn-ghost hover:bg-[#00aeff] rounded ">Update Profile</button> </NavLink>
    </>
    return (
        <div className="navbar bg-[#004274] text-white font-primary fixed z-10">
            <div className="navbar-start">
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm bg-[#004274] dropdown-content mt-3 z-[1] p-2 shadow bg-base-10 rounded-box w-52">
                        {links}
                    </ul>
                </div>

                <div className="">
                    <img className="lg:w-[51%] xl:w-[40%] md:w-[65%] w-full rounded" src="https://i.ibb.co/0txvr1G/image11.png" alt="" />
                </div>

            </div>
            
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end ">
                {user ?
                    <div className=" gap-2 flex">

                        <div className="w-12 tooltip   tooltip-info tooltip-bottom " data-tip={user.displayName || 'User Name not found'}>
                            <img className="rounded-full h-[44px] w-[44px] bg-white" alt="" src={user?.photoURL || "https://i.ibb.co/L1kVMdW/images-removebg-preview.png"} />
                        </div>



                        <div>
                            <button onClick={logOut} className="sm:py-2 py-1 px-3 sm:h-[44px] rounded font-bold bg-[#00aeff] border-[#00aeff]  text-lg sm:text-xl text-white">Log Out</button>
                        </div>

                    </div>

                    :
                    <Link to={'/login'}> <button className="py-1 sm:py-2 px-3 sm:h-[44px] font-bold rounded bg-[#00aeff] border-[#00aeff] text-lg sm:text-xl text-white">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;