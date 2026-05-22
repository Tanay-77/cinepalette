'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, Clock, Flame, Info, Trophy, Heart } from 'lucide-react';
import { MOVIE_PALETTES, MoviePalette, DUMMY_MOVIES } from '@/lib/data';
import { PaletteStrip } from './palette-strip';

interface GameProps {
  onExit: () => void;
}

export function Game({ onExit }: GameProps) {
  const [currentRound, setCurrentRound] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);

  const [isRevealed, setIsRevealed] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answerStatus, setAnswerStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');

  // Create a randomized sequence of movies for this game session
  const [shuffledMovies] = useState<MoviePalette[]>(() => {
    return [...MOVIE_PALETTES].sort(() => 0.5 - Math.random());
  });

  // Select current movie from the randomized sequence
  const currentMovie = useMemo(() => shuffledMovies[currentRound % shuffledMovies.length], [currentRound, shuffledMovies]);

  // Move generateOptions up so we can use it for initial state
  const generateOptions = (movie: MoviePalette) => {
    const allOtherMovies = [...MOVIE_PALETTES, ...DUMMY_MOVIES].filter(m => m.id !== movie.id);
    
    const similarOptions = allOtherMovies.filter(m => m.colorTheme === movie.colorTheme);
    const otherOptions = allOtherMovies.filter(m => m.colorTheme !== movie.colorTheme);

    similarOptions.sort(() => 0.5 - Math.random());
    otherOptions.sort(() => 0.5 - Math.random());

    // Pick 1 similar option (if available) to be tricky, and fill the rest with random options
    const wrongSimilar = similarOptions.slice(0, 1);
    const wrongOther = otherOptions.slice(0, 3 - wrongSimilar.length);

    const wrongOptions = [...wrongSimilar, ...wrongOther];
    return [...wrongOptions, movie].sort(() => 0.5 - Math.random());
  };

  // Generate options (1 correct, 3 wrong)
  const [options, setOptions] = useState<MoviePalette[]>(() => generateOptions(currentMovie));

  // Timer logic
  useEffect(() => {
    if (isRevealed || timeLeft === 0 || options.length === 0) return;
    const t = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(t);
  }, [timeLeft, isRevealed, options.length]);


  const handleGuess = (id: string) => {
    if (isRevealed) return;

    setSelectedAnswer(id);
    setIsRevealed(true);

    if (id === currentMovie.id) {
      setAnswerStatus('correct');
      setScore(s => s + 100 + (streak * 10) + timeLeft);
      setStreak(s => s + 1);
    } else {
      setAnswerStatus('wrong');
      setStreak(0);
    }

    // Move to next round
    setTimeout(() => {
      setIsRevealed(false);
      setSelectedAnswer(null);
      setAnswerStatus('idle');
      setTimeLeft(30);
      setCurrentRound(r => {
        const nextRound = r + 1;
        const nextMovie = shuffledMovies[nextRound % shuffledMovies.length];
        // Safely schedule setting options for the next render cycle 
        setTimeout(() => setOptions(generateOptions(nextMovie)), 0);
        return nextRound;
      });
    }, 3000);
  };

  // Auto-reveal on timeout
  // To avoid setState directly in effect, use a ref or just call setTimeout
  useEffect(() => {
    if (timeLeft === 0 && !isRevealed) {
      setTimeout(() => handleGuess('TIMEOUT'), 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, isRevealed]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col p-4 md:p-8"
    >
      {/* Top Navbar */}
      <header className="flex items-center justify-between z-10 glass-card px-6 py-4 rounded-2xl shadow-sm">
        <button
          onClick={onExit}
          className="flex items-center gap-2 text-[#8A939B] hover:text-[#00E054] transition-colors"
        >
          <ChevronLeft size={20} />
          <span className="text-sm tracking-wide uppercase font-semibold hidden sm:inline">Quit</span>
        </button>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-2 bg-[#1C2228] border border-[#2C3440] rounded-full px-3 py-1">
            <span className="text-xs uppercase tracking-widest text-[#FF8000] font-semibold">Hardcore Mode</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock size={16} className={timeLeft <= 10 ? 'text-red-500 animate-pulse' : 'text-neutral-500'} />
            <span className={`font-mono text-xl ${timeLeft <= 10 ? 'text-red-500' : 'text-white'}`}>
              00:{timeLeft.toString().padStart(2, '0')}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Flame size={18} className={streak > 2 ? 'text-orange-500' : 'text-neutral-500'} />
            <span className="font-mono text-xl text-white">{streak}</span>
          </div>

          <div className="flex items-center gap-2">
            <Trophy size={18} className="text-yellow-500" />
            <span className="font-mono text-xl text-white">{score}</span>
          </div>
        </div>
      </header>

      {/* Main Game Area */}
      <div className="flex-1 flex flex-col justify-center max-w-5xl mx-auto w-full">

        {/* Removed category badge */}

        {/* The Giant Palette Strip */}
        <PaletteStrip key={`palette-${currentRound}`} imageUrl={currentMovie.barcodeUrl} isRevealing={isRevealed} />

        {/* Answer Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 z-10 w-full">
          <AnimatePresence mode="popLayout">
            {options.map((option, idx) => {
              const isSelected = selectedAnswer === option.id;
              const isCorrectTarget = option.id === currentMovie.id;

              let btnClass = "bg-[#1C2228] border-[#2C3440] hover:bg-[#2C3440] hover:border-[#00E054] text-white";

              if (isRevealed) {
                if (isCorrectTarget) {
                  btnClass = "bg-[#00E054]/20 border-[#00E054] text-white text-glow-neon";
                } else if (isSelected && !isCorrectTarget) {
                  btnClass = "bg-red-500/20 border-red-500 text-white";
                } else {
                  btnClass = "bg-[#1C2228] border-[#2C3440] opacity-50 text-[#8A939B]";
                }
              }

              return (
                <motion.button
                  key={option.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={!isRevealed ? { scale: 1.02 } : {}}
                  whileTap={!isRevealed ? { scale: 0.98 } : {}}
                  onClick={() => handleGuess(option.id)}
                  disabled={isRevealed}
                  className={`relative p-6 rounded-md flex flex-col items-start justify-center transition-all duration-300 border shadow-sm ${btnClass}`}
                >
                  <span className="text-xs font-mono text-[#8A939B] mb-2">Option {String.fromCharCode(65 + idx)}</span>
                  <span className="font-display text-2xl font-medium tracking-tight text-left">
                    {option.title} <span className="opacity-50 text-base font-sans font-light">({option.year})</span>
                  </span>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Removed hint buttons */}

      </div>

      {/* Answer Feedback Toast */}
      <AnimatePresence>
        {isRevealed && answerStatus !== 'idle' && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20 }}
            className={`fixed bottom-10 left-1/2 -translate-x-1/2 px-8 py-4 rounded-md glass-card border backdrop-blur-3xl z-50 flex items-center gap-3 shadow-lg ${answerStatus === 'correct' ? 'border-[#00E054] text-[#00E054]' : 'border-red-500 text-red-500'
              }`}
          >
            {answerStatus === 'correct' ? (
              <>
                <Flame size={24} className="animate-pulse" />
                <span className="text-lg font-bold uppercase tracking-wider">Cinematic Genius!</span>
              </>
            ) : (
              <>
                <Info size={24} />
                <span className="text-lg font-bold uppercase tracking-wider">Director: {currentMovie.director}</span>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
