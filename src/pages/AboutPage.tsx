import React from 'react';
import AboutUs from '../components/AboutUs';
import OurExpertise from '../components/OurExpertise';
import Feedback from '../components/Feedback';
import TalkToPawanCTA from '../components/TalkToPawanCTA';
import Footer from '../components/Footer';


const AboutPage: React.FC = () => {
  return (
    <>
    <AboutUs/>
    <OurExpertise/>
    <Feedback/>
    <TalkToPawanCTA/>
    <Footer/>
    </>
  );
};

export default AboutPage;
