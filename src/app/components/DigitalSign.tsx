import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { Logo } from './Logo';
import { AlertTriangle, Sparkles } from 'lucide-react';
import carTopView from '../../imports/—Pngtree—top_view_of_a_sleek_20979523.png';

const SCENE_DURATION = 7000;
const SCENE_COUNT = 5;

function AnimatedBG() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ x: [0, 100, -60, 0], y: [0, -120, 40, 0], scale: [1, 1.3, 0.9, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-48 -left-48 w-[40rem] h-[40rem] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(255,105,0,0.2) 0%, transparent 60%)' }}
      />
      <motion.div
        animate={{ x: [0, -80, 50, 0], y: [0, 60, -90, 0], scale: [1, 0.8, 1.2, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 -right-32 w-[35rem] h-[35rem] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(255,105,0,0.12) 0%, transparent 60%)' }}
      />
      <motion.div
        animate={{ x: [0, 70, -40, 0], y: [0, -50, 80, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-24 left-1/3 w-[30rem] h-[30rem] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(255,105,0,0.08) 0%, transparent 60%)' }}
      />
      <motion.div
        animate={{ top: ['-5%', '105%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        className="absolute left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,105,0,0.15) 50%, transparent 100%)' }}
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
      transition={{ duration: 1 }}
      className="absolute inset-0 flex flex-col items-center justify-center px-8"
    >
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 60, delay: 0.2 }}
        className="mb-8"
        style={{ transform: 'scale(1.5)' }}
      >
        <Logo size="xl" />
      </motion.div>

      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center mt-16"
      >
        <h1 className="text-[7rem] font-black text-[#FF6900] uppercase leading-none tracking-tight">
          Welcome
        </h1>
        <h2 className="text-[9rem] font-black text-white uppercase leading-none tracking-tight -mt-4">
          Back
        </h2>
      </motion.div>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.2 }}
        className="mt-12 w-full max-w-2xl"
      >
        <div className="bg-white/5 border border-white/10 rounded-3xl px-10 py-8 flex items-center justify-between gap-8">
          <div>
            <p className="text-xl text-slate-500 uppercase tracking-[0.4em] mb-2">Identified</p>
            <p className="text-5xl font-black text-white tracking-tight">2026 BMW X3</p>
          </div>
          <div className="bg-white rounded-2xl px-8 py-4 shrink-0">
            <p className="text-xs font-bold text-slate-500 tracking-[0.3em] uppercase text-center">Kentucky</p>
            <p className="text-4xl font-black text-slate-900 tracking-wider font-mono">DRBY-1</p>
          </div>
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
      transition={{ duration: 1 }}
      className="absolute inset-0 flex flex-col items-center justify-center px-8"
    >
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 60, delay: 0.2 }}
        className="text-center"
      >
        <p className="text-4xl text-slate-500 font-light tracking-widest uppercase mb-8">It's been</p>
        <p className="text-[18rem] font-black text-[#FF6900] leading-none">12</p>
        <p className="text-[6rem] font-black text-white leading-none uppercase tracking-tight -mt-4">Days</p>
      </motion.div>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-16"
      >
        <p className="text-4xl text-slate-400 text-center font-light tracking-wide">
          since your last wash
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.8 }}
        className="mt-12 bg-[#FF6900]/10 border border-[#FF6900]/30 rounded-2xl px-10 py-6"
      >
        <p className="text-3xl text-white font-semibold text-center">
          Time for a <span className="text-[#FF6900] font-black">Ceramic Shield</span>
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
      transition={{ duration: 1 }}
      className="absolute inset-0 flex flex-col items-center justify-center px-8"
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <p className="text-4xl text-emerald-400 font-semibold uppercase tracking-[0.3em] text-center">
          You'd have saved
        </p>
      </motion.div>

      <motion.div
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 50, damping: 12, delay: 0.5 }}
        className="text-center my-8"
      >
        <p className="text-[22rem] font-black leading-none tracking-tighter">
          <span className="text-emerald-400">$</span>
          <span className="text-white">105</span>
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.2 }}
      >
        <p className="text-4xl text-emerald-300/70 font-medium text-center uppercase tracking-[0.3em]">
          In 90 days
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
      transition={{ duration: 1 }}
      className="absolute inset-0 flex flex-col items-center justify-center px-8"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80, delay: 0.2 }}
        className="text-center mb-6"
      >
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <AlertTriangle className="w-28 h-28 text-red-500 mx-auto mb-6" />
        </motion.div>
        <p className="text-[5rem] font-black text-white uppercase leading-none tracking-tight">
          Your Tires
        </p>
        <p className="text-[5rem] font-black text-red-500 uppercase leading-none tracking-tight">
          Need Attention
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="relative w-full max-w-sm mx-auto my-4"
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

        <motion.div animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute top-[8%] right-[0%] bg-red-500 rounded-xl px-3 py-2">
          <span className="text-white font-black text-lg">3/32"</span>
        </motion.div>
        <motion.div animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
          className="absolute bottom-[8%] left-[0%] bg-red-500 rounded-xl px-3 py-2">
          <span className="text-white font-black text-lg">3/32"</span>
        </motion.div>
        <motion.div animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
          className="absolute bottom-[8%] right-[0%] bg-red-500 rounded-xl px-3 py-2">
          <span className="text-white font-black text-lg">2/32"</span>
        </motion.div>
        <div className="absolute top-[8%] left-[0%] bg-emerald-600 rounded-xl px-3 py-2">
          <span className="text-white font-black text-lg">5/32"</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <p className="text-5xl text-red-400 text-center font-black uppercase tracking-wider">
          3 of 4 Critical
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
      transition={{ duration: 1 }}
      className="absolute inset-0 flex flex-col items-center justify-center px-8"
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 60, delay: 0.2 }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        >
          <Sparkles className="w-40 h-40 text-[#FF6900]" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center mt-8"
      >
        <p className="text-[5rem] font-black text-white uppercase leading-none tracking-tight">
          Ask Dustin
        </p>
        <p className="text-[5rem] font-black text-white uppercase leading-none tracking-tight mt-2">
          to Play
        </p>
      </motion.div>

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 60, delay: 1 }}
        className="mt-10"
      >
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="bg-[#FF6900] rounded-[2rem] px-16 py-10"
        >
          <p className="text-[5.5rem] font-black text-white uppercase leading-none tracking-tight text-center">
            Win Big!
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="mt-14"
      >
        <Logo size="lg" />
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
      <AnimatedBG />

      <AnimatePresence mode="wait">
        <CurrentScene key={sceneIndex} />
      </AnimatePresence>
    </div>
  );
}
