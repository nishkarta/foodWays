import React from 'react'
import { Form, FloatingLabel } from 'react-bootstrap'

function FormAll({ label, ...rest }) {
    return (
        <Form.Group >
            <FloatingLabel label={label} >
                <Form.Control  {...rest}></Form.Control>
            </FloatingLabel>
        </Form.Group>
    )
}

export default FormAll