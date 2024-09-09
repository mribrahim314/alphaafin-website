import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import './TalkToPawanCTA.css';  // Import your CSS file here

const TalkToPawanCTA: React.FC = () => {
  return (
    <section className="cta-section">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={8}>

              <FontAwesomeIcon icon={faUserCheck} size="3x" color="black" className="mb-3" />
              <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{once:true}}
              transition={{ duration: 1 }}
            >
              <h2 className="text-black mb-4">Talk To PAWAN Now!</h2>
              <motion.button
                className="mb-4 custom-btn1" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                CONTACT US
              </motion.button>
              </motion.div>
              <p className="text-black">
                Feel Free to Get in Touch for a No Obligations <a href="#" className="text-black"><u>Call PAWAN !!!</u></a> 
              </p>
            
          </Col>
        </Row>
      </Container>
      <div className="plus plus-1">+</div>
      <div className="plus plus-2">+</div>
      <div className="plus plus-3">+</div>
    </section>
  );
};

export default TalkToPawanCTA;
