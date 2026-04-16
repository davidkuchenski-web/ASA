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
        className="absolute rounded-full"
        style={{ top: '-15%', left: '-15%', width: '70%', height: '40%', background: 'radial-gradient(circle, rgba(255,105,0,0.25) 0%, transparent 60%)' }}
      />
      <motion.div
        animate={{ x: [0, -80, 50, 0], y: [0, 60, -90, 0], scale: [1, 0.8, 1.2, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute rounded-full"
        style={{ top: '40%', right: '-10%', width: '60%', height: '35%', background: 'radial-gradient(circle, rgba(255,105,0,0.15) 0%, transparent 60%)' }}
      />
      <motion.div
        animate={{ top: ['-5%', '105%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        className="absolute left-0 right-0"
        style={{ height: '2px', background: 'linear-gradient(90deg, transparent 0%, rgba(255,105,0,0.2) 50%, transparent 100%)' }}
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
      className="absolute inset-0 flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}
        style={{ transform: 'scale(2)' }}
        className="mb-16"
      >
        <Logo size="xl" />
      </motion.div>

      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="text-center mt-20"
      >
        <p style={{ fontSize: '12vw', lineHeight: 0.9 }} className="font-black text-[#FF6900] uppercase tracking-tight">
          Welcome
        </p>
        <p style={{ fontSize: '16vw', lineHeight: 0.9 }} className="font-black text-white uppercase tracking-tight">
          Back
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.3 }}
        className="mt-12"
        style={{ width: '85%' }}
      >
        <div className="bg-white/5 border border-white/10 rounded-3xl flex items-center justify-between" style={{ padding: '3vh 4vw' }}>
          <div>
            <p style={{ fontSize: '2vw' }} className="text-slate-500 uppercase tracking-[0.4em] mb-1">Identified</p>
            <p style={{ fontSize: '5vw' }} className="font-black text-white tracking-tight leading-none">2026 BMW X3</p>
          </div>
          <div className="bg-white rounded-2xl shrink-0" style={{ padding: '2vh 3vw' }}>
            <p style={{ fontSize: '1.5vw' }} className="font-bold text-slate-500 tracking-[0.3em] uppercase text-center">Kentucky</p>
            <p style={{ fontSize: '4.5vw' }} className="font-black text-slate-900 tracking-wider font-mono leading-none">DRBY-1</p>
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
      className="absolute inset-0 flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}
        className="text-center"
      >
        <p style={{ fontSize: '5vw' }} className="text-slate-500 font-light tracking-widest uppercase mb-4">It's been</p>
        <p style={{ fontSize: '45vw', lineHeight: 0.85 }} className="font-black text-[#FF6900]">12</p>
        <p style={{ fontSize: '14vw', lineHeight: 0.9 }} className="font-black text-white uppercase tracking-tight -mt-2">Days</p>
      </motion.div>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mt-8"
      >
        <p style={{ fontSize: '4vw' }} className="text-slate-400 text-center font-light">since your last wash</p>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 2 }}
        className="mt-8 bg-[#FF6900]/10 border border-[#FF6900]/30 rounded-2xl"
        style={{ padding: '2vh 5vw' }}
      >
        <p style={{ fontSize: '3.5vw' }} className="text-white font-semibold text-center">
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
      className="absolute inset-0 flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <p style={{ fontSize: '5vw' }} className="text-emerald-400 font-semibold uppercase tracking-[0.2em] text-center">
          You'd have saved
        </p>
      </motion.div>

      <motion.div
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 40, damping: 10, delay: 0.5 }}
        className="text-center"
      >
        <p style={{ fontSize: '50vw', lineHeight: 0.85 }} className="font-black tracking-tighter">
          <span className="text-emerald-400">$</span>
          <span className="text-white">105</span>
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.2 }}
      >
        <p style={{ fontSize: '4.5vw' }} className="text-emerald-300/70 font-medium text-center uppercase tracking-[0.3em]">
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
      className="absolute inset-0 flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 70, delay: 0.2 }}
        className="text-center"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="mb-4"
        >
          <AlertTriangle style={{ width: '15vw', height: '15vw' }} className="text-red-500 mx-auto" />
        </motion.div>
        <p style={{ fontSize: '10vw', lineHeight: 0.95 }} className="font-black text-white uppercase tracking-tight">
          Your Tires
        </p>
        <p style={{ fontSize: '10vw', lineHeight: 0.95 }} className="font-black text-red-500 uppercase tracking-tight">
          Need Attention
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="relative mx-auto my-4"
        style={{ width: '55vw', aspectRatio: '9/14' }}
      >
        <div className="relative h-full w-full">
          <img src={carTopView} alt="Vehicle" className="w-full h-full object-contain opacity-90" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ clipPath: 'inset(5% 12% 5% 12%)' }}>
            <motion.div
              animate={{ x: ['-120%', '220%'] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
              className="absolute inset-y-0 w-1/3 skew-x-[-20deg]"
              style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)', filter: 'blur(6px)' }}
            />
          </div>
        </div>
        <motion.div animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.2, repeat: Infinity }}
          className="absolute top-[8%] right-[0%] bg-red-500 rounded-xl" style={{ padding: '1vh 2vw' }}>
          <span className="text-white font-black" style={{ fontSize: '2.5vw' }}>3/32"</span>
        </motion.div>
        <motion.div animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.2, repeat: Infinity, delay: 0.3 }}
          className="absolute bottom-[8%] left-[0%] bg-red-500 rounded-xl" style={{ padding: '1vh 2vw' }}>
          <span className="text-white font-black" style={{ fontSize: '2.5vw' }}>3/32"</span>
        </motion.div>
        <motion.div animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.2, repeat: Infinity, delay: 0.6 }}
          className="absolute bottom-[8%] right-[0%] bg-red-500 rounded-xl" style={{ padding: '1vh 2vw' }}>
          <span className="text-white font-black" style={{ fontSize: '2.5vw' }}>2/32"</span>
        </motion.div>
        <div className="absolute top-[8%] left-[0%] bg-emerald-600 rounded-xl" style={{ padding: '1vh 2vw' }}>
          <span className="text-white font-black" style={{ fontSize: '2.5vw' }}>5/32"</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <p style={{ fontSize: '7vw' }} className="text-red-400 text-center font-black uppercase tracking-wider">
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
      className="absolute inset-0 flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}
      >
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}>
          <Sparkles style={{ width: '20vw', height: '20vw' }} className="text-[#FF6900]" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center mt-4"
      >
        <p style={{ fontSize: '10vw', lineHeight: 0.95 }} className="font-black text-white uppercase tracking-tight">
          Ask Dustin
        </p>
        <p style={{ fontSize: '10vw', lineHeight: 0.95 }} className="font-black text-white uppercase tracking-tight">
          to Play
        </p>
      </motion.div>

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 50, delay: 1 }}
        className="mt-8"
      >
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="bg-[#FF6900] rounded-[2rem]"
          style={{ padding: '4vh 8vw' }}
        >
          <p style={{ fontSize: '12vw', lineHeight: 1 }} className="font-black text-white uppercase tracking-tight text-center">
            Win Big!
          </p>
        </motion.div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="mt-10">
        <Logo size="lg" />
      </motion.div>
    </motion.div>
  );
}

const scenes = [SceneWelcome, SceneInsight, SceneSavings, SceneTireAlert, SceneCTA];

export function DigitalSign() {
  const [sceneIndex, setSceneIndex] = useState(0);

  useEffect(() => {
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'hidden';
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
