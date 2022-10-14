import React from 'react'
import { Modal, Form, Button, FloatingLabel } from 'react-bootstrap'
import FormAll from '../components/Atoms/FormAll'

function RegisterEl({ showReg, setShowReg, showLog, setShowLog }) {
// 
    const handleCloseReg = () => setShowReg(false);
    // const handleShowReg = () => setShowReg(true)

    // const handleShowLog = () => {
    //     setShowReg(false)
    //     setShowLog(true)
    // };

 


    return (
        <div className='registerModal'>
            <Modal show={showReg} onHide={handleCloseReg}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-yellow fs-1' >Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form >


                        <FormAll label="Full Name" type="text" placeholder="Full Name" className="mb-3 bg-grey2 text-grey2 border-grey2" />
                        <FormAll label="Email" type="email" placeholder="Email" className="mb-3 bg-grey2 text-grey2 border-grey2" />
                        <FormAll label="Password" type="password" placeholder="Password" className="mb-3 bg-grey2 text-grey2 border-grey2" />


                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <FloatingLabel label='Gender'>
                                <Form.Select aria-label="Default select example" className='bg-grey2 text-grey2 border-grey2'>
                                    <option selected disabled hidden>Select Gender</option>
                                    <option value="m">Male</option>
                                    <option value="f">Female</option>
                                    <option value="o">Other</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>

                        <FormAll label="Phone" type="tel" placeholder="Phone" className="mb-3 bg-grey2 text-grey2 border-grey2" />



                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <FloatingLabel label='Login Type'>
                                <Form.Select aria-label="Default select example" className='bg-grey2 text-grey2 border-grey2'>
                                    <option selected disabled hidden>Select User Type</option>
                                    <option value="cust">As Customer</option>
                                    <option value="adm">As Admin</option>

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
                                <span className='ms-1 fw-bold' variant="" onClick={() => {
                                setShowReg(false)
                                setShowLog(true)
                                }} style={{cursor:'pointer'}}>
                                    Here
                                </span></p>
                        </div>
                    </div>

                </Modal.Footer>

            </Modal>

        </div>

    )
}

export default RegisterEl