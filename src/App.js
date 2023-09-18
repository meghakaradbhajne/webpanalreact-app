import { BrowserRouter, Routes,Route } from "react-router-dom";
import Login from './Login';
import Navbar from "./Navbar";
import Tasks from "./Tasks";
import User from "./User";
import Home from './Home'
import Addtask from "./Addtask";

export default function App() {
  
    return(
      <div className="app">
      <BrowserRouter>
     <Routes>
   
    
            <Route path="/" element= {<Login/>}/> 
            <Route path="/Navbar"  element={<Navbar/>}/> 
            <Route path="/home" element={<Home/>} />
            <Route path="/tasks" element={<Tasks/>} />
            <Route path="/addtasks" element={<Addtask/>} />
           <Route path="/user" element={<User/>}/>   
           

      </Routes>
      </BrowserRouter>    
         
    
    </div>
  );
}

    
