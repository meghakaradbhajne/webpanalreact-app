import React,{useState , useEffect} from "react";
import Reactt from "./components/Reactt.js";
import Java from "./components/Java.js";
import JavaScript from "./components/Javascript.js";
import { NavLink } from "react-router-dom";
 import './navbar.css';

 const  Navbar = () => {

    const [language, setLanguage] = useState("selectDreamCar");
     const [reactt, setReactt] = useState(false);
    const [java, setJava] = useState(false);
    const [javaScript, setJavascript] = useState(false);
    useEffect(() => {
      language === "reactt"
        ? setReactt(true)
        : setReactt(false);
    language === "java" ? setJava(true) : setJava(false);
      language === "javascript" ? setJavascript(true) : setJavascript(false);
    }, [language]);
  
    const handleOnChange = (e) => {
      setLanguage(e.target.value);
    };
  
    const makeFirstLetterCapital = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    };
  
    const renderResult = () => {
      let result;
      language === "selectlanguage"
        ? (result = "select your language")
        : (result = makeFirstLetterCapital(language));
      return result;
    };
  return (
    <div className="main">
   
          <nav>
          <h3 className="logo">Logo</h3>
        <ul className="navbar">
          <li><NavLink to="/">Home</NavLink></li>           
            <li><NavLink to="/tasks">Tasks</NavLink></li>
           <li><NavLink to='/user'>User</NavLink></li>
         </ul> 
         
     </nav>
     <div >
      <div>
        <h1>Hello {renderResult()}</h1>
      </div>
      <div className="mt-4">
        <select className="form-select" value={language} onChange={handleOnChange}>
          <option value="selectlanguage">Select your language</option>
          <option value="reactt">React</option>
          <option value="java">Java</option>
          <option value="javascript">JavaScript</option>
        </select>
      </div>
      {reactt && <Reactt />}
      {java && <Java />}
       {javaScript && <JavaScript />}
    </div>
    </div>
  );
}

export default Navbar;


{/* import { useEffect, useState } from "react";
import Reactt from "./components/Reactt.js";
import Java from "./components/Java.js";
import JavaScript from "./components/Javascript.js";

export default function App() {
  const [language, setLanguage] = useState("selectDreamCar");

  const [reactt, setReactt] = useState(false);
  const [java, setJava] = useState(false);
  const [javaScript, setJavascript] = useState(false);
  useEffect(() => {
    language === "reactt"
      ? setReactt(true)
      : setReactt(false);
  language === "java" ? setJava(true) : setJava(false);
    language === "javascript" ? setJavascript(true) : setJavascript(false);
  }, [language]);

  const handleOnChange = (e) => {
    setLanguage(e.target.value);
  };

  const makeFirstLetterCapital = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const renderResult = () => {
    let result;
    language === "selectlanguage"
      ? (result = "select your language")
      : (result = makeFirstLetterCapital(language));
    return result;
  };

  return (
    <div >
      <div>
        <h1>Hello {renderResult()}</h1>
      </div>
      <div className="mt-4">
        <select className="form-select" value={language} onChange={handleOnChange}>
          <option value="selectlanguage">Select your language</option>
          <option value="reactt">React</option>
          <option value="java">Java</option>
          <option value="javascript">JavaScript</option>
        </select>
      </div>
      {reactt && <Reactt />}
      {java && <Java />}
       {javaScript && <JavaScript />}
    </div>
  );
} */}
