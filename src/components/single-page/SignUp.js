import React from "react";
import {Alert, Button, Col, Container, Form, Row} from "react-bootstrap";

export const SignUp = (props) => {

    const initFormData = Object.freeze({
        username: "",
        password: "",
        confirmPassword: ""
    })
    const [formData, updateFormData] = React.useState(initFormData)
    const [showWarning, updateShowWarning] = React.useState(false);
    const [showAccountExistError, setShowAccountExistError] = React.useState(false)


    const handleChange = (e) => {
        updateFormData({...formData,
            [e.target.name]: e.target.value.trim()})

    }
    const handleSubmit = (e) => {
        e.preventDefault()

        if(formData.password=== formData.confirmPassword){
            console.log(formData)
        }
        else {
            updateShowWarning(true)
        }
    }

    return(
        <Container className={"rounded w-50 bg-light align-content-center"} style={{marginTop: "10px"}}>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" name={"username"} onChange={handleChange} />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" name={"password"} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridConfirmPassword">
                        <Form.Label>Confirm</Form.Label>
                        <Form.Control type="password" placeholder="Re-enter password" name={"confirmPassword"} onChange={handleChange}/>
                    </Form.Group>
                </Row>
                <Row>
                    <Button variant="primary" type="submit" onClick={handleSubmit} >
                        Submit
                    </Button>
                </Row>

                { showWarning ? <Alert variant={'danger'}>Passwords do not match!</Alert> : null}
                { showAccountExistError ? <Alert variant={'danger'}>Username unavailable! Please try a different one!</Alert> : null}
            </Form>
        </Container>

    )
}

