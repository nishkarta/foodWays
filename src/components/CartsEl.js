import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { carts } from '../dataDummy/carts'
import map from '../images/map.png'
import bin from '../images/bin.png'

function CartsEl() {
    return (
        <div className="container-grey h-page">
            <Container className='p-5 ff-avenir'>
                <h3 className='mb-4 ff-abhaya fw-extra-bold f-36'>Geprek Bensu</h3>
                <h5 className='text-lighter-brown mb-3 f-18'>Delivery Location</h5>
                <Form className='row mb-5'>
                    <Form.Group className="mb-3 col-12 col-lg-9">
                        <Form.Control type="text" placeholder="Enter location" className='p-2 border-0' />
                    </Form.Group>
                    <Form.Group className='col'>
                        <Button type="submit" className='btn-full btn-brown p-2 mb-3 f-14 fw-extra-bold'>
                            Select on Map <img src={map} alt='asfdfa'></img>
                        </Button>
                    </Form.Group>
                </Form>
                <h5 className='text-lighter-brown f-18'>Review Your Order</h5>

                <Row>
                    <Col className='col-lg-8'><hr /></Col>
                    <Col className='d-none d-lg-block'><hr /></Col>
                </Row>
                <Row className=''>

                    <Col>
                        {carts.map((prod, index) => (
                            <>
                                <Col key={index}>
                                    <Row className='d-flex align-items-center'>

                                        <Col>
                                            <Row className='d-flex align-items-center text-start'>
                                                <Col className='col-3'>
                                                    <img src={prod.image} alt="" style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
                                                </Col>
                                                <Col className=' col-9 ps-5 ps-lg-0'>
                                                    <h6 className='my-3 ff-abhaya fw-extra-bold f-14'>{prod.name}</h6>
                                                    <h6 className='my-3 ff-avenir'>
                                                        <span className='m-2 f-18'>
                                                            -
                                                        </span>
                                                        <button className='bg-rose border-0 rounded f-14'>
                                                            {prod.qty}
                                                        </button>
                                                        <span className='m-2 f-18'>
                                                            +
                                                        </span>
                                                    </h6>

                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col className='col-4 text-end'>
                                            <h6 className='text-danger my-3 f-14'>{prod.price}</h6>
                                            <h6 className='text-danger my-3'><img src={bin} alt="" /></h6>
                                        </Col>
                                    </Row>
                                    <hr />
                                </Col>

                            </>
                        ))}</Col>

                    <Col className=' col-12 col-lg-4'>

                        <Col>
                            <Row className='d-flex align-items-center mt-2 f-14'>

                                <Col>
                                    <Row className='d-flex align-items-center text-start'>
                                        <Col className='ff-abhaya'>
                                            <h6 className='f-14'>Subtotal</h6>
                                        </Col>
                                        <Col className='col-4 text-end ff-avenir text-danger'><h6 className='f-14'>Rp 60.000</h6>
                                        </Col>
                                    </Row>
                                    <Row className='d-flex align-items-center text-start'>
                                        <Col className='ff-abhaya'>
                                            <h6 className='f-14'>Qty</h6>
                                        </Col>
                                        <Col className='col-4 text-end ff-avenir'><h6 className='f-14'>3</h6>
                                        </Col>
                                    </Row>
                                    <Row className='d-flex align-items-center text-start'>
                                        <Col className='ff-abhaya'>
                                            <h6 className='f-14'>Ongkir</h6>
                                        </Col>
                                        <Col className='col-4 text-end ff-avenir text-danger'><h6 className='f-14'>Rp 10.000</h6>
                                        </Col>
                                    </Row>
                                </Col>


                            </Row>
                            <hr />
                            <Col>
                                <Row className='d-flex align-items-center'>

                                    <Col>
                                        <Row className='d-flex align-items-center text-start text-danger'>
                                            <Col className='ff-abhaya'>
                                                <h6 className='f-14 fw-extra-bold'>Total</h6>
                                            </Col>
                                            <Col className='col-4 text-end ff-avenir '><h6 className='f-14 fw-extra-bold'>Rp 70.000</h6>
                                            </Col>
                                        </Row>
                                    </Col>


                                </Row>

                            </Col>
                            <Form.Group className="mt-5 pt-lg-5 float-end col-12 col-lg-8">
                                <Button type="button" className='btn-brown btn-full px-5 py-2 f-14 fw-extra-bold'>
                                    Order
                                </Button>
                            </Form.Group>

                        </Col>



                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default CartsEl