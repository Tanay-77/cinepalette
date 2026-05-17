'use client';

import { useState } from 'react';
import { Hero } from '@/components/hero';
import { Game } from '@/components/game';
import { AnimatePresence } from 'motion/react';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <main className="min-h-screen relative w-full overflow-hidden bg-[#14181C] text-white">
      
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
