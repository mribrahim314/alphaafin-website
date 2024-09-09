import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import './OurExpertise.css';
import { motion } from 'framer-motion';

const OurExpertise: React.FC = () => {
  return (
    <section className="full-height-section" style={{ backgroundColor: "#2a2c38" }}>
      <Container fluid className="container-fluid text-light py-5 custom-container1">
        <Row className="h-100">
          <Col md={6} className="d-flex align-items-center">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <Carousel
                className="carousel-container2"
                indicators={false}
                controls={false}
                fade
              >
                <Carousel.Item>
                  <img
                    className="d-block w-100 carousel-image1"
                    src="/alphaafin-website/assets/slide1.png"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 carousel-image1"
                    src="/alphaafin-website/assets/slide2.png"
                    alt="Second slide"
                  />
                </Carousel.Item>
              </Carousel>
            </motion.div>
          </Col>

          <Col md={6} className="d-flex flex-column justify-content-center">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <p className="mb-4 whychooseus">Why Choose Us</p>
              <h3 className="mb-4">Our Expertise</h3>

              <div className="mb-2">
                <p>
                  Expertise and Experience: With over 20 years of experience in the industry, our team
                  of financial experts brings a wealth of knowledge and expertise to the table.
                </p>
              </div>

              <div className="mb-2">
                <p>
                  Customer-Centric Approach: We put our clients at the heart of everything we do,
                  offering personalized advice and support to help you make informed financial
                  decisions.
                </p>
              </div>

              <div className="mb-2">
                <p>
                  Innovative Solutions: We leverage the latest technology and financial products to
                  provide innovative solutions that meet the evolving needs of our clients.
                </p>
              </div>

              <div>
                <p>
                  Transparency and Integrity: We pride ourselves on our ethical approach, ensuring
                  transparency and integrity in all our dealings.
                </p>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurExpertise;
