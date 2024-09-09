import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import './OurStory.css';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface StoryCardProps {
  title: string;
  content: string;
  buttonText?: string;
}

const StoryCard: React.FC<StoryCardProps> = ({ title, content, buttonText }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });

  return(
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
    >
      <Card className='custom-card'>
        <Card.Body className="card-body d-flex flex-column">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{content}</Card.Text>
          {buttonText && (
            <button className="custom-btn mt-3 align-self-start">
              {buttonText}
            </button>
          )}
        </Card.Body>
      </Card>
    </motion.div>
  )
};

const OurStory: React.FC = () => {
  return (
    <div className='custom-container'>
      <Row className="card-container">
        <Col md={6} className="d-flex">
          <StoryCard
            title="Our Story"
            content="Alpha Financial Solutions provides bespoke mortgage and finance services. We believe that financial freedom is not just a goal but a journey, and we are here to guide you every step of the way."
            buttonText="KNOW MORE"
          />
        </Col>
        <Col md={6} className="d-flex">
          <StoryCard
            title="Our Mission"
            content="At Alpha Financial Solutions, our mission is to empower individuals and businesses to achieve their financial aspirations through tailored solutions, expert advice, and exceptional service. We strive to build lasting relationships based on trust, integrity, and mutual success."
          />
        </Col>
      </Row>
    </div>
  );
};

export default OurStory;
