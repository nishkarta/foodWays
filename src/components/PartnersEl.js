import Card from 'react-bootstrap/Card';

// import List from './List';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { partners } from '../dataDummy/partners'


function PartnersEl() {
    return (
        <>
            <Container className='my-5'>
                <h3>Popular Restaurant</h3>
                <Row className=''>

                    {partners.map((partner, index) => (

                        <Col key={index} className=" my-3 col-12 col-md-6 col-lg-3">
                            <Row className='d-flex align-items-center'>


                                <Col className='text-start'>

                                    <Card.Img variant="top" src={partner.image} style={{ width: '4rem' }} /></Col>
                                <Col className='col-8'>
                                    <Card.Body>
                                        <Card.Title>{partner.name}</Card.Title>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>



    );
}

export default PartnersEl;