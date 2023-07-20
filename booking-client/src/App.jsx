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

axios.defaults.baseURL =  "http://localhost:8000/api";



function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/auth" element={<Login/>}/>
      </Routes>
    </Router>
  
  )
}
export default App
