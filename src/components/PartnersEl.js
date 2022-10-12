import Card from 'react-bootstrap/Card';

// import List from './List';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { partners } from '../dataDummy/partners'


function PartnersEl() {
    return (
        <>
            <Container className='py-5 '>
                <h3 className='text-center text-lg-start mb-3 ff-abhaya fw-bolder fs-1'>Popular Restaurants</h3>
                <div className="">

                    <Row className=''>

                        {partners.map((partner, index) => (

                            <Col key={index} className="col-12 col-md-4 col-lg-3">

                                <Card style={{ width: '100%' }} className="my-3 p-3 border-0">
                                    <Row className='d-flex align-items-center'>
                                        <Col className=''>
                                            <img src={partner.image} className='' alt='dfdcv' />
                                        </Col><Col className=''>
                                            <Card.Title className='ff-abhaya text-start fw-bolder'><h4>{partner.name}</h4></Card.Title>
                                        </Col>
                                    </Row>

                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </>



    );
}

export default PartnersEl;