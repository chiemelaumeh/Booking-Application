import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai"
import RegisterContext from "../../context/RegisterContext";
import axios from "axios";
import "./register.css";

const Register = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { newUser, loading, error, dispatch } = useContext(RegisterContext);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "REGISTER_START" });
    try {
      const response = await axios.post("/auth/register", credentials);
      dispatch({ type: "REGISTER_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "REGISTER_FAILURE", payload: error.response.data });
    }
  };

  return (
    <div className="login">
        <AiOutlineCloseCircle onClick={()=>navigate("/")} className="close-icon" />
      {!newUser && (
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

          <div className="lSignup">
          <span>Got an account? </span>
          <button className="lButton" onClick={()=>{navigate("/login")}}>Log in</button>
        </div>
          {error && <span className="lError">{error.message}</span>}
        </div>
      )}
      {newUser && (
        <div >
          <span className="lnewUser">
            Profile created for {newUser.username}
          </span>
          <Link to={"/login"}>

          <button onClick={()=>{dispatch({ type: "REGISTER_SUCCESS", payload: null })}} className="lButton">Login</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Register;
