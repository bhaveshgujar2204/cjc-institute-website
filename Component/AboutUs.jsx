import React from "react";

function AboutUs() {
  return (
    <>
      <div className="about-wrapper">

        {/* ===== HERO SECTION ===== */}
        <div className="hero-section">
          <h1>🚀 Complete Java Classes</h1>
          <p>💡Building Future IT Professionals With Industry Level Skills</p>
        </div>

        {/* ===== INTRODUCTION ===== */}
        <div className="about-intro">
          <h2>About Us</h2>
          <p>
            CJC is a leading IT training institute focused on providing
            real-world software development training. Our courses are designed
            to help students gain strong technical knowledge and hands-on
            experience through live projects and expert mentorship.
          </p>
        </div>

        {/* ===== MISSION & VISION ===== */}
        <div className="mission-container">

          <div className="mission-card">
            <h3>🎯 Our Mission</h3>
            <p>
              To provide quality technical education and help students become
              industry-ready professionals.
            </p>
          </div>

          <div className="mission-card">
            <h3>🚀 Our Vision</h3>
            <p>
              To become one of the most trusted IT training institutes by
              delivering career-focused learning.
            </p>
          </div>

        </div>

        {/* ===== STATISTICS ===== */}
        <div className="stats-container">

          <div className="stat-box">
            <h2>5000+</h2>
            <p>🎓 Students Trained</p>
          </div>

          <div className="stat-box">
            <h2>150+</h2>
            <p>📚Batches Completed</p>
          </div>

          <div className="stat-box">
            <h2>95%</h2>
            <p>💼 Placement Success</p>
          </div>

        </div>

        {/* ===== WHY CHOOSE US ===== */}
        <h2 className="choose-title">⭐Why Choose Us</h2>

        <div className="features-grid">

          <div className="feature-card">👨‍🏫 Industry Expert Trainers</div>
          <div className="feature-card">💻 Real Time Projects</div>
          <div className="feature-card">🎯 Placement Assistance</div>
          <div className="feature-card">⏰ Flexible Batches</div>
          <div className="feature-card">🌐 Online & Offline Training</div>
          

        </div>

      </div>


{/* ===== PREMIUM CSS ===== */}
<style>{`

.about-wrapper{
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(135deg,#eef2f3,#d9e4f5);
  min-height:100vh;
}

/* Hero */
.hero-section{
  text-align:center;
  padding:48px 10px;
  background: linear-gradient(135deg,#667eea,#764ba2);
  color:white;
  height: 180px;


}

.hero-section h1{
  font-weight:bold;
  font-size:40px;
}

.hero-section p{
  font-size:18px;
  margin-top:10px;
}

/* Intro */
.about-intro{
  text-align:center;
  padding:60px 20px;
  max-width:900px;
  margin:auto;
}

.about-intro h2{
  font-weight:600;
  margin-bottom:15px;
  color:#2c3e50;
}

.about-intro p{
  color:#555;
  line-height:1.7;
  font-size:17px;
}

/* Mission Cards */
.mission-container{
  display:flex;
  justify-content:center;
  gap:30px;
  flex-wrap:wrap;
  padding:30px;
}

.mission-card{
  background:white;
  padding:30px;
  width:300px;
  border-radius:20px;
  box-shadow:0 8px 25px rgba(0,0,0,0.1);
  transition:0.3s;
  text-align:center;
}

.mission-card:hover{
  transform:translateY(-10px);
}

/* Stats */
.stats-container{
  display:flex;
  justify-content:center;
  gap:40px;
  padding:60px 20px;
  background:white;
  flex-wrap:wrap;
}

.stat-box{
  text-align:center;
}

.stat-box h2{
  color:#667eea;
  font-size:38px;
  font-weight:bold;
}

.stat-box p{
  color:#555;
}

/* Choose Us */
.choose-title{
  text-align:center;
  margin-top:50px;
  color:#2c3e50;
}

/* Features */
.features-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
  gap:25px;
  padding:50px;
}

.feature-card{
  background:white;
  padding:25px;
  border-radius:15px;
  box-shadow:0 6px 18px rgba(0,0,0,0.1);
  text-align:center;
  font-weight:500;
  transition:0.3s;
}

.feature-card:hover{
  background: linear-gradient(135deg,#667eea,#764ba2);
  color:white;
  transform:scale(1.05);
}

`}</style>

    </>
  );
}

export default AboutUs;
