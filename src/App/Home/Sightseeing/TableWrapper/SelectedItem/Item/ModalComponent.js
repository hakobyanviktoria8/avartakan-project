import React, { useState } from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
import Slider from "./Slider";

const ModalComponent = (props) => {
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;
  return (
    <div className={"my-2"}>
      <Button color="secondary" className="w-100 my-2" onClick={toggle}>{buttonLabel}Տեսնել ավելին</Button>
      <Modal isOpen={modal} toggle={toggle} className={className} external={externalCloseBtn}>
        <ModalBody>
          <Slider img={props.sliderImg}/>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default ModalComponent;