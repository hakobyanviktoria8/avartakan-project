import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {SlackMessage} from "./SlackMessage";

const SlackMessageModal = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button  onClick={toggle} className={"my-2"}>Ուղարկել նամակ</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Ուղարկել նամակ</ModalHeader>
                <ModalBody>

                    <SlackMessage/>

                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Փակել</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default SlackMessageModal;