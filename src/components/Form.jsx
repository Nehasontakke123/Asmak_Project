import React, { useState } from 'react';
import '../assets/css/Form.css';  // Import the form styling
import AddImg4 from "../assets/images/img1_files/marketplace-G6fWtQyN.jpg";


const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      alert(`Username: ${username}\nPassword: ${password}`);
    } else {
      alert("Please fill in both fields.");
    }
    
  };

  return (
    <div className="form-container">
      <h2>Login Form</h2>
      <img src={AddImg4} alt="" />
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;  // ✅ Correct default export

