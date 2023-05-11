import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import logo from "../../assets/myLogo.png";
import { HiBars3CenterLeft, HiOutlineXMark } from "react-icons/hi2";
const NavigationBar = () => {
  const { user, logOut, userDetails } = useContext(AuthContext);
  console.log(user);

  return (

    
    
    // Navbar section part 

    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active mr-3 text-2xl" : "default mr-3 text-2xl"
                }
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li tabIndex={0}>
              {/* <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a> */}
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active mr-3 text-2xl" : "default mr-3 text-2xl"
                }
                to="/blog"
              >
                Blog
              </NavLink>
              {user && (
         <Link>

                <img className="rounded-full w-16  " src={user?.photoURL} title={user?.displayName} alt="" />
          </Link>
           )}
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Mamun Recipe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active mr-3 text-2xl" : "default mr-3 text-2xl"
              }
              to="/home">
              Home
            </NavLink>
          </li>
          <li tabIndex={0}>
            
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active mr-3 text-2xl" : "default mr-3 text-2xl"
              }
              to="/blog">
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
      {user && (
         <Link>

                <img className="rounded-full w-16  " src={user?.photoURL} title={user?.displayName} alt="" />
          </Link>
           )}
      {user ? (
                 <button onClick={logOut} className=" btn-primary">
                  Logout
                </button>
             ) : (
                <Link to="/login">
                <button className=" btn-primary">Login</button>
                </Link>
              )}
      <Link to="/register" className="btn-primary font-bold">
              Register
     </Link>
      </div>
    </div>
   
  );
};

export default NavigationBar;
