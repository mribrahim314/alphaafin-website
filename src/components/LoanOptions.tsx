import React from 'react';
import { Card, Row, Container, Image } from 'react-bootstrap';
import './LoanOptions.css';
import { motion } from 'framer-motion';

interface LoanOption {
  title: string;
  description: string;
  image: string;
}

interface LoanOptionsProps {
  loanOptions: LoanOption[];
  mainTitle: string;
  subTitle: string;
  introText: string;

}

const LoanOptions: React.FC<LoanOptionsProps> = ({
  loanOptions,
  mainTitle,
  subTitle,
  introText,

}) => {
  return (
    <Container className="container-custom1">
      <div className="text-center-custom">

        <svg className="svg-icon" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 0L30 20H0L15 0Z" fill="#FFA500"/>
        </svg>


        <h5 className="mt-5">{mainTitle}</h5>
        <h2 className="heading-title">{subTitle}</h2>
        <h3 className="mt-5">{introText}</h3>
      </div>
      
      <Row>
        {loanOptions.map((option, index) => (
          <motion.div 
            className="col-md-4 mb-4" 
            key={index}
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: index * 0.1 }}
          >

            <Image src={option.image} fluid className="image-custom1" alt={option.title} />
            <div className="card-custom4">
              <Card.Body>

                <Card.Title className="card-title-custom py-4">{option.title}</Card.Title>
                <Card.Text>{option.description}</Card.Text>
              </Card.Body>
            </div>
          </motion.div>
        ))}
      </Row>
    </Container>
  );
};

export default LoanOptions;
