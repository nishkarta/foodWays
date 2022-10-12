import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { menus } from '../dataDummy/menus'


function MenusEl() {
    return (
        <div className="container-grey">
            <Container className='p-5'>
                <h3 className='mb-3 ff-abhaya fw-bolder fs-1 text-center text-lg-start'>Geprek Bensu, Menus</h3>
                <div className="d-flex">

                    <Row className=''>

                        {menus.map((menu, index) => (

                            <Col key={index} className="col-12 col-md-6 col-lg-3 p-3">

                                <Card style={{ width: '100%' }} className="my-3 p-3">
                                    <Card.Img variant="top" src={menu.image} />
                                    <Card.Body>
                                        <Card.Title className='ff-abhaya fw-bolder fs-5'>{menu.name}</Card.Title>
                                        <Card.Text className='text-danger ff-avenir'>
                                            {menu.price}
                                        </Card.Text>
                                        <Button className='btn-full bg-yellow text-dark fw-bold ff-avenir'>Order</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </div>

    )
}

export default MenusEl