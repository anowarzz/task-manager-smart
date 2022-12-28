import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import navLogo from "../../../assets/planning.png";
import { AuthContext } from "../../../contexts/AuthProvider";
import './Navbar.css'


const Navbar = () => {

  // Navbar responsive state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // context value
  const { user, logOut } = useContext(AuthContext);

  const logOutHandler = () => {
    logOut()
    .then(() => {})
    .catch((err) => console.error(err))
  };


  return (
    <div className="bg-gray-900">
      <div className="px-4 py-5 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl md:px-6">
        <div className="relative flex items-center justify-between ">
          <Link
            to="/"
            aria-label="Smart Task Manager"
            title="Manage Your Tasks Smartly"
            className="inline-flex flex-row  items-center flex-nowrap gap-x-1"
            
          >
              <img src={navLogo}  className="w-16 h-16 p-2" alt="" />
            <p className="sm:text-xl font-bold lg:tracking-wide text-sky-500 uppercase pr-1">
      <span className="text-myPink pr-1">Task</span>  Manager
            </p>
          </Link>
          <ul className="items-center hidden space-x-6 lg:space-x-8 md:flex">
            <li>
              <NavLink
                to="/addTask"
                className={({ isActive }) =>
                isActive ? "font-medium tracking-wide transition-colors duration-200 text-sky-400  border-b-transparent ease-linear transform border-b-2 hover:border-pink-600" : "font-medium tracking-wide text-white  transition-colors duration-200 hover:text-sky-400 border-b-transparent ease-linear transform border-b-2 hover:border-pink-600"
              }
              >
                Add Task
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/myTasks"
                className={({ isActive }) =>
                isActive ? "font-medium tracking-wide transition-colors duration-200 text-sky-400  border-b-transparent ease-linear transform border-b-2 hover:border-pink-600" : "font-medium tracking-wide text-white  transition-colors duration-200 hover:text-sky-400 border-b-transparent ease-linear transform border-b-2 hover:border-pink-600"
              }
              >
                My Tasks
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/completedTasks"
                className={({ isActive }) =>
                isActive ? "font-medium tracking-wide transition-colors duration-200 text-sky-400  border-b-transparent ease-linear transform border-b-2 hover:border-pink-600" : "font-medium tracking-wide text-white  transition-colors duration-200 hover:text-sky-400 border-b-transparent ease-linear transform border-b-2 hover:border-pink-600"
              }
              >
                Completed Tasks
              </NavLink>
            </li>

{
  user?.uid ?
  <li>
              <button 
              onClick={logOutHandler}
              className="font-medium tracking-wide transition-colors duration-200 text-white   ease-linear transform py-1 px-2 rounded-md bg-pink-800 hover:bg-red-500" >
                Log Out
              </button>
            </li>
            :

            <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
              isActive ? "font-medium tracking-wide transition-colors duration-200 text-sky-400  border-b-transparent ease-linear transform border-b-2 hover:border-pink-600" : "font-medium tracking-wide text-white  transition-colors duration-200 hover:text-sky-400 border-b-transparent ease-linear transform border-b-2 hover:border-pink-600"
            }
            >
              Login
            </NavLink>
          </li>
       

}
          
          </ul>

          <div className="md:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline bg-blue-500"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-gray-800 border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4 text-white">
                    <div>
                      <NavLink
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <img src={navLogo} className="w-16 p-1 mb-2" alt="" />
                        <span className="text-xl font-bold tracking-wide text-myPink uppercase">
                          Task <span className="text-blue-500">Manager</span>
                        </span>
                      </NavLink>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline bg-blue-500"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <NavLink
                          onClick={() => setIsMenuOpen(false)}
                          to="/addTask"
                          className={({ isActive }) =>
                isActive ? "font-medium tracking-wide transition-colors duration-200 text-sky-400  border-b-transparent ease-linear transform border-b-2 hover:border-pink-600" : "font-medium tracking-wide text-white  transition-colors duration-200 hover:text-sky-400 border-b-transparent ease-linear transform border-b-2 hover:border-pink-600"
              }
                        >
                          Add Task
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={() => setIsMenuOpen(false)}
                          to="/myTasks"
                          className={({ isActive }) =>
                isActive ? "font-medium tracking-wide transition-colors duration-200 text-sky-400  border-b-transparent ease-linear transform border-b-2 hover:border-pink-600" : "font-medium tracking-wide text-white  transition-colors duration-200 hover:text-sky-400 border-b-transparent ease-linear transform border-b-2 hover:border-pink-600"
              }
                        >
                          My Tasks
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={() => setIsMenuOpen(false)}
                          to="/completedTasks"
                          className={({ isActive }) =>
                isActive ? "font-medium tracking-wide transition-colors duration-200 text-sky-400  border-b-transparent ease-linear transform border-b-2 hover:border-pink-600" : "font-medium tracking-wide text-white  transition-colors duration-200 hover:text-sky-400 border-b-transparent ease-linear transform border-b-2 hover:border-pink-600"
              }
                        >
                          Completed Tasks
                        </NavLink>
                      </li>
                   
{
  user?.uid ?
  <li>
              <button 
              onClick={logOutHandler}
              className="font-medium tracking-wide transition-colors duration-200 text-white   ease-linear transform py-1 px-2 rounded-md bg-pink-800 hover:bg-red-500" >
                Log Out
              </button>
            </li>
            :

            <li>
            <NavLink
                onClick={() => setIsMenuOpen(false)}
              to="/login"
              className={({ isActive }) =>
              isActive ? "font-medium tracking-wide transition-colors duration-200 text-sky-400  border-b-transparent ease-linear transform border-b-2 hover:border-pink-600" : "font-medium tracking-wide text-white  transition-colors duration-200 hover:text-sky-400 border-b-transparent ease-linear transform border-b-2 hover:border-pink-600"
            }
            >
              Login
            </NavLink>
          </li>
       

}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
