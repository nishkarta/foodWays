import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import map from '../images/map.png'
import file from '../images/file.png'
import FormAll from './Atoms/FormAll'

function EditEl() {
    return (
        <div className="container-grey h-page">
            <Container className='p-5'>
                <h3 className='mb-3 ff-abhaya fw-bolder fs-1'>Edit Profile</h3>
                <div className="">

                    <Form>
                        <Row>
                            <Col className='col-12 col-lg-9'>
                                <FormAll label="Full Name" type="text" placeholder="Full Name" className="mb-3" />
                            </Col>
                            <Col>
                                <Form.Group className="mb-3 p-2 rounded bg-white" controlId="formBasicEmail" >
                                    <Form.Control type="file" placeholder="Attach Image" hidden />
                                    <Form.Label className="d-flex justify-content-between btn-full align-items-center">
                                        <div className=''>Attach Image </div>
                                        <div className=''>
                                            <img src={file} alt="" />
                                        </div>
                                    </Form.Label>
                                </Form.Group>
                            </Col>


                        </Row>

                        <FormAll label="Email" type="email" placeholder="Email" className="mb-3" />
                        <FormAll label="Phone" type="tel" placeholder="Phone" className="mb-3" />

                        <Row className="mb-5">
                            <Col className='col-12 col-lg-9'>
                                <FormAll label="Location" type="text" placeholder="Location" className="mb-3" />
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Button type="button" className='btn-brown btn-full p-3'>
                                        Select on Map <img src={map} alt='asfdfa'></img>
                                    </Button>

                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3 float-end col-3">
                            <Button type="button" className='btn-brown btn-full px-5 py-2'>
                                Save
                            </Button>
                        </Form.Group>

                    </Form>
                </div>
            </Container>
        </div>

    )
}

export default EditEl