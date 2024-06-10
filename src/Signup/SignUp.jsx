import React, { useState } from 'react'
import './SignUp.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [isDarkMode,setDarkMode] = useState('false');
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password!== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    const userData = { username, email, password };
    localStorage.setItem('user', JSON.stringify(userData));
    window.location.href = '/thank-you';
  };
const toggleDarkMode= () => {
   setDarkMode(!isDarkMode);
   document.body.style.backgroundColor = isDarkMode ? 'black ' : 'white';

  };
  return (
    <div className={isDarkMode ? 'ligh-mode' :'dark-mode'}>
      <nav className={`navbar  bg-dark bg-body-tertiary justify-content-center`}>
      <div className="form-check form-switch" >
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault " onClick={toggleDarkMode}/>
              <h5 className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode  </h5>
         </div>
       </nav>
       <div className="conte">
       
<div className="container">
  <div className="head">
  <h2 >Sign Up</h2>
  </div>
  <form onSubmit={handleSubmit}>
    <label htmlFor="email" >UserName</label>
    <input type="text" id="username" name="username" placeholder="UserName" value={username} onChange={(e) => setUsername(e.target.value)}required/>

    <label htmlFor="password" >Email</label>
    <input type="text" id="email" name="email" placeholder="Email"  value={email} onChange={(e) => setEmail(e.target.value)}required/>
    
    <label htmlFor="password" >Password</label>
    <input type={showPassword ? 'text' :'password'}  id="password" name="password" placeholder="Your password.."
     value={password} onChange={(e) => setPassword(e.target.value)} required/>
    <div className="show">
    <input type="checkbox" id='show-password' onChange={(e) => setShowPassword(e.target.checked)} />
    <label htmlFor="show-password">Show Password</label>
    </div>
    <label htmlFor="password" > Conform Password</label>
    <input type='password' id="password" name="password" placeholder="Your password.."  value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}required/>

    <div className="btn">
    <button type="submit">Register</button>
    </div>
    <hr />
    <div className="social-buttons">
      <button className="google-icon">
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google" height="20px"/>
      </button>
      <button className="github-icon">
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" height="20px"/>
        GitHub
      </button>
    </div>

    <div className="signup">
      <h6>Already have account?<Link to="/login">Login</Link></h6>
    </div>
  </form>
</div>
       </div>
    </div>
  )
}

export default SignUp;
