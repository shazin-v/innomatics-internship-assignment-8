// src/context/StudentContext.js
import React, { createContext, useState, useEffect } from "react";
import studentsData from "../data/students.json";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    setStudents(studentsData);
  }, []);

  const addStudent = (student) => {
    setStudents((prev) => [...prev, { ...student, id: prev.length + 1 }]);
  };

  const updateStudent = (id, updatedStudent) => {
    setStudents((prev) =>
      prev.map((student) => (student.id === id ? updatedStudent : student))
    );
  };

  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  return (
    <StudentContext.Provider
      value={{ students, addStudent, updateStudent, deleteStudent }}
    >
      {children}
    </StudentContext.Provider>
  );
};
