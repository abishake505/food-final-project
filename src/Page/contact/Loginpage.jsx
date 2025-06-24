import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'; 




const Loginpage = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const user = {
    email: "abi262952@gmail.com",
    password: "123456"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === user.email && password === user.password) {
      login();  
      navigate("/home");
    } else {
      alert("Invalid Email or Password");
    }
  };

  const handleGoogleLoginSuccess = (credentialResponse) => {
    const token = credentialResponse.credential;
    const decoded = jwtDecode(token);
    console.log("Google user:", decoded);
    localStorage.setItem('user', JSON.stringify(decoded));
    login();
    navigate("/home");
  };

  const handleGoogleLoginError = () => {
    console.error("Google Login Failed");
  };

  return (
    <div style={{ maxWidth: '300px', margin: '50px auto', padding: '20px' }}>
      <h3 className="text-center mb-3">Login Page</h3>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor='Eaddress'>Email Address</label>
        <input
          type='email'
          id='Eaddress'
          className='form-control mb-2'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor='Password'>Password</label>
        <input
          type='password'
          id='Password'
          className='form-control mb-3'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type='submit' className='btn btn-danger w-100'>Submit</button>
      </form>

      <hr />

      <div className='text-center'>
        <GoogleLogin
          onSuccess={handleGoogleLoginSuccess}
          onError={handleGoogleLoginError}
        />
      </div>
    </div>
  );
};

export default Loginpage;
