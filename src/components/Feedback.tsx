import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { useSwipeable } from 'react-swipeable';
import './Feedback.css'; // Add this line to import the external CSS file

interface Testimonial {
  id: number;
  text: string;
  name: string;
  position: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    name: 'John Doe',
    position: 'CEO'
  },
  {
    id: 2,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    name: 'Jane Smith',
    position: 'CTO'
  },
  {
    id: 3,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    name: 'Michael Johnson',
    position: 'CFO'
  }
];

const Feedback: React.FC = () => {
  const [index, setIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => setIndex((prevIndex) => (prevIndex + 1) % 3),
    onSwipedRight: () => setIndex((prevIndex) => (prevIndex - 1 + 3) % 3),
    trackMouse: true,
  });

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="feedback-section">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="text-center mb-4">
          <div className="profile-container">
            <img
              key={1}
              src='/assets/profiles/profile1.png'
              alt='Profile 1'
              className="profile-image"
            />
            <img
              key={2}
              src='/assets/profiles/profile2.png'
              alt='Profile 2'
              className="profile-image"
            />
            <img
              key={3}
              src='/assets/profiles/profile3.png'
              alt='Profile 3'
              className="profile-image"
            />
          </div>
        </div>

        <div {...handlers}>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            indicators={false}
            controls={false}
            touch={true}
          >
            {testimonials.map((testimonial) => (
              <Carousel.Item key={testimonial.id}>
                <div className="text-center">
                  <div className="testimonial-container">
                    <div className="testimonial-box">
                      <p>{testimonial.text}</p>
                    </div>
                    <h5 className="mb-1">{testimonial.name}</h5>
                    <p className="text-muted">{testimonial.position}</p>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* Carousel Indicator */}
        <div className="text-center mt-3">
          {index + 1} / {testimonials.length}
        </div>
      </motion.div>
    </section>
  );
};

export default Feedback;
