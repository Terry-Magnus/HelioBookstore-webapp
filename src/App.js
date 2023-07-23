import { useEffect, useState } from "react";
import Homepage from "./pages/homepage/homepage";
import NotFound from "./pages/error/notfound";
import {
    Routes, Route
} from "react-router-dom";
import Collections from "./pages/collections/collections";
import Nav from "./components/nav/nav";
import Footer from "./components/footer/footer";
import Login from "./pages/login/login"
import { auth } from "./firebase/firebase.utils"
import './App.scss';


function App() {
    const [currentUser, setCurrentUser] = useState()

    useEffect(() => {
        await.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
    })
    return (
        <div className="app">
            <Nav />
            <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route path="/collections" element={<Collections />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
        </div>

    );
}

export default App;
