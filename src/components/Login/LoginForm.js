import axios from "axios";
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from "../Header/Navbar/Navbar";
import "./Login.css";


function LoginForm() {
    let history = useHistory();
    const [details, setDetails] = useState({ email: "", password: "" });

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
            <form className="form-login" >
                <div className="form-inner">
                    <h2>Login</h2>
                    <div className="login">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email"
                            onChange={e => setDetails({ ...details, email: e.target.value })}
                        />
                    </div>
                    <div className="login">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password"
                            onChange={e => setDetails({ ...details, password: e.target.value })}
                        />
                    </div>
                    <input className="button" onClick={handlerOnLogin} type="button" value="LOGIN" />
                </div>
            </form>
        </>
    );
};

export default LoginForm;