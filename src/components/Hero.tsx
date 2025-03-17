import React from 'react';
import CountdownTimer from './CountdownTimer';
const Hero = () => {
  // Target date for the final offline round
  const finalRoundDate = new Date('April 4, 2025 13:00:00 GMT+0530');
  return <section className="min-h-screen pt-28 pb-16 px-4 flex items-center justify-center relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -right-28 w-96 h-96 bg-hackathon-aqua/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-28 w-96 h-96 bg-hackathon-purple/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <div className="animate-fade-in">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-hackathon-black text-white rounded-full mb-4">
                Geekayhem 2025
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Race to <span className="text-hackathon-purple">Innovate</span>
                <br />
                <span className="text-3xl md:text-4xl lg:text-5xl text-hackathon-aqua font-normal">The Design Run</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Unleash your creativity, solve design riddles, and develop innovative prototypes in this unique hackathon experience
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 animate-fade-in" style={{
            animationDelay: "0.2s"
          }}>
              <a href="#register" className="bg-hackathon-purple hover:bg-hackathon-purple/90 text-white px-8 py-3 rounded-full font-medium text-lg shadow-lg shadow-hackathon-purple/20 transition-all duration-300 hover:shadow-xl hover:shadow-hackathon-purple/30 hover:translate-y-[-2px]">
                Register Now
              </a>
              <a href="#about" className="bg-transparent text-hackathon-black border border-hackathon-black/20 hover:border-hackathon-black/40 px-8 py-3 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-md">
                Learn More
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 pt-6 animate-fade-in" style={{
            animationDelay: "0.4s"
          }}>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-sm text-gray-500 mb-1">Venue</span>
                <span className="font-medium">NMIT, Bengaluru, Karnataka</span>
              </div>
              <div className="h-6 w-px bg-gray-300 hidden sm:block"></div>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-sm text-gray-500 mb-1">Final Round</span>
                <span className="font-medium">April 4, 2025</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-md animate-fade-in" style={{
          animationDelay: "0.6s"
        }}>
            <div className="glass-dark p-6 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-xl bg-black/[0.08]">
              <h3 className="text-xl font-semibold mb-6 text-center text-black">Final Round Begins In</h3>
              <CountdownTimer targetDate={finalRoundDate} className="mb-6" />
              <div className="p-4 rounded-xl text-white text-sm bg-[s] bg-[#7700ff]">
                <h4 className="font-semibold mb-2">Shortlisting Round is Live!</h4>
                <p className="opacity-80">
                  Submit your entry via Unstop before March 23, 2025, 11:59 PM IST to qualify for the finals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;