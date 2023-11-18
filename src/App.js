import React from 'react';
import config from './config.json'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import DrinksList from "./components/DrinksList/DrinksList"
import DrinkDetails from './components/DrinkDetails/DrinkDetails';

const App = () => {

    return (
        <Router>
            <Navbar config={config}/>
            <Routes>
              <Route path="/" element={<DrinksList config={config}/>} />
              <Route path="/drink/:id" element={<DrinkDetails config={config}/>} />
            </Routes>
        </Router>
    );
};

export default App;
