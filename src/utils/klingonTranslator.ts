/**
 * Klingon Translator Utility
 * 
 * This file contains functions to translate numbers and text to Klingon language.
 * Klingon is the constructed language of the fictional Klingon species from Star Trek.
 */

// Klingon numerals for 0-9
const klingonNumerals: Record<string, string> = {
  '0': 'pagh',
  '1': 'wa\'',
  '2': 'cha\'',
  '3': 'wej',
  '4': 'loS',
  '5': 'vagh',
  '6': 'jav',
  '7': 'Soch',
  '8': 'chorgh',
  '9': 'Hut'
};

// Klingon translations for common words
const klingonPhrases: Record<string, string> = {
  'Welcome to': 'yI\'el',
  'Klingon Clock': 'tlhIngan rep',
  'Copyright': 'ghItlh Soj',
  'May the force be with you': 'Heghlu\'meH QaQ jajvam'
};

// Klingon month names
const klingonMonths: Record<number, string> = {
  0: 'wa\'DIch jar', // January - First month
  1: 'cha\'DIch jar', // February - Second month
  2: 'wejDIch jar', // March - Third month
  3: 'loSDIch jar', // April - Fourth month
  4: 'vaghDIch jar', // May - Fifth month
  5: 'javDIch jar', // June - Sixth month
  6: 'SochDIch jar', // July - Seventh month
  7: 'chorghDIch jar', // August - Eighth month
  8: 'HutDIch jar', // September - Ninth month
  9: 'wa\'maH DIch jar', // October - Tenth month
  10: 'wa\'maH wa\'DIch jar', // November - Eleventh month
  11: 'wa\'maH cha\'DIch jar' // December - Twelfth month
};

// Klingon day names
const klingonDays: Record<number, string> = {
  0: 'jup jaj', // Sunday - Friend day
  1: 'wa\'DIch jaj', // Monday - First day
  2: 'cha\'DIch jaj', // Tuesday - Second day
  3: 'wejDIch jaj', // Wednesday - Third day
  4: 'loSDIch jaj', // Thursday - Fourth day
  5: 'vaghDIch jaj', // Friday - Fifth day
  6: 'lojmIt jaj' // Saturday - Gate day
};

/**
 * Converts a number to its Klingon representation
 * @param num - The number to convert
 * @returns The Klingon representation of the number
 */
export const numberToKlingon = (num: number): string => {
  return num.toString().split('').map(digit => klingonNumerals[digit]).join(' ');
};

/**
 * Converts a full number (including multi-digit) to Klingon
 * @param num - The number to convert
 * @returns The Klingon representation of the number
 */
export const fullNumberToKlingon = (num: number): string => {
  if (num < 10) {
    return klingonNumerals[num.toString()];
  }
  
  // For numbers 10-99, we use a more natural Klingon construction
  if (num >= 10 && num < 20) {
    if (num === 10) return 'wa\'maH';
    return `wa\'maH ${klingonNumerals[(num % 10).toString()]}`;
  }
  
  if (num >= 20 && num < 100) {
    const tens = Math.floor(num / 10);
    const ones = num % 10;
    if (ones === 0) {
      return `${klingonNumerals[tens.toString()]}maH`;
    }
    return `${klingonNumerals[tens.toString()]}maH ${klingonNumerals[ones.toString()]}`;
  }
  
  // For larger numbers, fall back to digit-by-digit
  return num.toString().split('').map(digit => klingonNumerals[digit]).join(' ');
};

/**
 * Translates hours, minutes, and seconds to Klingon
 * @param hours - The hours value (0-23)
 * @param minutes - The minutes value (0-59)
 * @param seconds - The seconds value (0-59)
 * @returns The formatted Klingon time string
 */
export const timeToKlingon = (hours: number, minutes: number, seconds: number): string => {
  return `${numberToKlingon(hours)}:${numberToKlingon(minutes)}:${numberToKlingon(seconds)}`;
};

/**
 * Gets the Klingon translation for a phrase
 * @param phrase - The English phrase to translate
 * @returns The Klingon translation or the original phrase if no translation exists
 */
export const getKlingonPhrase = (phrase: string): string => {
  return klingonPhrases[phrase] || phrase;
};

/**
 * Gets the Klingon month name
 * @param monthIndex - The month index (0-11)
 * @returns The Klingon month name
 */
export const getKlingonMonth = (monthIndex: number): string => {
  return klingonMonths[monthIndex] || 'nugh jar'; // Unknown month
};

/**
 * Gets the Klingon day name
 * @param dayIndex - The day index (0-6, Sunday = 0)
 * @returns The Klingon day name
 */
export const getKlingonDay = (dayIndex: number): string => {
  return klingonDays[dayIndex] || 'nugh jaj'; // Unknown day
};

/**
 * Formats a complete date in Klingon
 * @param date - The date object to format
 * @returns The formatted Klingon date string
 */
export const dateToKlingon = (date: Date): string => {
  const dayName = getKlingonDay(date.getDay());
  const day = fullNumberToKlingon(date.getDate());
  const month = getKlingonMonth(date.getMonth());
  const year = fullNumberToKlingon(date.getFullYear());
  
  return `${dayName}, ${day} ${month} ${year}`;
};