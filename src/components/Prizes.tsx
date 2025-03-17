
import React from 'react';
import SectionHeading from './SectionHeading';
import AnimatedReveal from './AnimatedReveal';
import { Award, Trophy, Medal } from 'lucide-react';

const Prizes = () => {
  return (
    <section id="prizes" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <AnimatedReveal>
          <SectionHeading 
            title="Prize Pool"
            description="Compete for exciting rewards and recognition"
          />
        </AnimatedReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mt-12">
          {/* First Runner-up */}
          <AnimatedReveal delay={100}>
            <div className="glass border border-white/30 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col">
              <div className="flex justify-center p-6 bg-gradient-to-r from-hackathon-aqua/10 to-hackathon-purple/10">
                <Medal className="w-16 h-16 text-gray-700" />
              </div>
              <div className="p-6 flex-1 flex flex-col items-center text-center">
                <span className="text-lg font-medium text-gray-600">First Runner-up</span>
                <h3 className="text-3xl font-bold mt-2 mb-4">₹2,000</h3>
                <span className="inline-block px-3 py-1 text-xs bg-hackathon-aqua/20 rounded-full mb-4">
                  + Certificate
                </span>
                <p className="text-gray-500 text-sm">Recognition for excellence and innovation</p>
              </div>
            </div>
          </AnimatedReveal>
          
          {/* Winner */}
          <AnimatedReveal>
            <div className="glass-dark border border-white/10 rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 flex flex-col">
              <div className="flex justify-center p-6 bg-gradient-to-r from-hackathon-purple to-hackathon-aqua">
                <Trophy className="w-20 h-20 text-white" />
              </div>
              <div className="p-6 flex-1 flex flex-col items-center text-center">
                <span className="text-lg font-medium text-white">Winner</span>
                <h3 className="text-4xl font-bold mt-2 mb-4 text-white">₹5,000</h3>
                <span className="inline-block px-3 py-1 text-xs bg-white/20 text-white rounded-full mb-4">
                  + Certificate of Excellence
                </span>
                <p className="text-white/70 text-sm">Top honors for the best innovation</p>
              </div>
              <div className="w-full h-1 bg-gradient-to-r from-hackathon-purple to-hackathon-aqua"></div>
            </div>
          </AnimatedReveal>
          
          {/* Second Runner-up */}
          <AnimatedReveal delay={200}>
            <div className="glass border border-white/30 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col">
              <div className="flex justify-center p-6 bg-gradient-to-r from-hackathon-purple/10 to-hackathon-aqua/10">
                <Award className="w-16 h-16 text-gray-700" />
              </div>
              <div className="p-6 flex-1 flex flex-col items-center text-center">
                <span className="text-lg font-medium text-gray-600">Second Runner-up</span>
                <h3 className="text-3xl font-bold mt-2 mb-4">₹1,000</h3>
                <span className="inline-block px-3 py-1 text-xs bg-hackathon-aqua/20 rounded-full mb-4">
                  + Certificate
                </span>
                <p className="text-gray-500 text-sm">Reward for creativity and execution</p>
              </div>
            </div>
          </AnimatedReveal>
        </div>
        
        <AnimatedReveal delay={300}>
          <div className="mt-16 text-center">
            <div className="glass rounded-xl p-6 md:p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">Participation Benefits</h3>
              <p className="text-gray-600 mb-4">
                All participants will receive:
              </p>
              <ul className="space-y-3 text-gray-600 text-left inline-block">
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-hackathon-purple rounded-full mr-2"></span>
                  <span>Certificate of Participation</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-hackathon-aqua rounded-full mr-2"></span>
                  <span>Networking opportunities with industry professionals</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-hackathon-purple rounded-full mr-2"></span>
                  <span>Chance to showcase skills to potential employers</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-hackathon-aqua rounded-full mr-2"></span>
                  <span>Valuable experience solving real-world design challenges</span>
                </li>
              </ul>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
};

export default Prizes;
