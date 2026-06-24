import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const {register, handleSubmit, formState: { errors } } = useForm();
  const navigate =useNavigate();

  const onSubmit = (data) => {
    if(data.username==='Admin' && data.password==='Admin123'){
      alert('Login Succssfull')
      navigate('/admin-panel')
    }
    else{
      alert('Enter Valid Username & Password')
    }
   
      }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4" style={{ width: "400px", borderRadius: "15px" }}>
        
        <h3 className="text-center mb-4 text-primary">Admin Login</h3>

        <form onSubmit={handleSubmit(onSubmit)}>
          
          {/* Username */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Username</label>
            <input
              type="text"  className="form-control"  placeholder="Enter Username"
            {...register("username", { required: "Username is required" })}/>
            
            {errors.username && (<small className="text-danger">{errors.username.message}</small>)}
              
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"  className="form-control"  placeholder="Enter Password"
                           {...register("password", { required: "Password is required" })}/>
            
            {errors.password && (<small className="text-danger">{errors.password.message}</small>)}
              
            
          </div>

          {/* Forgot Password */}
          <div className="text-end mb-3">
            <button
              type="button"
              className="btn btn-link text-decoration-none p-0"
              onClick={() => alert("Redirect to Forgot Password Page")}
            >
              Forgot Password?
            </button>
          </div>

          {/* Submit Button */}
          <button className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
