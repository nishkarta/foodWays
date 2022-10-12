import React from 'react'
import rectangle2 from '../images/rectangle2.png';
import g10 from '../images/g10.png';

import { Container, Row, Col } from 'react-bootstrap'


function HeadingPage() {
    return (
        <div className='bg-yellow'>
            <Container className='py-5 text-center text-lg-start'>
                <Row className='d-flex align-items-center px-5 mx-4'>
                    <Col className='col-12 col-lg-6 text-brown'>
                        <h2 className='ff-abhaya fs-1 fw-bolder'>Are You Hungry ?</h2>
                        <h2 className='ff-abhaya fs-1 fw-bolder'>Express Home Delivery</h2>
                        <Row>
                            <Col className='col-12 col-lg-4 me-lg-3 mb-3'>
                                <img src={rectangle2} alt="" />
                            </Col>
                            <Col className='mb-1 ff-avenir text-dark'><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col className='col-12 col-lg-6 text-lg-end text-center'><img src={g10} alt="" style={{ width: '100%' }} /></Col>
                </Row>
            </Container>
        </div>
    )
}

export default HeadingPage