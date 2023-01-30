// import React from 'react';
import './Form.css';
import useLocalStorage from 'use-local-storage';
import React from 'react'

function Form() {

    const [theme, settheme] = useLocalStorage('theme' ? 'dark' : 'light')

    const switchtheme = () =>{
        const newtheme = theme === 'light' ? 'dark' : 'light';
        settheme(newtheme)
    }
  return (
    <div className="login" data-theme={theme}>
        <div className="logincont">
            <h1> Login </h1>
            <div className="logcont">
                <div className="logo">
                    <i className='fab fa-google'></i>
                    <i className='fab fa-facebook-square'></i>
                    <i className='fab fa-linkedin'></i>
                    <i className='fab fa-twitter-square'></i>
                    <i className='fab fa-instagram'></i>

                </div>

                <p className='divider'><span>Or</span></p>
                <form>
                    <label>E-Mail</label>
                    <input type='email' placeholder="Enter your E-Mail"></input>
                    <label>Password</label>

                    <input type='password' placeholder="Enter your Password"></input>

                    <div className='remember'>
                        <input type="checkbox" checked='checked'/>
                        <p>Remember Me</p>
                    </div>

                    <button>Log In</button>
                </form>
                <div className='bottom'>
                    <p>Forgot your password?</p>
                    <a href='/'>Reset Password</a>
                </div>

                <p className='create'>Create Account</p>
            </div>

            <div className='themetoggle'>
                <h2>Light Theme</h2>
                <i onClick={switchtheme} class='fas fa-toggle-on'></i>
            </div>
        </div>
    </div>
  )
}

export default Form;