import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ManageFaculty() {

  const [faculties ,setFaculties]     =useState([]);
 const navigate= useNavigate();

function getAllUpComingFaculty(){

  axios.get('http://localhost:3000/faculty')
      .then(res=>{
              if(res.status===200){
                 setFaculties(res.data)
              }
      })
      .catch(error=>alert(error.message))
}
function deleteFaculty(id){
   alert( id )

   axios.delete(`http://localhost:3000/faculty/${id}`)
        .then(res=>{
          if(res.status===200){
            getAllUpComingFaculty()
          }
        })
        .catch(error=>alert(error.message))
}

function editFaculty(id){
  navigate(`/admin-panel/edit-faculty/${id}`)
}

useEffect(()=>getAllUpComingFaculty(),[])
  return (
    <div className="container-fluid mt-4">

    {/* Header */}
    <div className="card border-0 shadow-sm rounded-4 p-3 mb-4">
      <h2 className="text-center text-primary fw-bold m-0">
        Manage Faculty
      </h2>
    </div>

    {/* Table Card */}
    <div className="card border-0 shadow-lg rounded-4 p-3">
      <div className="table-responsive">
        <table className="table align-middle table-hover">

          <thead className="table-light">
            <tr>
              <th>Faculty Id</th>
              <th>Name</th>
              <th>Course</th>
              <th>Experience</th>
              <th>Contact</th>

              <th>Photo</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {
              faculties.map((faculty) => (
                <tr key={faculty.id}>

                  <td className="fw-semibold">{faculty.facultyId}</td>

                  <td>{faculty.facultyName}</td>

                  <td>
                    <span className=" px-3 py-2">
                      {faculty.facultyCourse}
                    </span>
                  </td>

                  <td className="fw-semibold text-success">
                     {faculty.facultyExperience}
                  </td>
                  <td>
                    <span className=" px-3 py-2">
                      {faculty.facultyContact}
                    </span>
                  </td>


                  <td>
                    <img
                      src={faculty.facultyPhoto}
                      width="70"
                      className="rounded-3 shadow-sm"
                      alt="logo"
                    />
                  </td>

                  <td>
                    <div className="d-flex gap-2">

                      <button
                        className="btn btn-outline-danger btn-sm rounded-pill px-3 fw-semibold"
                        onClick={() => { deleteFaculty(faculty.id) }}
                      >
                        Delete
                      </button>

                      <button
                        className="btn btn-outline-primary btn-sm rounded-pill px-3 fw-semibold"
                        onClick={() => { editFaculty(faculty.id) }}
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

export default ManageFaculty