
import { Row, Col } from 'react-bootstrap';
import './Experience.css';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

export default function Experience() {
  return (
    <section className="exp-section">
      <Row className='experience'>
        <Col xs={0} md={1} lg={1} style={{padding:0}}></Col>
        
        <Col xs={12} md={5} lg={5} style={{padding:0}}>
          <div className='bright'>
            <h1>We Believe You're Bright</h1>
          </div>
        </Col>

        <motion.div
          className="col-12 col-md-6 col-lg-6 lenders"
          style={{padding:0}}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Row style={{width:"100%"}}>
            <Col style={{padding:0}}>
              <img src='/assets/slide1.png' style={{width:"100%"}}/>
            </Col>
          </Row>
          <Row className='stats'>
            <Col style={{padding:0, display:'flex',alignItems:'center',justifyContent:'center'}}>
              <div className='card-exp'>
                <h1>320+</h1>
                <h3>Lenders</h3>
              </div>
            </Col>
            <Col style={{padding:0,display:'flex',alignItems:'center',justifyContent:'center'}}>
              <div className='card-exp1'>
                <h1>320+</h1>
                <h3>Lenders</h3>
              </div>
            </Col>
          </Row>
        </motion.div>
      </Row>
    </section>
  );
}