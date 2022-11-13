import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './Component/Login';
import Main from './Main';
import LikeList from './Component/LikeList';


const Routing = () => {
    return (
        <>
            <Routes>
                <Route exact path="/*" element={<App />} />
                <Route exact path="/app" element={<App />} />
                <Route exact path="/Login" element={<Login />} />
                <Route exact path="/Main" element={<Main />} />
                <Route exact path="/LikeList" element={<LikeList />} />
            </Routes>
        </>
    );
};

export default Routing;