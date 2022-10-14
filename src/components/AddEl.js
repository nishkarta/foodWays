import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import FormAll from './Atoms/FormAll'
import file from '../images/file.png'
import { useNavigate } from 'react-router-dom'

function AddEl() {
    const navigate = useNavigate()
    return (
        <div className="container-grey h-page">
            <Container className='p-5'>
                <h3 className='mt-3 mb-4 ff-abhaya f-36 fw-extra-bold text-center text-lg-start' >Add Product</h3>
                <div className="">

                    <Form>
                        <Row>
                            <Col className='col-12 col-lg-9'>
                                <FormAll label="Title" type="text" placeholder="Title" className="mb-3 bg-grey2 border-grey3 text-avenir" />

                            </Col>
                            <Col>
                                <Form.Group className="mb-3 p-2 rounded bg-grey2 border-grey3" controlId="formBasicEmail" >
                                    <Form.Control type="file" placeholder="Attach Image" hidden />
                                    <Form.Label className="d-flex justify-content-between btn-full align-items-center  ">
                                        <div className='text-grey3'>Attach Image </div>
                                        <div className=''>
                                            <img src={file} alt="" />
                                        </div>
                                    </Form.Label>
                                </Form.Group>
                            </Col>
                        </Row>

                        <FormAll label="Price" type="text" placeholder="Price" className="mb-5 bg-grey2 border-grey3" />

                        <Form.Group className="mb-3 float-end col-3">
                            <Button type="button" className='btn-brown btn-full px-5 py-2 f-14' onClick={() => navigate('/details')}>
                                Save
                            </Button>
                        </Form.Group>

                    </Form>
                </div>
            </Container >
        </div >

    )
}

export default AddEl