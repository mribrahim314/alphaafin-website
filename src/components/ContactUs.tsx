import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faPhoneAlt, faClock, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faWordpress} from '@fortawesome/free-brands-svg-icons';



const ContactUs: React.FC = () => {
  const contactInfo = [
    { icon: faMapPin, text: "Sydney, Australia" },
    { icon: faPhoneAlt, text: "0468328227" },
    { icon: faClock, text: "Mon - Fri: 9:00am - 5:00pm" },
    { icon: faClock, text: "Weekend Appointments Only" },
  ];

  const socialIcons = [
    { icon: faTwitter, color: "#ff9021" },
    { icon: faEnvelope, color: "#ff9021" },
    { icon: faWordpress, color: "#ff9021" },
    { icon: faPhone, color: "#ff9021" },
  ];

  return (
    <Container className="my-5">
        <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{once:true}}
                    transition={{ duration: 1 }}>
      <Row>
        <Col md={6}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{once:true}}
            transition={{ duration: 1 }}
          >
            <h2 className="mb-4">Contact Us</h2>
            <p className="text-muted mb-4">Please feel free to ask if you have any further questions.</p>
            
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="d-flex align-items-center mb-3"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{once:true}}
                transition={{ delay: index * 0.1 }}
              >
                <span className="me-3 text-primary">
                  <FontAwesomeIcon icon={info.icon} style={{color:"#ff9021"}} />
                </span>
                <span>{info.text}</span>
              </motion.div>
            ))}

            <div className="mt-4">
              {socialIcons.map((social, index) => (
                <motion.button
                  key={index}
                  className="btn btn-light me-2 mb-2"
                  style={{ backgroundColor: social.color, color: '#20242c' }}
                  whileHover={{ scale: 1.1 }}
                  viewport={{once:true}}
                  whileTap={{ scale: 0.9 }}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </motion.button>
              ))}
            </div>
          </motion.div>
        </Col>
        <Col md={6}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{once:true}}
            transition={{ duration: 1 }}
          >
            <Image src="/alphaafin-website/assets/phone.png" alt="Contact Us" fluid rounded />
          </motion.div>
        </Col>
      </Row>
      </motion.div>
    </Container>
  );
};

export default ContactUs;
