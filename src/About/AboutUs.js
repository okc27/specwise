import React from "react";
import './styles.css';
import Navbar from '../components/maincomponents/Navbar';
import Footer from '../components/maincomponents/Footer';
import HeroSection from "./components/HeroSection";
import MissionSection from "./components/MissionSection";
import ValuesSection from "./components/ValuesSection";
import TeamSection from "./components/TeamSection";

const AboutUs = () => {
  return (
    <>
    <Navbar backgroundColor="#007bff" pageName="aboutus" />
    <div>
      <HeroSection />
      <MissionSection />
      <ValuesSection />
      <TeamSection />
    </div>
    <Footer />
    </>
  );
};

export default AboutUs;
 