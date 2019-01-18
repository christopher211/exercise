import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './PreHeader.css';

export default function PreHeader() {
    return (
        <>
            <div className="pre-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <li><i className="fa fa-phone"></i><span> +(84) 932794503</span></li>
                        </div>
                        <div className="col=md-6 col-sm-6">
                            <ul className="list-unstyled list-inline pull-right">
                                <li><a href="">My Account</a></li>
                                <li><a href="">My Wishlist</a></li>
                                <li><a href="">Checkout</a></li>
                                <li>
                                    <aside>
                                        <Link to="/login">Login</Link>
                                    </aside>
                                </li>
                                <li>
                                    <aside>
                                        <Link to="/signup">Sign Up</Link>
                                    </aside>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}