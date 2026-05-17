'use client';

import { motion } from 'motion/react';
import { Play, Users, Film } from 'lucide-react';
import { MOVIE_PALETTES } from '@/lib/data';
import { useMemo, useEffect, useState } from 'react';

interface HeroProps {
  onPlay: () => void;
}

export function Hero({ onPlay }: HeroProps) {
  // State for particles only
  // Floating Particles
  const [particles] = useState<{w: number, h: number, l: string, t: string, dy: number[], dx: number[], dur: number, del: number}[]>(() => {
    if (typeof window === 'undefined') return [];
    return [...Array(15)].map(() => ({
      w: Math.random() * 100 + 50,
      h: Math.random() * 100 + 50,
      l: `${Math.random() * 100}%`,
      t: `${Math.random() * 100}%`,
      dy: [0, Math.random() * -100 - 50],
      dx: [0, Math.random() * 50 - 25],
      dur: Math.random() * 10 + 10,
      del: Math.random() * 5,
    }));
  });

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)', scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="relative flex flex-col items-center justify-center min-h-screen z-10 p-6 md:p-12"
    >
      {/* Background Animated Barcodes */}
      <div className="absolute top-1/2 left-0 w-[200vw] h-[60vh] -translate-y-1/2 -rotate-6 opacity-[0.15] pointer-events-none overflow-hidden flex z-[-1]">
        <motion.div 
          animate={{ x: "-50%" }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex h-full w-[200vw] gap-4"
        >
          {/* Scroll real movie barcodes seamlessly */}
          {[...MOVIE_PALETTES, ...MOVIE_PALETTES, ...MOVIE_PALETTES, ...MOVIE_PALETTES].map((movie, i) => (
            <img 
              key={i} 
              src={movie.barcodeUrl} 
              alt="" 
              className="h-full w-[30vw] object-cover rounded-xl shadow-lg" 
            />
          ))}
        </motion.div>
      </div>

      <div className="max-w-4xl w-full text-center space-y-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-semibold uppercase tracking-widest text-[#FF8000] mb-4"
        >
          <Film size={14} />
          <span>Cinematic Experience</span>
        </motion.div>

        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl font-medium tracking-tight text-white text-glow"
        >
          Can You Guess the <br className="hidden sm:block" /> Movie From Its Colors?
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-2xl text-[#8A939B] font-sans max-w-2xl mx-auto font-light"
        >
          Every film has a visual fingerprint. Test your cinephile knowledge in the ultimate color palette challenge.
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
        >
          <button 
            onClick={onPlay}
            className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-md bg-[#00E054] px-8 font-medium text-white transition-all hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
            <Play size={20} className="fill-white" />
            <span className="relative text-sm tracking-wide uppercase font-bold text-shadow-sm">Play Daily Challenge</span>
          </button>
          {/* Multiplayer button removed */}
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {mounted && particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#00E054]/10 blur-xl"
            style={{
              width: p.w,
              height: p.h,
              left: p.l,
              top: p.t,
            }}
            animate={{
              y: p.dy,
              x: p.dx,
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: p.dur,
              repeat: Infinity,
              ease: "linear",
              delay: p.del,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
