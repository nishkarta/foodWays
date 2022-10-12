

import React, { useState } from 'react'

import { useNavigate } from "react-router-dom";

import { Container, Navbar, Button, Modal, FloatingLabel, Dropdown } from 'react-bootstrap'

import FormAll from './Atoms/FormAll';

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

    const handleCloseLog = () => setShowLog(false);
    const handleShowLog = () => {
        setShowReg(false)
        setShowLog(true)
    };
    const handleLogin = () => {
        handleCloseLog()
        setIsLoggedIn(true)
    }

    const handleLogout = () => {
        setIsLoggedIn(false)
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
        navigate("/profile");
    };
    const handleNavigateToCart = () => {
        navigate("/cart")
    }
    const handleNavigateToAddProduct = () => {
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

                        {isLoggedIn ? <div>
                            <Dropdown>
                                <span><img src={cart} alt='' onClick={handleNavigateToCart} /></span>

                                <Dropdown.Toggle variant="bg-yellow" id="dropdown-basic">
                                    <img src={pp} alt='' />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={handleNavigateToProfile}><img src={user} alt='' className='me-2'></img>
                                        Profile
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item onClick={handleNavigateToAddProduct}><img
                                        src={prods}
                                        alt='' className='me-2'
                                    />Add Products</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#/action-3" onclick={handleLogout}><img src={logout} alt='' className='me-2' />Logout</Dropdown.Item>

                                </Dropdown.Menu>
                            </Dropdown>
                        </div> : <><Button className='btn btn-brown text-white me-2' onClick={handleShowReg} >Register</Button>
                            <Button className='btn btn-brown text-white' onClick={handleShowLog}>Login</Button></>}




                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
                <div>
                    <Modal show={showReg} onHide={handleCloseReg}>
                        <Modal.Header closeButton>
                            <Modal.Title className='text-yellow fs-1' >Register</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form >


                                <FormAll label="Full Name" type="text" placeholder="Full Name" className="mb-3" />
                                <FormAll label="Email" type="email" placeholder="Email" className="mb-3" />
                                <FormAll label="Password" type="password" placeholder="Password" className="mb-3" />


                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <FloatingLabel label='Gender'>
                                        <Form.Select aria-label="Default select example">
                                            <option selected disabled hidden>Select Gender</option>
                                            <option value="m">Male</option>
                                            <option value="f">Female</option>
                                            <option value="o">Other</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Form.Group>

                                <FormAll label="Phone" type="tel" placeholder="Phone" className="mb-3" />



                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <FloatingLabel label='Login Type'>
                                        <Form.Select aria-label="Default select example">
                                            <option selected disabled hidden>Select Login Type</option>
                                            <option value="u">As User</option>
                                            <option value="a">As Admin</option>

                                        </Form.Select>
                                    </FloatingLabel>
                                </Form.Group>


                            </Form>
                        </Modal.Body>
                        <Modal.Footer>

                            <Button className='btn-full btn-brown p-3 fs-5 fw-bolder' variant="primary" onClick={handleCloseReg}>
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
                            <Modal.Title className='text-yellow fs-1' >Login</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <FormAll label='Email' type='email' placeholder='Email' className='mb-3' />
                                <FormAll label='Password' type='password' placeholder='Password' className='mb-3' />

                            </Form>
                        </Modal.Body>
                        <Modal.Footer>

                            <Button className='btn-full btn-brown p-3 fs-5 fw-bolder' variant="primary" onClick={handleLogin}>
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

            </div>
        </>

    )
}

export default NavbarEl