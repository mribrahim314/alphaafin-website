import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import './OurServices.css';

// Icons
const HomeIcon = () => <img src='/assets/services/service1.png' alt='Home Icon' style={{ width: '50px' }} />;
const RefIcon = () => <span>🔄</span>;
const InvestIcon = () => <span>💼</span>;
const SelfIcon = () => <span>🏋️</span>;
const AssetIcon = () => <span>💰</span>;
const PersonalIcon = () => <span>👤</span>;
const ExpatIcon = () => <span>✈️</span>;
const CommercialIcon = () => <span>🏢</span>;

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <Card className="service-card">
    <Card.Body>
      <div style={{display:'flex'}}> 
        <div className="service-icon">{icon}</div>
        <div className="d-flex align-items-center mb-3" style={{width:"100%",justifyContent:'center'}}>
        <Card.Title className="service-card-title">{title}</Card.Title>
      </div></div>
      <hr/>
      <Card.Text className="service-card-text">{description}</Card.Text>
    </Card.Body>
  </Card>
);

const OurServices: React.FC = () => {
  const services = [
    { icon: <HomeIcon />, title: 'Home Loans', description: 'At Alpha Financial Solutions, we specialize in guiding you through every step of your home loan journey.' },
    { icon: <HomeIcon />, title: 'Home Loans', description: 'At Alpha Financial Solutions, we specialize in guiding you through every step of your home loan journey.' },
    { icon: <RefIcon />, title: 'Refinancing', description: 'Our refinancing options are designed to help you optimize your existing loans and potentially save on interest.' },
    { icon: <InvestIcon />, title: 'Investment Property', description: 'For investment properties, we offer tailored solutions to help you build your property portfolio.' },
    { icon: <SelfIcon />, title: 'Self Managed Super Fund (SMSF)', description: 'We provide expert guidance on SMSF loans, helping you navigate the complexities of using your super fund.' },
    { icon: <AssetIcon />, title: 'Asset Finance', description: 'At Alpha Financial Solutions, we offer flexible asset finance solutions to help you acquire the equipment.' },
    { icon: <PersonalIcon />, title: 'Personal Loans', description: 'Whether you need to consolidate debt, fund a major purchase, or cover unexpected expenses.' },
    { icon: <ExpatIcon />, title: 'Expat Loans', description: 'We understand the unique financial needs of expatriates and offer specialized loan products.' },
    { icon: <CommercialIcon />, title: 'Commercial/Business Loans', description: 'At Alpha Financial Solutions, we provide comprehensive commercial and business loan solutions.' },
  ];

  return (
    <section className="services-section py-5">
      <Container>
        <h2 className="text-center mb-5">Our Services</h2>
        <Row>
          <Col md={8}>
            <Row xs={1} md={2} lg={2} className="g-4">
              {services.map((service, index) => (
                <Col className='cardsize' key={index}>
                  <ServiceCard {...service} />
                </Col>
              ))}
            </Row>
          </Col>
          <Col md={4} className="d-flex align-items-stretch">

    <Carousel className="carousel-container1" indicators={false} controls={false} fade>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="/assets/slide1.png"
          alt="First slide"
        />
        <Carousel.Caption className="custom-caption1">
          <Row className="justify-content-center text-center">
            <Col xs={12} md={10} lg={8}>
              <h2>At Alpha Financial Solutions, we offer a comprehensive range of financial services</h2>
              <p>We have the expertise to guide you through the process.</p>
              <h3>100+</h3>
              <h5>Simplify the loan</h5>
            </Col>
          </Row>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="/assets/slide2.png"
          alt="Second slide"
        />
        <Carousel.Caption className="custom-caption1">
          <Row className="justify-content-center text-center">
            <Col xs={12} md={10} lg={8}>
              <h1>At Alpha Financial Solutions, we offer a comprehensive range of financial services</h1>
              <p>We have the expertise to guide you through the process.</p>
              <h2>100+</h2>
              <h4>Simplify the loan</h4>
            </Col>
          </Row>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurServices;
