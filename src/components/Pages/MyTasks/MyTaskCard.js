import React from "react";

const MyTaskCard = ({ task }) => {
  return (
 <div className="max-w-md rounded-md shadow-md bg-gray-50 text-gray-800">
<img
  src={task?.image}
  alt=""
  className="object-cover object-center w-full rounded-t-md h-40 bg-gray-500"
/>
<div className="flex flex-col items-center justify-between p-6 space-y-8">
  <div className="space-y-2 self-start">
    <h2 className="text-xl font-semibold tracking-wide">
      {task?.title}
    </h2>
    <p className="text-gray-900"> {task?.description}</p>
  </div>
  <button
    type="button"
    className="flex items-center justify-center w-4/6 p-3 font-semibold tracking-wide rounded-md bg-violet-600 text-gray-50"
  >
    Read more
  </button>
</div>
</div> 

  );
};

export default MyTaskCard;

