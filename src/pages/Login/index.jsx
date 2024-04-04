import React, { useState, useRef } from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom';
import logoBlack from '../../assets/images/logoBlack.svg'
import { validateLogin } from '../../functions/validate';

function Register() {
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState({
        emailError: "",
        passwordError: "",
        userError: "",
    });

    function handleClick() {
        if (validateLogin(emailRef, passwordRef, setError)) {
            const user = {
                email: emailRef.current.value,
                password: passwordRef.current.value,
            }
            const userInfos = JSON.parse(localStorage.getItem("userInfos"))

            const filtered = userInfos.filter((userInfo, index) => {
                return userInfo.email === user.email
            })

            navigate(`/`)
        }
    }



    return (
        <div className='box'>
            <img className='blackLogo' src={logoBlack} alt="" />
            <h4>Log in</h4>
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
                    <label className="formLabel" htmlFor="email">
                        Password
                    </label>
                    <input
                        placeholder=""
                        className={`formInput`}
                        type="password"
                        name="email"
                        ref={passwordRef}
                    />

                </div>
            </form>
            {error.emailError && (
                <p className='error' id="userError">{error.emailError}</p>
            )}
            <button onClick={handleClick} className='button'>Log in</button>
            <p className="loginP">
                Don't have an account?<a href="/register">Sign up</a>
            </p>
        </div>
    )
}

export default Register