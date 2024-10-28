// src/components/UpdateStudent.js
import React, { useContext, useEffect, useState } from "react";
import { StudentContext } from "../context/StudentContext";
import { useNavigate, useParams } from "react-router-dom";

const UpdateStudent = () => {
  const { id } = useParams();
  const { students, updateStudent } = useContext(StudentContext);
  const [student, setStudent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const foundStudent = students.find((s) => s.id === parseInt(id));
    if (foundStudent) setStudent(foundStudent);
  }, [students, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateStudent(parseInt(id), student);
    navigate("/students");
  };

  if (!student) return <div>Loading...</div>;

  return (
    <div>
      <h1>Update Student</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          value={student.email}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          value={student.age}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="class"
          value={student.class}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          value={student.address}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          value={student.phone}
          onChange={handleChange}
          required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateStudent;
