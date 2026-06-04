import React from 'react';

const SocialProof: React.FC = () => {
  const stats = [
    { icon: "🏆", value: "247+", label: "Websites Launched" },
    { icon: "👥", value: "1,892+", label: "Leads Generated" },
    { icon: "⭐", value: "98%", label: "Client Retention" },
    { icon: "🛡️", value: "24/7", label: "AI Support" }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gold font-bold uppercase tracking-wider mb-2">
            Trusted By Florida's Best
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Real Results. Real Fast.</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <span className="text-4xl mb-3 block">{stat.icon}</span>
              <p className="text-3xl md:text-4xl font-black text-white">{stat.value}</p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gold/20">
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            <span className="text-xl font-bold text-gray-400">⚡ MIAMI REALTORS</span>
            <span className="text-xl font-bold text-gray-400">🔨 FL CONTRACTORS</span>
            <span className="text-xl font-bold text-gray-400">🎯 COACHES COLLECTIVE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;