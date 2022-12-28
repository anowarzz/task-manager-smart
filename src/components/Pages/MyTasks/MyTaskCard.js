import { Button, Modal } from "flowbite-react";
import React, { useState } from "react";
import photo from '../../../assets/planning.png'


const MyTaskCard = ({ task }) => {

    const [showModal, setShowModal] = useState(false)

  return (
<div className="max-w-lg shadow-2xl h-96 bg-gray-100 border-gray-700 rounded-md relative">

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

        <div className="flex gap-x-4 items-center justify-center  mt-3 absolute bottom-4 left-1/4">
    <Button gradientDuoTone="greenToBlue" size="xs" onClick={() => setShowModal(!showModal)}>
          Details
        </Button>
        <Button  gradientDuoTone="pinkToOrange" size="xs">
      Mark As Completed
    </Button>
  
        </div>
    </div>

{/* Modal */}
<React.Fragment>
       
        <Modal
          show={showModal}
          onClose={() => setShowModal(!showModal)}
        >
          <Modal.Header>
            Terms of Service
          </Modal.Header>
          <Modal.Body>
            <div className="space-y-6 w-full">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setShowModal(!showModal)}>
              I accept
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

