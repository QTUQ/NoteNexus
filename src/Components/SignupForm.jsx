import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from './InputField';
import Notes from './notePage';

const SignupForm = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform signup logic
      // Perform signup logic locally
    console.log("Registered user:", user);
    // Clear form fields
    setUser({
      firstName: "",
      lastName: "",
      email: "",
    });
    // Navigate to the next page
    navigate('/Notes');
  };

  return (
    <div className="notePage">
      <form className="container" onSubmit={handleSubmit}>
        <h1>Sign Up to NoteNexus!</h1>
        <InputField onChange={handleChange} type="text" name="fName" placeholder="First Name" required autoFocus />
        <InputField onChange={handleChange} type="text" name="lName" placeholder="Last Name" required />
        <InputField onChange={handleChange} type="email" name="email" placeholder="Email" required />
        <div className="rem">
          <input className="remebercheck" type="checkbox" value="remember-me" id="flexCheckDefault" />
          <label className="remeberlabel" htmlFor="flexCheckDefault">
            Remember me
          </label>
        </div>
        <button className="signup" type="submit">Sign Me Up!</button>
      </form>
    </div>
  );
};

export default SignupForm;
