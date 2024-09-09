import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTwitter, FaTelegramPlane, FaWordpressSimple, FaPhone } from 'react-icons/fa';
import './Footer.css'; // Create a separate CSS file for custom styling

const Footer: React.FC = () => {
  return (
    <footer className="footer-wrapper">
      <Container>
        <Row style={{padding:"2rem 0 "}}>
          <Col md={6} lg={6}>
            <h3 className="section-title">Quick Contact</h3>
            <p>At Alphaa Financial Solutions, we believe in empowering your property dreams with our premium financial services.</p>
            <div className="contact-item">
              <FaMapMarkerAlt size={18} /> Sydney, Australia
            </div>
            <div className="contact-item">
              <FaPhoneAlt size={18} /> 0468328227
            </div>
            <div className="contact-item">
              <FaEnvelope size={18} /> info@alphafinancial.com
            </div>
          </Col>
          <Col md={6} lg={6}>
            <div className="opening-hours">
              <h3 className="section-title">Opening Hours</h3>
              <div className="hour-row">
                <span>MON TO FRI</span>
                <span>9:00AM | 5:00PM</span>
              </div>
              <div className="hour-row">
                <span>SAT TO SUN:</span>
                <span>APPOINTMENTS ONLY</span>
              </div>
              <button className="w-100 mt-3 custom-btn2" >SCHEDULE A VISIT</button>
            </div>
          </Col>
        </Row>
        <hr className="mt-4 mb-3" />
        <Row className="align-items-center" style={{padding:"2rem 0 "}}>
          <Col md={6}>
            <div className="social-icons">
              <a href="#" className="social-icon"><FaTwitter size={20}  /></a>
              <a href="#" className="social-icon"><FaTelegramPlane size={20} /></a>
              <a href="#" className="social-icon"><FaWordpressSimple size={20} /></a>
              <a href="#" className="social-icon"><FaPhone size={20} /></a>
            </div>
          </Col>
          <Col md={6} className="text-md-end mt-3 mt-md-0">
            <small>2024 © All Rights Reserved | Developed with ❤️ by Ibrahim Inc</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
