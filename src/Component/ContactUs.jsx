import React from "react";

function ContactUs() {
  return (
    <>
      <div className="contact-container">

        {/* Heading */}
        <h2 className="contact-title">📞 Contact Us</h2>

        <div className="contact-grid">

          {/* Contact Details */}
          <div className="contact-info">

            <h4>🏢 Our Address</h4>
            <p>
              1st Floor, Above Rupam Sweets, Priyanka Collections Building,
              <br />
              Near Karvenagar Stop, Karvenagar, Pune-52.
            </p>

            <h4>📱 Mobile Number</h4>
            <p>+91 9876543210</p>

            <h4>📧 Email</h4>
            <p>cjcitinstitute@gmail.com</p>

          </div>

          {/* Enquiry Form */}
          <div className="contact-form">

            <h4>✉️ Get In Touch</h4>

            <form>

              <input type="text" placeholder="Your Name" required />

              <input type="email" placeholder="Your Email" required />

              <input type="text" placeholder="Mobile Number" required />

              <textarea placeholder="Your Message" rows="4" required></textarea>

              <button type="submit">Send Enquiry 🚀</button>

            </form>

          </div>

        </div>

      </div>

{/* ===== CSS ===== */}
<style>{`

.contact-container{
  padding:60px 20px;
  background:#f8fafc;   /* White premium soft background */
  color:#1e293b;
  min-height:100vh;
}

.contact-title{
  text-align:center;
  font-weight:700;
  margin-bottom:40px;
  color:#0f172a;
}

.contact-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:40px;
  max-width:1000px;
  margin:auto;
}

/* Contact Info Card */
.contact-info{
  background:white;
  padding:30px;
  border-radius:20px;
  box-shadow:0 10px 25px rgba(0,0,0,0.08);
  transition:0.4s;
}

.contact-info:hover{
  transform:translateY(-8px);
}

.contact-info h4{
  margin-top:20px;
  font-weight:600;
  color:#1e3a8a;
}

/* Form Card */
.contact-form{
  background:white;
  padding:30px;
  border-radius:20px;
  box-shadow:0 10px 25px rgba(0,0,0,0.08);
}

.contact-form form{
  display:flex;
  flex-direction:column;
  gap:15px;
}

.contact-form input,
.contact-form textarea{
  padding:12px;
  border:1px solid #e2e8f0;
  border-radius:10px;
  outline:none;
}

.contact-form input:focus,
.contact-form textarea:focus{
  border-color:#6366f1;
}

/* Button */
.contact-form button{
  background:linear-gradient(135deg,#6366f1,#8b5cf6);
  border:none;
  padding:12px;
  border-radius:25px;
  color:white;
  font-weight:600;
  transition:0.4s;
}

.contact-form button:hover{
  transform:scale(1.05);
  background:linear-gradient(135deg,#8b5cf6,#6366f1);
}

/* Responsive */
@media(max-width:768px){
  .contact-grid{
    grid-template-columns:1fr;
  }
}

`}</style>




    </>
  );
}

export default ContactUs;
