import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState, useRef } from 'react';
import { Logo } from './Logo';
import { AlertTriangle, Mic, Check } from 'lucide-react';
import carTopView from '../../imports/—Pngtree—top_view_of_a_sleek_20979523.png';

const FRAME_TIMES = [1500, 4000, 3000, 3500, 4000, 5000];
const TOTAL = FRAME_TIMES.reduce((a, b) => a + b, 0);
const FRAME_COUNT = FRAME_TIMES.length;

const transition = { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] };
const enterAnim = { opacity: 1, scale: 1 };
const enterInit = { opacity: 0, scale: 0.95 };
const exitAnim = { opacity: 0, scale: 1.05 };

function useCountUp(target: number, ms: number) {
  const [v, setV] = useState(0);
  useEffect(() => {
    const t0 = performance.now();
    let raf: number;
    const tick = () => {
      const p = Math.min((performance.now() - t0) / ms, 1);
      setV(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, ms]);
  return v;
}

function useTypewriter(text: string, charMs: number, delayMs: number) {
  const [shown, setShown] = useState('');
  const [done, setDone] = useState(false);
  useEffect(() => {
    let i = 0;
    const t = setTimeout(() => {
      const iv = setInterval(() => {
        i++;
        setShown(text.slice(0, i));
        if (i >= text.length) { clearInterval(iv); setDone(true); }
      }, charMs);
    }, delayMs);
    return () => clearTimeout(t);
  }, [text, charMs, delayMs]);
  return { shown, done };
}

function AnimatedBG() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          x: [0, 20, 0, -20, 0],
          y: [0, -20, 0, 20, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute rounded-full"
        style={{ top: '-10%', left: '-10%', width: '65%', height: '35%', background: 'radial-gradient(circle, rgba(255,105,0,0.22) 0%, transparent 60%)' }}
      />
      <motion.div
        animate={{
          x: [0, -20, 0, 20, 0],
          y: [0, 20, 0, -20, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 10 }}
        className="absolute rounded-full"
        style={{ top: '45%', right: '-8%', width: '55%', height: '30%', background: 'radial-gradient(circle, rgba(255,105,0,0.14) 0%, transparent 60%)' }}
      />
      <motion.div
        animate={{ top: ['-2%', '102%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        className="absolute left-0 right-0"
        style={{ height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(255,105,0,0.15) 50%, transparent 100%)' }}
      />
    </div>
  );
}

function DrawCheck({ show }: { show: boolean }) {
  if (!show) return null;
  return (
    <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}>
      <div className="bg-emerald-500 rounded-full flex items-center justify-center" style={{ width: '3.5vw', height: '3.5vw' }}>
        <Check style={{ width: '2.5vw', height: '2.5vw' }} className="text-white" strokeWidth={3} />
      </div>
    </motion.div>
  );
}

function SceneLogo() {
  return (
    <motion.div initial={enterInit} animate={enterAnim} exit={exitAnim} transition={transition}
      className="absolute inset-0 flex items-center justify-center">
      <motion.div initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 60 }}
        style={{ transform: 'scale(2.5)' }}>
        <Logo size="xl" />
      </motion.div>
    </motion.div>
  );
}

function SceneWelcome() {
  const [scanDone, setScanDone] = useState(false);
  const plate = useTypewriter('DRBY-1', 80, 1600);

  useEffect(() => {
    const t = setTimeout(() => setScanDone(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div initial={enterInit} animate={enterAnim} exit={exitAnim} transition={transition}
      className="absolute inset-0 flex flex-col items-center justify-center">

      {/* Scan line */}
      <motion.div
        initial={{ top: 0, opacity: 1 }}
        animate={{ top: '100%', opacity: 0 }}
        transition={{ duration: 0.8, ease: 'linear' }}
        className="absolute left-0 right-0 z-50"
        style={{ height: '2px', background: 'linear-gradient(90deg, transparent 10%, rgba(6,182,212,0.8) 50%, transparent 90%)', boxShadow: '0 0 20px rgba(6,182,212,0.5)' }}
      />

      <motion.div initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.3 }}
        className="text-center mb-8">
        <p style={{ fontSize: '12vw', lineHeight: 0.9 }} className="font-black text-[#FF6900] uppercase tracking-tight">Welcome</p>
        <p style={{ fontSize: '16vw', lineHeight: 0.9 }} className="font-black text-white uppercase tracking-tight">Back</p>
      </motion.div>

      {/* Vehicle card — appears after scan */}
      <AnimatePresence>
        {scanDone && (
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            style={{ width: '88%' }}>
            <div className="bg-white/5 border border-white/10 rounded-3xl flex items-center justify-between" style={{ padding: '2.5vh 4vw' }}>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <p style={{ fontSize: '2.2vw' }} className="text-slate-500 uppercase tracking-[0.4em]">Identified</p>
                  <DrawCheck show={plate.done} />
                </div>
                <p style={{ fontSize: '5vw' }} className="font-black text-white tracking-tight leading-none">2026 BMW X3</p>
              </div>
              <div className="bg-white rounded-2xl shrink-0" style={{ padding: '1.5vh 2.5vw' }}>
                <p style={{ fontSize: '1.4vw' }} className="font-bold text-slate-500 tracking-[0.3em] uppercase text-center">Kentucky</p>
                <p style={{ fontSize: '4.5vw' }} className="font-black text-slate-900 tracking-wider font-mono leading-none">
                  {plate.shown}<motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.5, repeat: Infinity }} className="text-slate-400">|</motion.span>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function SceneInsight() {
  const count = useCountUp(12, 600);

  return (
    <motion.div initial={enterInit} animate={enterAnim} exit={exitAnim} transition={transition}
      className="absolute inset-0 flex flex-col items-center justify-center">
      <motion.div initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 50, delay: 0.1 }} className="text-center">
        <p style={{ fontSize: '5vw' }} className="text-slate-500 font-light tracking-widest uppercase mb-4">It's been</p>
        <p style={{ fontSize: '45vw', lineHeight: 0.85 }} className="font-black text-[#FF6900]">{count}</p>
        <p style={{ fontSize: '14vw', lineHeight: 0.9 }} className="font-black text-white uppercase tracking-tight -mt-2">Days</p>
      </motion.div>

      <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }} className="mt-8">
        <p style={{ fontSize: '4vw' }} className="text-slate-400 text-center font-light">since your last wash</p>
      </motion.div>

      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 1.5 }} className="mt-6">
        <p style={{ fontSize: '3.5vw' }} className="text-white font-medium text-center">
          Time for a{' '}
          <span className="text-[#FF6900] font-black" style={{ borderBottom: '3px solid #FF6900', paddingBottom: '2px' }}>
            Ceramic Shield
          </span>
        </p>
      </motion.div>
    </motion.div>
  );
}

function SceneSavings() {
  const count = useCountUp(105, 1000);

  return (
    <motion.div initial={enterInit} animate={enterAnim} exit={exitAnim} transition={transition}
      className="absolute inset-0 flex flex-col items-center justify-center">
      <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
        <p style={{ fontSize: '5vw' }} className="text-emerald-400 font-semibold uppercase tracking-[0.2em] text-center">
          You'd have saved
        </p>
      </motion.div>

      <motion.div
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 40, damping: 10, delay: 0.4 }}
        className="text-center"
      >
        <motion.p
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ fontSize: '50vw', lineHeight: 0.85 }}
          className="font-black tracking-tighter"
        >
          <span className="text-emerald-400">$</span>
          <span className="text-white">{count}</span>
        </motion.p>
      </motion.div>

      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 1.2 }}>
        <p style={{ fontSize: '4.5vw' }} className="text-emerald-300/70 font-medium text-center uppercase tracking-[0.3em]">
          In 90 days
        </p>
      </motion.div>
    </motion.div>
  );
}

function TireBadge({ delay, value, style: pos }: { delay: number; value: string; style: React.CSSProperties }) {
  return (
    <motion.div
      animate={{
        opacity: [1, 0.5, 1],
        boxShadow: [
          '0 0 0px rgba(239,68,68,0)',
          '0 0 24px rgba(239,68,68,0.8)',
          '0 0 0px rgba(239,68,68,0)',
        ],
      }}
      transition={{ duration: 1.2, repeat: Infinity, delay }}
      className="absolute bg-red-500 rounded-xl"
      style={{ padding: '1vh 2vw', ...pos }}
    >
      <span className="text-white font-black" style={{ fontSize: '2.5vw' }}>{value}</span>
    </motion.div>
  );
}

function SceneTireAlert() {
  return (
    <motion.div initial={enterInit} animate={enterAnim} exit={exitAnim} transition={transition}
      className="absolute inset-0 flex flex-col items-center justify-center">
      <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 70, delay: 0.15 }} className="text-center">
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }} className="mb-4">
          <AlertTriangle style={{ width: '15vw', height: '15vw' }} className="text-red-500 mx-auto" />
        </motion.div>
        <p style={{ fontSize: '10vw', lineHeight: 0.95 }} className="font-black text-white uppercase tracking-tight">Your Tires</p>
        <p style={{ fontSize: '10vw', lineHeight: 0.95 }} className="font-black text-red-500 uppercase tracking-tight">Need Attention</p>
      </motion.div>

      <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }}
        className="relative mx-auto my-4" style={{ width: '50vw', aspectRatio: '9/14' }}>
        <div className="relative h-full w-full">
          {/* TODO: swap sedan PNG for SUV silhouette to match BMW X3 */}
          <img src={carTopView} alt="Vehicle" className="w-full h-full object-contain opacity-90" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ clipPath: 'inset(5% 12% 5% 12%)' }}>
            <motion.div animate={{ x: ['-120%', '220%'] }} transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
              className="absolute inset-y-0 w-1/3 skew-x-[-20deg]"
              style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)', filter: 'blur(6px)' }} />
          </div>
        </div>

        <TireBadge delay={0} value="3/32&quot;" style={{ top: '8%', right: '0%' }} />
        <TireBadge delay={0.2} value="3/32&quot;" style={{ bottom: '8%', left: '0%' }} />
        <TireBadge delay={0.4} value="2/32&quot;" style={{ bottom: '8%', right: '0%' }} />

        {/* Good tire — dimmed and smaller */}
        <div className="absolute top-[8%] left-[0%] bg-emerald-600 rounded-xl" style={{ padding: '0.7vh 1.5vw', opacity: 0.4, transform: 'scale(0.8)', transformOrigin: 'top left' }}>
          <span className="text-white font-black" style={{ fontSize: '2vw' }}>5/32"</span>
        </div>
      </motion.div>

      <motion.div initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 1.2 }}>
        <motion.p
          animate={{ color: ['rgb(248,113,113)', 'rgb(251,146,60)', 'rgb(248,113,113)'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ fontSize: '7vw' }}
          className="text-center font-black uppercase tracking-wider"
        >
          3 of 4 Critical
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

function SoundWaves() {
  return (
    <div className="relative flex items-center justify-center" style={{ width: '20vw', height: '20vw' }}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ scale: [1, 2.8], opacity: [0.5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4, ease: 'easeOut' }}
          className="absolute rounded-full border-2 border-[#FF6900]"
          style={{ width: '8vw', height: '8vw' }}
        />
      ))}
      <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        className="bg-[#FF6900] rounded-full flex items-center justify-center" style={{ width: '10vw', height: '10vw', zIndex: 10 }}>
        <Mic style={{ width: '5vw', height: '5vw' }} className="text-white" />
      </motion.div>
    </div>
  );
}

function SceneCTA() {
  return (
    <motion.div initial={enterInit} animate={enterAnim} exit={exitAnim} transition={transition}
      className="absolute inset-0 flex flex-col items-center justify-center">

      <SoundWaves />

      <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.4 }}
        className="text-center mt-6">
        <p style={{ fontSize: '4vw' }} className="text-slate-400 font-medium uppercase tracking-[0.4em]">Say hello to</p>
        <p style={{ fontSize: '18vw', lineHeight: 0.9 }} className="font-black text-white uppercase tracking-tight mt-2">Dustin</p>
      </motion.div>

      <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 1 }} className="mt-6">
        <p style={{ fontSize: '3.5vw' }} className="text-slate-300 font-medium text-center leading-snug">
          Play Derby Dash to win<br />a free <span className="text-[#FF6900] font-black">Ceramic Shield</span>
        </p>
      </motion.div>

      <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 60, delay: 1.5 }} className="mt-8">
        <motion.div animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="bg-[#FF6900] rounded-[2rem]" style={{ padding: '3vh 7vw' }}>
          <p style={{ fontSize: '6vw', lineHeight: 1 }} className="font-black text-white uppercase tracking-tight text-center">
            Just Start Talking
          </p>
        </motion.div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="mt-8">
        <Logo size="lg" />
      </motion.div>
    </motion.div>
  );
}

const scenes = [SceneLogo, SceneWelcome, SceneInsight, SceneSavings, SceneTireAlert, SceneCTA];

export function DigitalSign() {
  const [idx, setIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const loopStart = useRef(Date.now());

  useEffect(() => {
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'hidden';
  }, []);

  useEffect(() => {
    let frameIdx = 0;
    const advance = () => {
      frameIdx = (frameIdx + 1) % FRAME_COUNT;
      setIdx(frameIdx);
    };
    let timeout = setTimeout(function schedule() {
      advance();
      timeout = setTimeout(schedule, FRAME_TIMES[frameIdx]);
    }, FRAME_TIMES[0]);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    let raf: number;
    const tick = () => {
      const elapsed = (Date.now() - loopStart.current) % TOTAL;
      setProgress(elapsed / TOTAL);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const Scene = scenes[idx];

  return (
    <div className="bg-slate-950 overflow-hidden select-none" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 z-50" style={{ height: '1px' }}>
        <div style={{ width: `${progress * 100}%`, height: '100%', background: '#FF6900', opacity: 0.3 }} />
      </div>

      <AnimatedBG />

      <AnimatePresence>
        <Scene key={idx} />
      </AnimatePresence>
    </div>
  );
}
