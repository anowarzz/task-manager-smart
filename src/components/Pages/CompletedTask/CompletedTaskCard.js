import {  faComment, faTrash, faTriangleExclamation, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "flowbite-react";
import React from "react";
import { toast } from "react-toastify";
import swal from "sweetalert";


const CompletedTaskCard = ({ completeTask, refetch }) => {


// Marking a task as completed
const handleMakeNotCompleted = (id) => {

    fetch(`https://task-manager-server-lovat.vercel.app/tasks/notDoneTasks/${id}`, {
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

    fetch(`https://task-manager-server-lovat.vercel.app/tasks/${id}`, {
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

// adding comment to a task
const handleAddComment = (event) => {
event.preventDefault();
const form = event.target;
const comment = form.comment.value;

console.log(comment);


 const taskComment = {
    taskComment : comment
 }

    fetch(`https://task-manager-server-lovat.vercel.app/taskComment/${completeTask?._id}`, {
        method : "PATCH",
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(taskComment)
    })
    .then(res => res.json())
    .then( data => {
        if(data.modifiedCount > 0){
            toast.success("Comment added to the task", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
              form.reset();
              refetch();
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
        <p className="text-gray-50 mt-2 ml-2">{completeTask?.description}</p>

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

    {/* Add comment section  */}
<form onSubmit={handleAddComment}>
<div className="bg-purple-500 flex justify-center items-center max-w-lg">
<textarea name="comment" placeholder="Type Your Comment" className="py-2 w-5/6 ">

</textarea>
<Button gradientDuoTone="purpleToPink" className="py-2 rounded-none" type="submit"
>
  Add  Comment <FontAwesomeIcon icon={faComment} className="pl-2" />
            </Button>
</div>
</form>

<div className="bg-gray-200 max-w-lg py-4 px-2">
<p className="pl-1 text-gray-900">
<span className="font-semibold">Comment :</span> {completeTask?.comment}</p>
</div>
  </div>

  );
};

export default CompletedTaskCard;
