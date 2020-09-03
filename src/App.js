import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';


import Container from './container/Container'

function App() {
    return (
        <BrowserRouter>
            <div className="App">

                <Container />
            </div>
        </BrowserRouter>
    );
}

export default App;



