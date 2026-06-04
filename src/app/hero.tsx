import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-gold/20 via-black to-black" />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-gold/30 mb-6">
          <span className="text-gold">⚡</span>
          <span className="text-sm uppercase tracking-wide font-semibold text-gold">
            AI-Powered • Lead Machines
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
          Websites That{" "}
          <span className="text-gold">
            Print Leads
          </span>
          <br />
          While You Sleep
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mt-6">
          Stop begging for calls. Get an AI-driven site that converts tire-kickers 
          into paying clients — guaranteed.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gold text-black font-bold px-8 py-4 rounded-full hover:scale-105 transition-all"
          >
            Claim My Free Audit →
          </button>
          <button 
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-gold text-gold px-8 py-4 rounded-full font-semibold hover:bg-gold/10 transition-all"
          >
            See Portfolio
          </button>
        </div>
        
        <div className="mt-10">
          <p className="text-sm text-gray-400">🔥 12 spots left this month. Florida's #1 AI dev.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-3 text-xs text-gray-500">
            <span>✅ 247+ sites launched</span>
            <span>✅ 1,892+ leads generated</span>
            <span>✅ 98% retention rate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;