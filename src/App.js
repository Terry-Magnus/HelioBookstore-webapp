import { useEffect, useState } from "react";
import Homepage from "./pages/homepage/homepage";
import NotFound from "./pages/error/notfound";
import {
    Routes, Route
} from "react-router-dom";
import Collections from "./pages/collections/collections";
import Nav from "./components/nav/nav";
import Footer from "./components/footer/footer";
import Auth from "./pages/auth"
import { auth } from "./firebase/firebase.utils"
import './App.scss';


function App() {
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        // listen for changes in authentication state
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setCurrentUser(user)
            } else {
                setCurrentUser(null)
            }
        })
        const cleanup = () => unsubscribe()
        return cleanup
    })
    return (
        <div className="app">
            <Nav currentUser={currentUser} />
            <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route path="/collections" element={<Collections />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/auth" element={<Auth />} />
            </Routes>
            <Footer />
        </div>

    );
}

export default App;
