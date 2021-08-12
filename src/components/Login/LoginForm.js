import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import ProductDetail from '../ProductDetail';
import Navbar from "../Header/Navbar/Navbar"
import Home from '../Home';
import axios from "axios";
import "./Login.css";


function LoginForm(Login, error) {
    let history = useHistory();
    const [details, setDetails] = useState({ name: "", email: "", password: "" });

    /*const handleSubmit = e => {
        e.preventDefault();

        Login(details);
    }*/
    const handlerOnLogin = () => {
        axios
            .post("http://localhost:8000/auth/login", {
                email: details.email,
                password: details.password,
            })
            .then((res) => {
                if (res.data.access_token) {
                    localStorage.setItem("token", res.data.access_token);
                    history.push("/");
                }
            })

            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <>
            <Navbar />
            <form >
                <div className="form-inner">
                    <h2>Login</h2>
                    <div className="login">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email"
                            onChange={e => setDetails({ ...details, email: e.target.value })}
                            value={details.email}
                        />
                    </div>
                    <div className="login">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password"
                            onChange={e => setDetails({ ...details, password: e.target.value })}
                            value={details.password}
                        />
                    </div>
                    <input onClick={handlerOnLogin} type="button" value="LOGIN" />
                </div>
            </form>
        </>
    );
};

export default LoginForm;