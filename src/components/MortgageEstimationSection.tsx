import { motion } from 'framer-motion';
import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const MortgageEstimateSection: React.FC = () => {
  return (
    <section
      style={{
        padding: "5rem 1rem", // Adjust padding for small screens
        background: "linear-gradient(to bottom, #f4f4f5 50%, white 50%)"
      }}
    >
      <motion.div
        className="container text-white"
        style={{
          backgroundColor: "#2a2c38",
          padding: "3rem 2rem", // Adjust padding for small screens
          borderRadius: "15px"
        }}
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <Row className="align-items-center">
          <Col xs={12} md={4} className="text-center text-md-start">
            <h2 className="mb-2">How To Estimate Mortgage Payments</h2>
          </Col>
          <Col xs={12} md={6} className="text-center text-md-start">
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </Col>
          <Col xs={12} md={2} className="text-center text-md-end mt-3 mt-md-0">
            <Button
              style={{
                backgroundColor: "#fe9121",
                border: "none",
                padding: "1rem 1.5rem", // Adjust padding for small screens
                color: "black",
                fontWeight: "bold"
              }}
            >
              INTEREST RATE
            </Button>
          </Col>
        </Row>
      </motion.div>
    </section>
  );
};

export default MortgageEstimateSection;
