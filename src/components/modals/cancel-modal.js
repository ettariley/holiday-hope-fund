import React from 'react';
import Modal from 'react-bootstrap/Modal';

function CancelModal(props) {
  const { showCancel, handleCloseCancel} = props;

  return (
    <Modal show={showCancel} onHide={handleCloseCancel}>
      <Modal.Header closeButton>
        <Modal.Title className="text-bg-light">Donation Cancelled</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-bg-light">
        Your donation was cancelled. We've saved your cart for you if you want to try again!
      </Modal.Body>
    </Modal>
)
}

export default CancelModal;