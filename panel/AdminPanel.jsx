import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import AddBatch from '../batch/AddBatch';
import ManageBatch from "../batch/ManageBatch";
import EditBatch from "../batch/editBatch";
import AddFaculty from "../faculty/AddFaculty";
import ManageFaculty from "../faculty/ManageFaculty";
import EditFaculty from "../faculty/EditFaculty";

function AdminPanel() {
  return (
    <>
      <div className='bg-primary d-flex justify-content-between p-2'>
        <h1 className='text-white fs-3'>CJC, By Kunal Sir.</h1>
        <Link className='btn btn-danger' to="/">Log-out</Link>
      </div>

      <div className='row'>
        <div className='col col-2  bg-warning'>
          <div className="vertical-menu">
            <Link className='btn btn-dark' to="/admin-panel/new-batch">New Batch</Link>
            <Link className='btn btn-dark' to="/admin-panel/manage-batch">Manage Batch</Link>
            <Link className='btn btn-dark' to="/admin-panel/add-faculty">Add Faculty</Link>
            <Link className='btn btn-dark' to="/admin-panel/manage-faculty">Manage Faculty</Link>
          </div>
        </div>
        <div className='col col-10 bg-light'>
            <Routes>
                <Route path="new-batch" element={<AddBatch/>}></Route>
                <Route path="manage-batch" element={<ManageBatch/>}></Route>
                <Route path="edit-batch/:id" element={<EditBatch/>}></Route>
                <Route path="add-faculty" element={<AddFaculty/>}></Route>
                <Route path="manage-faculty" element={<ManageFaculty/>}></Route>
                <Route path='edit-faculty/:id' element={<EditFaculty/>}></Route>

                
            </Routes>


        </div>
      </div>
    </>
  );
}

export default AdminPanel;
