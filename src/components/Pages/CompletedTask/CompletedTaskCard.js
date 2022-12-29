import {  faComment, faTrash, faTriangleExclamation, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "flowbite-react";
import React from "react";
import { toast } from "react-toastify";
import swal from "sweetalert";


const CompletedTaskCard = ({ completeTask, refetch }) => {


// Marking a task as completed
const handleMakeNotCompleted = (id) => {

    fetch(`http://localhost:5000/tasks/notDoneTasks/${id}`, {
        method : "PUT"
    })
    .then(res => res.json())
    .then( data => {
        if(data.modifiedCount > 0){
            toast.success("Task Marked As Not Completed", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
              refetch();
        }
    })
    }

// Deleting a task
const handleDeletedTask = (id) => {


    fetch(`http://localhost:5000/tasks/${id}`, {
        method: "DELETE"
    })
    .then(res=> res.json())
    .then(data => {
        console.log(data);
    if(data.deletedCount > 0){
    refetch()
        swal({
            title: "Yaa !",
            text: "Task Deleted Successfully",
            icon: "success",
            button: "Done",
          });
    }    
    })
    }

  return (
  <div>
      <div className="max-w-lg shadow-2xl h-96 bg-red-500 border-gray-700  relative">
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
        <Button gradientMonochrome="success"
        onClick={() => handleDeletedTask(completeTask?._id)}
        >
            Delete Task
            <FontAwesomeIcon icon={faTrash} className="pl-2" />
    </Button>

          <Button gradientMonochrome="lime"
          onClick={() => handleMakeNotCompleted (completeTask?._id)}
          >
            Not Completed
            <FontAwesomeIcon icon={faTriangleExclamation} className="pl-2" />
            </Button>
        </div>
      </div>
    </div>
<form>
<div className="bg-purple-500 flex justify-center items-center max-w-lg">
<textarea name="comment" placeholder="Type Your Comment" className="py-2 w-5/6 ">

</textarea>
<Button gradientDuoTone="purpleToPink" className="py-2 rounded-none">
  Add  Comment <FontAwesomeIcon icon={faComment} className="pl-2" />
            </Button>
</div>
</form>
  </div>

  );
};

export default CompletedTaskCard;
