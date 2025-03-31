import "../App.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navBar">
      <NavLink
        className={({ isActive }) => (isActive ? "nav-link" : "unselected")}
        to={"/home"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "nav-link" : "unselected")}
        to={"/list"}
      >
        List
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "nav-link" : "unselected")}
        to={"/quiz/1"}
      >
        Quiz
      </NavLink>
    </nav>
  );
}

export default Navbar;