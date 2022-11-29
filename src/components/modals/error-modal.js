import React from 'react';
import Modal from 'react-bootstrap/Modal';

function ErrorModal(props) {
  const { showError, handleCloseError} = props;

  return (
    <Modal show={showError} onHide={handleCloseError}>
      <Modal.Header closeButton>
        <Modal.Title className="text-bg-light">Error Occurred</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-bg-light">
        An error occurred during your donation. Please try again.
      </Modal.Body>
    </Modal>
)
}

export default ErrorModal;