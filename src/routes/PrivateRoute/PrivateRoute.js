import React, { useContext } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import {BeatLoader} from 'react-spinners'
import { Button } from "flowbite-react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();



  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
     <BeatLoader color="#36d7b7" />
      </div>
    );
  }
  
  if(!user) {
    return (<div className="min-h-screen">

    <h3 className="text-2xl md:text-3xl lg:text-4xl text-myYellow text-center mt-20">Please Login To View Your Tasks</h3>
<div className="text-center mt-12">
    
<Link to="/login" className="btn bg-blue-500 px-3 py-2 text-gray-100 hover:bg-red-600 rounded-sm">
    Login Page
    </Link>
</div>

  </div>)}

  
  if (user) {
    return children;
  }
};

export default PrivateRoute;
