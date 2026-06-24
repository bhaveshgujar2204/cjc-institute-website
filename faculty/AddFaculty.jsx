import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

function AddFaculty() {
const {register, handleSubmit, reset, formState} = useForm();

function onSaveData(data){
  axios.post('http://localhost:3000/faculty',data)
  .then((res)=>{
    console.log(res)
    if(res.status===201){
      alert('Faculty Saved Successfully..!')
      reset();
    }
  })
  .catch(error=>{
    alert(error.message)
  })
}
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center  m-5" style={{ minHeight: "100vh"  }}>
      <div className="card shadow-lg border-0 rounded-4 p-4" style={{ width: "700px" }}>
         
          {/* Header */}
      <div className="text-center mb-4">
        <h2 className="fw-bold text-primary">Add New Faculty</h2>
        <p className="text-muted">Fill the details carefully</p>
      </div>

      <form onSubmit={handleSubmit(onSaveData)}>

        {/*Faculty Photo Upload */}
        <div className="mb-4"> 
          <label className="form-label fw-semibold">Upload Image :</label>
          <input type='file' className='form-control rounded-3 shadow-sm' {...register("facultyPhoto")}></input>
        </div>

         {/* Faculty Id */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Faculty Id : </label>
          <input type="text" className="form-control rounded-3 shadow-sm" placeholder="Enter Faculty Id" {...register("facultyId")}
          />
        </div>

        {/* Faculty Name */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Faculty Name :</label>
          <input type='text' className='form-control rounded-3 shadow-sm' placeholder='Enter Faculty Name' {...register("facultyName")}/>
        </div>

        {/* Faculty Course*/}
        <div className="mb-3">
          <label className="form-label fw-semibold">Select Faculty Course Name</label>
          <select className='form-control rounded-3 shadow-sm' {...register("facultyCourse")}>
          <option>Select</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
          <option value="React">React</option>
          <option value="AWS">AWS</option>
          <option value="DataScience">Data Science</option>
          </select>
        </div>

        {/* Experience */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Experience :</label>
          <input type='text' placeholder='Enter Faculty Experience' className='form-control rounded-3 shadow-sm' {...register("facultyExperience")}></input>
        </div>

        {/* Contact No */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Contact No :</label>
          <input type='text' placeholder='Enter Faculty Contact No' className='form-control rounded-3 shadow-sm' {...register("facultyContact")}></input>
        </div>
         
        {/* Submit Button */}
        <div className="d-grid"> 
          <button type="submit"  className="btn btn-primary rounded-pill py-2 fw-semibold shadow">Save Faculty</button>
        </div>

      </form>

      </div>
    </div>
  )
}

export default AddFaculty