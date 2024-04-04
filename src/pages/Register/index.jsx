import React, { useState, useRef } from 'react'
import { validateRegister } from '../../functions/validate';
import './index.css'
import { useNavigate } from "react-router-dom";
import logoBlack from '../../assets/images/logoBlack.svg'

function Register() {
    const navigate = useNavigate()
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState({
        emailError: "",
        passwordError: ""
    });

    function handleClick(e) {
        e.preventDefault();

        const existingUserInfos = JSON.parse(localStorage.getItem("userInfos")) || []

        const userInfo = {
            id: Date.now(),
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        console.log(userInfo);

        existingUserInfos.push(userInfo);

        localStorage.setItem("userInfos", JSON.stringify(existingUserInfos));

        if (localStorage.getItem('userInfos')) {
            navigate('/login')
        }

    }



    return (
        <div className='box'>
            <img className='blackLogo' src={logoBlack} alt="" />
            <h4>Sign up</h4>
            <form >
                <div className="formEmail">
                    <label className="formLabel" htmlFor="email">
                        Email
                    </label>
                    <input
                        placeholder="example@mail.com"
                        className={`formInput`}
                        type="email"
                        name="email"
                        ref={emailRef}

                    />
                </div>
                <div className="formEmail">
                    <label className="formLabel" htmlFor="password">
                        Password
                    </label>
                    <input
                        placeholder=""
                        className={`formInput`}
                        type="password"
                        name="password"
                        ref={passwordRef}
                    />

                </div>
            </form>
            {error.emailError && (
                <p className='error' id="userError">{error.emailError}</p>
            )}
            {error.passwordError && (
                <p className='error' id="userError">{error.passwordError}</p>
            )}
            <button onClick={handleClick} className='button'>Sign up</button>
            <p>
                Already have an account? <a href="/login">Login</a>
            </p>
        </div>
    )
}

export default Register