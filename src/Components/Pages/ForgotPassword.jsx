import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function ForgotPassword() {
    return (
        <div className="content">
            <div className="widget-form">
                <h3>Forgot password</h3><br/>
                <p className="title">Enter email that you want to reset password</p><br/>
                <input type="email" placeholder="Email" /><br/>
                <button className="btn btn-primary btn-block">Submit</button><br/>
                <Link to="/login">Go back</Link>
            </div>

        </div>
    )
}