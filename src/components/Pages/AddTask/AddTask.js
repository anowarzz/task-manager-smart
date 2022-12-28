import React, { useContext, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddTask = () => {

const {user, loading, setLoading} = useContext(AuthContext)
const imageHostKey = process.env.REACT_APP_imgbb_key;

// States
const [image, setImage] = useState(null)


const handleImage = (e) => {
    const image = e.target.files[0];
    setImage(image)
}




const handleAddTask = (event) => {
    event.preventDefault();
    setLoading(true)
    
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const formData = new FormData();

    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?expiration=600&key=d502572cf6e16623a00caedf7003d62d`;
 
 if(image){
    fetch(url, {
        method: "POST",
        body: formData,
      })
      .then((res) => res.json())
      .then((imgData) => {
          console.log(imgData);
          if(imgData.success){
              console.log(imgData?.data?.url);
              swal({
                  title: "Well Done !",
                  text: "Task Added Successfully",
                  icon: "success",
                  button: "Go Back",
                });
                form.reset();
          }
      })
 }

}

    return (
        <div className=''>

            <p className='mt-6 text-center text-white text-lg'> Welcome, <span className='text-blue-400 ml-2 text-lg'>{user?.displayName}</span></p>

            <h2 className='text-2xl md:text-3xl lg:text-4xl text-center mt-12 text-myYellow font-bold'>Add Your Task</h2>

            <div className='mt-12'>
            <form onSubmit={handleAddTask}
          className="w-full">
            <div className="flex flex-col justify-center items-center mx-auto">
                <p className='mb-4 text-gray-50'>Task Title</p>
              <input
                type="text"
                name="title"
                maxLength="70"
                placeholder="Task Title Here"
                className="input w-4/5 lg:w-2/4 mx-auto mb-3 font-semibold py-2 text-center text-myPink bg-white rounded  outline-fuchsia-600 "
                required
              />

                <p className='mb-4 text-gray-50'>Add Image</p>
              <input
              onChange={handleImage}
                type="file"
                name="image"
                accept='image/png, image/jpg, image/jpeg, image/webp'
                placeholder="Task Title Here"
                className="input w-4/5 lg:w-2/4 mx-auto mb-3 font-semibold py-2 text-center text-myPink bg-white rounded px-2"
         
              />
       <p className='mt-8 text-gray-50'>Task Description</p>
              <textarea
                type="text"
                name="description"
                className="textarea  outline-fuchsia-600 w-4/5 lg:w-2/4 mx-auto mt-4 px-4  py-8 font-semibold text-center"
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