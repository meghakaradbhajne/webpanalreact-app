 import React,{useState} from 'react'
 import { NavLink,useNavigate} from "react-router-dom";
 import  './Tablestyle.css';
import Employees from './Employees';
import Addtask from './Addtask';
import './Addtask.css'
function Tasks(){
   
  let history = useNavigate();
    const handleDelete = (id) => {
     const index=Employees.map(function(e){
      return e.id
     }).indexOf(id);
     Employees.splice(index,1);

    history('/Tasks')


  }
       return( 
        <div>
        <nav>
          <h3 className="logo">Logo</h3>
        <ul className="navbar">
          <li><NavLink to="/">Home</NavLink></li>           
            <li><NavLink to="/tasks">Tasks</NavLink></li>
           <li><NavLink to='/user'>User</NavLink></li>
         </ul> 
         
     </nav>
   
     <div className='tablestyle'> 
           <table  >
            <thead>
          <tr >
          
                  <th>id</th> 
                <th>title</th>
                <th>completed</th> 
               
           </tr> 
            </thead>
            <tbody>
             {
            
             Employees && Employees.length > 0
             ?

            Employees.map((item,i) => {
              return(
                 <tr key={i}>
                
                  
                  <td>{item.id  }</td>
                  <td>{item.title  }</td>
                  <td>{item.completed}</td> 
                  
                  <td>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>  
                  </td>
                </tr>
              )
            })
            :
            "No data available"
          }
          
     </tbody>
       </table>
       
       <NavLink className="addbutton" to="/Addtasks">
        <button>Add</button>
      </NavLink>
      </div>
     
       </div>
  )
}

export default Tasks