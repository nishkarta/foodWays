
import React, { useContext, useState } from 'react'

import { useNavigate } from "react-router-dom";

import { Badge, Container, Navbar, Button, Dropdown } from 'react-bootstrap'


import logo from '../images/logo.svg';
import cart from '../images/cart.png'
import pp from '../images/cart (2).png'
import user from '../images/user.png'
import logout from '../images/logout.png'
import prods from '../images/prods.png'

import { LoginContext } from './Contexts/LoginContext';
import LoginEl from '../Auth/LoginEl';
import RegisterEl from '../Auth/RegisterEl';




function NavbarEl() {

    const navigate = useNavigate();

    const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);

    const [showLog, setShowLog] = useState(false);
    const [showReg, setShowReg] = useState(false);

    const handleShowLog = () => {
        setShowReg(false)
        setShowLog(true)
    };

    const handleLogout = () => {
        setIsLoggedIn(false)
        handleNavigateToHome()
    }

    const handleShowReg = () => {
        setShowLog(false)
        setShowReg(true)
    };


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
            <Navbar expand='lg' className='bg-yellow navbar h-nav' sticky='top' collapseOnSelect>
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
                                <span >
                                    <img src={cart} alt='' onClick={handleNavigateToCart} className='me-0' style={{}} /> <Badge bg="danger" style={{ position: 'relative', borderRadius: '50%', left: '-16px', top: '-4px' }}>3</Badge>

                                </span>

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
                                    <Dropdown.Item onClick={handleLogout}><img src={logout} alt='' className='me-2' />Logout</Dropdown.Item>


                                </Dropdown.Menu>
                            </Dropdown>
                        </div> : <><Button className='btn btn-brown text-white me-2' onClick={handleShowReg} >Register</Button>
                            <Button className='btn btn-brown text-white' onClick={handleShowLog}>Login</Button></>}




                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>

                <RegisterEl showReg={showReg} setShowReg={setShowReg} />

                <LoginEl showLog={showLog} setShowLog={setShowLog} />

            </div>
        </>

    )
}

export default NavbarEl