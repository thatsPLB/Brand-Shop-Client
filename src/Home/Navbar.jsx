import { Link, NavLink } from "react-router-dom";
import userPic from '../assets/user.png';


const Navbar = () => {
    const navLinks = <>
          <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/addproducts">Add Product</NavLink></li>
            <li><NavLink to="/cart">My Cart</NavLink></li>
    </>
    return (
        <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  bg-blue-700 rounded-box w-52">
             {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-blue-700 text-xl">MidGen Tech</a>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={userPic} />
        </div>
      </label>
        <Link className="btn bg-blue-700 text-white ">Login</Link>
        </div>
      </div>
    );
};

export default Navbar;