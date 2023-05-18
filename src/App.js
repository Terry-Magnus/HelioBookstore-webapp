import Homepage from "./pages/homepage/homepage";
import NotFound from "./pages/error/notfound";
import {
    Routes, Route
} from "react-router-dom";
import Collections from "./pages/collections/collections";
import Nav from "./components/nav/nav";
import Footer from "./components/footer/footer";
import './App.scss';


function App() {
    return (
        <div className="app">
            <Nav />
            <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route path="/collections" element={<Collections />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>

    );
}

export default App;
