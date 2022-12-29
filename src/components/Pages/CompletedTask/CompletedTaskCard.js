import { Button } from 'flowbite-react';
import React from 'react';

const CompletedTaskCard = ({CompleteTask}) => {
    return (
        <div className="max-w-lg shadow-2xl h-96 bg-gray-300 border-gray-700 rounded-md relative">
        <div>
          <img
            src={CompleteTask?.image}
            alt=""
            className="h-52 w-full object-cover object-center"
          />
        </div>
  
        <div>
          <h3 className="text-xl font-semibold text-gray-900 text-center mt-2">
            {CompleteTask?.title}
          </h3>
          <p className="text-gray-900 mt-2 ml-2">
            {CompleteTask?.description
              }
          </p>
  
          <div className="flex gap-x-4 items-center justify-center  mt-3 absolute bottom-4 left-[20%] md:left-[15%]">
            <Button color="failure">
              Delete
            </Button>
          </div>
        </div>
            
        </div>
    );
};

export default CompletedTaskCard;