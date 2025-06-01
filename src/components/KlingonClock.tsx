import React, { useState, useEffect } from 'react';
import { timeToKlingon, getKlingonPhrase, numberToKlingon } from '../utils/klingonTranslator';

/**
 * KlingonClock Component
 * 
 * This component displays the current time in Klingon language.
 * It updates every second to keep the time current.
 */
const KlingonClock: React.FC = () => {
  // State to track the current time
  const [time, setTime] = useState(new Date());

  // Effect to update the time every second
  useEffect(() => {
    // Set up an interval to update the time every second
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once on mount

  // Get the hours, minutes, and seconds from the current time
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  // Format the time values with leading zeros if needed
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  // Get the Klingon representation of the current time
  const klingonTime = timeToKlingon(
    parseInt(formattedHours), 
    parseInt(formattedMinutes), 
    parseInt(formattedSeconds)
  );

  return (
    <div className="text-center">
      {/* Regular time display (hidden but accessible for screen readers) */}
      <div className="sr-only">
        Current Time: {formattedHours}:{formattedMinutes}:{formattedSeconds}
      </div>
      
      {/* Klingon time display with pulsing separators */}
      <div className="flex items-center justify-center text-4xl sm:text-6xl md:text-7xl font-bold tracking-wider">
        <span className="animate-fade-in">{numberToKlingon(parseInt(formattedHours))}</span>
        <span className="animate-pulse mx-2">:</span>
        <span className="animate-fade-in">{numberToKlingon(parseInt(formattedMinutes))}</span>
        <span className="animate-pulse mx-2">:</span>
        <span className="animate-fade-in">{numberToKlingon(parseInt(formattedSeconds))}</span>
      </div>
    </div>
  );
};

export default KlingonClock;