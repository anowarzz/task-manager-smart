import { Button, Modal } from "flowbite-react";
import React, { useState } from "react";
import { useNavigation } from "react-router-dom";
import swal from "sweetalert";
import photo from "../../../assets/planning.png";

const MyTaskCard = ({ task, handleDeletedTask, myTasks, setMyTasks}) => {

    const [showModal, setShowModal] = useState(false);
    const [editModeOn, setEditModeOn] = useState(false);
    const from = '/myTasks'
    
const navigate = useNavigation();

  // edit mode on
  const handleEditTask = () => {
    setEditModeOn(!editModeOn);
  };
  // closing edit mode with modal close
  const closeModal = () => {
    setShowModal(!showModal);
    setEditModeOn(false);
  };


// Editing a task
const handleSubmitEdit = (event) => {
    event.preventDefault();
    const form = event.target;
    const newTask = form.editTask.value;

    const taskDescriptionNow = {
        taskDescription : newTask
    }

    fetch(`http://localhost:5000/tasks/${task._id}`, {
        method: 'PUT',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(taskDescriptionNow)
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount > 0){
            swal({
                title: "Great",
                text: "Task Edited Successfully",
                icon: "success",
                button: "Go Back",
              });
              setEditModeOn(false)
              setShowModal(false)
              const remaining = myTasks?.filter(tsk => tsk._id !== task._id )
             
              setMyTasks(remaining)
              navigate(from, {replace :true})
        }
    })
  };

  return (
    <div className="max-w-lg shadow-2xl h-96 bg-gray-300 border-gray-700 rounded-md relative">
      <div>
        <img
          src={task?.image ? task?.image : photo}
          alt=""
          className="h-52 w-full object-cover object-center"
        />
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 text-center mt-2">
          {task?.title}
        </h3>
        <p className="text-gray-900 mt-2 ml-2">
          {task?.description?.length > 40
            ? task?.description.slice(0, 40) + " ..."
            : task?.description}
        </p>

        <div className="flex gap-x-4 items-center justify-center  mt-3 absolute bottom-4 left-[20%] md:left-[15%]">
          <Button
            color="warning"
            size="xs"
            onClick={() => setShowModal(!showModal)}
            id="details"
          >
            Details
          </Button>
          <Button gradientMonochrome="success" size="xs">
            Completed
          </Button>
          <Button
            onClick={() => handleDeletedTask(task)}
            color="failure"
            size="xs"
          >
            Delete
          </Button>
        </div>
      </div>

      {/* Modal of task details */}
      <React.Fragment>
        <Modal
          show={showModal}
          onClose={closeModal}
          data-modal-toggle="details"
          tabIndex="2"
        >
          <Modal.Header>{task?.title}</Modal.Header>
          <Modal.Body>
            <div className="space-y-6 w-full">
              <img
                src={task?.image}
                className="h-48 w-4/5 object center"
                alt=""
              />

              {editModeOn ? (
                <form onSubmit={handleSubmitEdit}>
                  <textarea
                    name="editTask"
                    type="text"
                    className="w-full py-4"
                    defaultValue={task?.description}
                  ></textarea>

                  <Button
                  className="my-0"
                    type="submit"
                    size="sm"
                    color="success"
                  >
                    Submit Edit
                  </Button>
                </form>
              ) : (
                <p className="text-base leading-relaxed text-black dark:text-gray200">
                  {task?.description}
                </p>
              )}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button size="sm" onClick={handleEditTask}>
              Edit Task
            </Button>

            <Button color="dark" size="sm" onClick={closeModal}>
              Go Back
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    </div>
  );
};

export default MyTaskCard;
