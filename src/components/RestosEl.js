import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { restos } from '../dataDummy/restos'


function RestosEl() {
    return (
        <>
            <Container className='my-5'>
                <h3 className='mb-3'>Restaurant Near You</h3>
                <div className="d-flex">

                    <Row className=''>

                        {restos.map((resto, index) => (

                            <Col key={index} className="col-12 col-md-6 col-lg-3">

                                <Card style={{ width: '18rem' }} className="my-3">
                                    <Card.Img variant="top" src={resto.image} />
                                    <Card.Body>
                                        <Card.Title>{resto.name}</Card.Title>
                                        <Card.Text>
                                            {resto.distance}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </>

    )
}

export default RestosEl