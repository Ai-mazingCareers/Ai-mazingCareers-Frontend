import { useEffect, useState } from "react";
import './style/signup.css';

const SignUp = ({setToggle}) => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [passwordC,setPasswordC]=useState("");
    
    const [emailError,setEmailError]=useState("");
    const [nameError,setNameError]=useState("");
    const [passError,setPassError]=useState("");
    const [passCError,setPassCError]=useState("");

    useEffect(()=>{
        password===passwordC?setPassCError(""):setPassCError("Password umatched!");
    },[passwordC]);
    function handleName(value){
        setName(value);
        {/^[A-Za-z\s]+$/.test(name)?setNameError(""):setNameError("Invalid character used!")};
    }
    function handleEmail(value){
        setEmail(value)
        {/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)?setEmailError(""):setEmailError("Email invalid!")};
    }
    function handlePassword(value){
        setPassword(value)
        password.length>6?setPassError(""):setPassError("Password too short!");
    }
    function handlePasswordC(value){
        setPasswordC(value)
    }
    function handleRegister(){
        name.trim()!==""?setNameError(nameError):setNameError("Name can't be empty");
        email.trim()!==""?setEmailError(emailError):setEmailError("Email can't be empty");
        password.trim()!==""?setPassError(passError):setPassError("Password can't be empty");
        password===passwordC?setPassCError(passCError):setPassCError("Password umatched!");
        if(nameError==="" && emailError==="" && passError==="" && passCError===""){
            const date={
                name:name,
                email:email,
                password:password
            };
        }
    }

  return (
    <>
      <div className="signup-form">
        <p>{nameError}</p>
        <label>
            {"Name :"}
            <input 
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e)=>handleName(e.target.value)}
            />
        </label>
        <p>{emailError}</p>
        <label>
            {"Email :"}
            <input 
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e)=>handleEmail(e.target.value)}
            />
        </label>
        <p>{passError}</p>
        <label>
            {"Password :"}
            <input 
                type="password"
                placeholder="Create your password"
                value={password}
                onChange={(e)=>handlePassword(e.target.value)}
            />
        </label>
        <p>{passCError}</p>
        <label>
            {"Confirm Password :"}
            <input 
                type="password"
                placeholder="Re-enter your password"
                value={passwordC}
                onChange={(e)=>handlePasswordC(e.target.value)}
            />
        </label>
      </div>
      <div className="signup-submit">
        <div
            className="signup-btn"
            onClick={handleRegister}
        >
            {"Register"}
        </div>
        <p>
            {"Already have an account? "}
            <span
                onClick={()=>setToggle('login')}
            >
                {"Login"}
            </span>
        </p>
      </div>
    </>
  )
}

export default SignUp
