import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ManageBatch() {
  const [batches ,setBatches]     =useState([]);
 const navigate= useNavigate();
function getAllUpComingBatches(){

  axios.get('http://localhost:3000/batches')
      .then(res=>{
              if(res.status===200){
                 setBatches(res.data)
              }
      })
      .catch(error=>alert(error.message))
}
function deleteBatch(id){
   alert(id)

   axios.delete(`http://localhost:3000/batches/${id}`)
        .then(res=>{
          if(res.status===200){
            getAllUpComingBatches()
          }
        })
        .catch(error=>alert(error.message))
}
function editBatch(id){
  navigate(`/admin-panel/edit-batch/${id}`)
}
useEffect(()=>getAllUpComingBatches(),[])
  return (
  <div className="container-fluid mt-4">

    {/* Header */}
    <div className="card border-0 shadow-sm rounded-4 p-3 mb-4">
      <h2 className="text-center text-primary fw-bold m-0">
        Manage Upcoming Batches
      </h2>
    </div>

    {/* Table Card */}
    <div className="card border-0 shadow-lg rounded-4 p-3">
      <div className="table-responsive">
        <table className="table align-middle table-hover">

          <thead className="table-light">
            <tr>
              <th>Batch No</th>
              <th>Course</th>
              <th>Type</th>
              <th>Fees</th>
              <th>Mode</th>
              <th>Start On</th>
              <th>Logo</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {
              batches.map((batch) => (
                <tr key={batch.id}>

                  <td className="fw-semibold">{batch.batchNo}</td>

                  <td>{batch.courseName}</td>

                  <td>
                    <span className=" px-3 py-2">
                      {batch.batchType}
                    </span>
                  </td>

                  <td className="fw-semibold text-success">
                    ₹ {batch.batchFees}
                  </td>

                  <td>
                    {
                      batch.batchMode?.map((mode, index) => (
                        <span
                          key={index}
                          className="  me-2"
                        >
                          {mode}
                        </span>
                      ))
                    }
                  </td>

                  <td>
                    <input
                      type="date"
                      value={batch.batchStartDate}
                      disabled
                      className="form-control form-control-sm"
                    />
                  </td>

                  <td>
                    <img
                      src={batch.batchLogo}
                      width="70"
                      className="rounded-3 shadow-sm"
                      alt="logo"
                    />
                  </td>

                  <td>
                    <div className="d-flex gap-2">

                      <button
                        className="btn btn-outline-danger btn-sm rounded-pill px-3 fw-semibold"
                        onClick={() => { deleteBatch(batch.id) }}
                      >
                        Delete
                      </button>

                      <button
                        className="btn btn-outline-primary btn-sm rounded-pill px-3 fw-semibold"
                        onClick={() => { editBatch(batch.id) }}
                      >
                        Edit
                      </button>

                    </div>
                  </td>

                </tr>
              ))
            }
          </tbody>

        </table>
      </div>
    </div>

  </div>
);
}

export default ManageBatch