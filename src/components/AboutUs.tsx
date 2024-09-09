import { motion } from 'framer-motion';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AboutUs.css';

const AboutUs: React.FC = () => {
  return (
    <section className="about-us-section">
      <Container>
        <h1 className="about-us-title">About Us</h1>

        <motion.h2
          className="about-us-heading"
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          We Believe You're Bright
        </motion.h2>

        <div>
          <Row className="about-us-row">
            <Col md={6} className="about-us-col">
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
              >
                <div className="about-us-image-wrapper">
                  <img
                    src="/alphaafin-website/assets/slide2.png"
                    alt="Happy family"
                    className="about-us-image"
                  />
                </div>
                <Row>
                  <div className="about-us-content mt-4">
                    <h3>Our Mission</h3>
                    <p>
                      Our mission is to provide our clients with tailored financial solutions that
                      cater to their unique needs. We strive to make the process of securing a
                      mortgage as straightforward and stress-free as possible, guiding you through
                      every step with transparency and integrity.
                    </p>
                  </div>
                </Row>
              </motion.div>
            </Col>

            <Col md={6} className="about-us-col">
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
              >
                <h3>Welcome To Alphaa Financial Solutions</h3>
                <p className="mt-4">
                  At Alphaa Financial Solutions, we believe in empowering your property dreams
                  with our premium financial services. Established with a vision to provide
                  seamless loan processing and financial advisory, we have grown to become a
                  trusted name in the Australian mortgage industry.
                </p>

                <h3>Our Story 🙂</h3>
                <p className="mt-4">
                  Alphaa Financial Solutions was born out of a desire to simplify the complexities
                  of property financing. Our founder, Mr. Pawan Punjabi, envisioned a company where
                  customer-centricity and financial expertise go hand in hand. Over the years, we
                  have helped thousands of Australians achieve their dream of owning a home, thanks
                  to our unwavering commitment to excellence and innovation.
                </p>
              </motion.div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
