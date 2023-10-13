import { useState } from "react"
import { GoogleBtn, SecondaryBtn } from '../buttons/custom-buttons'
import { ButtonGroup, FormControl, FormGroup, FormLabel } from "react-bootstrap"
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { auth, provider } from "../../firebase/firebase.utils"
import { redirect } from "react-router-dom"
import { useDispatch } from "react-redux"
import { loginUser } from "../../redux/slices/userSlice"

const SignIn = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const { email, password } = user
    const handleChange = (event) => {
        const { name, value } = event.target
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            console.error(error)
        }
    }

    const signInWithGoogle = async () => {//signin with google popup
        try {
            await signInWithPopup(auth, provider)
            redirect("/")
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <FormGroup>
                <FormLabel>Email: </FormLabel>
                <FormControl
                    name="email"
                    type="email"
                    value={email}
                    onChange={handleChange}
                    required
                />
                <FormLabel>Password: </FormLabel>
                <FormControl
                    name="password"
                    type="password"
                    value={password}
                    onChange={handleChange}
                    required
                />
            </FormGroup>
            <ButtonGroup className="w-100 mt-3 d-flex">
                <SecondaryBtn className="w-50 justify-content-start" onClick={handleSubmit}>Log in</SecondaryBtn>
                <GoogleBtn className="google-btn w-50 justify-content-end" onClick={signInWithGoogle}>Sign in with Google</GoogleBtn>
            </ButtonGroup>
        </>
    )
}

export default SignIn