import React, {  useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import FormAll from '../components/Atoms/FormAll'
import { User } from '../dataDummy/userList'
// import { useNavigate } from "react-router-dom";


function LoginEl({ showLog, setShowLog, setShowReg, setUserRole, isLoggedIn, setIsLoggedIn }) {
    // const navigate = useNavigate()
    const handleCloseLog = () => setShowLog(false);
    const [loggedInUser, setLoggedInUser] = useState({
        email: "",
        password: "",
        role: "",
    });

    const [statusMessage, setStatusMessage] = useState("");

    function successLogin(email, password) {
        const emailCheck = User.filter((field) => field.email === email);

        if (emailCheck.length === 0) {
            setStatusMessage("Email is Not Registered");
            return {
                status: false,
                message: statusMessage,
            };
        }

        const result = User.filter((field) => field.password === password);

        if (result.length === 0) {
            setStatusMessage("Wrong Password");
            return {
                status: false,
                message: statusMessage,
            };
        }
        setStatusMessage("Login success");
        return {
            status: true,
            message: statusMessage,
            user: result[0],
        };
    }


    return (
        <>

            <div className='loginModal'>
                <Modal show={showLog} onHide={handleCloseLog}>
                    <Modal.Header closeButton>
                        <Modal.Title className='text-yellow fs-1' >Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {statusMessage !== "" &&
                            <p className={!isLoggedIn ? 'text-danger' : 'text-success'}>{statusMessage}</p>
                        }
                        <Form>
                            <FormAll label='Email' type='email' placeholder='Email' className='mb-3 bg-grey2 text-grey2 border-grey2' value={loggedInUser.email}
                                onChange={(e) =>
                                    setLoggedInUser({ ...loggedInUser, email: e.target.value })} />
                            <FormAll label='Password' type='password' placeholder='Password' className='mb-3 bg-grey2 text-grey2 border-grey2' value={loggedInUser.password}
                                onChange={(e) =>
                                    setLoggedInUser({ ...loggedInUser, password: e.target.value })
                                } />

                        </Form>
                    </Modal.Body>
                    <Modal.Footer>

                        <Button className='btn-full btn-brown p-3 fs-5 fw-bolder' variant="primary" onClick={() => {
                            let hasLoggedIn = successLogin(loggedInUser.email, loggedInUser.password);
                            hasLoggedIn.status && setIsLoggedIn(true);
                            hasLoggedIn.status && setUserRole(hasLoggedIn.user.role);
                            hasLoggedIn.status && setStatusMessage('')
                            hasLoggedIn.status && setShowLog(false);
                            // hasLoggedIn.user.role === 'part' && navigate('/transactions')
                        }}>
                            Login
                        </Button>
                        <div className='btn-full justify-content-center d-flex'>
                            <div className='align-items-center'>
                                <p className=''>Don't have an account? Click<span className='ms-1 fw-bold' variant="" onClick={() => {
                                    setShowLog(false);
                                    setShowReg(true);
                                }} style={{ cursor: 'pointer' }}>
                                    Here
                                </span></p>
                            </div>
                        </div>

                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default LoginEl