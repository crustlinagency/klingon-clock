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

/**
 * Converts a number to its Klingon representation
 * @param num - The number to convert
 * @returns The Klingon representation of the number
 */
export const numberToKlingon = (num: number): string => {
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