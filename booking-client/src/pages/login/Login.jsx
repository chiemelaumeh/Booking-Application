import { useContext, useState } from "react"
import AuthContext from "../../context/AuthContext"
import "./login.css"

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined, 
  }) 
  const { loading, error, dispatch } = useContext(AuthContext)

  const handleChange = (e) => {
  setCredentials((prev)=>({ ...prev, [e.target.id]: e.target.value}))
  }

  const handleClick = (e) => {
    e.preventDefault()
    
    
  }
  return (
    <div className="login">
      <div className="lContainer">
         <input type="text" placeholder="username" id="username" value={credentials.username} onChange={handleChange} className="lInput" />
         <input type="password" placeholder="password" id="password" value={credentials.username} onChange={handleChange} className="lInput" />
         <button onClick={handleClick} className="lButton">Login</button>
         {
          error && 
          <span>{error.message}</span>
         }

      </div>
    </div>
  )
}

export default Login