
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Timeline from '@/components/Timeline';
import Prizes from '@/components/Prizes';
import WhyParticipate from '@/components/WhyParticipate';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Intersection Observer for section animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.section-transition').forEach(section => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('.section-transition').forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <About />
      <Timeline />
      <Prizes />
      <WhyParticipate />
      <Footer />
    </div>
  );
};

export default Index;
