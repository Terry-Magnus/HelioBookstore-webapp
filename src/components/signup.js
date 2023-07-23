import { useState } from "react"
import {
    Form, FormControl, FormGroup,
    FormLabel, Button
} from "react-bootstrap"

export default function Signup() {
    const [profileData, setProfileData] = useState({
        email: '',
        password: '',
        confirm: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setProfileData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // store user data in local storage
        sessionStorage.setItem('user_details', JSON.stringify(profileData))
        setProfileData({// reset form fields
            email: '',
            password: '',
            confirm: ''
        })
    }

    return (
        <div className="signup">
            <h4 className="text-center mb-3">I don't have an account</h4>
            <Form onSubmit={handleSubmit} style={{
                borderLeft: "2px solid black",
                paddingLeft: "50px"
            }}
            >
                <FormGroup id="email">
                    <FormLabel>Email</FormLabel>
                    <FormControl name="email" type="email" onChange={handleChange} value={profileData.email} required />
                </FormGroup>
                <FormGroup id="password">
                    <FormLabel>Password</FormLabel>
                    <FormControl name="password" type="password" onChange={handleChange} value={profileData.password} required />
                </FormGroup>
                <FormGroup id="confirm">
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl name="confirm" type="password" onChange={handleChange} value={profileData.confirm} required />
                </FormGroup>
                <Button className="w-100 mt-3"
                    type="submit"
                    variant={profileData.password === profileData.confirm ?
                        "primary" : "danger"}
                >Sign up</Button>
                {profileData.password === profileData.confirm ? "" : <p className="btn-danger">The two passwords are not equal</p>}
            </Form>
        </div>
    )
}
