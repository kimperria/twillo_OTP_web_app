import React from 'react';
import NavBar from '../components/NavBar';
import Card from 'react-bootstrap/Card';
import Verify  from '../components/Verify';


const OTP = () => {
  return (
    <>
        <NavBar />
        <div className="container container-fluid">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 mt-4">
                        <Card>
                            <Card.Header className='text-center'><h4>Enter ONE TIME PASSWORD</h4></Card.Header>
                            <Card.Body>
                                <Verify />
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4"></div>
                </div>
        </div>
    </>
  )
}

export default OTP