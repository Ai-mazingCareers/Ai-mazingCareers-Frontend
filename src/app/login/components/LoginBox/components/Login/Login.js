import { useState } from "react";
import './style/login.css';

const Login = ({setToggle}) => {
    const [role,setRole]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const [error,setError]=useState("");

    function handleLogin(){
        if(!role){
            setError("Select Role!");
        }else if(!email||!password){
            setError("Email and Password can't be empty!")
        }else{
            setError("");
        }
    }
  return (
    <>
      <div className="login-form">
        <p>{error}</p>
        <label>{"Role :"}
        <label>
            <input
                type="radio"
                name="role"
                value="job-seeker"
                checked={role === "job-seeker"}
                onChange={(e) => setRole(e.target.value)}
            />
            {"Job Seeker"}
        </label>
        <label>
            <input
                type="radio"
                name="role"
                value="job-poster"
                checked={role === "job-poster"}
                onChange={(e) => setRole(e.target.value)}
            />
            {"Job Poster"}
        </label>
        </label>
        <label>
            {"Email :"}
            <input 
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />
        </label>
        <label>
            {"Password :"}
            <input 
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />
        </label>
      </div>
      <div className="login-submit">
        <div
            className="login-btn"
            onClick={handleLogin}
        >
            {"Login"}
        </div>
        <p>
            {"Don't have an account? "}
            <span
                onClick={()=>setToggle('')}
            >
                {"Register"}
            </span>
        </p>
      </div>
    </>
  )
}

export default Login
