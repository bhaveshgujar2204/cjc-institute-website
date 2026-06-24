import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../Component/Header'
import DisplayBatch from '../batch/DisplayBatch'
import AboutUs from '../Component/AboutUs'
import OurCourses from '../courses/OurCourses'
import ContactUs from '../Component/ContactUs'
import AdminLogin from '../Component/AdminLogin'
import Footer from '../Component/Footer'
import OurFaculty from '../Component/OurFaculty'
function LandingPanel() {
    return (
    <>
      
      <Header></Header>
      <Routes>
        <Route path='/' element={<DisplayBatch/>}></Route>
        <Route path="about" element={<AboutUs/>}></Route>
        <Route path="courses" element={<OurCourses/>}></Route>
        <Route path="newBatches" element={<DisplayBatch/>}></Route>
        <Route path='faculty' element={<OurFaculty/>}></Route>
        <Route path="contact" element={<ContactUs/>}></Route>
        <Route path="login" element={<AdminLogin/>}></Route>
        
      </Routes>
      <Footer></Footer>
      
    </>
  )
}
export default LandingPanel