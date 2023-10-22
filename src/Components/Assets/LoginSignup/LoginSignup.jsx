import React, {useState} from 'react';
import './LoginSignup.css';
import user_icon from '../person.png';
import email_icon from '../email.png';
import password_icon from '../password.png';
export const LoginSignup = () => {
  let count = 0, count1 = 0;
  const [action, setAction] = useState('Sign-Up');
  const [name, setName] = useState('Name');
  const [email, setEmail] = useState('Email');
  const [password, setPassword] = useState('');

const clearForm = () => {
    setName('Name');
    setEmail('Email');
    setPassword('');
  };

  const handleSubmit = () => {
    alert('Account successfully created!');
    clearForm();
  };
  return (
    <div className='container'>
    <div className="header">
          <div className="text">{action}</div>
        <div className="underline"></div>
        </div>
      <div className="inputs">
        {action === 'Login' ? <div></div> : <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>}
      <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
      <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
        </div>
      </div>
      {action === 'Sign-Up' ? <div></div> :<div className="forgot-password">Forgot Password? <span>CLICK HERE!</span></div> }
      <div className="submit-container">
        <div className={action === "Login" ? "submit grey" : "submit"} onClick={() => {
          if (setAction === 'Login'){
            count++;
            setAction('Sign-up');
          }
          else
          count = 1;
          count++;
          if (count === 2) {
            console.log("submit");
          }
          else
            count = 0;
        }}>Sign-Up</div>
        <div className={action === "Sign-Up" ? "submit grey" : "submit"} onClick={() => {
          if (setAction === 'Sign-Up') {
            count1++;
            setAction('Login');
          }
          else
          count1 = 1;
          count1++;
          if (count1 === 2) {
            console.log("submit login");
          }
          else
            count1 = 0;
        }}>Login</div>
      </div>
    </div>
  )
}
