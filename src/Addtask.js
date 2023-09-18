 import React,{useState} from 'react'
 import { NavLink,useNavigate} from "react-router-dom";
 import Employees from './Employees';
 import{v4 as uuid} from "uuid";
//  import './Addtasks.css';

 const Addtask = () => {
      const[id,setId]= useState('')
      const[title,setTitle]= useState('')
      const[completed,setCompleted]= useState('')
      let history = useNavigate();

      const handleSubmit =(e) =>{
          e.preventDefault();

          const ids =uuid();
          let uniqueId = ids.slice(0,8);

          let a=id,
          b=title,
          c=completed;

          Employees.push({id:a,title:b,completed:c});
          history('/Tasks');
      }
   return (
     <div > 
      <h4>Add Tasks</h4>   
        <div className='main_div'>
          
          <form > 
             <input type="text" placeholder='enter id' required onChange={(e)=> setId(e.target.value)}/><br/><br/>
             <input type="text" placeholder='enter title' required onChange={(e)=> setTitle(e.target.value)}/><br/><br/>
             <input type="text" placeholder='enter completed' required onChange={(e)=> setCompleted(e.target.value)}/><br/><br/>
        
         <button onClick={(e) => handleSubmit(e)} type="submit">Submit</button>
         </form>
         </div>
  

     </div>
   )
 }

 export default Addtask


