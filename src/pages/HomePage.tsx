import React from "react";
import Hero from "../components/Hero";
import OurStory from "../components/OurStory";
import OurServices from "../components/OurServices";
import SectionComponent from "../components/SectionComponent";

import Experience from "../components/Experience";
import MeetOurFounder from "../components/MeetOurFounder";
import ContactUs from "../components/ContactUs";
import TalkToPawanCTA from "../components/TalkToPawanCTA";
import Footer from "../components/Footer";

const HomePage: React.FC = () => {
  return <>
  <Hero/>
  <OurStory/>
  <OurServices/>
  <SectionComponent/>
  <Experience/>
  <MeetOurFounder/>
  <ContactUs/>
  <TalkToPawanCTA/>
  <Footer/>
  </>;
};

export default HomePage;
