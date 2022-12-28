import React, { useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../../contexts/AuthProvider";
import { SyncLoader} from "react-spinners";
import { format, getHours } from "date-fns";

const AddTask = () => {
  const { user } = useContext(AuthContext);
  const imageHostKey = process.env.REACT_APP_imgbb_key;

  // States
  const [inputImage, setInputImage] = useState(null);
//   const [imageLink, setImageLink] = useState("");
  const [loading, setLoading] = useState(false);

  // getting image data from input field
  const handleImage = (e) => {
    const image = e.target.files[0];
    setInputImage(image);
  };

  const taskCreatedTime = format(new Date(), "PP");


  // function for adding  task to database
  const handleAddTask = (event) => {
    event.preventDefault();
    setLoading(true);

    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const formData = new FormData();
    formData.append("image", inputImage);


    // posting image to imgbb
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

    if (inputImage) {
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imgData) => {
          if (imgData.success) {
              const imageLink = imgData?.data?.url;
              console.log(imgData?.data?.url)
            // setImageLink(imageLink);

            const task = {
                title,
                description,
                image: imageLink,
                taskCreatedTime,
                userEmail: user?.email
              };
          



            // Posting tasks to database
            fetch(`http://localhost:5000/tasks`, {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(task),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.acknowledged) {
                  setLoading(false);
                  swal({
                    title: "Well Done !",
                    text: "Task Added Successfully",
                    icon: "success",
                    button: "Go Back",
                  });
                  form.reset();
                }
              })
              .catch((err) => {
                console.error(err);
                setLoading(false);
              });
          }

        });
    }
  };

  return (
    <div className="">
      {loading && (
        <div className="z-20 absolute top-[50%] left-[50%] ">
          <SyncLoader size="20" color="red" className="text-center" />
        </div>
      )}
      {user?.uid && (
        <p className="mt-6 text-center text-white text-lg">
          {" "}
          Welcome,{" "}
          <span className="text-blue-400 ml-2 text-lg">
            {user?.displayName}
          </span>
        </p>
      )}

      <h2 className="text-2xl md:text-3xl lg:text-4xl text-center mt-12 text-myYellow font-bold">
        Add Your Task
      </h2>

      <div className="mt-12">
        <form onSubmit={handleAddTask} className="w-full">
          <div className="flex flex-col justify-center items-center mx-auto">
            <p className="mb-4 text-gray-50">Task Title</p>
            <input
              type="text"
              name="title"
              maxLength="70"
              placeholder="Task Title Here"
              className="input w-4/5 lg:w-2/4 mx-auto mb-3 font-semibold py-2 text-center text-myPink bg-white rounded  outline-fuchsia-600 "
              required
            />

            {/* <p className='mb-4 text-gray-50'>Add Image</p> */}
            <label htmlFor="image" className="text-white p-3">
              Upload Image
            </label>
            <input
              onChange={handleImage}
              type="file"
              name="image"
              accept="image/png, image/jpg, image/jpeg, image/webp"
              placeholder="Task Title Here"
              className="input w-4/5 lg:w-2/4 mx-auto mb-3 font-semibold py-2 text-center text-myPink bg-white rounded px-2"
            />
            <p className="mt-8 text-gray-50">Task Description</p>
            <textarea
              type="text"
              name="description"
              className="textarea  outline-fuchsia-600 w-4/5 lg:w-2/4 mx-auto mt-4 px-4  py-8 font-semibold text-center"
              placeholder="Write Task Description Here"
              required
            ></textarea>

            {user?.uid ? (
              <input
                type="submit"
                value="Add Task"
                className="btn bg-pink-800 text-gray-100 font-bold w-4/5 lg:w-2/4 mt-8 mx-auto hover:bg-red-500 border-none py-2 rounded"
              />
            ) : (
              <input
                type="submit"
                value="Please Login First To Add Tasks"
                disabled={!user?.uid}
                className="btn bg-pink-800 text-gray-400 font-bold w-4/5 lg:w-2/4 mt-8 mx-auto border-none py-2 rounded"
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
