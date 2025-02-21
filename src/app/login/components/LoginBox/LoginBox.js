import { useState } from "react";
import Login from "./components/Login/Login";
import SignUp from "./components/Signup/Signup";
import './style/LoginBox.css';

const LoginBox = () => {
    const [toggle,setToggle]= useState("login");
  
    return (
            <div className="login-wrapper">
              <div className="login-header">
                  {toggle==="login"?"Welcome Back!":"Create Your Account"}
              </div>
              <div className="info-content">
                  {toggle==="login"?
                      <Login setToggle={setToggle}/>:
                      <SignUp setToggle={setToggle}/>
                  }
              </div>
            </div>
    )
}

export default LoginBox
