import React from 'react';

import './SectionComponent.css'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';


const SectionComponent: React.FC = () => {

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });


  return (
    <section className="bg-light mb-2 py-5" ref={ref} style={{overflow:'hidden'}}>
<div style={{display:"flex"}}>
<motion.div className='house'
    
    initial={{ opacity: 0, x: -50,y:120 }}
    animate={inView ? { opacity: 1, x: 150 } : { opacity: 0, x: -50,y:120 }}
    transition={{ duration: 1 }}
  >
    <img src="/assets/house.png" alt="house" />
</motion.div>
<div className='family'>
    <img src="/assets/slide1.png" alt="family" />
</div>
<motion.div className='empty' 
    initial={{ opacity: 0, x: 500 }}
    animate={inView ? { opacity: 1, x: 30 } : { opacity: 0, x: 500}}
    transition={{ duration: 1 }}/>


</div>
    </section>
  );
};

export default SectionComponent;