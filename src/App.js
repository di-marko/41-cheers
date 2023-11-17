import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import DrinksList from "./components/DrinksList/DrinksList"
import DrinkDetails from './components/DrinkDetails/DrinkDetails';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<DrinksList />} />
{               <Route path="/drink/:id" element={<DrinkDetails />} />}
            </Routes>
        </Router>
    );
};

export default App;
