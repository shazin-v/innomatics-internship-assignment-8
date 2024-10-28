// src/components/RegisterStudent.js
import React, { useContext, useState } from "react";
import { StudentContext } from "../context/StudentContext";
import { useNavigate } from "react-router-dom";

const RegisterStudent = () => {
  const { addStudent } = useContext(StudentContext);
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    name: "",
    email: "",
    age: "",
    class: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(student);
    setStudent({
      name: "",
      email: "",
      age: "",
      class: "",
      address: "",
      phone: "",
    });
    alert("student registered accesfully");
    navigate("/students");
  };

  return (
    <div className="register-container">
      <h1>Student Registration</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
          placeholder="Student Name"
          required
        />
        <input
          type="email"
          name="email"
          value={student.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="number"
          name="age"
          value={student.age}
          onChange={handleChange}
          placeholder="Age"
          required
        />
        <input
          type="text"
          name="class"
          value={student.class}
          onChange={handleChange}
          placeholder="Class"
          required
        />
        <input
          type="text"
          name="address"
          value={student.address}
          onChange={handleChange}
          placeholder="Address"
          required
        />
        <input
          type="tel"
          name="phone"
          value={student.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          maxLength="10" /* Set maximum length for phone number */
        />
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterStudent;
