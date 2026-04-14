import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { Logo } from './Logo';
import { ArrowRight, CircleCheckBig, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import { AnimatedBackground } from './AnimatedBackground';

export function PullForward() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(12);

  useEffect(() => {
    if (countdown <= 0) {
      navigate('/'); // Navigate to the very first screen (Welcome screen) to reset the loop
      return;
    }

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/20 relative overflow-hidden flex flex-col items-center justify-center px-8 py-6 pointer-events-none">
      <AnimatedBackground />

      {/* Premium Ambient Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(255,105,0,0.15)' : 'rgba(245,158,11,0.15)'} 0%, transparent 70%)`,
              width: `${Math.random() * 400 + 200}px`,
              height: `${Math.random() * 400 + 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full flex flex-col items-center justify-center max-w-4xl text-center flex-1 space-y-4">
        <Logo size="md" className="mb-2" />

        <div className="flex items-center gap-6 mb-2">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
            className="relative inline-block"
          >
            <motion.div
              animate={{ 
                boxShadow: ['0 0 0px rgba(34,197,94,0)', '0 0 30px rgba(34,197,94,0.4)', '0 0 0px rgba(34,197,94,0)']
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-full bg-emerald-500/10"
            >
              <CircleCheckBig className="w-20 h-20 text-emerald-400 bg-slate-900 rounded-full" strokeWidth={2.5} />
            </motion.div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl font-bold tracking-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 uppercase">
              You're All Set!
            </span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-slate-800/90 via-slate-800/95 to-slate-900/90 backdrop-blur-xl rounded-[2rem] p-8 shadow-2xl border border-slate-700/50 w-full relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600"></div>
          
          <div className="flex flex-col items-center">
            {/* Animated arrow */}
            <div className="flex items-center justify-center mb-4 gap-3">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ x: [0, 20, 0], opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                >
                  <ArrowRight className="w-10 h-10 text-[#FF6900]" strokeWidth={3} />
                </motion.div>
              ))}
            </div>

            <h3 className="text-4xl text-white mb-2 font-bold tracking-wider uppercase">
              Pull Forward
            </h3>
            <p className="text-xl text-slate-300 font-light mb-4">
              Drive forward to the express lane entrance
            </p>
            
            <div className="bg-amber-900/30 border border-amber-700/50 rounded-xl px-6 py-3 inline-flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <p className="text-amber-400 font-semibold text-base">Your wash will begin momentarily</p>
              <Sparkles className="w-4 h-4 text-amber-400" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col items-center space-y-3 mt-2"
        >
          <p className="text-lg text-slate-400 font-light tracking-wide uppercase">
            Welcome to the Winner's Circle
          </p>
          
          {/* Countdown timer */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-full px-6 py-2.5 shadow-xl border border-slate-700 flex items-center gap-3">
            <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">System resetting in</span>
            <motion.div
              key={countdown}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              className="bg-gradient-to-br from-[#FF6900] to-amber-600 px-3 py-1 rounded-lg"
            >
              <span className="text-lg font-bold text-white tabular-nums">{countdown}</span>
            </motion.div>
            <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">seconds</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}