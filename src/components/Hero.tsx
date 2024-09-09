import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Hero.css';

interface Slide {
  id: string;
  imgSrc: string;
  captionHeader: string;
  captionText: string;
}
interface controls{
    direction:string;
    onClick:any;
}

const CustomCarouselControl = ({ direction, onClick }:controls) => (
  <div 
    className={`custom-carousel-control ${direction}`}
    onClick={onClick}
  >
    {direction === 'prev' ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
  </div>
);

const SliderComponent: React.FC = () => {
  const slides: Slide[] = [
    {
      id: 'slide-1',
      imgSrc: '/alphaafin-website/assets/slide1.png',
      captionHeader: 'Empowering Financial Security for Everyone',
      captionText: 'We are committed to providing accessible and reliable financial services to help individuals and families.',
    },
    {
      id: 'slide-2',
      imgSrc: '/alphaafin-website/assets/slide2.png',
      captionHeader: 'Empowering Financial Security for Everyone',
      captionText: 'We are committed to providing accessible and reliable financial services to help individuals and families.',
    },
  ];

  return (
    <Container fluid className="slider px-0" style={{ height: '100vh',marginBottom:"1rem" }}>
      <Carousel
        indicators={false}
        prevIcon={<CustomCarouselControl direction="prev" onClick={() => {}} />}
        nextIcon={<CustomCarouselControl direction="next" onClick={() => {}} />}
        fade
      >
        {slides.map((slide) => (
          <Carousel.Item key={slide.id}>
            <img
              className="d-block w-100"
              src={slide.imgSrc}
              alt={slide.captionHeader}
              style={{ height: '100vh', objectFit: 'cover' }}
            />
            <Carousel.Caption className="custom-caption">
              <Row className="justify-content-center text-center">
                <Col xs={12} md={10} lg={8}>
                  <h1 className="animate-caption">{slide.captionHeader}</h1>
                  <p className="animate-caption">{slide.captionText}</p>
                </Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default SliderComponent;