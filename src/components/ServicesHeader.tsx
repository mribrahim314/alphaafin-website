import React from 'react';
import Arrow from './Arrow';
import { motion } from 'framer-motion';

interface Props {
  Title: string;
}

const ServicesHeader: React.FC<Props> = ({ Title }) => {
  return (
    <section>
      <div style={{ backgroundColor: "#f4f4f5", padding: "1rem 0" }}>
        <h1 style={{ paddingLeft: "1rem", margin: 0 }}>{Title}</h1>
      </div>

      <div
        className="d-flex flex-column justify-content-center align-items-center text-white"
        style={{
          backgroundImage: "url('/assets/bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
          position: 'relative',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        ></div>

        <motion.h2
          className="position-relative mb-4 display-4 fw-bold"
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          style={{ margin: '0' }}
        >
          {Title}
        </motion.h2>
        <Arrow />
      </div>
    </section>
  );
};

export default ServicesHeader;
