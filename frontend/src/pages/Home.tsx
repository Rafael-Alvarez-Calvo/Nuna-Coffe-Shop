import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Specialties from '../components/Specialties';
import Menu from '../components/Menu';
import Gallery from '../components/Gallery';
import Reviews from '../components/Reviews';
import Location from '../components/Location';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Specialties />
      <Menu />
      <Gallery />
      <Reviews />
      <Location />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
