import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { Logo } from './Logo';
import { AlertTriangle, Sparkles } from 'lucide-react';
import carTopView from '../../imports/—Pngtree—top_view_of_a_sleek_20979523.png';

const SCENE_DURATION = 6000;
const SCENE_COUNT = 5;

function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ x: [0, 60, -40, 0], y: [0, -80, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(255,105,0,0.15) 0%, transparent 70%)' }}
      />
      <motion.div
        animate={{ x: [0, -50, 30, 0], y: [0, 40, -60, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 -right-24 w-80 h-80 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(255,105,0,0.1) 0%, transparent 70%)' }}
      />
      <motion.div
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(255,105,0,0.08) 0%, transparent 70%)' }}
      />
    </div>
  );
}

function SceneWelcome() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="absolute inset-0 flex flex-col items-center justify-center px-12"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Logo size="xl" />
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-12 text-center"
      >
        <h1 className="text-8xl font-black text-[#FF6900] uppercase tracking-widest mb-4">
          Welcome Back
        </h1>
        <div className="w-40 h-1 bg-[#FF6900]/50 mx-auto rounded-full mb-8" />
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-slate-800/50 border border-slate-700/50 rounded-3xl px-12 py-8 flex items-center gap-8"
      >
        <div className="text-left">
          <p className="text-2xl text-slate-400 uppercase tracking-[0.3em] mb-2">Vehicle Identified</p>
          <p className="text-5xl font-black text-white">2026 Blue BMW X3</p>
        </div>
        <div className="bg-white rounded-2xl border-4 border-slate-300 px-8 py-4 flex flex-col items-center shrink-0">
          <p className="text-sm font-bold text-slate-500 tracking-[0.3em] uppercase mb-1">Kentucky</p>
          <p className="text-5xl font-black text-slate-900 tracking-[0.15em] font-mono">DRBY-1</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function SceneInsight() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="absolute inset-0 flex flex-col items-center justify-center px-10"
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-center"
      >
        <p className="text-5xl text-slate-300 font-light mb-8 tracking-wide">It's been</p>
        <p className="text-[13rem] font-black text-[#FF6900] leading-none tracking-tight">12 Days</p>
        <p className="text-5xl text-slate-300 font-light mt-8 tracking-wide">since your last wash</p>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="mt-20"
      >
        <p className="text-4xl text-white font-medium text-center leading-relaxed">
          Your X3 could use a <span className="text-[#FF6900] font-black">Ceramic Shield</span>
        </p>
      </motion.div>
    </motion.div>
  );
}

function SceneSavings() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="absolute inset-0 flex flex-col items-center justify-center px-10"
    >
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-5xl text-emerald-400 font-semibold uppercase tracking-[0.2em] text-center mb-10">
          You'd have saved
        </p>
      </motion.div>

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, delay: 0.5 }}
        className="text-center"
      >
        <p className="text-[16rem] font-black text-white leading-none tracking-tight">
          <span className="text-emerald-400">$</span>105
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="mt-8"
      >
        <p className="text-4xl text-emerald-300/80 font-medium text-center tracking-widest uppercase">
          In the last 90 days
        </p>
      </motion.div>
    </motion.div>
  );
}

function SceneTireAlert() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="absolute inset-0 flex flex-col items-center justify-center px-10"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mb-8"
      >
        <AlertTriangle className="w-20 h-20 text-red-500 mx-auto mb-6" />
        <p className="text-6xl font-black text-white uppercase tracking-widest leading-tight">
          Your Tires Need
        </p>
        <p className="text-6xl font-black text-red-500 uppercase tracking-widest leading-tight">
          Replacing
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative w-full max-w-md mx-auto"
        style={{ aspectRatio: '9/14' }}
      >
        <div className="relative h-full w-full">
          <img src={carTopView} alt="Vehicle" className="w-full h-full object-contain opacity-90" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ clipPath: 'inset(5% 15% 5% 15%)' }}>
            <motion.div
              animate={{ x: ['-120%', '220%'] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
              className="absolute inset-y-0 w-1/3 skew-x-[-20deg]"
              style={{
                background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)',
                filter: 'blur(6px)',
              }}
            />
          </div>
        </div>

        <motion.div
          animate={{ opacity: [1, 0.6, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-[10%] right-[0%] bg-red-950/80 border border-red-500 rounded-xl px-3 py-2 flex items-center gap-2"
        >
          <span className="bg-red-500 text-white px-2 py-0.5 rounded text-xs font-bold">LOW</span>
          <span className="text-white font-black text-xl">3/32"</span>
        </motion.div>

        <motion.div
          animate={{ opacity: [1, 0.6, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          className="absolute bottom-[10%] left-[0%] bg-red-950/80 border border-red-500 rounded-xl px-3 py-2 flex items-center gap-2"
        >
          <span className="bg-red-500 text-white px-2 py-0.5 rounded text-xs font-bold">LOW</span>
          <span className="text-white font-black text-xl">3/32"</span>
        </motion.div>

        <motion.div
          animate={{ opacity: [1, 0.6, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          className="absolute bottom-[10%] right-[0%] bg-red-950/80 border border-red-500 rounded-xl px-3 py-2 flex items-center gap-2"
        >
          <span className="bg-red-500 text-white px-2 py-0.5 rounded text-xs font-bold">LOW</span>
          <span className="text-white font-black text-xl">2/32"</span>
        </motion.div>

        <div className="absolute top-[10%] left-[0%] bg-slate-900/70 border border-emerald-500/50 rounded-xl px-3 py-2 flex items-center gap-2">
          <span className="text-emerald-400 font-bold text-xs">OK</span>
          <span className="text-white font-black text-xl">5/32"</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="mt-8"
      >
        <p className="text-4xl text-red-400 text-center font-black uppercase tracking-widest">
          3 of 4 tires critical
        </p>
      </motion.div>
    </motion.div>
  );
}

function SceneCTA() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="absolute inset-0 flex flex-col items-center justify-center px-12"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80, delay: 0.2 }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        >
          <Sparkles className="w-32 h-32 text-[#FF6900]" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="mt-10 text-center"
      >
        <p className="text-6xl font-black text-white uppercase tracking-widest leading-tight">
          Ask Dustin
        </p>
        <p className="text-6xl font-black text-white uppercase tracking-widest leading-tight mt-2">
          To Play a Game
        </p>
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="mt-10"
      >
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="bg-[#FF6900] rounded-3xl px-16 py-8 shadow-lg"
        >
          <p className="text-7xl font-black text-white uppercase tracking-widest text-center">
            & Win Big!
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-12"
      >
        <Logo size="md" />
      </motion.div>
    </motion.div>
  );
}

const scenes = [SceneWelcome, SceneInsight, SceneSavings, SceneTireAlert, SceneCTA];

export function DigitalSign() {
  const [sceneIndex, setSceneIndex] = useState(0);

  useEffect(() => {
    const apply = () => {
      const fs = Math.min(window.innerWidth / 1080, window.innerHeight / 1920) * 16;
      document.documentElement.style.fontSize = `${fs}px`;
      document.documentElement.style.margin = '0';
      document.documentElement.style.padding = '0';
      document.documentElement.style.overflow = 'hidden';
      document.body.style.margin = '0';
      document.body.style.padding = '0';
      document.body.style.overflow = 'hidden';
    };
    apply();
    window.addEventListener('resize', apply);
    return () => {
      window.removeEventListener('resize', apply);
      document.documentElement.style.fontSize = '';
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setSceneIndex((i) => (i + 1) % SCENE_COUNT);
    }, SCENE_DURATION);
    return () => clearInterval(timer);
  }, []);

  const CurrentScene = scenes[sceneIndex];

  return (
    <div
      className="bg-slate-950 overflow-hidden select-none"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <FloatingOrbs />

      <AnimatePresence mode="wait">
        <CurrentScene key={sceneIndex} />
      </AnimatePresence>
    </div>
  );
}
