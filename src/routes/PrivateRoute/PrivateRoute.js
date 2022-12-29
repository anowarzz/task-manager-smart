import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import {BeatLoader} from 'react-spinners'

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

  if (user) {
    return children;
  }
  return (
    <Navigate to="/login" state={{ from: location }} replace>
      {" "}
    </Navigate>
  );
};

export default PrivateRoute;
