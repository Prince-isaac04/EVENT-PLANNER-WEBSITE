import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaMailBulk } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import "./RegisterForm.css";
import { CgProfile } from "react-icons/cg";
import { MdDriveFileRenameOutline } from "react-icons/md";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmPassword, setConfrimPassword] = useState(""); // Corrected spelling
  const [error, setError] = useState("");
  const navigate = useNavigate(); // To programmatically navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Enter valid data in Email");
      return;
    }
    if (!password || !comfirmPassword) {
      setError("Please fill out both fields.");
      return;
    }

    if (password !== comfirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    alert("Passwords match! Form submitted.");

    // Simulate login logic
    console.log("Login successful");
    navigate("/eventform"); // Navigate to the event form after login
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h2>Registration Form</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* Username */}
        <div className="input-box">
          <label className="input-title">Username:</label>
          <CgProfile  className="icon" />
          <input
            type="text"
            // value={name}
            // onChange={(e) => setEmail(e.target.value)}
            placeholder="prince_is04"
            required
          />
        </div>

        {/* Names */}
        <div className="input-box">
          <label className="input-title">Names:</label>
          <MdDriveFileRenameOutline className="icon" />
          <input
            type="text" // Fixed type to text
            placeholder="Firstname                          Lastname"
            required
          />
        </div>

        {/* Email */}
        <div className="input-box">
          <label className="input-title">Email:</label>
          <FaMailBulk className="icon" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
            required
          />
        </div>

        {/* Password */}
        <div className="input-box">
          <label className="input-title">Password:</label>
          <IoIosLock className="icon" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            required
          />
        </div>

        {/* Confirm Password */}
        <div className="input-box">
          <label className="input-title">Confirm Password:</label>
          <IoIosLock className="icon" />
          <input
            type="password"
            value={comfirmPassword} // Corrected value binding
            onChange={(e) => setConfrimPassword(e.target.value)} // Corrected onChange handler
            placeholder="confirm password"
            required
          />
        </div>

        <div className="remember-forget">
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </div>

        <Link to="/login"> 
        <button type="submit">Register</button>
        </Link>

      </form>
    </div>
  );
};

export default LoginForm;
