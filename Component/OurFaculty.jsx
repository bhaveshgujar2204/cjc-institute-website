import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

function OurFaculty() {
  const [faculties , setFaculties]=useState([]);

  function getAllUpComingFaculty(){
    axios.get('http://localhost:3000/faculty')
    .then(res => {
      if(res.status===200){
        setFaculties(res.data)
      }
    })
    .catch(error => alert(error.message))
  }
  useEffect(()=>getAllUpComingFaculty(),[])
  return (
<>
    <div className="premium-grid">

        {faculties.map((faculty, index) => (
          <div className="glass-card" key={index}>

            <div className="logo-box">
              <img src={faculty.facultyPhoto} alt="image" />
            </div>

            <h4>{faculty.facultyName}</h4>

            <div className="course-info">
              <p><strong>Course :</strong> {faculty.facultyCourse}</p>
              <p><strong>Experience :</strong> {faculty.facultyExperience}</p>
              <p><strong>Contact No :</strong> {faculty.facultyContact}</p>
            </div>

          </div>
        ))}

      </div>


{/* ===== CSS ===== */}
<style>{`

body{
  background: linear-gradient(135deg,#f5f7fa,#c3cfe2);
  min-height:100vh;
}

/* Grid */
.premium-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
  gap:40px;
  padding:60px;
}

/* Card */
.glass-card{
  background: rgba(255,255,255,0.7);
  backdrop-filter: blur(10px);
  border-radius:25px;
  padding:30px;
  text-align:center;
  color:#2c3e50;
  position:relative;
  overflow:hidden;
  transition:0.4s;
  box-shadow:0 8px 25px rgba(0,0,0,0.15);
}

/* Hover */
.glass-card:hover{
  transform:translateY(-10px);
  box-shadow:0 18px 40px rgba(0,0,0,0.25);
}

/* Logo */
.logo-box img{
  width:130px;
  margin-bottom:15px;
  transition:0.4s;
}

.glass-card:hover img{
  transform:scale(1.1);
}

/* Title */
.glass-card h4{
  font-weight:600;
  margin-bottom:18px;
}

/* Info */
.course-info p{
  margin:6px 0;
  font-size:15px;
  color:#555;
}



.premium-btn:hover{
  transform:scale(1.08);
}

`}</style>
</>
  );
  
}


export default OurFaculty