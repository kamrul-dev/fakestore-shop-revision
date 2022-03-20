import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

// Modal for display product details
const ReactModal = (props) => {
    const { image, title, price, description } = props.product;
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
                    <Modal.Title>{title.slice(0, 10)}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='text-center'>
                        <img className='w-50 p-3' src={image} alt="" />
                        <h3 className='p-3'>Price: {price}</h3>
                    </div>
                    <div>
                        <p><strong>Description:</strong> {description}</p>
                    </div>
                </Modal.Body>
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

export default ReactModal;