
import React from 'react';
import SectionHeading from './SectionHeading';
import AnimatedReveal from './AnimatedReveal';
import { Target, Users, Trophy, Rocket } from 'lucide-react';

const reasons = [
  {
    icon: <Target className="w-6 h-6 text-white" />,
    title: "Challenge Your Skills",
    description: "Test your design and problem-solving abilities against tight deadlines and unexpected requirements"
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: "Build Connections",
    description: "Network with like-minded innovators, mentors, and industry professionals"
  },
  {
    icon: <Trophy className="w-6 h-6 text-white" />,
    title: "Win Recognition",
    description: "Showcase your talent and be rewarded for your creative solutions and teamwork"
  },
  {
    icon: <Rocket className="w-6 h-6 text-white" />,
    title: "Accelerate Growth",
    description: "Gain valuable experience that enhances your portfolio and career prospects"
  }
];

const WhyParticipate = () => {
  return (
    <section id="why-participate" className="py-20 px-4 relative bg-gradient-radial from-hackathon-black to-gray-900 text-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-96 bg-hackathon-purple/10 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-full h-96 bg-hackathon-aqua/10 rounded-full blur-3xl opacity-20"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl">
        <AnimatedReveal>
          <SectionHeading 
            title="Why Participate" 
            description="Join our hackathon for an unforgettable experience that offers more than just competition"
            className="text-white"
          />
        </AnimatedReveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {reasons.map((reason, index) => (
            <AnimatedReveal key={index} delay={index * 100}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-lg hover:bg-white/10 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 h-full">
                <div className="rounded-full bg-hackathon-purple w-12 h-12 flex items-center justify-center mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-white/70">{reason.description}</p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
        
        <AnimatedReveal delay={500}>
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden">
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center">Ready to Join the Challenge?</h3>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                  <div className="flex-1 space-y-4">
                    <p className="text-white/80">
                      Don't miss this opportunity to showcase your skills, learn from peers, and potentially win exciting prizes!
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-hackathon-aqua rounded-full mt-2 mr-2"></span>
                        <span className="text-white/80">Registration closes on March 23, 2025</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-hackathon-aqua rounded-full mt-2 mr-2"></span>
                        <span className="text-white/80">Limited spots available</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <a 
                      href="#register" 
                      id="register"
                      className="bg-hackathon-aqua hover:bg-hackathon-aqua/90 text-hackathon-black font-medium rounded-full px-8 py-3 text-lg shadow-lg shadow-hackathon-aqua/20 transition-all duration-300 hover:shadow-xl hover:shadow-hackathon-aqua/30 transform hover:-translate-y-1"
                    >
                      Register Your Team
                    </a>
                    <span className="text-sm mt-2 text-white/60">Via Unstop Platform</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
};

export default WhyParticipate;
