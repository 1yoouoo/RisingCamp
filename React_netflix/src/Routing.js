import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './Component/Login';


const Routing = () => {
    return (
        <>
            <Routes>
                <Route exact path="/*" element={<App />} />
                <Route exact path="/app" element={<App />} />
                <Route exact path="/Login" element={<Login />} />
            </Routes>
        </>
    );
};

export default Routing;