import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}
const CountdownTimer = ({
  targetDate,
  className
}: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(difference / (1000 * 60 * 60) % 24),
          minutes: Math.floor(difference / 1000 / 60 % 60),
          seconds: Math.floor(difference / 1000 % 60)
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    };
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);
  const timeUnits = [{
    label: 'Days',
    value: timeLeft.days
  }, {
    label: 'Hours',
    value: timeLeft.hours
  }, {
    label: 'Minutes',
    value: timeLeft.minutes
  }, {
    label: 'Seconds',
    value: timeLeft.seconds
  }];
  return <div className={cn('grid grid-cols-4 gap-2 md:gap-4', className)}>
      {timeUnits.map((unit, index) => <div key={unit.label} className="flex flex-col items-center justify-center">
          <div className="glass p-2 md:p-3 w-full aspect-square flex items-center justify-center rounded-lg shadow-md border border-white/20 bg-[zinc-] bg-[#aff6ee]">
            <span className="text-xl md:text-3xl lg:text-4xl font-mono font-bold text-hackathon-black">
              {unit.value.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="text-xs md:text-sm mt-2 font-medium text-black">
            {unit.label}
          </span>
        </div>)}
    </div>;
};
export default CountdownTimer;