import React from "react";
import cjclogo from "../assets/cjclogo.png"
function Footer() {
  return (
    <>
      <footer className="footer">

        <div className="footer-container">

          {/* Institute Info */}
       <div className="text-center text-md-start">

  {/* Center Logo + Heading */}
  <div className="text-center">
    <img 
      src={cjclogo}
      alt="CJC Logo"
      width="125"
      className="mb-2 d-block mx-auto"
    />
    
  </div>

  {/* Paragraph Left Side */}
  <p className="mt-2">
    Providing industry level IT training with real-time projects and
    placement support. We help students build strong careers in
    software development.
  </p>

</div>

  

          {/* Quick Links */}
          <div className="footer-section">
            <h4>📌 Quick Links</h4>
            <ul>
              <li>About Us</li>
              <li>Courses</li>
              <li>Upcoming Batches</li>
              <li>Contact Us</li>
              <li>Admin Login</li>
            </ul>
          </div>

          {/* Courses */}
          <div className="footer-section">
            <h4>💻 Popular Courses</h4>
            <ul>
              <li>Core Java</li>
              <li>Advance Java</li>
              <li>Spring Boot</li>
              <li>React JS</li>
              <li>AWS Cloud</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4>📞 Contact Us</h4>
           <p className="mb-0">
  📍 1st Floor, Above Rupam Sweets, Priyanka Collections Building,Near Karvenagar Stop, Karvenagar, Pune-52.
</p>


            <p>📧 cjcinfo@gmail.com</p>
            <p>📱 +91 9876543210</p>
          </div>

        </div>

        {/* Bottom */}
        <div style={{backgroundColor: "#111827"}}>
<div className="d-flex justify-content-between align-items-center mx-auto" style={{ 
    maxWidth: "900px",
    
   
  }}>
  
  <span>© 2026 CJC IT Institute</span>

  <span>
    Designed by <strong>Bhavesh Gujar</strong>
  </span>

</div>
</div>


      </footer>


{/* ===== CSS ===== */}
<style>{`

.footer{
  background: linear-gradient(135deg,#141e30,#243b55);
  color:white;
  margin-top:60px;
}

/* Container */
.footer-container{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
  gap:30px;
  padding:50px;
}

/* Section */
.footer-section h4{
  margin-bottom:15px;
}

.footer-section p{
  font-size:14px;
  line-height:1.6;
  opacity:0.9;
}

.footer-section ul{
  list-style:none;
  padding:0;
}

.footer-section ul li{
  margin:8px 0;
  cursor:pointer;
  transition:0.3s;
}

.footer-section ul li:hover{
  color:#ffd369;
  transform:translateX(5px);
}

/* Bottom */
.footer-bottom{
  text-align:center;
  padding:15px;
  border-top:1px solid rgba(255,255,255,0.2);
  font-size:14px;
}

`}</style>

    </>
  );
}

export default Footer;
