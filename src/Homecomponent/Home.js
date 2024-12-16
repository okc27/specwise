// src/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './components/styles.css';
import Navbar from '../components/maincomponents/Navbar';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Ready from './components/Ready';
import FAQSection from './components/FAQSection';
import Footer from '../components/maincomponents/Footer';
import Recommendations from '../Rec/Recommendations';

const Home = () => {
  const navigate = useNavigate();

 // const handleGoToRecommendations = () => {
  //  navigate('/recommendations'); // Navigate to the recommendations page
 // };
  return (
    <>
      <Navbar backgroundColor="#2C3E50" pageName="home" />
      <HeroSection />
      <HowItWorks />
      <WhyChooseUs />
      <Ready />
      <FAQSection />
      <Footer />
    </>
  );
};

export default Home;







