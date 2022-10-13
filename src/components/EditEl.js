import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import map from '../images/map.png'
import file from '../images/file.png'
import FormAll from './Atoms/FormAll'

function EditEl() {
    return (
        <div className="container-grey h-page">
            <Container className='p-5 '>
                <div className='mt-3'>
                    <h3 className='mb-4 ff-abhaya fw-extra-bold f-36 text-center text-lg-start'>Edit Profile</h3>


                    <Form>
                        <Row>
                            <Col className='col-12 col-lg-9'>
                                <FormAll label="Full Name" type="text" placeholder="Full Name" className="mb-3  bg-grey2 border-grey3" />
                            </Col>
                            <Col>
                                <Form.Group className="mb-3 p-1 rounded  bg-grey2 border-grey3" controlId="formBasicEmail" >
                                    <Form.Control type="file" placeholder="Attach Image" hidden />
                                    <Form.Label className="d-flex justify-content-between btn-full align-items-center p-1">
                                        <div className=''>Attach Image </div>
                                        <div className=''>
                                            <img src={file} alt="" />
                                        </div>
                                    </Form.Label>
                                </Form.Group>
                            </Col>


                        </Row>

                        <FormAll label="Email" type="email" placeholder="Email" className="mb-3 bg-grey2 border-grey3" />
                        <FormAll label="Phone" type="tel" placeholder="Phone" className="mb-3 bg-grey2 border-grey3" />

                        <Row className="mb-5">
                            <Col className='col-12 col-lg-9'>
                                <FormAll label="Location" type="text" placeholder="Location" className="mb-3 bg-grey2 border-grey3" />
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Button type="button" className='btn-brown btn-full p-3 ff-avenir  f-14'>
                                        Select on Map <img src={map} alt='asfdfa'></img>
                                    </Button>

                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3 float-end col-3">
                            <Button type="button" className='btn-brown btn-full px-5 py-2 ff-avenir f-14'>
                                Save
                            </Button>
                        </Form.Group>

                    </Form>

                </div>
            </Container>

        </div >

    )
}

export default EditEl