import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import MyTaskCard from './MyTaskCard';
import { SyncLoader} from "react-spinners";
import TaskModal from './TaskModal';
import swal from 'sweetalert';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';



const MyTasks = () => {


const {user} = useContext(AuthContext)



const { isLoading, error, data:myTasks, refetch } = useQuery({
    queryKey: [user?.email],
    queryFn: () =>
      fetch(`http://localhost:5000/myTasks?email=${user?.email}`)
      .then(res =>
        res.json()
      )
  })



// Deleting a task
const handleDeletedTask = (task) => {


fetch(`http://localhost:5000/tasks/${task._id}`, {
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

// Marking a task as completed
const handleMakeCompleted = (id) => {

fetch(`http://localhost:5000/tasks/doneTasks/${id}`, {
    method : "PUT"
})
.then(res => res.json())
.then( data => {
    if(data.modifiedCount > 0){
        toast.success("Task Marked As Completed", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          refetch();
    }
})
}





    return (
        <div className='mx-auto min-h-screen'> 

{isLoading && (
        <div className="z-20 absolute top-[40%] left-[50%] ">
          <SyncLoader color="red" size={20} className="text-center" />
        </div>
      )} 
            <h2 className='text-2xl md:text-3xl lg:text-4xl text-myYellow text-center mt-10'>Your All Task List</h2>


            {
myTasks?.length < 1 && <div className='mt-20 flex justify-center items-center'>
        <h3 className='text-xl md:text-2xl font-medium text-center text-white'>You have no task to complete</h3>
    </div>
}

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 w-11/12 mx-auto gap-6'>
        {
            myTasks?.map(task => <MyTaskCard key={task._id} task = {task}
                refetch={refetch}
                myTasks={myTasks}
                handleMakeCompleted = {handleMakeCompleted}
                handleDeletedTask = {handleDeletedTask} />)
        }
    </div>


        </div>
    );
};

export default MyTasks;


