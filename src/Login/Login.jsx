import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const [isDarkMode,setDarkMode] = useState('false');
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
     const [password, setPassword] = useState('');
     const [error, setError] = useState(null);
     const [showPassword, setShowPassword] = useState(false);

    const toggleDarkMode= () => {
     setDarkMode(!isDarkMode);
     document.body.style.backgroundColor = isDarkMode ? 'black ' : 'white'; //Enabling Dark Mode
  
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      const storedUserData = localStorage.getItem('user');
      if (storedUserData) {
        const userData = JSON.parse(storedUserData);
        if (usernameOrEmail === userData.username || usernameOrEmail === userData.email) {
          if (password === userData.password) {
            // User is authenticated, redirect to welcome page
            window.location.href = `/welcome/${userData.username}`;
          } else {
            setError('Invalid password');
          }
        } else {
          setError('Invalid Username/Email or Passwordl');
        }
      } else {
        setError('No user data found');
      }
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
    <h2 >Sign In</h2>
    </div>
    {error && <div style={{ color: 'red',fontWeight:"bolder", }}>{error}</div>}
    <form onSubmit={handleSubmit}>
      <label htmlFor="email" >UserName/Email address</label>
      <input type="text" id="email" name="email" placeholder="UserName/Your email.." value={usernameOrEmail} onChange={(e) => setUsernameOrEmail(e.target.value)}/>
  
      <label htmlFor="password" >Password</label>
      <input type={showPassword ? 'text' :'password'} id="password" name="password" placeholder="Your password.." value={password} onChange={(e) => setPassword(e.target.value)}/>

      <div className="show">
    <input type="checkbox" id='show-password' onChange={(e) => setShowPassword(e.target.checked)} />
    <label htmlFor="show-password">Show Password</label>
    </div>
      
      <div className="checkbox">
        <input type="checkbox" id="remember" name="remember"/>
        <label htmlFor="remember">Remember me</label>
        <a href="/" className="forgot" style={{color:'#6988ff',fontWeight:'bolder',fontSize:15}}>Forget password?</a>
      </div>
     
      <div className="btn">
      <button type="submit">Sign in</button>
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
        <h6>Does not have account?<Link to="/">Sign Up</Link></h6>
      </div>
    </form>
  </div>
         </div>
      </div>
    )
  
}

export default Login
