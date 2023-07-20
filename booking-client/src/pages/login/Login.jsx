import { useContext, useState } from "react"
import AuthContext from "../../context/AuthContext"
import "./login.css"

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined, 
  }) 
  const { loading, error, dispatch } = useContext(AuthContext)
  return (
    <div>Login</div>
  )
}

export default Login