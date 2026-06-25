import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom';

function EditBatch() {
   const {register,handleSubmit,reset,setValue,formState} =useForm();

  const {id} =useParams();
   const navigate =useNavigate()

  function getBatchToEdit(){
    axios.get(`http://localhost:3000/batches/${id}`)
          .then(res=>{
            if(res.status===200){

             setValue('batchNo' , res.data.batchNo);
            setValue('courseName', res.data.courseName)
            setValue('batchStartDate',res.data.batchStartDate)
            setValue('batchFees',res.data.batchFees)
            setValue('batchType',res.data.batchType)
            setValue('batchMode',res.data.batchMode)
            


            }
          })
  }
  useEffect(()=>getBatchToEdit,[])

   function onLogoChange(){

   }

   function updateBatch(data){
    console.log(data)
    axios.put( `http://localhost:3000/batches/${id}`,data)
    .then(res=>{
      if(res.status===200){
          navigate('/admin-panel/manage-batch')
      }
    })
   }
  return (
  <div className="container-fluid d-flex justify-content-center align-items-center m-5" style={{ minHeight: "100vh" }}>
    
    <div className="card shadow-lg border-0 rounded-4 p-4" style={{ width: "700px" }}>
      
      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="fw-bold text-warning">Edit Upcoming Batch</h2>
        <p className="text-muted">Batch ID: {id}</p>
      </div>

      <form onSubmit={handleSubmit(updateBatch)}>

        {/* Batch No */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Batch No</label>
          <input
            type="text"
            className="form-control rounded-3 shadow-sm"
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
            <option value="DA">DA</option>
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

          </div>
        </div>

        {/* Batch Type */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Batch Type</label>
          <select {...register("batchType")} className="form-select rounded-3 shadow-sm">
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

        {/* Buttons */}
        <div className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-outline-secondary rounded-pill px-4"
            onClick={() => navigate('/admin-panel/manage-batch')}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="btn btn-warning rounded-pill px-4 fw-semibold shadow"
          >
            Update Batch
          </button>
        </div>

      </form>
    </div>
  </div>
);
}

export default EditBatch