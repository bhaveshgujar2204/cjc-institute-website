import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DisplayBatch() {
const [batches, setBatches] = useState([]);

function getAllUpComingBatches(){

  axios.get('http://localhost:3000/batches')
      .then(res=>{
              if(res.status===200){
                 setBatches(res.data)
              }
      })
      .catch(error=>alert(error.message))
}

useEffect(()=>getAllUpComingBatches(),[])
function getStyle(cname){
 if(cname==='React' ){
  return {
    backgroundColor:'royalblue',
    color:'white'
  }
 }
  if(cname==='Python' ){
  return {
    backgroundColor:'blue',
    color:'white'
  }
 }
  if(cname==='Java' ){
  return {
    backgroundColor:'Orange',
    color:'white'
  }
 }
   if(cname==='AWS' ){
  return {
    backgroundColor:'Green',
    color:'white'
  }
 }
}



  return (
  <div className="container-fluid mt-4">

    {/* Header */}
    <div className="text-center mb-4">
      <h2 className="fw-bold text-primary">Our Upcoming Batches</h2>
      <p className="text-muted">Enroll now and upgrade your skills</p>
    </div>

    {/* Cards Grid */}
    <div className="row g-4">

      {
        batches.map((batch, index) => (

          <div key={index} className="col-md-4 col-lg-3">

            <div
              className="card border-0 shadow-lg rounded-4 h-100 overflow-hidden"
              style={getStyle(batch.courseName)}
            >

              {/* Logo */}
              <div className="text-center p-3 bg-white">
                <img
                  src={batch.batchLogo}
                  width="100"
                  className="rounded-3 shadow-sm"
                  alt="logo"
                />
              </div>

              {/* Body */}
              <div className="card-body text-center">

                <h4 className="fw-bold">{batch.courseName}</h4>

                <p className="mb-1">
                  <strong>Batch No:</strong> {batch.batchNo}
                </p>

                <p className="mb-1">
                  <strong>Start On:</strong> {batch.batchStartDate}
                </p>

                <p className="mb-1">
                  <strong>Fees:</strong> ₹ {batch.batchFees}
                </p>

                <p className="mb-1">
                  <strong>Mode:</strong> {batch.batchMode}
                </p>

                <p>
                  <strong>Type:</strong> {batch.batchType}
                </p>

              </div>

              {/* Footer */}
              <div className="card-footer bg-transparent border-0 text-center pb-3">
                <button className="btn btn-light rounded-pill px-4 fw-semibold">
                  Enroll Now
                </button>
              </div>

            </div>

          </div>
        ))
      }

    </div>

  </div>
);
}

export default DisplayBatch