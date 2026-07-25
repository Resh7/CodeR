"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Cog, Crosshair, Factory } from "lucide-react";

const stats = [
  ["15+", "Years Experience"],
  ["750+", "Projects Completed"],
  ["40+", "Government Projects"],
  ["120+", "Happy Clients"]
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=2200&q=86')] bg-cover bg-center" />
      <div className="hero-mask absolute inset-0" />
      <div className="grid-noise absolute inset-0 opacity-30" />
      <motion.div className="absolute right-[8%] top-[19%] hidden h-40 w-40 rounded-full border border-blue-300/20 lg:block" animate={{ rotate: 360 }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }}>
        <Crosshair className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-300/50" size={56} />
      </motion.div>
      <motion.div className="absolute right-[23%] top-[32%] hidden lg:block" animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity }}>
        <div className="glass rounded-2xl p-4 shadow-glow"><Cog className="text-blue-300" /></div>
      </motion.div>

      <div className="container-premium relative z-10 flex min-h-screen flex-col justify-center pb-32 pt-36">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }} className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[.2em] text-blue-200">
            <BadgeCheck size={16} /> Precision engineering partner
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-[.98] tracking-[-.045em] sm:text-6xl lg:text-8xl">
            Engineering Precision <span className="text-gradient">Beyond Expectations</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
            Delivering high-quality CNC wire cutting, precision engineering, industrial manufacturing and machine solutions trusted by industries and government organizations.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="#services" className="group inline-flex items-center gap-2 rounded-full bg-blue-500 px-7 py-4 font-extrabold shadow-glow transition hover:-translate-y-1 hover:bg-blue-400">
              Our Services <ArrowRight className="transition group-hover:translate-x-1" size={19} />
            </Link>
            <Link href="#contact" className="glass rounded-full px-7 py-4 font-extrabold transition hover:bg-white/14">Contact Us</Link>
          </div>
        </motion.div>

        <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-navy/55 backdrop-blur-xl">
          <div className="container-premium grid grid-cols-2 divide-x divide-white/10 lg:grid-cols-4">
            {stats.map(([value, label], index) => (
              <motion.div key={label} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .6 + index * .1 }} className="px-5 py-6 lg:px-8">
                <strong className="block text-2xl font-black text-white sm:text-3xl">{value}</strong>
                <span className="mt-1 block text-xs font-semibold uppercase tracking-[.12em] text-white/50">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
