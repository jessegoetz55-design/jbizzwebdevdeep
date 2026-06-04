"use client";
import React from 'react';

const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-black border-t border-gold/20 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-gold mb-4">J Bizz Web Dev</h3>
            <p className="text-gray-400 text-sm">AI-powered websites that print leads while you sleep. Florida's #1 conversion agency.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>AI Web Design</li>
              <li>Lead Generation</li>
              <li>CRM Integration</li>
              <li>White-Label Portal</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📧 hello@jbizzwebdev.com</li>
              <li>📞 (305) 555-0123</li>
              <li>📍 Miami, FL / Orlando, FL</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Get Lead Tips</h4>
            <p className="text-gray-400 text-sm mb-3">Weekly AI strategies. No spam.</p>
            <div className="flex">
              <input type="email" placeholder="Your email" className="flex-1 px-3 py-2 bg-gray-900 border border-gray-700 rounded-l-lg text-sm text-white" />
              <button className="bg-gold text-black px-4 py-2 rounded-r-lg font-bold text-sm">→</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© 2024 J Bizz Web Dev. All rights reserved. Empire building since day one.</p>
        </div>

        <button onClick={scrollToTop} className="fixed bottom-6 right-6 bg-gold text-black p-3 rounded-full shadow-lg hover:scale-110 transition">
          ↑
        </button>
      </div>
    </section>
  );
};

export default Footer;