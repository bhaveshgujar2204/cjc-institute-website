import React from "react";
import javalogo from "../assets/coursepng/javalogo.png";

function OurCourses() {

  const courses = [
    {
      title: "Core Java",
      date: "15 Feb 2026",
      fees: "₹15000",
      mode: "Online & Offline",
      img: javalogo
    },
    {
      title: "Advance Java",
      date: "20 Feb 2026",
      fees: "₹18000",
      mode: "Online & Offline",
      img: javalogo
    },
    {
      title: "Spring Boot",
      date: "25 Feb 2026",
      fees: "₹20000",
      mode: "Online",
      img: javalogo
    },
    {
      title: "React",
      date: "25 Feb 2026",
      fees: "₹20000",
      mode: "Online",
      img: javalogo
    }
    
  ];

  return (
    <>
      <div className="premium-grid">

        {courses.map((course, index) => (
          <div className="glass-card" key={index}>

            <div className="logo-box">
              <img src={course.img} alt="course" />
            </div>

            <h4>{course.title}</h4>

            <div className="course-info">
              <p><span>📅</span> {course.date}</p>
              <p><span>💰</span> {course.fees}</p>
              <p><span>💻</span> {course.mode}</p>
            </div>

            <button className="premium-btn">View Syllabus</button>

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

/* Button */
.premium-btn{
  margin-top:18px;
  padding:10px 24px;
  border:none;
  border-radius:30px;
  background:linear-gradient(135deg,#667eea,#764ba2);
  color:white;
  font-weight:600;
  cursor:pointer;
  transition:0.3s;
}

.premium-btn:hover{
  transform:scale(1.08);
}

`}</style>

    </>
  );
}

export default OurCourses;
