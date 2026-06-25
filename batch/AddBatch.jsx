import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function AddBatch() {
  const [logo, setLogo] = useState("");
  const { register, handleSubmit, reset, formState } = useForm();
  
  function onLogoChange(event) {
    let logoURL = URL.createObjectURL(event.target.files[0]);
    console.log(logoURL);
    setLogo(logoURL);
  }
 
  function onSaveData(data){
    data.batchLogo=logo;
    console.log(data)
 
    axios.post('http://localhost:3000/batches',data)
    .then((res)=>{ 
      console.log(res)
      if(res.status===201){
        alert('Batch Saved Successfully..!')
        reset();
      }
    }
     )
     .catch(error=>{
      alert(error.message)
     })
      }
  return (
  <div className="container-fluid d-flex justify-content-center align-items-center  m-5" style={{ minHeight: "100vh"  }}>
    <div className="card shadow-lg border-0 rounded-4 p-4" style={{ width: "700px" }}>
      
      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="fw-bold text-primary">Add New Upcoming Batch</h2>
        <p className="text-muted">Fill the details carefully</p>
      </div>

      <form onSubmit={handleSubmit(onSaveData)}>

        {/* Batch No */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Batch No</label>
          <input
            type="text"
            className="form-control rounded-3 shadow-sm"
            placeholder="Enter Batch Number"
            {...register("batchNo")}
          />
        </div>

        {/* Course Name */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Course Name</label>
          <select className="form-select rounded-3 shadow-sm" {...register("courseName")}>
            <option>Select</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="Angular">Angular</option>
            <option value="React">React</option>
            <option value="AWS">AWS</option>
            <option value="DataScience">Data Science</option>
          </select>
        </div>

        {/* Start Date */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Batch Start On</label>
          <input
            type="date"
            className="form-control rounded-3 shadow-sm"
            {...register("batchStartDate")}
          />
        </div>

        {/* Fees */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Batch Fees</label>
          <input
            type="text"
            className="form-control rounded-3 shadow-sm"
            placeholder="Enter Fees"
            {...register("batchFees")}
          />
        </div>

        {/* Batch Mode */}
        <div className="mb-3">
          <label className="form-label fw-semibold d-block">Batch Mode</label>
          <div className="d-flex gap-4">

            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                value="Online"
                {...register("batchMode")}
              />
              <label className="form-check-label">Online</label>
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                value="Offline"
                {...register("batchMode")}
              />
              <label className="form-check-label">Offline</label>
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                value="Hybrid"
                {...register("batchMode")}
              />
              <label className="form-check-label">
                Hybrid (Online & Offline)
              </label>
            </div>

          </div>
        </div>

        {/* Batch Type */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Batch Type</label>
          <select className="form-select rounded-3 shadow-sm" {...register("batchType")}>
            <option>Select</option>
            <option value="Regular">Regular</option>
            <option value="Fullday">Fullday</option>
            <option value="Special">Special</option>
          </select>
        </div>

        {/* Logo Upload */}
        <div className="mb-4">
          <label className="form-label fw-semibold">Batch Logo</label>
          <input
            type="file"
            className="form-control rounded-3 shadow-sm"
            onChange={onLogoChange}
          />
        </div>

        {/* Submit Button */}
        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-primary rounded-pill py-2 fw-semibold shadow"
          >
            Save Batch
          </button>
        </div>

      </form>
    </div>
  </div>
);
}

export default AddBatch;
