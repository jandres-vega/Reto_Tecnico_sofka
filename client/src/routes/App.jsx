import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "../pages/LandingPage";
import Home from "../pages/Home";
const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<LandingPage />} />
                    <Route exact path="/home" element={<Home />}/>
                </Routes>
            </Router>
        </div>
    );
};

export default App;