// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StudentProvider } from "./context/StudentContext";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import RegisterStudent from "./components/RegisterStudent";
import StudentList from "./components/StudentList";
import StudentDetails from "./components/StudentDetails";
import UpdateStudent from "./components/UpdateStudent";
import "./App.css";

const App = () => {
  return (
    <StudentProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/register" element={<RegisterStudent />} />
          <Route path="/students/:id" element={<StudentDetails />} />
          <Route path="/update/:id" element={<UpdateStudent />} />
        </Routes>
      </Router>
    </StudentProvider>
  );
};

export default App;
