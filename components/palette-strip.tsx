'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

interface PaletteStripProps {
  imageUrl: string;
  isRevealing: boolean;
}

export function PaletteStrip({ imageUrl, isRevealing }: PaletteStripProps) {
  return (
    <div className="w-full max-w-5xl mx-auto h-[35vh] sm:h-[45vh] rounded-xl overflow-hidden cinematic-shadow relative my-8 bg-[#14181C] border border-[#2C3440]">

      <motion.div
        className="w-full h-full relative"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src={imageUrl}
          alt="Movie Barcode"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="object-fill"
        />
      </motion.div>

      {/* Blur overlay has been removed so the barcode is always clear */}

      {/* Film grain over the palette */}
      <div className="absolute inset-0 noise-bg opacity-30 mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] pointer-events-none" />
    </div>
  );
}
