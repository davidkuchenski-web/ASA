import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { Logo } from './Logo';
import { Check, Mic } from 'lucide-react';
import carTopView from '../../imports/—Pngtree—top_view_of_a_sleek_20979523.png';

const FRAMES = [2200, 8500, 4500, 5000, 4000, 4500];
const FRAME_COUNT = FRAMES.length;

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

function useTypewriter(text: string, charMs: number, startDelay: number) {
  const [shown, setShown] = useState('');
  const [done, setDone] = useState(false);
  useEffect(() => {
    let i = 0;
    const t = setTimeout(() => {
      const iv = setInterval(() => {
        i++;
        setShown(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(iv);
          setDone(true);
        }
      }, charMs);
    }, startDelay);
    return () => clearTimeout(t);
  }, [text, charMs, startDelay]);
  return { shown, done };
}

function AnimatedBG() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ x: [0, 20, 0, -20, 0], y: [0, -20, 0, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute rounded-full"
        style={{ top: '-10%', left: '-10%', width: '65%', height: '35%', background: 'radial-gradient(circle, rgba(255,105,0,0.22) 0%, transparent 60%)' }}
      />
      <motion.div
        animate={{ x: [0, -20, 0, 20, 0], y: [0, 20, 0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 10 }}
        className="absolute rounded-full"
        style={{ top: '45%', right: '-8%', width: '55%', height: '30%', background: 'radial-gradient(circle, rgba(255,105,0,0.14) 0%, transparent 60%)' }}
      />
    </div>
  );
}

const crossfade = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.05 },
  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const },
};

function SceneLogo() {
  return (
    <motion.div {...crossfade} className="absolute inset-0 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 60 }}
        style={{ transform: 'scale(2.5)' }}
      >
        <Logo size="xl" />
      </motion.div>
    </motion.div>
  );
}

function SceneVehicleScan() {
  const plate = useTypewriter('DRBY-1', 80, 1200);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 400),
      setTimeout(() => setStage(2), 800),
      setTimeout(() => setStage(3), 1000),
      setTimeout(() => setStage(4), 1500),
      setTimeout(() => setStage(5), 1800),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const redPulse = (delay: number) => ({
    animate: { opacity: [1, 0.5, 1], boxShadow: ['0 0 0px rgba(239,68,68,0)', '0 0 22px rgba(239,68,68,0.7)', '0 0 0px rgba(239,68,68,0)'] },
    transition: { duration: 1.2, repeat: Infinity, delay, ease: 'easeInOut' as const },
  });

  return (
    <motion.div {...crossfade} className="absolute inset-0 flex flex-col" style={{ padding: '2vh 5vw' }}>
      {/* Scan line */}
      <motion.div
        initial={{ top: '0%', opacity: 1 }}
        animate={{ top: '100%', opacity: 0 }}
        transition={{ duration: 0.8, ease: 'linear' }}
        className="absolute left-0 right-0 z-50"
        style={{ height: '3px', background: 'linear-gradient(90deg, transparent 5%, rgba(6,182,212,0.9) 50%, transparent 95%)', boxShadow: '0 0 24px rgba(6,182,212,0.6)' }}
      />

      {/* TOP — Header (10%) */}
      <div className="flex items-center gap-3" style={{ height: '10%' }}>
        <AnimatePresence>
          {stage >= 2 && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="bg-emerald-500 rounded-full flex items-center justify-center"
              style={{ width: '3vw', height: '3vw' }}
            >
              <Check style={{ width: '2vw', height: '2vw' }} className="text-white" strokeWidth={3} />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {stage >= 2 && (
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              style={{ fontSize: '2.4vw', letterSpacing: '0.4em' }}
              className="text-emerald-400 font-bold uppercase"
            >
              Vehicle Identified
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* UPPER-MID — Vehicle identity (15%) */}
      <div className="flex items-center justify-between" style={{ height: '15%' }}>
        <AnimatePresence>
          {stage >= 3 && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <p style={{ fontSize: '5vw' }} className="font-medium text-white leading-none">2026 BMW X3</p>
              <p style={{ fontSize: '2vw' }} className="text-slate-500 mt-2">Blue exterior</p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="bg-white rounded-2xl shrink-0" style={{ padding: '1.2vh 2.5vw' }}>
          <p style={{ fontSize: '1.3vw' }} className="font-bold text-slate-500 tracking-[0.3em] uppercase text-center">Kentucky</p>
          <p style={{ fontSize: '4.2vw' }} className="font-black text-slate-900 tracking-wider font-mono leading-none">
            {plate.shown}
            {!plate.done && <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.5, repeat: Infinity }} className="text-slate-400">|</motion.span>}
          </p>
        </div>
      </div>

      {/* CENTER — Hero vehicle (50%) */}
      <div className="relative flex items-center justify-center" style={{ height: '50%' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: stage >= 1 ? 1 : 0 }}
          transition={{ duration: 0.6 }}
          className="relative h-full"
          style={{ aspectRatio: '9/14' }}
        >
          <img src={carTopView} alt="Vehicle" className="h-full w-full object-contain" />
          {/* Glisten on hood only (top 15-30% of car) */}
          <div className="absolute left-0 right-0 overflow-hidden pointer-events-none" style={{ top: '15%', height: '15%', clipPath: 'inset(0 18% 0 18%)' }}>
            <motion.div
              animate={{ x: ['-120%', '220%'] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3.5, ease: 'easeInOut' }}
              className="absolute inset-y-0 w-1/2 skew-x-[-20deg]"
              style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.55) 50%, rgba(255,255,255,0) 100%)', filter: 'blur(5px)' }}
            />
          </div>
          {/* Glisten on roof only (40-55% of car) */}
          <div className="absolute left-0 right-0 overflow-hidden pointer-events-none" style={{ top: '40%', height: '17%', clipPath: 'inset(0 22% 0 22%)' }}>
            <motion.div
              animate={{ x: ['-120%', '220%'] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3.5, ease: 'easeInOut', delay: 0.8 }}
              className="absolute inset-y-0 w-1/2 skew-x-[-20deg]"
              style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)', filter: 'blur(5px)' }}
            />
          </div>

          <AnimatePresence>
            {stage >= 4 && (
              <>
                {/* Front Left — healthy */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 0.85, opacity: 0.6 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0 }}
                  className="absolute bg-emerald-600 rounded-xl"
                  style={{ top: '6%', left: '-8%', padding: '0.7vh 1.5vw' }}
                >
                  <span className="text-white font-black" style={{ fontSize: '2vw' }}>5/32"</span>
                </motion.div>

                {/* Front Right */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                  className="absolute"
                  style={{ top: '6%', right: '-8%' }}
                >
                  <motion.div {...redPulse(0)} className="bg-red-500 rounded-xl" style={{ padding: '1vh 2vw' }}>
                    <span className="text-white font-black" style={{ fontSize: '2.4vw' }}>3/32"</span>
                  </motion.div>
                </motion.div>

                {/* Rear Right — worst, extra ring */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                  className="absolute"
                  style={{ bottom: '6%', right: '-8%' }}
                >
                  <motion.div {...redPulse(0.4)} className="bg-red-500 rounded-xl relative" style={{ padding: '1vh 2vw' }}>
                    <span className="text-white font-black" style={{ fontSize: '2.4vw' }}>2/32"</span>
                    <motion.div
                      animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
                      className="absolute inset-0 rounded-xl border-2 border-red-400 pointer-events-none"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut', delay: 0.4 }}
                      className="absolute inset-0 rounded-xl border-2 border-red-400 pointer-events-none"
                    />
                  </motion.div>
                </motion.div>

                {/* Rear Left */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
                  className="absolute"
                  style={{ bottom: '6%', left: '-8%' }}
                >
                  <motion.div {...redPulse(0.2)} className="bg-red-500 rounded-xl" style={{ padding: '1vh 2vw' }}>
                    <span className="text-white font-black" style={{ fontSize: '2.4vw' }}>3/32"</span>
                  </motion.div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* LOWER-MID — Analysis (15%) */}
      <div className="flex flex-col justify-center" style={{ height: '15%' }}>
        <AnimatePresence>
          {stage >= 4 && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  backgroundColor: ['rgba(127,29,29,0.7)', 'rgba(124,45,18,0.7)', 'rgba(127,29,29,0.7)'],
                }}
                transition={{
                  opacity: { duration: 0.4, delay: 0.5 },
                  y: { duration: 0.4, delay: 0.5 },
                  backgroundColor: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
                className="w-full border border-red-500/50 rounded-xl"
                style={{ padding: '1.2vh 3vw' }}
              >
                <p style={{ fontSize: '3vw' }} className="text-white font-black uppercase tracking-wider text-center">
                  3 Tires Below Safe Threshold
                </p>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.9 }}
                style={{ fontSize: '2vw' }}
                className="text-slate-400 text-center font-medium mt-2"
              >
                Consider tire service soon
              </motion.p>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* BOTTOM — Context strip (10%) */}
      <div className="flex items-center justify-around" style={{ height: '10%' }}>
        <AnimatePresence>
          {stage >= 5 && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center justify-around w-full">
              <div className="text-center">
                <p style={{ fontSize: '1.3vw', letterSpacing: '0.3em' }} className="text-slate-500 font-semibold uppercase mb-1">Last Wash</p>
                <p style={{ fontSize: '2.2vw' }} className="text-white font-bold">12 Days Ago</p>
              </div>
              <div className="w-px h-10 bg-slate-700" />
              <div className="text-center">
                <p style={{ fontSize: '1.3vw', letterSpacing: '0.3em' }} className="text-slate-500 font-semibold uppercase mb-1">This Year</p>
                <p style={{ fontSize: '2.2vw' }} className="text-white font-bold">8 Washes</p>
              </div>
              <div className="w-px h-10 bg-slate-700" />
              <div className="text-center">
                <p style={{ fontSize: '1.3vw', letterSpacing: '0.3em' }} className="text-slate-500 font-semibold uppercase mb-1">Recommended</p>
                <p style={{ fontSize: '2.2vw' }} className="text-[#FF6900] font-bold">Ceramic Shield</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function SceneInsight() {
  const count = useCountUp(12, 600);
  return (
    <motion.div {...crossfade} className="absolute inset-0 flex flex-col items-center justify-center">
      <motion.div initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 50, delay: 0.1 }} className="text-center">
        <p style={{ fontSize: '5vw' }} className="text-slate-500 font-light tracking-widest uppercase mb-4">It's been</p>
        <p style={{ fontSize: '38vw', lineHeight: 0.85 }} className="font-black text-[#FF6900]">{count}</p>
        <p style={{ fontSize: '12vw', lineHeight: 0.9 }} className="font-black text-white uppercase tracking-tight -mt-2">Days</p>
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
    <motion.div {...crossfade} className="absolute inset-0 flex flex-col items-center justify-center">
      <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
        <p style={{ fontSize: '5vw' }} className="text-emerald-400 font-semibold uppercase tracking-[0.2em] text-center">You'd have saved</p>
      </motion.div>
      <motion.div initial={{ scale: 0.3, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 40, damping: 10, delay: 0.4 }} className="text-center">
        <motion.p animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} style={{ fontSize: '32vw', lineHeight: 0.9 }} className="font-black tracking-tighter">
          <span className="text-emerald-400">$</span>
          <span className="text-white">{count}</span>
        </motion.p>
      </motion.div>
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 1.2 }}>
        <p style={{ fontSize: '4.5vw' }} className="text-emerald-300/70 font-medium text-center uppercase tracking-[0.3em]">In 90 days</p>
      </motion.div>
    </motion.div>
  );
}

function SceneOffer() {
  return (
    <motion.div {...crossfade} className="absolute inset-0 flex flex-col items-center justify-center">
      <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
        <p style={{ fontSize: '4vw' }} className="text-slate-400 font-semibold uppercase tracking-[0.3em] text-center">Your first month</p>
      </motion.div>

      <motion.div
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 50, delay: 0.4 }}
        className="text-center"
      >
        <p style={{ fontSize: '8vw', lineHeight: 1 }} className="font-semibold text-slate-500 line-through mt-4">$49</p>
        <motion.p
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ fontSize: '24vw', lineHeight: 0.9 }}
          className="font-black text-[#FF6900] tracking-tighter"
        >
          $9.99
        </motion.p>
      </motion.div>

      <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 1 }} className="mt-4 text-center">
        <p style={{ fontSize: '4vw' }} className="text-white font-bold uppercase tracking-wider">Unlimited Club</p>
        <p style={{ fontSize: '2.5vw' }} className="text-slate-400 font-medium mt-2">Then $49/mo • Cancel anytime</p>
      </motion.div>
    </motion.div>
  );
}

function SceneCTA() {
  return (
    <motion.div {...crossfade} className="absolute inset-0 flex flex-col items-center justify-center">
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

      <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.4 }} className="text-center mt-6">
        <p style={{ fontSize: '4vw' }} className="text-slate-400 font-medium uppercase tracking-[0.4em]">Say hello to</p>
        <p style={{ fontSize: '14vw', lineHeight: 0.9 }} className="font-black text-white uppercase tracking-tight mt-2">Dustin</p>
      </motion.div>

      <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 60, delay: 0.9 }} className="mt-8">
        <motion.div animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="bg-[#FF6900] rounded-[2rem]" style={{ padding: '3vh 6vw' }}>
          <p style={{ fontSize: '4.5vw', lineHeight: 1 }} className="font-black text-white uppercase tracking-tight text-center">
            Just Start Talking
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

const scenes = [SceneLogo, SceneVehicleScan, SceneInsight, SceneSavings, SceneOffer, SceneCTA];

export function DigitalSign() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'hidden';
  }, []);

  useEffect(() => {
    let current = 0;
    let t: ReturnType<typeof setTimeout>;
    const schedule = () => {
      t = setTimeout(() => {
        current = (current + 1) % FRAME_COUNT;
        setIdx(current);
        schedule();
      }, FRAMES[current]);
    };
    schedule();
    return () => clearTimeout(t);
  }, []);

  const Scene = scenes[idx];

  return (
    <div className="bg-slate-950 overflow-hidden select-none" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
      <AnimatedBG />
      <AnimatePresence mode="wait">
        <Scene key={idx} />
      </AnimatePresence>
    </div>
  );
}
