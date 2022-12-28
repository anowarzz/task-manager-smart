import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="mt-12 w-11/12 mx-auto">
        <div className="w-full max-w-md p-6  mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
          <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
            Sign Up
          </h1>
  
          <form className="mt-6">
            <div>
              <label
                for="email"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                Name
              </label>
              <input
              name="email"
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 
                 border-blue-300
                dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className='mt-4'>
              <label
                for="email"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                Email
              </label>
              <input
              name="email"
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 
                 border-blue-300
                dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label
                  for="password"
                  className="block text-sm text-gray-800 dark:text-gray-200"
                >
                  Password
                </label>
              </div>
  
              <input
                type="password"
                name="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-blue-300 border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
  
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label
                  for="confirmPass"
                  className="block text-sm text-gray-800 dark:text-gray-200"
                >
                  Confirm Password
                </label>
             
              </div>
  
              <input
                type="password"
                name="confirmPass"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-blue-300 border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

       
  
            <div className="mt-6">
              <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-900 rounded-lg hover:bg-purple-800 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                Sign In
              </button>
            </div>
          </form>
  
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>
  
            <button className="text-xs text-center text-gray-900 uppercase dark:text-gray-400">
              or Login with Social Media
            </button>
  
            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
          </div>
  
          <div className="flex items-center mt-6 -mx-2">
            <button
              type="button"
              className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-800 rounded-lg hover:bg-purple-800  focus:outline-none"
            >
              <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
              </svg>
  
              <span className="inline">Google</span>
            </button>
          </div>
  
          <p className="mt-6  text-sm font-light text-center text-gray-700 ">
            {" "}
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-bold dark:text-gray-200 hover:underline pl-2 text-blue-600"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    );
};

export default SignUp;