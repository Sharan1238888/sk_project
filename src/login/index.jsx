import React, { useEffect } from 'react';
import './log.css';

export default function Index() {

    const containerStyle = {
        backgroundColor: '#c9d6ff',
        background: 'linear-gradient(to right, #e2e2e2, #c9d6ff)',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center'
    };

    useEffect(() => {
        const container = document.getElementById('container');
        const registerBtn = document.getElementById('register');
        const loginBtn = document.getElementById('login');
    
        const handleRegisterClick = () => {
          container.classList.add("active");
        };
    
        const handleLoginClick = () => {
          container.classList.remove("active");
        };
    
        registerBtn.addEventListener('click', handleRegisterClick);
        loginBtn.addEventListener('click', handleLoginClick);
    
        // Clean up event listeners
        return () => {
          registerBtn.removeEventListener('click', handleRegisterClick);
          loginBtn.removeEventListener('click', handleLoginClick);
        };
      }, []); // Empty dependency array to run the effect only once
  

  return (
    <div style={containerStyle}>
        <div className="container1" id="container"  >
            <div className="form-container sign-up">
                <form>
                <h1>Create Account</h1>
                <div className="social-icons">
                <a href="/" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                <a href="/" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="/" className="icon"><i className="fa-brands fa-github"></i></a>
                <a href="/" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
                <span>or use your email for registeration</span>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in">
            <form>
                <h1>Sign In</h1>
                <div className="social-icons">
                    <a href="/" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                    <a href="/" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="/" className="icon"><i className="fa-brands fa-github"></i></a>
                    <a href="/" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
                <span>or use your email password</span>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <a href="/">Forget Your Password?</a>
                <button>Sign In</button>
            </form>
        </div>
        <div className="toggle-container">
            <div className="toggle">
                <div className="toggle-panel toggle-left">
                    <h1>Welcome RakshathTech!</h1>
                    <p>Enter your personal details to use all of site features</p>
                    <button className="hidden" id="login" >Sign In</button>
                </div>
                <div className="toggle-panel toggle-right">
                    <h1>Welcome RakshathTech!</h1>
                    <p>Enter your personal details to use all of site features</p>
                    <button className="hidden" id="register" >Sign Up</button>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}

