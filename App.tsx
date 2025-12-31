
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Apartments from './components/Apartments';
import Footer from './components/Footer';
import Modal from './components/Modal';

export interface ServiceDetail {
  title: string;
  description: string;
  longDescription: string;
  icon: React.ReactNode;
}

const App: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="services">
          <Services onServiceClick={setSelectedService} />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="apartments">
          <Apartments />
        </div>
      </main>
      <Footer />

      {/* Interactive Modal for Services */}
      {selectedService && (
        <Modal 
          isOpen={!!selectedService} 
          onClose={() => setSelectedService(null)}
          title={selectedService.title}
        >
          <div className="space-y-4">
            <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
              {selectedService.icon}
            </div>
            <p className="text-slate-600 leading-relaxed text-lg italic">
              "{selectedService.description}"
            </p>
            <div className="h-px bg-slate-100 my-6"></div>
            <div className="text-slate-700 leading-relaxed whitespace-pre-line">
              {selectedService.longDescription}
            </div>
            <button 
              onClick={() => setSelectedService(null)}
              className="mt-8 w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
            >
              Tôi đã hiểu
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default App;
