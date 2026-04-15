import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Logo } from './Logo';
import { ShieldAlert, CheckCircle2, AlertTriangle, Calendar, Sparkles } from 'lucide-react';
import { AnimatedBackground } from './AnimatedBackground';
import carTopView from '../../imports/—Pngtree—top_view_of_a_sleek_20979523.png';

export function DigitalSign() {
  const [debug, setDebug] = useState({ w: 0, h: 0, fs: 0 });

  useEffect(() => {
    const apply = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      // Content is slightly taller than 1920 at base 16. Safety multiplier to fit.
      const fs = Math.min(w / 1080, h / 1920) * 16 * 0.78;
      document.documentElement.style.fontSize = `${fs}px`;
      setDebug({ w, h, fs: Math.round(fs * 100) / 100 });
    };
    apply();
    window.addEventListener('resize', apply);
    return () => {
      window.removeEventListener('resize', apply);
      document.documentElement.style.fontSize = '';
    };
  }, []);

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/20 relative overflow-hidden flex flex-col p-8 gap-4 shadow-2xl z-0 select-none">
      {/* TEMP DEBUG OVERLAY — viewport info */}
      <div style={{ position: 'fixed', top: 4, left: 4, zIndex: 9999, background: 'lime', color: 'black', padding: '4px 8px', fontFamily: 'monospace', fontSize: '14px', fontWeight: 'bold' }}>
        {debug.w} × {debug.h} | fs={debug.fs}px
      </div>
        
        <AnimatedBackground />

        {/* TOP: Header & Welcome */}
        <div className="relative z-10 flex justify-between items-center w-full px-4 pt-4">
          <Logo size="lg" />
          <div className="text-right flex flex-col items-end">
            <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-[#FF6900] tracking-widest uppercase drop-shadow-md">Welcome</h1>
            <h2 className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-[#FF6900] font-black mt-2 drop-shadow-lg uppercase tracking-wider">Back</h2>
          </div>
        </div>

        {/* VEHICLE INFO */}
        <div className="relative z-10 bg-slate-800/80 backdrop-blur-xl rounded-[3rem] p-8 border border-slate-700/50 flex justify-between items-center shadow-2xl mt-2">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-700 via-slate-500 to-slate-700"></div>
          <div className="flex flex-col">
            <p className="text-3xl text-slate-400 font-medium uppercase tracking-widest mb-3">Vehicle Identified</p>
            <p className="text-6xl font-black text-white tracking-tight drop-shadow-lg">2026 Blue BMW X3</p>
          </div>
          
          {/* License Plate */}
          <div className="bg-white rounded-[2rem] border-[8px] border-slate-300 px-12 py-6 shadow-inner flex flex-col items-center justify-center relative overflow-hidden shrink-0">
            {/* Plate Bolts */}
            <div className="absolute top-3 left-0 right-0 flex justify-between px-8">
              <span className="w-5 h-5 rounded-full bg-slate-400 shadow-inner"></span>
              <span className="w-5 h-5 rounded-full bg-slate-400 shadow-inner"></span>
            </div>
            <div className="absolute bottom-3 left-0 right-0 flex justify-between px-8">
              <span className="w-5 h-5 rounded-full bg-slate-400 shadow-inner"></span>
              <span className="w-5 h-5 rounded-full bg-slate-400 shadow-inner"></span>
            </div>
            {/* Plate Text */}
            <p className="text-2xl font-bold text-red-600 tracking-[0.3em] uppercase mb-1">Kentucky</p>
            <p className="text-7xl font-black text-slate-800 tracking-[0.15em] font-mono mt-1">DRBY-1</p>
          </div>
        </div>

        {/* SERVICE STATUS */}
        <div className="relative z-10 grid grid-cols-2 gap-8 w-full mt-2">
          {/* Last Wash Card */}
          <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-[3rem] p-8 border border-slate-700 shadow-2xl flex flex-col items-center justify-center text-center">
            <Calendar className="w-16 h-16 text-slate-400 mb-4" strokeWidth={1.5} />
            <p className="text-3xl text-slate-300 font-medium mb-2">Service History</p>
            <p className="text-4xl font-bold text-white leading-snug">
              Your last wash was
              <span className="text-6xl text-amber-500 block mt-2 font-black drop-shadow-md">12 Days Ago</span>
            </p>
          </div>
          
          {/* Recommendation Card */}
          <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-[3rem] p-8 border border-slate-700 shadow-2xl flex flex-col items-center justify-center text-center">
            <ShieldAlert className="w-16 h-16 text-blue-400 mb-4" strokeWidth={1.5} />
            <p className="text-3xl text-slate-300 font-medium mb-2">Recommendation</p>
            <p className="text-4xl font-bold text-white leading-snug">
              Your vehicle has never used our
              <span className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 block mt-2 font-black drop-shadow-md">Ceramic Shield</span>
            </p>
          </div>
        </div>

        {/* SAVINGS BANNER */}
        <div className="relative z-10 bg-gradient-to-r from-emerald-900/80 via-emerald-800/90 to-emerald-900/80 backdrop-blur-xl rounded-[3rem] p-8 border border-emerald-600/50 shadow-[0_0_50px_rgba(16,185,129,0.15)] flex flex-col items-center mt-2">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-600/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
          
          <h3 className="text-4xl text-emerald-400 font-bold uppercase tracking-widest text-center mb-6 z-10">
            With a Membership, you would have saved:
          </h3>
          
          <div className="flex justify-around items-center w-full z-10">
            <div className="flex flex-col items-center">
              <p className="text-3xl text-emerald-200/80 font-medium uppercase tracking-widest mb-2">Last 30 Days</p>
              <p className="text-[5rem] font-black text-white tracking-tight drop-shadow-xl leading-none">$35.00</p>
            </div>
            <div className="w-1 h-24 bg-emerald-700/50 rounded-full"></div>
            <div className="flex flex-col items-center">
              <p className="text-3xl text-emerald-200/80 font-medium uppercase tracking-widest mb-2">Previous 90 Days</p>
              <p className="text-[5rem] font-black text-white tracking-tight drop-shadow-xl leading-none">$105.00</p>
            </div>
          </div>
        </div>

        {/* TIRE TREAD STATUS */}
        <div className="relative z-10 flex-1 bg-gradient-to-br from-slate-800/90 via-slate-900/95 to-slate-950/90 backdrop-blur-2xl rounded-[3rem] border border-slate-700/80 p-8 flex flex-col overflow-hidden shadow-2xl mt-2 min-h-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#FF6900]/5 to-transparent pointer-events-none"></div>
          
          <h2 className="text-5xl font-black text-white tracking-widest uppercase text-center mb-8 relative z-10 drop-shadow-lg">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-[#FF6900]">Tire Tread</span> Analysis
          </h2>

          <div className="relative flex-1 w-full flex items-center justify-center mt-4">
            
            {/* The Top-Down Car Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 flex justify-center items-center pointer-events-none"
            >
              <img 
                src={carTopView} 
                alt="Vehicle Top View" 
                className="h-full object-contain opacity-90 drop-shadow-[0_0_50px_rgba(255,105,0,0.15)]"
              />
            </motion.div>
            
            {/* Tire Indicators Overlay */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              
              {/* Front Left (Barely Good) */}
              <motion.div
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[8%] left-[2%] bg-emerald-500/10 backdrop-blur-xl border-2 border-emerald-500/50 rounded-[2rem] p-5 shadow-[0_0_30px_rgba(16,185,129,0.2)] flex items-center gap-4"
              >
                <CheckCircle2 className="w-12 h-12 text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                <div className="text-left">
                  <p className="text-xl font-bold text-emerald-400 uppercase tracking-widest mb-1">Front Left</p>
                  <p className="text-4xl font-black text-white">5/32"</p>
                </div>
              </motion.div>

              {/* Front Right (Low/Danger) */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: ['0 0 20px rgba(239,68,68,0)', '0 0 50px rgba(239,68,68,0.4)', '0 0 20px rgba(239,68,68,0)']
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[8%] right-[2%] bg-red-500/10 backdrop-blur-xl border-2 border-red-500/80 rounded-[2rem] p-5 shadow-[0_0_40px_rgba(239,68,68,0.4)] flex items-center gap-4 overflow-hidden"
              >
                <div className="absolute inset-0 bg-red-500/10 animate-pulse pointer-events-none"></div>
                <div className="text-right">
                  <p className="text-xl font-bold text-red-400 uppercase tracking-widest mb-1 flex justify-end items-center gap-2">
                    <span className="bg-red-500 text-white px-2 py-0.5 rounded-md text-sm animate-pulse">LOW</span>
                    Front Right
                  </p>
                  <p className="text-4xl font-black text-white">3/32"</p>
                </div>
                <AlertTriangle className="w-12 h-12 text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]" />
              </motion.div>

              {/* Rear Left (Low/Danger) */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: ['0 0 20px rgba(239,68,68,0)', '0 0 50px rgba(239,68,68,0.4)', '0 0 20px rgba(239,68,68,0)']
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[8%] left-[2%] bg-red-500/10 backdrop-blur-xl border-2 border-red-500/80 rounded-[2rem] p-5 shadow-[0_0_40px_rgba(239,68,68,0.4)] flex items-center gap-4 overflow-hidden"
              >
                <div className="absolute inset-0 bg-red-500/10 animate-pulse pointer-events-none"></div>
                <AlertTriangle className="w-12 h-12 text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]" />
                <div className="text-left">
                  <p className="text-xl font-bold text-red-400 uppercase tracking-widest mb-1 flex items-center gap-2">
                    <span className="bg-red-500 text-white px-2 py-0.5 rounded-md text-sm animate-pulse">LOW</span>
                    Rear Left
                  </p>
                  <p className="text-4xl font-black text-white">3/32"</p>
                </div>
              </motion.div>

              {/* Rear Right (Low/Danger) */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: ['0 0 20px rgba(239,68,68,0)', '0 0 50px rgba(239,68,68,0.4)', '0 0 20px rgba(239,68,68,0)']
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-[8%] right-[2%] bg-red-500/10 backdrop-blur-xl border-2 border-red-500/80 rounded-[2rem] p-5 shadow-[0_0_40px_rgba(239,68,68,0.4)] flex items-center gap-4 overflow-hidden"
              >
                <div className="absolute inset-0 bg-red-500/10 animate-pulse pointer-events-none"></div>
                <div className="text-right">
                  <p className="text-xl font-bold text-red-400 uppercase tracking-widest mb-1 flex justify-end items-center gap-2">
                    <span className="bg-red-500 text-white px-2 py-0.5 rounded-md text-sm animate-pulse">LOW</span>
                    Rear Right
                  </p>
                  <p className="text-4xl font-black text-white">2/32"</p>
                </div>
                <AlertTriangle className="w-12 h-12 text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* BOTTOM ANIMATED BANNER */}
        <motion.div 
          animate={{ 
            backgroundColor: ['rgba(255,105,0,0.85)', 'rgba(245,158,11,0.85)', 'rgba(255,105,0,0.85)']
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 w-full rounded-[3rem] py-6 px-8 border-2 border-amber-300/50 shadow-[0_0_60px_rgba(255,105,0,0.5)] flex items-center justify-center gap-8 mt-0 overflow-hidden shrink-0"
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
            animate={{ x: ['-200%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.div animate={{ rotate: 360, scale: [1, 1.2, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
            <Sparkles className="w-16 h-16 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
          </motion.div>
          
          <h1 className="text-4xl font-black text-white uppercase tracking-widest text-center drop-shadow-xl z-10">
            ASK DUSTIN TO PLAY A GAME & <span className="text-amber-200">WIN BIG!</span>
          </h1>
          
          <motion.div animate={{ rotate: -360, scale: [1, 1.2, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
            <Sparkles className="w-16 h-16 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
          </motion.div>
        </motion.div>

    </div>
  );
}