import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function SignUpPage() {
    return (
        <div className="content">
            <div className="widget-form">
                <h1>Sign Up</h1>

                <p className="title">First name</p><br/>
                <input type="text" placeholder="Fisrt name"/><br/>
                <p className="title">Last name</p><br/>
                <input type="text" placeholder="Last name"/><br/>
                <p className="title">Email</p><br/>
                <input type="email" placeholder="Username" /><br/>
                <p className="title">Password</p><br/>
                <input type="password" placeholder="Password" /><br/>
                <p className="title">Confirm password</p><br/>
                <input type="password" placeholder="Confirm password" /><br/>


                <button className="btn btn-primary btn-block">Sign Up</button><br/>
                Already has account? <Link to="/login">Click here</Link>
            </div>

        </div>
    )
}