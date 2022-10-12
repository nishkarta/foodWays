import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'

function AddEl() {
    return (
        <div className="container-grey h-page">
            <Container className='p-5'>
                <h3 className='mb-3 ff-abhaya fw-bolder fs-1'>Add Product</h3>
                <div className="">

                    <Form>
                        <Row>
                            <Col className='col-12 col-lg-9'>
                                <Form.Group className="mb-3">
                                    <Form.Control type="text" placeholder="Title" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">

                                    <Form.Control type="file" placeholder="Attach Image" />
                                </Form.Group>
                            </Col>


                        </Row>
                        <Form.Group className="mb-3" >
                            <Form.Control type="text" placeholder="Price" />
                        </Form.Group>
                        <Form.Group className="mb-3 float-end col-3">
                            <Button type="button" className='btn-brown btn-full px-5'>
                                Save
                            </Button>

                        </Form.Group>

                    </Form>
                </div>
            </Container>
        </div>

    )
}

export default AddEl