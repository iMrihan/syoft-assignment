import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  let initial = {
    username: "",
    phone: "",
    email: "",
    password: "",
    passwordConfirm: "",
    role: "",
  };
  const [userDetails, setUserDetails] = useState(initial);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  console.log(userDetails);

  const formSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:3005/api/register", userDetails)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data);
      });

    setUserDetails(initial);
  };

  return (
    <form onSubmit={formSubmit}>
      <h1>Register Page</h1>
      <input
        required
        type="text"
        placeholder="Enter your username"
        name="username"
        onChange={handleChange}
        value={userDetails.username}
      />
      <input
        required
        type="number"
        placeholder="Enter your phone number"
        name="phone"
        onChange={handleChange}
        value={userDetails.phone}
      />
      <input
        required
        type="text"
        placeholder="Enter your email"
        name="email"
        onChange={handleChange}
        value={userDetails.email}
      />
      <input
        required
        type="password"
        placeholder="Enter your password"
        name="password"
        onChange={handleChange}
        value={userDetails.password}
      />
      <input
        required
        type="password"
        placeholder="Enter your passwordConfirm"
        name="passwordConfirm"
        onChange={handleChange}
        value={userDetails.passwordConfirm}
      />
      <select
        name="role"
        onChange={handleChange}
        value={userDetails.role}
        required
      >
        <option value="">Select role</option>
        <option value="admin">Admin</option>
        <option value="manager">Manager</option>
        <option value="staff">Staff</option>
      </select>

      <input type="submit" value="Register" />
    </form>
  );
}
