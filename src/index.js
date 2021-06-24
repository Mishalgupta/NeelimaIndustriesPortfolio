import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import './index.css';
import './footer.css';
import './style.css';
import './services.css';
import './Home.css';
import { BrowserRouter } from "react-router-dom";

ReactDom.render(
    <>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </>
    , document.getElementById('root'));