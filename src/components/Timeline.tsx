
import React from 'react';
import SectionHeading from './SectionHeading';
import AnimatedReveal from './AnimatedReveal';
import { Calendar, Clock } from 'lucide-react';

const timelineEvents = [
  {
    title: "Shortlisting Round",
    date: "March 8 - 23, 2025",
    time: "10:50 PM - 11:59 PM IST",
    description: "Online qualification via Unstop platform",
    icon: <Calendar className="w-5 h-5" />,
    isActive: true
  },
  {
    title: "Teams Announcement",
    date: "March 30, 2025",
    time: "6:00 PM IST",
    description: "Top 12 teams will be notified via email",
    icon: <Calendar className="w-5 h-5" />
  },
  {
    title: "Final Offline Round",
    date: "April 4, 2025",
    time: "1:00 PM - 4:00 PM IST",
    description: "Prototype development at NMIT, Bengaluru",
    icon: <Calendar className="w-5 h-5" />
  },
  {
    title: "Results & Awards",
    date: "April 4, 2025",
    time: "5:30 PM IST",
    description: "Winners announcement and prize distribution",
    icon: <Calendar className="w-5 h-5" />
  }
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 px-4 bg-gradient-to-b from-white to-hackathon-aqua/5">
      <div className="container mx-auto max-w-5xl">
        <AnimatedReveal>
          <SectionHeading 
            title="Event Timeline" 
            description="Mark your calendar for these key dates and don't miss any stage of the competition"
          />
        </AnimatedReveal>
        
        <div className="mt-16 relative">
          {/* Timeline central line */}
          <div className="absolute left-4 md:left-1/2 md:-ml-0.5 w-1 h-full bg-gradient-to-b from-hackathon-aqua to-hackathon-purple rounded-full"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <AnimatedReveal key={index} delay={index * 150}>
                <div className={`relative flex items-center md:justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 md:-ml-4 w-8 h-8 rounded-full bg-white z-10 flex items-center justify-center shadow-md border-2 border-hackathon-aqua">
                    {event.icon}
                  </div>
                  
                  {/* Event card */}
                  <div className={`pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:pl-4' : 'md:pl-16'} w-full md:w-5/12`}>
                    <div className={`glass p-5 rounded-xl shadow-md border border-white/30 ${event.isActive ? 'ring-2 ring-hackathon-aqua/50' : ''}`}>
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-semibold">{event.title}</h3>
                        {event.isActive && (
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-hackathon-aqua/20 text-hackathon-black">
                            Active
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{event.date}</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{event.time}</span>
                      </div>
                      
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
