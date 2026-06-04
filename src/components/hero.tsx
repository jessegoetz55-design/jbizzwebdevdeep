"use client";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/20 via-black to-black" />
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-gold/30 mb-6">
            <Zap className="w-4 h-4 text-gold" />
            <span className="text-sm uppercase tracking-wide">AI-Powered • Lead Machines</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Websites That <span className="text-gold glow-text">Print Leads</span><br />
            While You Sleep
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mt-6">
            Stop begging for calls. Get an AI-driven site that converts tire-kickers into paying clients — guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <button className="bg-gold text-black font-bold px-8 py-4 rounded-full flex items-center gap-2 hover:scale-105 transition shadow-lg shadow-gold/20">
              Claim My Free Audit <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-gold text-gold px-8 py-4 rounded-full font-semibold hover:bg-gold/10 transition">
              See Portfolio
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-6">🔥 12 spots left this month. Florida's #1 AI dev.</p>
        </motion.div>
      </div>
    </section>
  );
}