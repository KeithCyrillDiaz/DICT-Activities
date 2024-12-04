import React,  { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { Based_API } from "../Constants/constants";

const Login = () => {

    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
        message: ''
    });

    const handleUpdateCredentials = (field, value) => {
        setCredentials({
            ...credentials,
            [field]: value
        })
    }
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(`credentials: ${JSON.stringify(credentials, null, 2)}`);
    
        try {
            const response = await fetch (
                `${Based_API}/api/users/login`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({email: credentials.email, password: credentials.password})
                }
            )
            
            const data = await response.json();

            if(!response.ok) {
                handleUpdateCredentials('message', "Login Failed, please try again");
               return
            }
            console.log("token: ", data.token)
            localStorage.setItem('token', data.token);
            handleUpdateCredentials('message', "Login Successfully");
            navigate('/');

        } catch (error) {
            console.error("Error: ", error)
        }
    
    }

    return(
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                <div className="card">
                    <div className="card-header text-center">
                    <h3>Login</h3>
                    </div>
                    <div className="card-body">
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email Address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={credentials.email}
                            onChange={(e) => handleUpdateCredentials('email', e.target.value)}
                            required
                        />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={credentials.passWord}
                            onChange={(e) => handleUpdateCredentials('password', e.target.value)}
                            required
                        />
                        </div>
                    <button type="submit" className="btn btn-primary w-100">
                        Login
                        </button>
                    </form>
                    {credentials.message && (
                        <div className="alert alert-info mt-3" role="alert">
                        {credentials.message}
                        </div>
                    )}
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Login;