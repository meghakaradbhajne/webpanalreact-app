  import React, { useRef} from "react";

 import './Login.css';
 import Navbar from './Navbar'       
 function Login(){
    //  const navigate = useNavigate();
     const username=useRef()
     const password=useRef()
     const getusername=localStorage.getItem("usernameData")
     const getPassword=localStorage.getItem("passwordData")
     const handleSubmit=()=>{
         if(username.current.value==="Megha"&&password.current.value==="12345"){
             localStorage.setItem("usernameData","Megha")
             localStorage.setItem("passwordData","12345")
            //  navigate("/Navbar");
         }
     }
   
    return(
         <div>
              {
            getusername&&getPassword?
                 <Navbar/>:  
                 <div className="main_div">
                    {/* <div className="box"> */}
             <form onSubmit={handleSubmit}>
               <h2>Login Form</h2>
               <br/>
                 <div>
                    <label><b>Username</b></label>

                     <input type="text" ref={username} />
                 </div><br/>
                 <div>
                 <label><b>password</b></label>
                     <input type="password" ref={password} />
                 </div><br/>
                 <button>Login</button>
                 
             </form>
             </div>
            //  </div>
               }  
               
         </div>
     );
 }
export default Login;



