

import React, { useState } from 'react'

import { useNavigate } from "react-router-dom";

import { Container, Navbar, Button, Modal } from 'react-bootstrap'

import logo from '../images/logo.svg';
import Form from 'react-bootstrap/Form';
import cart from '../images/cart.png'
import pp from '../images/cart (2).png'
import user from '../images/user.png'
import logout from '../images/logout.png'
import prods from '../images/prods.png'



function NavbarEl() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLog, setShowLog] = useState(false);
    const [showReg, setShowReg] = useState(false);
    const [showU, setShowU] = useState(false);

    const handleCloseLog = () => setShowLog(false);
    const handleShowLog = () => {
        setShowReg(false)
        setShowLog(true)
    };
    const handleLogin = () => {
        handleCloseLog()
        setIsLoggedIn(true)
    }

    const handleShowU = () => {
        setShowU(true)
    }
    const handleCloseU = () => {
        setShowU(false)
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
        handleCloseU()
    }


    const handleCloseReg = () => setShowReg(false);
    const handleShowReg = () => {
        setShowLog(false)
        setShowReg(true)
    };

    const navigate = useNavigate();

    const handleNavigateToHome = () => {
        navigate("/")
    }
    const handleNavigateToProfile = () => {
        handleCloseU()
        navigate("/profile");
    };
    const handleNavigateToCart = () => {
        navigate("/cart")
    }
    const handleNavigateToAddProduct = () => {
        handleCloseU()
        navigate("/add-product")
    }

    return (
        <>
            <Navbar expand='lg' className='bg-yellow navbar h-nav'>
                <Container>
                    <Navbar.Brand onClick={handleNavigateToHome} href="#home" className='navbar-brand'>WaysFood  <img
                        alt=""
                        src={logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                    />{' '}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

                        {isLoggedIn ? <><span className='btn text-white me-2' onClick={handleNavigateToCart} ><img src={cart} alt="" /></span>
                            <span className='btn' onClick={handleShowU}><img src={pp} alt="" /></span></> : <><Button className='btn btn-brown text-white me-2' onClick={handleShowReg} >Register</Button>
                            <Button className='btn btn-brown text-white' onClick={handleShowLog}>Login</Button></>}




                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
                <div>
                    <Modal show={showReg} onHide={handleCloseReg}>
                        <Modal.Header closeButton>
                            <Modal.Title className='text-yellow'>Register</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form >

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                                    <Form.Control
                                        type="text"
                                        placeholder="Full Name"

                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                                    <Form.Select aria-label="Default select example">
                                        <option selected disabled hidden>Gender</option>
                                        <option value="m">Male</option>
                                        <option value="f">Female</option>
                                        <option value="o">Other</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                                    <Form.Control
                                        type="tel"
                                        placeholder="Phone"

                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                                    <Form.Select aria-label="Default select example">
                                        <option selected disabled hidden>Position</option>
                                        <option value="u">As User</option>
                                        <option value="a">As Admin</option>

                                    </Form.Select>
                                </Form.Group>


                            </Form>
                        </Modal.Body>
                        <Modal.Footer>

                            <Button className='btn-full btn-brown' variant="primary" onClick={handleCloseReg}>
                                Register
                            </Button>
                            <div className='btn-full justify-content-center d-flex'>
                                <div className='align-items-center'>
                                    <p className=''>Already have an account? Click
                                        <span className='ms-1 fw-bold' variant="" onClick={handleShowLog}>
                                            Here
                                        </span></p>
                                </div>
                            </div>

                        </Modal.Footer>

                    </Modal>
                </div>

                <div>
                    <Modal show={showLog} onHide={handleCloseLog}>
                        <Modal.Header closeButton>
                            <Modal.Title className='text-yellow' >Login</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        autoFocus
                                    />
                                </Form.Group>
                            </Form>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                                    <Form.Control
                                        type="password"
                                        placeholder="Password"

                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>

                            <Button className='btn-full btn-brown' variant="primary" onClick={handleLogin}>
                                Login
                            </Button>
                            <div className='btn-full justify-content-center d-flex'>
                                <div className='align-items-center'>
                                    <p className=''>Don't have an account? Click
                                        <span className='ms-1 fw-bold' variant="" onClick={handleShowReg}>
                                            Here
                                        </span></p>
                                </div>
                            </div>

                        </Modal.Footer>
                    </Modal>
                </div>

                <div>
                    <Modal
                        show={showU}
                        onHide={handleCloseU}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title><img src={user} alt="" className='me-3' /><span onClick={handleNavigateToProfile}>Profile</span></Modal.Title>
                        </Modal.Header>
                        <Modal.Header>
                            <Modal.Title><img src={prods} alt="" className='me-3' /><span onClick={handleNavigateToAddProduct}>Add Product</span></Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Modal.Title><img src={logout} alt="" className='me-3' /><span onClick={handleLogout}>Logout</span></Modal.Title>
                        </Modal.Body>

                    </Modal>
                </div>
            </div>
        </>

    )
}

export default NavbarEl