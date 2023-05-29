import React, { useState, useRef } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputField from '../components/inputField';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

function Register() {
    const [formErrors, setFormErrors] = useState({});
    const firstNameField = useRef();
    const lastNameField = useRef();
    const userNameField = useRef();
    const emailField = useRef();
    const passwordField = useRef();
    const password2Field = useRef();
    const phoneNumberField = useRef();

    const onSubmit = (e) => {
        e.preventDefault();

        const first_name = firstNameField.current.value;
        const last_name = lastNameField.current.value;
        const username = userNameField.current.value;
        const email = emailField.current.value;
        const phone_number = phoneNumberField.current.value;
        if (passwordField.current.value !== password2Field.current.value){
            setFormErrors({password2: "Passwords don't match"})
        }else{
            const errors = {};
            if(!first_name){
                errors.first_name = 'This field is required'
            }
            if(!last_name){
                errors.last_name = 'This field is required'
            }
    
            if(!username){
                errors.username = 'This field cannot be blank'
            }
            if(!email){
                errors.email = 'This field is required'
            }
    
            setFormErrors(errors);
            if (Object.keys(errors).length > 0){
                return;
            }
    
            console.log(`You have entered: FN ${first_name}, LN ${last_name}, UN ${username}, EM ${email}, PN ${phone_number}`)
        }

    }
    return (
        <>
            <NavBar />
            <main className='container container-fluid'>
                <div className="row align-items-center">
                    <h3 className='text-center'>Register</h3>
                    <Form onSubmit={onSubmit}>
                        <div className="row">
                            <div className="col">
                                <InputField name='first_name' label='First Name*' type='text' error={formErrors.first_name} fieldRef={firstNameField} />
                            </div>
                            <div className="col">
                                <InputField name='last_name' label='Last Name*' type='text' error={formErrors.last_name} fieldRef={lastNameField} />
                            </div>
                        </div>
                        <InputField name='email' label='Enter your email*' type='email' error={formErrors.email} fieldRef={emailField} />
                        <div className="row">
                            <div className="col">
                                <InputField name='username' label='Username*' type='text' error={formErrors.username} fieldRef={userNameField} />
                            </div>
                            <div className="col">
                                <InputField name='phone_number' label='Phone Number' type='number' error={formErrors.phone_number} fieldRef={phoneNumberField} />
                            </div>
                        </div>


                        <div className="row">
                            <div className="col">
                                <InputField name='password' label='Password' type='password' error={formErrors.password} fieldRef={passwordField} />
                            </div>
                            <div className="col">
                                <InputField name='password2' label='Confirm Password' type='password' error={formErrors.password2} fieldRef={password2Field} />
                            </div>
                        </div>

                        <div className="text-center">
                        <Button variant='primary' type='submit' style={{ width: '15rem'}}>Sign Up</Button>
                        </div>

                    </Form>

                    <div className="mt-2">
                        <hr />
                        <p>Already have an account? <Link to='/'>Login</Link></p>
                    </div>
                </div>
            </main>

        </>

    )
}

export default Register