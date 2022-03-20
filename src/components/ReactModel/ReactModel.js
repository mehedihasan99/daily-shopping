import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ReactModel = (props) => {
    console.log(props.product);
    const {title, price, description, image} = props.product;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <img className='w-50' src={image} alt="" />
          <Modal.Title className='ms-4npm i aos'>{title.slice(0, 10)}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
};

export default ReactModel;