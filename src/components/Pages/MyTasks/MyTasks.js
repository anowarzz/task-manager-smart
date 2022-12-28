import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyTasks = () => {

    const {user} = useContext(AuthContext)


const [myTasks, setMyTasks] = useState([])

useEffect(  () => {
    const url = `http://localhost:5000/myTasks?email=${user?.email}`

    fetch(url)
    .then(res => res.json())
    .then(data => setMyTasks(data))
    .catch(err => console.log(err)
    )
},[user?.email])

console.log(myTasks);


    return (
        <div className='h-screen'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl text-white text-center mt-10'>Your All Task List</h2>
        </div>
    );
};

export default MyTasks;