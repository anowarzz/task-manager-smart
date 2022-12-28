import { Button } from "flowbite-react";
import React from "react";
import photo from '../../../assets/planning.png'


const MyTaskCard = ({ task }) => {
  return (
<div className="max-w-lg shadow-2xl h-96 bg-gray-100 border-gray-700 rounded-md relative">

    <div>
        <img src={task?.image ? task?.image : photo} alt="" className="h-52 w-full object-cover object-center" />
    </div>

    <div>
        <h3 className="text-xl font-semibold text-gray-900 text-center mt-2">
            {task?.title}
        </h3>
        <p className="text-gray-900 mt-2">
    {
    task?.description?.length > 40 ? task?.description.slice(0, 40) + " ..." : task?.description
    }
        </p>

        <div className="flex gap-x-4 items-center justify-center  mt-3 absolute bottom-4 left-1/4">
        <Button gradientDuoTone="greenToBlue" size="xs">
      Details
    </Button>
        <Button gradientDuoTone="pinkToOrange" size="xs">
      Mark as completed
    </Button>

        </div>
    </div>
</div>

  );
};

export default MyTaskCard;

