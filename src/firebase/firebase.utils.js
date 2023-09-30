import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth, signOut } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSENGER_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};


// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)// export auth for users
export const provider = new GoogleAuthProvider()// get Google auth provider
export const logOut = async () => {
    try {
        await signOut(auth)
    } catch (error) {
        console.log("Sign out Error:", error)
    }
}
