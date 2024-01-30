/* 
    - Create a login folder within auth.
        - Create a JSX file called login (consider how the file/folder should be set)
    - Create a functional component called Login
    - Setup a form:
        - Above the form, make an h2 that displays "Login"
        - Use components from Reactstrap (hint: consider Signup)
        - No labels are required.
        - Two input fields: 
            - email: use a placeholder to denote "Email"
            - password: use a placeholder to denote "Password"
    - Import useRef:
        - create variables to reference both email & password.
        - incorporate within the Input components
    - Handle Submit
        - Set the form to fire off an async function called "handleSumbit"
            - write is as an arrow function.
        - Within the function
            - console.log both useRef variables that were established.
    - Export the component.
    - Import & mount the Login component within Auth.jsx
        - Note: Frame the component in the same fashion as Signup.
*/
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import FullButton from '../../buttons/FullButton';

function Login({ updateToken }) {

    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(emailRef)
        // console.log(passwordRef)

        const body = JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value
        })

        const url = 'http://localhost:4005/user/login';

        try {

            const res = await fetch(url, {
                method: "POST",
                headers: new Headers({
                    "Content-Type": 'application/json'
                }),
                body: body
            });

            const data = await res.json();
            // console.log(data);

            if (data.message === 'Successful') {
                updateToken(data.token)
                navigate('/movie')
            } else {
                alert(data.message)
            }


        } catch (err) {
            console.error(err.message)
        }

    }

    return (
        <>
            <h2>Login</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>Email:</Label>
                    <Input
                        placeholder='you@email.com'
                        innerRef={emailRef}
                        type='email'
                        autoComplete={'off'}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Password:</Label>
                    <Input
                        placeholder='password'
                        innerRef={passwordRef}
                        type='password'
                        autoComplete={'off'}
                    />
                </FormGroup>
                <FullButton>
                    <Button type='submit'>Login</Button>
                </FullButton>
            </Form>
        </>
    )
}

export default Login