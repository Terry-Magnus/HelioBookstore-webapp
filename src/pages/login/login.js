import { useState } from "react"
import { GoogleBtn, SecondaryBtn } from '../../components/buttons/custom-buttons'
import { Col, Container, ButtonGroup, Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap"
import Signup from "../../components/signup"
import { signInWithGoogle } from '../../firebase/firebase.utils'


const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // store user data in local storage
        sessionStorage.setItem('user_details', JSON.stringify(user))
        setUser({// reset form fields
            email: '',
            password: '',
        })
    }

    return (
        <Container>
            <Row className="my-4">
                <Col>
                    <Form onSubmit={handleSubmit} >
                        <FormGroup>
                            <FormLabel>Email: </FormLabel>
                            <FormControl
                                name="email"
                                type="email"
                                value={user.email}
                                onChange={handleChange}
                                required
                            />
                            <FormLabel>Password: </FormLabel>
                            <FormControl
                                name="password"
                                type="password"
                                value={user.password}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <ButtonGroup className="w-100 mt-3 d-flex">
                            <SecondaryBtn className="w-50 justify-content-start" type="submit">Login</SecondaryBtn>
                            <GoogleBtn className="google-btn w-50 justify-content-end" onClick={signInWithGoogle}>Sign in with Google</GoogleBtn>
                        </ButtonGroup>
                    </Form>
                </Col>
                <Col>
                    <Signup />
                </Col>
            </Row>
        </Container>
    )
}

export default Login