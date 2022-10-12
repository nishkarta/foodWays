import React from 'react'
import { Container, Col, Row, Card, Button } from 'react-bootstrap'
import { users } from '../dataDummy/users'
import { transactions } from '../dataDummy/transactions'
import waysdeliv from '../images/waysdeliv.png'
import { useNavigate } from 'react-router-dom'

function ProfileEl() {
    const navigate = useNavigate();
    const handleNavigateToEdit = () => {
        navigate("/edit-profile")
    }

    return (
        <div className="container-grey h-page">
            <Container className='p-5'>
                <Row className=''>
                    <Col className='col-12 col-lg-7  mb-5'>
                        <h3 className='mb-3 ff-abhaya fw-bolder fs-1 text-center text-lg-start'>My Profile</h3>
                        <div className="row">



                            {users.map((user, index) => (
                                <>
                                    <Col key={index} className=" col-5 col-lg-4 ">
                                        <div>
                                            <Card style={{ width: '11rem' }} className=" container-grey border-0">
                                                <Card.Img variant="top" src={user.image} className="rounded mb-3" />
                                                <Button className='btn-full btn-brown text-white fw-bold p-2' onClick={handleNavigateToEdit}>Edit Profile</Button>
                                            </Card>
                                        </div>
                                    </Col>
                                    <Col className=' ff-avenir'>
                                        <div className='mx-3'>
                                            <div className=''>
                                                <h4 className='text-lighter-brown'>Full Name</h4>
                                                <p>{user.fullName}</p>
                                            </div>
                                            <div>
                                                <h4 className='text-lighter-brown'>Email</h4>
                                                <p>{user.emailAddress}</p>
                                            </div>
                                            <div>
                                                <h4 className='text-lighter-brown'>Phone</h4>
                                                <p>{user.phoneNumber}</p>
                                            </div>
                                        </div>

                                    </Col>
                                </>

                            ))}

                        </div>
                    </Col>
                    <Col className='col-12 col-lg-5'>


                        <h3 className='mb-3 ff-abhaya fw-bolder fs-1 text-center text-lg-start'>Transaction / Order Histories</h3>




                        {transactions.map((trans, index) => (
                            <div className="d-flex bg-white justify-content-between align-items-center px-2 py-3 mb-3">
                                <div key={index} className="">
                                    <h6 className='ff-abhaya fw-extra-bold mb-1'>{trans.storeName}</h6>
                                    <p className='ff-avenir mb-2' style={{ fontSize: '10px' }}><span className='fw-bold'>Saturday, </span>{trans.date}</p>
                                    <p className='ff-avenir text-danger fw-bolder' style={{ fontSize: '11px' }}>Total {trans.total}</p>

                                </div>
                                <div key={index} className=' text-end'>
                                    <img src={waysdeliv} alt="" className='mb-1' />
                                    <button className='border-0 btn-green-trans btn-full' style={{ fontSize: '11px' }}>{trans.status}</button>
                                </div>
                            </div>
                        ))}



                    </Col>
                </Row>
            </Container>
        </div >

    )
}

export default ProfileEl