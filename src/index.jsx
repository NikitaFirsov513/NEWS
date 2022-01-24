import './css/style.scss';
import './css/loader.css'
import ReactDOM from 'react-dom';
import React from 'react'
import App from './App.jsx'

require("babel-core/register");
require("babel-polyfill");


ReactDOM.render(
    <App/>,
    document.getElementById('app')
)
