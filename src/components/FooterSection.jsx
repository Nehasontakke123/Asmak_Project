import React from "react";
import "../assets/css/Footer.css";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/images/Logo.png";
import img1 from '../assets/images/img1_files/factorynew2-Dd2a2PGz.jpg';
import { NavLink } from "react-router-dom";

const FooterSection = () => {
  return (
    <div className="footer-container">
      {/* Background Image */}
      <div className="hero-image">
        <img src={img1} alt="Factory Background" />
        
        {/* Overlay Content */}
        <div className="overlay-content">
          {/* Company Logo */}
          <div className="logo">
            <img src={logo} alt="Company Logo" />
          </div>

          {/* Heading */}
          <h1>Best Seafood From Sultanate of Oman</h1>

          {/* Contact Information */}
          <div className="contact-info">
            <p><strong>P.O.BOX 1741, POSTAL CODE 122, AL MABELA, SULTANATE OF OMAN</strong></p>
            <p><a href="mailto:info@asmkmct.com">info@asmkmct.com</a></p>
            <p><strong>Mobile:</strong> +968 92850600</p>
            <p><strong>Tel:</strong> +968 24050604</p>
          </div>

          {/* Navigation Links */}
          <div className="navbar-links">
            <ul>
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/about'>About Us</NavLink></li>
              <li><NavLink to='/products'>Products</NavLink></li>
              <li><NavLink to='/contactus'>Contact Us</NavLink></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://wa.me/96892850600" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="tel:+96892850600"><FaPhoneAlt /></a>
            <a href="mailto:info@asmkmct.com"><FaEnvelope /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer"><FaGooglePlusG /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>

          {/* Footer Note */}
          <footer>
            <p>© 2025 Asmak Muscat Int'l. All Rights Reserved</p>
            <p>Developed by <a href="https://developer.com" target="_blank" rel="noopener noreferrer">Developer</a></p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;


// import { Link } from "react-router-dom";
// import logo from "../assets/images/logo.png";
// import "../assets/css/Footer.css";
// import img1 from "../assets/images/img1_files/factorynew2-Dd2a2PGz.jpg";
// import {
//   FaFacebookF,
//   FaGooglePlusG,
//   FaLinkedinIn,
//   FaTwitter,
// } from "react-icons/fa";

// const FooterSection = () => {
//   return (
//     <footer
//       className="footer-container custom-footer"
//       style={{
//         backgroundImage: `url(${img1})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="custom-profile">
//         <img
//           src={logo}
//           width="120"
//           height="50"
//           loading="lazy"
//           alt="Asmak Muscat Intl Logo"
//           className="custom-img"
//         />
//       </div>
//       <section
//         className="custom-testi text-center has-bg-image"
//         aria-label="testimonials"
//       >
//         <div className="testi-container">
//           <p className="headline-2">Best Seafood From Sultanate of Oman</p>
//         </div>
//       </section>

//       <div className="custom-footer-content">
//         <p>P.O.BOX 1741, POSTAL CODE 122, AL MABELA, SULTANATE OF OMAN</p>
//         <p>Email: info@asmakmct.com</p>
//         <p>Mobile: +968 92850600</p>
//         <p>Tel: +968 24050604</p>

//         <ul className="footer-links">
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about-us">About Us</Link></li>
//           <li><Link to="/products">Products</Link></li>
//           <li><Link to="/contact">Contact Us</Link></li>
//         </ul>
//       </div>

//       <div className="custom-footer-bottom">
//         <p className="custom-footer-copy">
//           &copy; 2019 Asmak Muscat Int&apos;l. All Rights Reserved
//         </p>
//         <div className="footer-last">
//           <p>Developed by</p>
//           <a href="https://tekisky.com/">
//             <img
//               src="https://tekisky.com/assets/WhatsApp_Image_2024-04-30_at_12.39.09_86de1ffc-removebg-preview-2SydUlQw.png"
//               alt="Tekisky Pvt Ltd Logo"
//               className="tekisky-logo"
//             />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default FooterSection;





// import { NavLink } from "react-router-dom";
// import logo from "../assets/images/logo.png";
// import "../assets/css/Footer.css";
// import img1 from "../assets/images/img1_files/factorynew2-Dd2a2PGz.jpg";
// import {
//   FaFacebookF,
//   FaGooglePlusG,
//   FaLinkedinIn,
//   FaTwitter,
// } from "react-icons/fa";

// const FooterSection = () => {
//   return (
//     <footer
//       className="footer-container custom-footer"
//       style={{
//         backgroundImage: `url(${img1})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="custom-profile">
//         <img
//           src={logo}
//           width="120"
//           height="50"
//           loading="lazy"
//           alt="Asmak Muscat Intl Logo"
//           className="custom-img"
//         />
//       </div>
//       <section
//         className="custom-testi text-center has-bg-image"
//         aria-label="testimonials"
//       >
//         <div className="testi-container">
//           <p className="headline-2">Best Seafood From Sultanate of Oman</p>
//         </div>
//       </section>


      

//       <div className="custom-footer-content">
//         <p>P.O.BOX 1741, POSTAL CODE 122, AL MABELA, SULTANATE OF OMAN</p>
//         <p>Email: info@asmakmct.com</p>
//         <p>Mobile: +968 92850600</p>
//         <p>Tel: +968 24050604</p>


//         {/* Social Links */}
// <ul className="custom-footer-socials">
//           <li>
//             <NavLink
//               to="https://twitter.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="custom-social-link"
//             >
//               <FaTwitter />
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="https://facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="custom-social-link"
//             >
//               <FaFacebookF />
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="https://plus.google.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="custom-social-link"
//             >
//               <FaGooglePlusG />
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="https://linkedin.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="custom-social-link"
//             >
//               <FaLinkedinIn />
//             </NavLink>
//           </li>
//         </ul>

//         <ul className="footer-links">
//           {/* <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About Us</Link></li>
//           <li><Link to="/products">Products</Link></li>
//           <li><Link to="/contactus">Contact Us</Link></li>
//           <li><Link to="/location">Location</Link></li> */}

//               <li><NavLink to='/'>Home</NavLink></li>
//               <li><NavLink to='/about'>About Us</NavLink></li>
//               <li><NavLink to='/products'>Products</NavLink></li>
//               <li><NavLink to='/contactus'>Contact Us</NavLink></li>
//         </ul>
//       </div>


      

//       <div className="custom-footer-bottom">
//         <p className="custom-footer-copy">
//           &copy; 2019 Asmak Muscat Int&apos;l. All Rights Reserved
//         </p>
//         <div className="footer-last">
//           <p>Developed by</p>
//           <a href="https://tekisky.com/">
//             <img
//               src="https://tekisky.com/assets/WhatsApp_Image_2024-04-30_at_12.39.09_86de1ffc-removebg-preview-2SydUlQw.png"
//               alt="Tekisky Pvt Ltd Logo"
//               className="tekisky-logo"
//             />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default FooterSection;










