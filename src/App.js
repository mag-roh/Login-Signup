import './App.css';
import { LoginSignup } from './Components/Assets/LoginSignup/LoginSignup';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-light">
            <Link to="/login-signup" className='nav-item'>Sign-Up</Link>
      </nav>
      <Routes>
        <Route path="/login-signup" element={<LoginSignup />}/>
      </Routes>
    </>
  );
}

export default App;
