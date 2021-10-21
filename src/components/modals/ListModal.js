import React, {useState} from "react";
import {Button,  ListGroup, Modal} from "react-bootstrap";

export const ListModal = (props) =>{

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)



    return(
        <>
            <Button variant={"secondary"} onClick={handleShow}>Show Account</Button>

            <Modal show={show} onHide={handleClose} size={'lg'}>
                <Modal.Header closeButton>
                    <Modal.Title>List information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup>
                        <ListGroup.Item>List Item 1</ListGroup.Item>
                        <ListGroup.Item>List Item 2</ListGroup.Item>
                        <ListGroup.Item>List Item 3</ListGroup.Item>
                    </ListGroup>
                </Modal.Body>
            </Modal>
        </>
    )
}
