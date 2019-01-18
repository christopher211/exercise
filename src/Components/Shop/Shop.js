import React from 'react';
import Product from './../Content/ProductList';
import LoginPage from './../Pages/LoginPage';
import SignUpPage from './../Pages/SignUpPage';
import ForgotPassword from './../Pages/ForgotPassword';
import PageNotFound from "../Pages/PageNotFound";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './Shop.css';


export default class Shop extends React.Component {
    render() {
        return (
            <div className="shop">
                <Router>
                    <>
                        <Switch>
                            <Route exact path="/" component={ Product } />
                            <Route exact path="/login" component={ LoginPage }/>
                            <Route exact path="/signup" component={ SignUpPage }/>
                            <Route exact path="/forgot-password" component={ ForgotPassword }/>
                            <Route component={ PageNotFound } />
                        </Switch>
                    </>
                </Router>
            </div>
        );
    }
}
