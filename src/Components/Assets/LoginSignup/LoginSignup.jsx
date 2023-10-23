import React, {useState} from 'react';
import './LoginSignup.css';
import user_icon from '../person.png';
import email_icon from '../email.png';
import password_icon from '../password.png';
export const LoginSignup = () => {
  const [action, setAction] = useState('Sign-Up');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const clearForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = () => {
    if(action === 'Sign-Up') 
      alert('Account successfully created!');
    else
      alert('Logged in!');
    clearForm();
  };
  return (
    <form onSubmit={handleSubmit}>
    <div className='container'>  
    <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
          <div className="heading-container">
          <div className={action === "Login" ? "submit grey" : "submit"} onClick={() => {
           setAction('Sign-Up');
        }}>Sign-Up</div>
          <div className={action === "Sign-Up" ? "submit grey" : "submit"} onClick={() => {
            setAction('Login');
        }}>Login</div>
        </div>
        </div>
      <div className="inputs">
        {action === 'Login' ? <div></div> : <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder='Name' value={name} onChange={e => setName(e.target.value)} />
        </div>}
          <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
        </div>
      <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
        </div>
      </div>
      {action === 'Sign-Up' ? <div></div> :<div className="forgot-password">Forgot Password? <span>CLICK HERE!</span></div> }
        <div className="submit-container">
          <button type='submit' className="btn">{action}</button>
      </div>
        
        
      </div>
      </form>
  )
}
