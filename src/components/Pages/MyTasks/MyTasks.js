import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import MyTaskCard from './MyTaskCard';
import { SyncLoader} from "react-spinners";
import TaskModal from './TaskModal';
import swal from 'sweetalert';



const MyTasks = () => {


const {user, loading, setLoading} = useContext(AuthContext)


const [myTasks, setMyTasks] = useState([])

useEffect(  () => {
    setLoading(true)
    const url = `http://localhost:5000/myTasks?email=${user?.email}`

    fetch(url)
    .then(res => res.json())
    .then(data => {
        setMyTasks(data)
        setLoading(false)
    })
    .catch(err => console.log(err)
    )
},[user?.email, setLoading])


// Deleting a task

const handleDeletedTask = (task) => {

const id = task._id;

fetch(`http://localhost:5000/tasks/${id}`, {
    method: "DELETE"
})
.then(res=> res.json())
.then(data => {
    console.log(data);
if(data.deletedCount > 0){

// const remainingTask = myTasks.filter(task => task._id !== id)
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
        <div className='mx-auto'>

{loading && (
        <div className="z-20 absolute top-[40%] left-[50%] ">
          <SyncLoader color="red" size={20} className="text-center" />
        </div>
      )} 
            <h2 className='text-2xl md:text-3xl lg:text-4xl text-myYellow text-center mt-10'>Your All Task List</h2>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 w-11/12 mx-auto gap-6'>
        {
            myTasks.map(task => <MyTaskCard key={task._id} task = {task}
                handleDeletedTask = {handleDeletedTask} />)
        }
    </div>


        </div>
    );
};

export default MyTasks;


