"use client";
import { useState } from "react";
import { Sparkles, Copy } from "lucide-react";

export default function AIFeature() {
  const [industry, setIndustry] = useState("");
  const [generated, setGenerated] = useState("");

  const generateLeadMagnet = () => {
    if (!industry) return;
    setGenerated(`🔥 "7 AI Secrets to Dominate ${industry} Leads in 2024" – Get the free guide.`);
  };

  return (
    <section className="py-24 px-4 bg-black border-y border-gold/20">
      <div className="max-w-4xl mx-auto text-center">
        <Sparkles className="w-12 h-12 text-gold mx-auto mb-4" />
        <h2 className="text-4xl font-bold">AI Content Generator <span className="text-gold">(Live Demo)</span></h2>
        <p className="text-gray-400 mt-2">Type your industry → Get a lead-gen hook in seconds</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="e.g., roofing, real estate, coaching"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-gold"
          />
          <button onClick={generateLeadMagnet} className="bg-gold text-black px-6 py-3 rounded-lg font-bold flex items-center gap-2 justify-center">
            Generate <Sparkles className="w-4 h-4" />
          </button>
        </div>
        {generated && (
          <div className="mt-6 p-4 bg-gray-900 rounded-xl border border-gold/30 flex justify-between items-center">
            <span className="text-gold font-mono">{generated}</span>
            <button onClick={() => navigator.clipboard.writeText(generated)} className="text-gray-400 hover:text-gold">
              <Copy className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}