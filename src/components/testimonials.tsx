"use client";
import React, { useState } from 'react';

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      name: "Marcus Rodriguez",
      role: "Luxury Realtor, Miami",
      quote: "My website went from $0 to 23 qualified leads in the first week. The AI lead scoring alone saved me 10 hours/week.",
      result: "+340% leads in 30 days"
    },
    {
      name: "Sarah Thompson",
      role: "Roofing Contractor, Orlando",
      quote: "The instant quote engine paid for itself in 3 days. Got a $47k commercial job from the first client who used it.",
      result: "$127k in new contracts"
    },
    {
      name: "Coach David Chen",
      role: "Business Coach, Tampa",
      quote: "My old site got 2 leads/month. JBizz rebuilt it with AI chatbots and now I get 25-30 warm leads.",
      result: "1,200% lead increase"
    }
  ];

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold font-bold uppercase tracking-wider mb-2">Social Proof</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Real Clients. Real Money.</h2>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gold/30 p-8 md:p-12">
            <span className="text-6xl text-gold/30 mb-6 block">"</span>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-200 mb-6">
              {testimonials[current].quote}
            </p>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="font-bold text-lg text-white">{testimonials[current].name}</p>
                <p className="text-gray-400 text-sm">{testimonials[current].role}</p>
              </div>
              <div className="flex gap-1">
                {[1,2,3,4,5].map((_, i) => (<span key={i} className="text-gold">★</span>))}
              </div>
              <p className="text-gold font-bold">📈 {testimonials[current].result}</p>
            </div>
          </div>

          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gold/20 hover:bg-gold/40 rounded-full p-2 text-gold">
            ◀
          </button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gold/20 hover:bg-gold/40 rounded-full p-2 text-gold">
            ▶
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button key={idx} onClick={() => setCurrent(idx)} className={`h-2 rounded-full transition-all ${current === idx ? "w-8 bg-gold" : "w-2 bg-gray-600"}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;