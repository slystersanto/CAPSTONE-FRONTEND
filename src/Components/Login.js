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
      <div class="login-container">
        <div className="login-form-container">
        <h1 className="login-title">Login</h1>
        <form onSubmit={formik.handleSubmit}>
          <label for="email">Email</label>
          <input
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            type="email"
            id="email"
            placeholder="user1@gmail.com"
           
          />

          <label for="password">Password</label>
          <input
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            type="password"
            id="password"
            placeholder="admin1234"
           
            
          />

          <input type="submit" value="Login"/>
        </form>
      </div>
      </div>
    </>
  );
};

export default Login;
