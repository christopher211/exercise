import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Components/Layout/Header/Header';
import Shop from './Components/Shop/Shop';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Header />, document.getElementById('head'));
ReactDOM.render(<Shop />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
