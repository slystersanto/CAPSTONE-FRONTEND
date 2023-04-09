import { useFormik } from "formik";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
    const navigate=useNavigate();
    const formik = useFormik({
    
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit:async (values)=>{
        try {
        const login= await axios.post("https://capstone-backend-node.onrender.com/login",values);
        window.localStorage.setItem("token",login.data.token)
        navigate("/featured-color")
        } catch (error) {
            alert("Login failed")
            console.log(error);
        }

    }
  });
  return (
    <>
       <div className="login-container">
      <div className="login-form-container">
        <h2 className="log-ti">Log In</h2>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" value={formik.values.email} onChange={formik.handleChange} id="email" name="email" placeholder="user1@gmail.com"  />

          <label htmlFor="password">Password</label>
          <input type="password" value={formik.values.password} onChange={formik.handleChange} id="password" name="password"placeholder="admin1234"  />

          <button type="submit">Log In</button>
        </form>
        <div className="login-options">
          <a href="#">Forgot Password?</a>
          <span>
            Don't have an account? <a href="#">Sign Up</a>
          </span>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
