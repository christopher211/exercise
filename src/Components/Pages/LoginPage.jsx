import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function LoginPage() {
    return (
        <div className="content">
            <div className="widget-form">
                <h1>Login</h1>
                <h4 className="title">Email</h4><br/>
                <input type="email" placeholder="Username" /><br/>
                <h4 className="title">Password</h4><br/>
                <input type="password" placeholder="Password" /><br/>
                <Link to="/forgot-password"><a href="#" className="forgot">Forgot password?</a></Link><br/>
                <button className="btn btn-primary btn-block">Login</button><br/>
                Not a member? <Link to="/signup">Click here</Link>
            </div>

        </div>
    )
}