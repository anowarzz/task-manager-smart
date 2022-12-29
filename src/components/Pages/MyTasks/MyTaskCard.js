import { Button, Modal } from "flowbite-react";
import React, { useState } from "react";
import photo from '../../../assets/planning.png'


const MyTaskCard = ({ task, handleDeletedTask }) => {

    const [showModal, setShowModal] = useState(false)



  return (
<div className="max-w-lg shadow-2xl h-96 bg-gray-300 border-gray-700 rounded-md relative">

    <div>
        <img src={task?.image ? task?.image : photo} alt="" className="h-52 w-full object-cover object-center" />
    </div>

    <div>
        <h3 className="text-xl font-semibold text-gray-900 text-center mt-2">
            {task?.title}
        </h3>
        <p className="text-gray-900 mt-2">
    {
    task?.description?.length > 40 ? task?.description.slice(0, 40) + " ..." : task?.description
    }
        </p>

        <div className="flex gap-x-4 items-center justify-center  mt-3 absolute bottom-4 left-[20%] md:left-[15%]">
    <Button color="warning" size="xs" onClick={() => setShowModal(!showModal)} id="details">
          Details
        </Button>
        <Button  gradientMonochrome="success" size="xs">
            Completed
    </Button>
    <Button 
onClick={() => handleDeletedTask(task)} color="failure" size="xs">
      Delete
    </Button>
  
        </div>
    </div>



{/* Modal of task details */}
<React.Fragment>
       
        <Modal
          show={showModal}
          onClose={() => setShowModal(!showModal)}
          data-modal-toggle="details"
          tabIndex="2"
        >
          <Modal.Header >
         {task?.title}
          </Modal.Header>
          <Modal.Body>
            <div className="space-y-6 w-full">
             <img src={task?.image} className="h-48 object-cover object center" alt="" />
              <p className="text-base leading-relaxed text-black dark:text-gray200">
               {
                task?.description
               }
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setShowModal(!showModal)}>
              Edit Task
            </Button>
            <Button
              color="gray"
              onClick={() => setShowModal(!showModal)}
            >
              Decline
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>




</div>

  );
};

export default MyTaskCard;

