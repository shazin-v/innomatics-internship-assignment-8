// src/components/StudentForm.js
import React, { useState } from "react";

const StudentForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    class: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" onChange={handleChange} required />

        <label>Age:</label>
        <input type="number" name="age" onChange={handleChange} required />

        <label>Class:</label>
        <input type="text" name="class" onChange={handleChange} required />

        <label>Address:</label>
        <input type="text" name="address" onChange={handleChange} required />

        <label>Phone:</label>
        <input type="text" name="phone" onChange={handleChange} required />

        <button type="submit">Register Student</button>
      </form>
    </div>
  );
};

export default StudentForm;
