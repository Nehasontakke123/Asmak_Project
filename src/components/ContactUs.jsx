
import React from 'react';
import '../assets/css/Contactus.css';
import omanFlag from '../assets/images/img1_files/oman-DmBl-M2i.png'; 


const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-content">
        {/* Left Side: Contact Information */}
        <div className="contact-form"> 
          <h3>Get in touch with us Today</h3>
          <p><strong>Mobile:</strong> +968 92850600</p>
          <p><strong>Tel:</strong> +968 24050604</p>
          <p>
            <strong>Address:</strong> P.O.BOX 1741, POSTAL CODE 122, AL MABELA,<br />
            SULTANATE OF OMAN, C.R.NO 1341511
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:info@asmakmct.com">info@asmakmct.com</a>
          </p>
        </div>

        {/* Right Side: Flag Image */}
        <div className="contact-image">
          <img src={omanFlag} alt="Flag of Oman" />
        </div>
      </div>
      
    </div>
    
  );
};


export default ContactUs;

