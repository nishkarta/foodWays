import React, { useContext } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import FormAll from '../components/Atoms/FormAll'
import { LoginContext } from '../components/Contexts/LoginContext'

function LoginEl({ showLog, setShowLog, setShowReg }) {
    const { setIsLoggedIn } = useContext(LoginContext)

    const handleLogin = () => {
        handleCloseLog()
        setIsLoggedIn(true)
    }

    const handleCloseLog = () => setShowLog(false);

    const handleShowReg = () => {
        setShowLog(false)
        setShowReg(true)
    };


    return (
        <div className='loginModal'>
            <Modal show={showLog} onHide={handleCloseLog}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-yellow fs-1' >Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <FormAll label='Email' type='email' placeholder='Email' className='mb-3 bg-grey2 text-grey2 border-grey2' />
                        <FormAll label='Password' type='password' placeholder='Password' className='mb-3 bg-grey2 text-grey2 border-grey2' />

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

    )
}

export default LoginEl