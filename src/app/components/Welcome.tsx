import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { Logo } from './Logo';
import { HorseIcon } from './HorseIcon';
import { Sparkles } from 'lucide-react';
import { AnimatedBackground } from './AnimatedBackground';

export function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/20 relative overflow-hidden flex flex-col justify-center items-center py-4 gap-6 sm:gap-8">
      
      {/* Reusable Animated Background */}
      <AnimatedBackground />

      {/* Top Section: Logo */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full flex justify-center mt-2"
      >
        <Logo size="xl" />
      </motion.div>

      {/* Middle Section: Premium Glowing Tech Centerpiece */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
        className="relative z-10 flex items-center justify-center my-0"
      >
        <div className="relative flex items-center justify-center">
          
          {/* Outer Pulsing Tech Ring */}
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-[-30px] rounded-full border border-[#FF6900]/20 pointer-events-none"
          />
          
          {/* Middle Rotating Aura Ring */}
          <div className="absolute inset-[-15px] bg-[#FF6900]/5 rounded-full blur-xl"></div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-15px] rounded-full border-t border-t-[#FF6900]/50 border-r border-r-transparent border-b border-b-transparent border-l border-l-transparent pointer-events-none"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-8px] rounded-full border-b border-b-[#FF6900]/40 border-l border-l-transparent border-t border-t-transparent border-r border-r-transparent pointer-events-none"
          />

          {/* Premium Core */}
          <div className="relative bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700/50 p-10 rounded-full shadow-[0_0_50px_rgba(255,105,0,0.15)] flex items-center justify-center">
            <motion.div
              animate={{
                y: [0, -6, 0],
                filter: ['drop-shadow(0 0 10px rgba(255,105,0,0.3))', 'drop-shadow(0 0 25px rgba(255,105,0,0.6))', 'drop-shadow(0 0 10px rgba(255,105,0,0.3))']
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <HorseIcon className="w-28 h-28 text-[#FF6900]" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Section: CTA */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="relative z-10 w-full flex flex-col items-center space-y-6 mb-0"
      >
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide">
            Where Speed Meets
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-[#FF6900] to-amber-500">
              Championship Shine
            </span>
          </h2>
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/menu')}
          className="group relative bg-gradient-to-r from-[#FF6900] to-amber-600 text-white px-12 py-5 rounded-full text-2xl font-bold shadow-2xl overflow-hidden min-w-[320px]"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
            animate={{ x: ['-200%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="relative flex justify-center items-center gap-4 uppercase tracking-widest">
            Touch to Begin
            <Sparkles className="w-7 h-7" />
          </span>
        </motion.button>
      </motion.div>
    </div>
  );
}