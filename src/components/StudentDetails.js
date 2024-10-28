// src/components/StudentDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const StudentDetails = () => {
  const { id } = useParams();
  const { students } = useContext(StudentContext);
  const student = students.find((s) => s.id === parseInt(id));

  if (!student) {
    return <div>Student not found!</div>;
  }

  return (
    <div>
      <h1>{student.name}'s Details</h1>
      <p>Email: {student.email}</p>
      <p>Class: {student.class}</p>
      <p>Address: {student.address}</p>
      <p>Phone: {student.phone}</p>
    </div>
  );
};

export default StudentDetails;
