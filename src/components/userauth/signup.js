import { useState } from "react"
import {
    Form, FormControl, FormGroup,
    FormLabel, Button
} from "react-bootstrap"
import { auth } from "../../firebase/firebase.utils"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { ShowPassword } from "../buttons/custom-buttons"
import { redirect } from "react-router-dom"


export default function Signup() {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        confirm: ''
    })
    const [passwordVisible, setPasswordVisible] = useState(false)
    const { email, password, confirm } = userData //destructure props off state


    const handleChange = (e) => {
        const { name, value } = e.target//destructure name and value off event object
        setUserData((prevData) => ({
            ...prevData, //spread in previous state
            [name]: value
        }))
    }

    const togglePasswordVisibility = (e) => {// toggle password visibility
        e.preventDefault()
        setPasswordVisible(prev => !prev)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // if (password !== confirm) {

        // }

        try {
            await createUserWithEmailAndPassword(auth, email, password)

            setUserData({// reset form fields
                email: '',
                password: '',
                confirm: ''
            })
            redirect("/")
        } catch (error) {
            console.error(error)
        }

    }

    return (
        <div className="signup">
            <h4 className="text-center mb-3">I don't have an account</h4>

            <Form style={{
                borderLeft: "2px solid black",
                paddingLeft: "50px"
            }}>
                {/* <FormGroup>
                    <FormLabel>Username</FormLabel>
                    <FormControl name="username"
                        type="text"
                        onChange={handleChange}
                        value={username} required />
                </FormGroup> */}
                <FormGroup id="email">
                    <FormLabel>Email</FormLabel>
                    <FormControl name="email"
                        type="email"
                        onChange={handleChange}
                        value={email} required />
                </FormGroup>
                <FormGroup style={{ position: "relative" }} id="password">
                    <FormLabel>Password</FormLabel>
                    <FormControl name="password"
                        type={passwordVisible ? "text" : "password"}
                        onChange={handleChange} value={password} required />
                    <ShowPassword
                        passwordVisible={passwordVisible}
                        onClick={togglePasswordVisibility} />
                </FormGroup>
                <FormGroup style={{ position: "relative" }} id="confirm">
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl name="confirm" type={passwordVisible ? "text" : "password"} onChange={handleChange} value={confirm} required />
                    <ShowPassword passwordVisible={passwordVisible} onClick={togglePasswordVisibility} />
                </FormGroup>
                <Button className="w-100 mt-3"
                    type="submit"
                    variant="primary"
                    // disabled={profileData.password === profileData.confirm ?
                    //     false : true}
                    onClick={handleSubmit}
                >Sign up</Button>
            </Form>
        </div>
    )
}
