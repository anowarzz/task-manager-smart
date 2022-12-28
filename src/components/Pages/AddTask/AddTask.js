import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddTask = () => {

const {user} = useContext(AuthContext)

    return (
        <div className='h-screen'>

            <p className='mt-6 text-center text-white text-lg'> Welcome, <span className='text-blue-400 ml-2 text-lg'>{user?.displayName}</span></p>

            <h2 className='text-2xl md:text-3xl lg:text-4xl text-center mt-12 text-white font-bold'>Add Your Task</h2>

            <div className='mt-12'>
            <form 
          className="w-full">
            <div className="flex flex-col justify-center items-center mx-auto">
                <p className='font-bold text-lg mb-4 text-gray-50'>Task Title</p>
              <input
                type="text"
                name="title"
                placeholder="Task Title Here"
                className="input w-4/5 lg:w-2/4 mx-auto mb-3 font-semibold py-2 text-center text-myPink bg-white rounded"
                required
              />
       <p className='font-bold text-lg mt-8 text-gray-50'>Task Description</p>
              <textarea
                type="text"
                name="description"
                className="textarea  focus:textarea-info w-4/5 lg:w-2/4 mx-auto mt-4 px-4  py-8 font-semibold"
                placeholder="Write Task Description Here"
                required
              ></textarea>

              <input
                type="submit"
                className="btn bg-pink-800 text-gray-100 font-bold w-4/5 lg:w-2/4 mt-8 mx-auto hover:bg-red-500 border-none py-2 rounded"
              />
            </div>
          </form>
     
    
    </div>
      
        </div>
    );
};

export default AddTask;