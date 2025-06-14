import React, { useState, useEffect } from 'react';
import { dateToKlingon } from '../utils/klingonTranslator';

/**
 * AnalogClock Component
 * 
 * Displays an analog clock with Klingon-inspired styling that syncs with the digital clock.
 * Features hour, minute, and second hands with a Klingon symbol background.
 * Also displays the current date in Klingon below the clock.
 */
const AnalogClock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Calculate angles for each hand
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  const secondAngle = (seconds * 6) - 90; // 6 degrees per second
  const minuteAngle = (minutes * 6) + (seconds * 0.1) - 90; // 6 degrees per minute + smooth seconds
  const hourAngle = (hours * 30) + (minutes * 0.5) - 90; // 30 degrees per hour + smooth minutes

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-64 h-64 rounded-full border-4 border-yellow-300 bg-black shadow-2xl">
        {/* Klingon Symbol Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <svg width="120" height="120" viewBox="0 0 100 100" className="text-yellow-300">
            <path
              d="M50 10 L70 30 L90 20 L80 40 L90 60 L70 50 L60 70 L50 50 L40 70 L30 50 L10 60 L20 40 L10 20 L30 30 Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* Hour Markers */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30) - 90;
          const isMainHour = i % 3 === 0;
          const length = isMainHour ? 20 : 12;
          const width = isMainHour ? 3 : 2;
          
          return (
            <div
              key={i}
              className="absolute bg-yellow-300 origin-bottom"
              style={{
                width: `${width}px`,
                height: `${length}px`,
                left: '50%',
                top: '10px',
                transform: `translateX(-50%) rotate(${angle + 90}deg)`,
              }}
            />
          );
        })}

        {/* Hour Numbers */}
        {[12, 3, 6, 9].map((num, i) => {
          const angle = (i * 90);
          const x = 50 + 35 * Math.cos((angle - 90) * Math.PI / 180);
          const y = 50 + 35 * Math.sin((angle - 90) * Math.PI / 180);
          
          return (
            <div
              key={num}
              className="absolute text-yellow-300 font-bold text-lg"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              {num}
            </div>
          );
        })}

        {/* Hour Hand */}
        <div
          className="absolute bg-yellow-300 origin-bottom rounded-full"
          style={{
            width: '6px',
            height: '60px',
            left: '50%',
            top: '50%',
            transform: `translateX(-50%) translateY(-100%) rotate(${hourAngle}deg)`,
            transformOrigin: 'bottom center',
          }}
        />

        {/* Minute Hand */}
        <div
          className="absolute bg-yellow-300 origin-bottom rounded-full"
          style={{
            width: '4px',
            height: '80px',
            left: '50%',
            top: '50%',
            transform: `translateX(-50%) translateY(-100%) rotate(${minuteAngle}deg)`,
            transformOrigin: 'bottom center',
          }}
        />

        {/* Second Hand */}
        <div
          className="absolute bg-red-500 origin-bottom rounded-full transition-transform duration-75"
          style={{
            width: '2px',
            height: '90px',
            left: '50%',
            top: '50%',
            transform: `translateX(-50%) translateY(-100%) rotate(${secondAngle}deg)`,
            transformOrigin: 'bottom center',
          }}
        />

        {/* Center Dot */}
        <div className="absolute w-4 h-4 bg-yellow-300 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-black" />
      </div>
      
      {/* Klingon Date Display */}
      <div className="mt-6 text-center">
        <p className="text-yellow-300 text-lg md:text-xl font-semibold animate-fade-in">
          {dateToKlingon(time)}
        </p>
      </div>
    </div>
  );
};

export default AnalogClock;