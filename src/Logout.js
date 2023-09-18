import React from 'react'
import { useNavigate} from "react-router-dom";

export const Logout = () => {
    let history = useNavigate();

     const handleSubmit = () => {
        localStorage.removeItem(username,password);
        history.posh('/Login')
    }
  return (
    <div>
        <h1>Logout page</h1>      
         <button onClick={ handleSubmit}>Logout</button>
        
          </div>
  )
}
