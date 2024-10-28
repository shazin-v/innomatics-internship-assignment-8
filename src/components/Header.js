// src/components/Header.js
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/students">Student List</Link>
        <Link to="/register">Register Student</Link>
      </nav>
    </header>
  );
};

export default Header;
