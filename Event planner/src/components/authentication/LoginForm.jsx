import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMailBulk } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import './LoginForm.css';


// import { useNavigate } from 'react-router-dom';
// import api from '../../utils/axios'; // Custom Axios instance

const LoginForm = () => {
  // const [formData, setFormData] = useState({
  //   email: '',
  //   password: '',
  // });
  // const [formData, SetFormData] = useState <FormData>({
  //   email: '',
  //   password: '',
  // });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
      //  setError('');
  //   try {
  //     const response = await api.post('/auth/login', { email, password });
  //     localStorage.setItem('token', response.data.token);
  //     navigate('/dashboard'); // Redirect to dashboard on successful login
  //   } catch (err) {
  //     setError('Invalid credentials, please try again.');
  //   }
  // };
//   if (!formData.email){
//     setError('Enter valid data in Email');
//     return
//   }
//   if (!formData.password){
//     setError('Enter valid data in Passwords');
//     return
//   }
// };
//   // if (!email){
//   //   setError('Enter valid data in Email');
//   //   return;
//   // }
//   // if (!password){
//   //   setError('Enter valid data in Passwords');
//   //   return
//   // }
//   // Perforn Login

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <div>
//         <label>Email:</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//       </div>
//       <button type="submit">Login</button>
//     </form>
//   );
// };

const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');
  if (!email) {
    setError('Enter valid data in Email');
    return;
  }
  if (!password) {
    setError('Enter valid data in Password');
    return;
  }
  // Perform login
};

return (
  <div className='wrapper'>
  <form onSubmit={handleSubmit}>
    <h2>Login</h2>
    {error && <p style={{ color: 'red' }}>{error}</p>}
    <div className='input-box'>
      <label className='input-title'>Email:</label>
      <FaMailBulk className='icon' />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='exampl@gmail.com'
        required
      />
    </div>
      
      <div className='input-box' >
      <label className='input-title'>Password:</label>
      <IoIosLock className='icon' />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password'
        required
      />
    </div>
    <div className='remember-forget'>
      <label htmlFor=""><input type='checkbox'/>Remember me</label>
      <a href="#">Forgot password</a>
    </div>
    <Link to="/eventform">
    <button type="submit">Login</button>
        </Link>
        <div className='Register-link'>
          <p>Dont have a Profile? <a className='aa' href="/Register">Register</a></p>
        </div>
  </form>
  </div>
);
};

export default LoginForm;
