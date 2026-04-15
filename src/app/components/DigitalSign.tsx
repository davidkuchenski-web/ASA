import { motion } from 'motion/react';
import { useEffect } from 'react';
import { Logo } from './Logo';
import { CheckCircle2, AlertTriangle, Calendar, Shield, Sparkles } from 'lucide-react';
import carTopView from '../../imports/—Pngtree—top_view_of_a_sleek_20979523.png';

export function DigitalSign() {
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

  const cardClass =
    'relative z-10 bg-slate-800/60 border border-slate-700/60 rounded-[2rem] shadow-xl';

  return (
    <div
      className="bg-slate-950 overflow-hidden flex flex-col p-8 gap-4 select-none"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      {/* HEADER */}
      <div className="relative z-10 flex justify-between items-center w-full px-2">
        <Logo size="lg" />
        <div className="text-right flex flex-col items-end">
          <h1 className="text-5xl font-black text-amber-400 tracking-widest uppercase">Welcome</h1>
          <h2 className="text-6xl font-black text-amber-400 uppercase tracking-wider">Back</h2>
        </div>
      </div>

      {/* VEHICLE INFO */}
      <div className={`${cardClass} p-8 flex justify-between items-center`}>
        <div className="flex flex-col">
          <p className="text-3xl text-slate-400 font-medium uppercase tracking-widest mb-3">Vehicle Identified</p>
          <p className="text-6xl font-black text-white tracking-tight">2026 Blue BMW X3</p>
        </div>

        {/* License Plate */}
        <div className="bg-white rounded-2xl border-4 border-slate-300 px-10 py-5 flex flex-col items-center justify-center shrink-0">
          <p className="text-xl font-bold text-slate-600 tracking-[0.3em] uppercase mb-1">Kentucky</p>
          <p className="text-6xl font-black text-slate-900 tracking-[0.15em] font-mono">DRBY-1</p>
        </div>
      </div>

      {/* SERVICE STATUS */}
      <div className="relative z-10 grid grid-cols-2 gap-4 w-full">
        <div className={`${cardClass} p-8 flex flex-col items-center justify-center text-center`}>
          <Calendar className="w-14 h-14 text-slate-400 mb-3" strokeWidth={1.5} />
          <p className="text-2xl text-slate-400 font-medium uppercase tracking-widest mb-2">Last Wash</p>
          <p className="text-5xl font-black text-amber-400 leading-tight">12 Days Ago</p>
        </div>

        <div className={`${cardClass} p-8 flex flex-col items-center justify-center text-center`}>
          <Shield className="w-14 h-14 text-slate-400 mb-3" strokeWidth={1.5} />
          <p className="text-2xl text-slate-400 font-medium uppercase tracking-widest mb-2">Recommended</p>
          <p className="text-5xl font-black text-amber-400 leading-tight">Ceramic Shield</p>
        </div>
      </div>

      {/* SAVINGS */}
      <div className={`${cardClass} p-8 flex flex-col items-center`}>
        <h3 className="text-3xl text-slate-300 font-semibold uppercase tracking-widest text-center mb-6">
          With a Membership, you would have saved
        </h3>
        <div className="flex justify-around items-center w-full">
          <div className="flex flex-col items-center">
            <p className="text-2xl text-slate-400 font-medium uppercase tracking-widest mb-2">Last 30 Days</p>
            <p className="text-7xl font-black text-amber-400 tracking-tight leading-none">$35</p>
          </div>
          <div className="w-px h-20 bg-slate-700"></div>
          <div className="flex flex-col items-center">
            <p className="text-2xl text-slate-400 font-medium uppercase tracking-widest mb-2">Previous 90 Days</p>
            <p className="text-7xl font-black text-amber-400 tracking-tight leading-none">$105</p>
          </div>
        </div>
      </div>

      {/* TIRE TREAD */}
      <div className={`${cardClass} flex-1 p-8 flex flex-col overflow-hidden min-h-0`}>
        <h2 className="text-4xl font-black text-white tracking-widest uppercase text-center mb-6">
          <span className="text-amber-400">Tire Tread</span> Analysis
        </h2>

        <div className="relative flex-1 w-full flex items-center justify-center">
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <img src={carTopView} alt="Vehicle Top View" className="h-full object-contain opacity-90" />
          </div>

          <div className="absolute inset-0 z-20 pointer-events-none">
            {/* Front Left — OK */}
            <div className="absolute top-[8%] left-[2%] bg-slate-900/70 border border-emerald-500/60 rounded-2xl p-4 flex items-center gap-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-400" />
              <div className="text-left">
                <p className="text-lg font-bold text-slate-300 uppercase tracking-widest mb-0.5">Front Left</p>
                <p className="text-3xl font-black text-white">5/32"</p>
              </div>
            </div>

            {/* Front Right — LOW */}
            <motion.div
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-[8%] right-[2%] bg-red-950/70 border border-red-500 rounded-2xl p-4 flex items-center gap-3"
            >
              <div className="text-right">
                <p className="text-lg font-bold text-red-400 uppercase tracking-widest mb-0.5 flex justify-end items-center gap-2">
                  <span className="bg-red-500 text-white px-2 py-0.5 rounded text-xs">LOW</span>
                  Front Right
                </p>
                <p className="text-3xl font-black text-white">3/32"</p>
              </div>
              <AlertTriangle className="w-10 h-10 text-red-500" />
            </motion.div>

            {/* Rear Left — LOW */}
            <motion.div
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-[8%] left-[2%] bg-red-950/70 border border-red-500 rounded-2xl p-4 flex items-center gap-3"
            >
              <AlertTriangle className="w-10 h-10 text-red-500" />
              <div className="text-left">
                <p className="text-lg font-bold text-red-400 uppercase tracking-widest mb-0.5 flex items-center gap-2">
                  <span className="bg-red-500 text-white px-2 py-0.5 rounded text-xs">LOW</span>
                  Rear Left
                </p>
                <p className="text-3xl font-black text-white">3/32"</p>
              </div>
            </motion.div>

            {/* Rear Right — LOW */}
            <motion.div
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              className="absolute bottom-[8%] right-[2%] bg-red-950/70 border border-red-500 rounded-2xl p-4 flex items-center gap-3"
            >
              <div className="text-right">
                <p className="text-lg font-bold text-red-400 uppercase tracking-widest mb-0.5 flex justify-end items-center gap-2">
                  <span className="bg-red-500 text-white px-2 py-0.5 rounded text-xs">LOW</span>
                  Rear Right
                </p>
                <p className="text-3xl font-black text-white">2/32"</p>
              </div>
              <AlertTriangle className="w-10 h-10 text-red-500" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* BOTTOM CTA */}
      <div className="relative z-10 w-full rounded-2xl py-5 px-8 bg-amber-500 flex items-center justify-center gap-6 shrink-0">
        <Sparkles className="w-12 h-12 text-white" />
        <h1 className="text-3xl font-black text-white uppercase tracking-widest text-center">
          Ask Dustin to Play a Game & Win Big!
        </h1>
        <Sparkles className="w-12 h-12 text-white" />
      </div>
    </div>
  );
}
