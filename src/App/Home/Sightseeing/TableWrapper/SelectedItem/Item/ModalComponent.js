import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Slider from "./Slider";

const ModalComponent = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;
  return (
    <div>
      <Button color="secondary" className="w-100 " onClick={toggle}>{buttonLabel}Տեսնել ավելին</Button>
      <Modal isOpen={modal} toggle={toggle} className={className} external={externalCloseBtn}>
        <ModalBody>
          <Slider/>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Փակել</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
export default ModalComponent;