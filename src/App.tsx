import React from 'react';
import KlingonClock from './components/KlingonClock';
import Footer from './components/Footer';
import { getKlingonPhrase } from './utils/klingonTranslator';

/**
 * Main App Component
 * 
 * This is the root component of our Klingon Clock application.
 * It structures the layout and includes the clock and footer components.
 */
function App() {
  // Update the document title
  React.useEffect(() => {
    document.title = getKlingonPhrase('Klingon Clock');
  }, []);

  return (
    <div className="min-h-screen bg-black text-yellow-300 flex flex-col items-center justify-center p-4">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold mb-8">
        {getKlingonPhrase('Welcome to')} {getKlingonPhrase('Klingon Clock')}
      </h1>
      
      {/* Clock Component */}
      <div className="mb-8">
        <KlingonClock />
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;