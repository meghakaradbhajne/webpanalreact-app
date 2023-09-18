
 import React from "react";
 import {  NavLink,useNavigate} from "react-router-dom";
//  import '/Users.css';

 
  function User() {

   let history = useNavigate();
  

  
      const handleClick=()=>{
          localStorage.clear();
        //  window.location.reload();
          history('/')
      }
      return (
          <div >
          <nav>
          <h3 className="logo">Logo</h3>
        <ul className="navbar">
          <li><NavLink to="/">Home</NavLink></li>           
            <li><NavLink to="/tasks">Tasks</NavLink></li>
           <li><NavLink to='/user'>User</NavLink></li>
         </ul> 
         
     </nav>

        <button onClick={(handleClick)} style={{textAlign:"center"}}>Logout</button><br/>

    
         </div>
     )
 }
 export default User;










