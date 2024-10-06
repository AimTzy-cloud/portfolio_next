'use client';
import React, { useEffect } from 'react';
import Hero from './Hero';
import About from './About';
import Service from './Services';
import Project from './Project';
import Skills from './Skiils';
import Review from './Review';
import Blog from './Blog';
import Contact from './Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    const initAos = async () => {
      await import('aos');
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom'
      });
    };

    initAos();
  }, []);
  
  return (
    <div className='overflow-hidden'>
      <Hero />
      <About />
      <Service />
      <Project />
      <Skills />
      <Review />
      <Blog />
      <Contact />
    </div>
  );
};

export default Home;