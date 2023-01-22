import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import MyTaskCard from './MyTaskCard';
import { SyncLoader} from "react-spinners";
import swal from 'sweetalert';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';



const MyTasks = () => {


const {user} = useContext(AuthContext)

const [loading, setLoading] = useState(false)

const { isLoading, error, data:myTasks=[], refetch } = useQuery({
    queryKey: [user?.email],
    queryFn: () =>
      fetch(`https://task-manager-server-lovat.vercel.app/myTasks?email=${user?.email}`)
      .then(res =>
        res.json()
      )
  })

// Deleting a task
const handleDeletedTask = (id) => {

setLoading(true)
fetch(`https://task-manager-server-lovat.vercel.app/tasks/${id}`, {
    method: "DELETE"
})
.then(res=> res.json())
.then(data => {
    console.log(data);
if(data.deletedCount > 0){
refetch()
setLoading(false)
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

fetch(`https://task-manager-server-lovat.vercel.app/tasks/doneTasks/${id}`, {
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

if(isLoading || loading){
    <div className="z-20 absolute top-[40%] left-[50%] ">
          <SyncLoader color="red" size={20} className="text-center" />
        </div> 
}



    return (
        <div className='mx-auto min-h-screen'> 

            <h2 className='text-2xl md:text-3xl lg:text-4xl text-myYellow text-center mt-10'>Your All Uncompleted Task List</h2>


            {
myTasks?.length < 1 && <div className='mt-12 flex justify-center items-center'>
        <h3 className='text-xl md:text-2xl font-medium text-center text-white'>You have no  task to complete now</h3>
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


