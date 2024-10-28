import React, { useContext, useState } from "react";
import { StudentContext } from "../context/StudentContext";
import { Link } from "react-router-dom";

const StudentList = () => {
  const { students, deleteStudent } = useContext(StudentContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState(""); // State for class filter
  const [sortOption, setSortOption] = useState(""); // State for sorting option

  // Function to handle sorting
  const sortStudents = (students) => {
    if (sortOption === "name") {
      return students.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "class") {
      return students.sort((a, b) => a.class.localeCompare(b.class));
    }
    return students;
  };

  // Filter students based on search term and selected class
  const filteredStudents = students.filter((student) => {
    const matchesName = student.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesClass = selectedClass ? student.class === selectedClass : true;
    return matchesName && matchesClass;
  });

  // Sort filtered students
  const sortedStudents = sortStudents(filteredStudents);

  // Classes for filtering (you can modify this array as needed)
  const classes = [...new Set(students.map((student) => student.class))]; // Get unique classes

  return (
    <div>
      <h1>Student List</h1>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input" // Add your CSS class
      />
      <select
        value={selectedClass}
        onChange={(e) => setSelectedClass(e.target.value)}
      >
        <option value="">All Classes</option>
        {classes.map((classItem) => (
          <option key={classItem} value={classItem}>
            {classItem}
          </option>
        ))}
      </select>
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="">Sort By</option>
        <option value="name">Name</option>
        <option value="class">Class</option>
      </select>
      <table className="student-table">
        <thead>
          <tr>
            <th style={{ backgroundColor: "#007bff", color: "white" }}>Name</th>
            <th style={{ backgroundColor: "#007bff", color: "white" }}>
              Email
            </th>
            <th style={{ backgroundColor: "#007bff", color: "white" }}>Age</th>
            <th style={{ backgroundColor: "#007bff", color: "white" }}>
              Class
            </th>
            <th style={{ backgroundColor: "#007bff", color: "white" }}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.age}</td>
              <td>{student.class}</td>
              <td>
                <Link to={`/students/${student.id}`}>View</Link> |
                <Link to={`/update/${student.id}`}>Edit</Link> |
                <button onClick={() => deleteStudent(student.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
