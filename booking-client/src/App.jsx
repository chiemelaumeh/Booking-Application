import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import axios from "axios"
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import "./global.css"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";


// axios.defaults.baseURL =  "https://booking-api-g9k3.onrender.com/api";
axios.defaults.baseURL =  "http://localhost:8000/api";



function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
  
  )
}
export default App
