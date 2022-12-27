import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorImg from '../../../assets/404Page.jpg'

const ErrorPage = () => {
  const error = useRouteError();

  console.log(error);

  return (
    <section className="flex items-center h-screen  text-white bg-gray-800">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
      <img src={errorImg} className="w-72 md:w-96" alt="" />
        <div className="max-w-md text-center mt-4">
          <h2 className="mb-2 font-extrabold text-2xl">
            <span className="sr-only">Error</span> {error.status}
          </h2>
          <h2 className="mb-8 font-extrabold text-2xl text-white">{error.statusText}</h2>
          <p className="text-xl font-semibold md:text-2xl mb-8">
            Opss ! An Error Occured .
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded bg-blue-600  hover:bg-blue-900 text-gray-50"
          >
            Go Back To Home Page
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
