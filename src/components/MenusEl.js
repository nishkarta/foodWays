import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { menus } from '../dataDummy/menus'


function MenusEl() {
    return (
        <div className="container-grey">
            <Container className='py-5'>
                <h3 className='mb-3'>Geprek Bensu, Menus</h3>
                <div className="d-flex">

                    <Row className=''>

                        {menus.map((menu, index) => (

                            <Col key={index} className="col-12 col-md-6 col-lg-3">

                                <Card style={{ width: '18rem' }} className="my-3 p-3">
                                    <Card.Img variant="top" src={menu.image} />
                                    <Card.Body>
                                        <Card.Title>{menu.name}</Card.Title>
                                        <Card.Text>
                                            {menu.price}
                                        </Card.Text>
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