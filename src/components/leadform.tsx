"use client";
import React, { useState } from 'react';

const LeadForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [industry, setIndustry] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call - replace with real endpoint later
    setTimeout(() => {
      setSubmitted(true);
      setEmail('');
      setName('');
      setIndustry('');
      setLoading(false);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gold/10 rounded-full px-4 py-2 mb-4">
            <span className="text-gold">📅</span>
            <span className="text-gold text-sm font-bold">FREE STRATEGY SESSION</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Stop Losing Leads.<br />
            <span className="text-gold">Lock In A Call.</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg">30-min strategy session. No fluff. Just results.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gold/20">
            <h3 className="text-2xl font-bold text-white mb-2">Free: Lead Magnet Blueprint</h3>
            <p className="text-gray-400 mb-6">Get our $497 AI lead generation playbook — free.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-gold focus:outline-none text-white" />
              <input type="email" placeholder="Best email*" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-gold focus:outline-none text-white" required />
              <select value={industry} onChange={(e) => setIndustry(e.target.value)} className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-gold focus:outline-none text-white">
                <option value="">Select your industry</option>
                <option value="real estate">Real Estate</option>
                <option value="contractor">Contractor / Construction</option>
                <option value="coach">Coach / Consultant</option>
              </select>
              <button type="submit" disabled={loading} className="w-full bg-gold text-black font-bold py-3 rounded-lg hover:bg-gold/90 transition disabled:opacity-50">
                {loading ? "Sending..." : "Send Me The Blueprint"} 📧
              </button>
            </form>
            
            {submitted && <div className="mt-4 bg-green-500/20 border border-green-500 text-green-400 p-3 rounded-lg text-center">✅ Blueprint sent! Check your inbox.</div>}
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-gold/20">
            <h3 className="text-2xl font-bold text-white mb-2">Book a Strategy Call</h3>
            <p className="text-gray-400 mb-4">Pick a time that works. We'll audit your current site.</p>
            <div className="bg-gray-800 rounded-lg p-8 text-center">
              <a href="https://calendly.com/your-jbizz/30min" target="_blank" rel="noopener noreferrer" className="bg-gold text-black px-6 py-3 rounded-lg font-bold inline-block hover:scale-105 transition">
                Book Your Free Audit →
              </a>
            </div>
            <div className="flex justify-center gap-4 mt-4 text-xs text-gray-500">
              <span>🔒 100% Confidential</span>
              <span>⏱️ 30-min session</span>
              <span>💰 No obligation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;