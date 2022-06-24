import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { login } from "../../redux/apiCalls";
import {useDispatch, useSelector} from "react-redux";

const Login =()=>{
const [username,setUsername]=useState("");
const [password,setPassword]=useState("");
const{isFetching,error}=useSelector((state)=>state.user)
const dispatch=useDispatch()

const handleClick=(e)=>{
  e.preventDefault();
  login(dispatch,{username,password});
}


    return (
       <div className="login">
        <div className="form-area">
        <h2>SIGN IN</h2>
            <form className="login-form">

            <input
            placeholder="Username"
            onChange={(e)=>setUsername(e.target.value)}       
           />

            <input
            type="password"
            placeholder="password"
            onChange={(e)=>setPassword(e.target.value)} 
           />
           <div className="login-attr">
           {error&&<span style={{color:"red",fontWeight:"400"}}>Something went wrong...</span>}
           <p>DO YOU NOT REMEMBER PASSWORD?</p>
           
           <Link
                to="/register"
                style={{ textDecoration: "none", color: "black" }}
              >
                <p>CREATE AN ACCOUNT</p>
              </Link>
           </div>
              
            <button onClick={handleClick} disabled={isFetching} className="login-button">SIGN IN</button>
            
            </form>

        </div>
       </div>
      );
}

export default Login;