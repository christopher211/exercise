import React from 'react';
import './style.css';

export default function LoginPage() {
    return (
        <div className="content">
            <h1>Login</h1>
            <input type="text" placeholder="Username" /><br/>
            <input type="password" placeholder="Password" /><br/>
            <input type="submit" value="Login"/>
        </div>
    )
}