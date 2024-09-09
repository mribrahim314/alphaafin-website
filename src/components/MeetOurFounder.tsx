import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa'; 

const MeetOurFounder: React.FC = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center text-center">
        <Col xs={12} className="mb-4">
          <FaUser size={48} color="#ffa500" /> 
        </Col>
        <Col xs={12}>
          <h2 className="mb-4" style={{fontWeight:"bold"}}>Meet Our Founder</h2>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Image 
            src="/assets/punjabi.png" 
            alt="Mr. Pawan Punjabi" 
            fluid 
            className="mb-3"
          />
          <div className="mt-3" style={{borderRadius:"20px",borderBottom:"7px solid #ff9021",width:"fit-content",padding:'1rem 3rem',margin:"0 auto"}}>
          <h3 className="h4 mb-1">Mr. Pawan Punjabi</h3>
          <p className="text-muted">Founder</p>
          

          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MeetOurFounder;
