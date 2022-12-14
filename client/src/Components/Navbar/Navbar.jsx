import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContextProvider";

export const Navbar = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <div className="navbar">
      <Link className="nav-home" to="/">
        Home
      </Link>

      <Link className="nav-admin" to="/admin">
        Admin
      </Link>
      <Link className="nav-register" to="/register">
        Register
      </Link>
      {/* Show Either logout or login based on auth context. DO NOT show both */}

      {isAuth ? (
        <Link className="nav-logout" to="/logout">
          Logout
        </Link>
      ) : (
        <Link className="nav-login" to="/login">
          Login
        </Link>
      )}
    </div>
  );
};
