'use client';

import { useState } from 'react';
import { Hero } from '@/components/hero';
import { Game } from '@/components/game';
import { AnimatePresence } from 'motion/react';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <main className="min-h-screen relative w-full overflow-hidden noise-bg bg-[#14181C] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2C3440]/40 via-[#14181C] to-[#14181C] z-[-1]" />
      
      <AnimatePresence mode="wait">
        {isPlaying ? (
          <Game key="game" onExit={() => setIsPlaying(false)} />
        ) : (
          <Hero key="hero" onPlay={() => setIsPlaying(true)} />
        )}
      </AnimatePresence>
    </main>
  );
}
