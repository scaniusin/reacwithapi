import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const WalletPersonalModal = (props) =>{

  return (
    <div>
      <Modal isOpen={props.modal} toggle={props.toggle.bind()} className="someClass" backdrop="static">
        <ModalHeader toggle={props.toggle.bind()}>Your personal Data:</ModalHeader>
        <ModalBody>
          <div className="break-word">
            <h4>Your public key: </h4>
            <h5 className="break-word small">{ props.publicKey }</h5>
          </div>
          <div className="break-word">
            <h4>Your private key:</h4>
            <h5 className="break-word small">{ props.privateKey }</h5>
          </div>
        </ModalBody>
        <ModalFooter>
          <div className="text-danger">Click OK only if you SAVED PRIVATE KEY!!!</div>
          <Button color="danger" onClick={props.toggle.bind()}>OK</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};


export default WalletPersonalModal;