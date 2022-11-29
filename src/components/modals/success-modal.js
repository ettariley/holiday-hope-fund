import React from 'react';
import Modal from 'react-bootstrap/Modal';

function SuccessModal(props) {
  const { showSuccess, handleCloseSuccess, clearDonations } = props;

  return (
    <Modal show={showSuccess} onHide={handleCloseSuccess} onExited={clearDonations}>
      <Modal.Header closeButton>
        <Modal.Title className="text-bg-light">Donation Successful</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-bg-light">
        Thank you for your donation! We couldn't do this each year without your support.
      </Modal.Body>
    </Modal>
)
}

export default SuccessModal;