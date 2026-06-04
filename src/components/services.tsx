import React from 'react';

const Services: React.FC = () => {
  const services = [
    { icon: "🤖", title: "AI-Powered Lead Gen", description: "Smart algorithms that qualify leads before they hit your inbox. 80% less junk, 300% more closes." },
    { icon: "⚡", title: "Lightning Speed", description: "Google loves fast. 0.8s load times = higher rankings = more leads on autopilot." },
    { icon: "📈", title: "Conversion Engine", description: "Psychologically optimized funnels that turn 5%+ of visitors into paying clients." },
    { icon: "🛡️", title: "Enterprise Security", description: "Bank-level encryption, daily backups, and DDoS protection. Sleep easy." },
    { icon: "📊", title: "Real-Time Analytics", description: "See exactly where leads come from. Track scores, behavior, and ROI live." },
    { icon: "💻", title: "Custom Development", description: "Need something unique? We build custom tools, CRMs, and automations." }
  ];

  return (
    <section className="py-24 px-4 bg-black" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold font-bold uppercase tracking-wider mb-2">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Empire-Building Features</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Stop paying for fancy designs that don't print money. Get a machine.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-gold/20 hover:border-gold/50 transition-all">
              <span className="text-4xl mb-4 block">{service.icon}</span>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gold/10 border border-gold/30 rounded-xl p-4 text-center">
          <p className="text-gold font-bold">
            ⚠️ LIMITED: First 5 clients this month get AI setup FREE ($2,500 value)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;