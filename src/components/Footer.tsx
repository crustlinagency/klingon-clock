import React from 'react';
import { getKlingonPhrase } from '../utils/klingonTranslator';

/**
 * Footer Component
 * 
 * Displays the copyright information with the current year.
 */
const Footer: React.FC = () => {
  // Get the current year for the copyright notice
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-auto py-4 text-center">
      <p className="text-yellow-300 text-sm">
        {getKlingonPhrase('Copyright')} Frank Svendsen - {currentYear} - {getKlingonPhrase('May the force be with you')}
      </p>
    </footer>
  );
};

export default Footer;