import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import "./register.css";

const Register = () => {

  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    email:"",
    password: "",
    confirmPassword:"",
  });
  const { user, loading, error, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const response = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
    }
  };
  return (
    <div className="login">
    <div className="lContainer">
      <input
        type="text"
        placeholder="username"
        id="username"
        value={credentials.username}
        onChange={handleChange}
        className="lInput"
      />
        <input
          type="text"
          placeholder="email"
          id="email"
          value={credentials.email}
          onChange={handleChange}
          className="lInput"
        />
      <input
        type="password"
        placeholder="password"
        id="password"
        value={credentials.password}
        onChange={handleChange}
        className="lInput"
      />
      <input
        type="password"
        placeholder="confirm password"
        id="confirmPassword"
        value={credentials.confirmPassword}
        onChange={handleChange}
        className="lInput"
      />
      <button disabled={loading} onClick={handleClick} className="lButton">
        Sign Up
      </button>

      {error && <span className="lError">{error.message}</span>}
     
    </div>
  </div>
  )
}

export default Register
