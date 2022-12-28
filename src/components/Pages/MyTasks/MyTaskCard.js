import React from "react";

const MyTaskCard = ({ task }) => {
  return (
<div className="max-w-lg shadow-2xl h-96 bg-gray-100 border-gray-700 rounded-md">

    <div>
        <img src={task?.image} alt="" className="h-52 w-full object-cover object-center" />
    </div>

    <div>
        <h3 className="text-xl font-semibold text-gray-900 text-center mt-2">
            {task?.title}
        </h3>
        <p className="text-gray-900 mt-2">
    {task?.description}
        </p>
    </div>
</div>

  );
};

export default MyTaskCard;

