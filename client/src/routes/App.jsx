import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "../pages/LandingPage";
import Home from "../pages/Home";
import FormNaveSatelite from "../containers/FormNaveSatelite";
import FormNaveSonda from '../containers/FormNaveSonda';
import FormNaveTripulado from "../containers/FormNaveTripulado";

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<LandingPage />} />
                    <Route exact path="/home" element={<Home />}/>
                    <Route exact path="/formSatelite"  element={<FormNaveSatelite/>} />
                    <Route exact path="/formSonda" element={<FormNaveSonda/>} />
                    <Route exact path="/formTripulada" element={<FormNaveTripulado/>} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;