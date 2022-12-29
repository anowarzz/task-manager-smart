import { faCircleExclamation, faCross, faTrash, faTriangleExclamation, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "flowbite-react";
import React from "react";


const CompletedTaskCard = ({ completeTask }) => {
  return (
    <div className="max-w-lg shadow-2xl h-96 bg-red-500 border-gray-700 rounded-md relative">
      <div>
        <img
          src={completeTask?.image}
          alt=""
          className="h-52 w-full object-cover p-2"
        />
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 text-center mt-2">
          {completeTask?.title}
        </h3>
        <p className="text-gray-900 mt-2 ml-2">{completeTask?.description}</p>

        <div className="flex gap-x-4 items-center justify-center  mt-3 absolute bottom-4 left-[8%] lg:left-[7%]">
        <Button gradientMonochrome="success">
            Delete Task
            <FontAwesomeIcon icon={faTrash} className="pl-2" />
    </Button>

          <Button gradientMonochrome="lime">
            Not Completed
            <FontAwesomeIcon icon={faTriangleExclamation} className="pl-2" />
            </Button>
        </div>
      </div>
    </div>
  );
};

export default CompletedTaskCard;
