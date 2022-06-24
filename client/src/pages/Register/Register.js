import { useState } from "react";
import "./Register.css"
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/apiCalls";
import { useNavigate } from "react-router-dom";

const Register =()=>{
  let navigate = useNavigate();

    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
     const dispatch=useDispatch() 
     const{error}=useSelector((state)=>state.user)
     console.log(error);
    const inputs = [
        {
          id: 1,
          name: "username",
          type: "text",
          placeholder: "Username",
          title:
            "Username should be 3-16 characters and shouldn't include any special character!",
          pattern: "^[A-Za-z0-9]{3,16}$",
          required: true,
        },
        {
          id: 2,
          name: "email",
          type: "email",
          placeholder: "Email",
          title: "It should be a valid email address!",
          required: true,
        },
        {
          id: 3,
          name: "password",
          type: "password",
          placeholder: "Password",
          title:
            " Passwrod should be 8-16 characters and include at least 1 letter, 1 number and 1 special character!",
          pattern:
            "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
          required: true,
        },
        {
          id: 4,
          name: "confirmPassword",
          type: "password",
          placeholder: "Confirm Password",
          title: "Password don't match!",
          pattern: values.password,
          required: true,
        }]
        
      

        const handleSubmit=(event)=>{
          event.preventDefault();
           const user = { ...values };
          register(dispatch, user);      
        }

        const handleChange = (event) => {
            setValues((prev) => {
              return { ...prev, [event.target.name]: event.target.value };
            });
          };

    return (
       <div className="register">
        <div className="form-area">
        <h2>CREATE AN ACCOUNT</h2>
            <form onSubmit={handleSubmit}>
            {inputs.map((input) => (
            <input
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={handleChange}
            />))}
            {error&&<span style={{color:"red",fontWeight:"400"}}>Something went wrong...</span>}
            
            <p>By creating an account, I consent to the processing of my personal data in accordance with the <span>PRIVACY POLICY</span></p>
            <button>CREATE</button>
            </form>

        </div>
       </div>
      );
}

export default Register;