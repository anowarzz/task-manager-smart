import { Button, Modal } from 'flowbite-react';
import React, { useState } from 'react';

const TaskModal = () => {

    const [showModal, setShowModal] = useState(false)


    return (
        <React.Fragment>
        <Button onClick={() => setShowModal(!showModal)}>
          Toggle modal
        </Button>
        <Modal
          show={showModal}
          onClose={() => setShowModal(!showModal)}
        >
          <Modal.Header>
            Terms of Service
          </Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
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
    );
};

export default TaskModal;