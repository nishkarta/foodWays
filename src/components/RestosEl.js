import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { restos } from '../dataDummy/restos'
import { useNavigate } from "react-router-dom";


function RestosEl() {
    const navigate = useNavigate();
    const handleNavigateToDetails = () => {
        navigate("/details")
    }
    return (
        <>
            <Container className='py-5 '>
                <h3 className='text-center text-lg-start mb-3 ff-abhaya fw-bolder fs-1'>Restaurant Near You</h3>
                <div className="">

                    <Row className=''>

                        {restos.map((resto, index) => (

                            <Col key={index} className="col-12 col-md-4 col-lg-3">

                                <Card onClick={handleNavigateToDetails} style={{ width: '100%' }} className="my-3 p-3 border-0">
                                    <Card.Img variant="top" src={resto.image} />
                                    <Card.Body>
                                        <Card.Title className='ff-abhaya fw-bolder'>{resto.name}</Card.Title>
                                        <Card.Text className='ff-avenir'>
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