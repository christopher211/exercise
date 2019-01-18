import React from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import PreHeader from './PreHeader';
import logoShopBlue from '../../../img/logo-shop-blue.png';
import './Header.css';

export default function Header() {
    return (
        <Router>
            <div className ="top">
                <PreHeader />
                <div className="header">
                    <div className="container">
                        <div className="site-logo">
                            <Link to="/">
                                <a href="#"><img src={logoShopBlue} alt="Super-shop"/></a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    )
}