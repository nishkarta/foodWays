import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import map from '../images/map.png'

function EditEl() {
    return (
        <div className="container-grey h-page">
            <Container className='p-5'>
                <h3 className='mb-3 ff-abhaya fw-bolder fs-1'>Edit Profile</h3>
                <div className="">

                    <Form>
                        <Row>
                            <Col className='col-12 col-lg-9'>
                                <Form.Group className="mb-3">
                                    <Form.Control type="text" placeholder="Full Name" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">

                                    <Form.Control type="file" placeholder="Attach Image" />
                                </Form.Group>
                            </Col>


                        </Row>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Control type="tel" placeholder="Phone" />
                        </Form.Group>

                        <Row>
                            <Col className='col-12 col-lg-9'>
                                <Form.Group className="mb-3">
                                    <Form.Control type="text" placeholder="Location" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Button type="button" className='btn-brown btn-full p-2'>
                                        Select on Map <img src={map} alt='asfdfa'></img>
                                    </Button>

                                </Form.Group>
                            </Col>


                        </Row>
                    </Form>
                </div>
            </Container>
        </div>

    )
}

export default EditEl