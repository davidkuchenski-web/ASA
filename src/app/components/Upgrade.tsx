import { motion } from 'motion/react';
import { useNavigate, useLocation } from 'react-router';
import { Logo } from './Logo';
import { CreditCard, Infinity, Sparkles, TrendingUp, Shield, Gift, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { AnimatedBackground } from './AnimatedBackground';

export function Upgrade() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState<'single' | 'membership' | null>(null);

  const selectedPackage = location.state?.selectedPackage || 'sprint';

  const handleSelect = (option: 'single' | 'membership') => {
    setSelectedOption(option);
    setTimeout(() => {
      if (option === 'membership') {
        navigate('/contact');
      } else {
        navigate('/upsell', { state: { selectedPackage } });
      }
    }, 600);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/20 relative overflow-hidden flex flex-col px-8 py-4">
      <AnimatedBackground />

      {/* Header Section */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-shrink-0 mb-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between w-full max-w-6xl"
        >
          <button
            onClick={() => navigate('/menu')}
            className="text-slate-400 transition-colors flex items-center gap-2 group p-4 -ml-4 rounded-full active:bg-white/5 active:text-[#FF6900]"
          >
            <ArrowLeft className="w-8 h-8 transition-transform group-active:-translate-x-1" />
          </button>
          
          <div className="flex items-center gap-4">
            <Logo size="sm" />
            <div className="h-8 w-px bg-white/20"></div>
            <h2 className="text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-[#FF6900] to-amber-500 uppercase">
              Join The Winner's Circle
            </h2>
          </div>
          
          {/* Spacer to balance the back button */}
          <div className="w-16"></div>
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex items-center justify-center max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-2 gap-6 w-full items-stretch h-full py-1">
          
          {/* Single Wash Option */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleSelect('single')}
            className={`relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 rounded-[2rem] p-6 cursor-pointer shadow-2xl border-2 flex flex-col overflow-hidden ${
              selectedOption === 'single' ? 'border-amber-500' : 'border-slate-600'
            }`}
          >
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-slate-600 to-slate-700 p-3 rounded-2xl shadow-xl flex-shrink-0">
                    <CreditCard className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white leading-none mb-1">Single Race</h3>
                    <p className="text-slate-400 text-xs uppercase tracking-wider font-medium">One-Time Entry</p>
                  </div>
                </div>
                <div className="text-right bg-slate-900/60 rounded-xl px-4 py-2 border border-slate-700">
                  <div className="text-slate-400 text-[10px] uppercase font-semibold">Pay Once</div>
                  <div className="text-3xl font-bold text-white leading-none">$39</div>
                </div>
              </div>

              <p className="text-slate-300 text-sm mb-4 leading-snug flex-1">
                Perfect for the occasional ride when you need a quick shine before the big event.
              </p>

              <div className="space-y-3 mb-6 bg-slate-900/30 rounded-xl p-4 border border-slate-700/50">
                <div className="flex items-center text-slate-300 text-sm">
                  <Shield className="w-4 h-4 mr-3 text-slate-400 flex-shrink-0" />
                  <span>No commitment required</span>
                </div>
                <div className="flex items-center text-slate-300 text-sm">
                  <CreditCard className="w-4 h-4 mr-3 text-slate-400 flex-shrink-0" />
                  <span>Pay as you go</span>
                </div>
              </div>

              <button className="w-full bg-slate-600 active:bg-slate-500 text-white py-3 rounded-xl font-bold text-lg shadow-lg transition-colors mt-auto pointer-events-none">
                Continue to Payment
              </button>
            </div>
          </motion.div>

          {/* Membership Option */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleSelect('membership')}
            className={`relative rounded-[2rem] p-6 cursor-pointer shadow-2xl border-4 flex flex-col ${
              selectedOption === 'membership' ? 'border-amber-400 ring-4 ring-white ring-offset-4 ring-offset-slate-900' : 'border-[#FF6900]'
            }`}
            style={{ background: 'linear-gradient(135deg, #FF6900 0%, #D55500 50%, #FF6900 100%)' }}
          >
            {/* Winner's badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
              <div className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 text-slate-900 px-6 py-1 rounded-full font-bold text-xs shadow-xl flex items-center gap-1.5 whitespace-nowrap border-2 border-amber-200">
                <Sparkles className="w-3.5 h-3.5 fill-slate-900" />
                WINNER'S CHOICE
                <Sparkles className="w-3.5 h-3.5 fill-slate-900" />
              </div>
            </div>

            <div className="relative z-10 flex flex-col h-full pt-1">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <motion.div 
                    animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                    className="bg-gradient-to-br from-amber-400 to-amber-600 p-3 rounded-2xl shadow-xl flex-shrink-0"
                  >
                    <Infinity className="w-8 h-8 text-white" strokeWidth={2} />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-white leading-none mb-1">Unlimited Club</h3>
                    <p className="text-white/90 text-xs uppercase tracking-wider font-medium">Season Pass</p>
                  </div>
                </div>
                <div className="text-right bg-white/20 backdrop-blur-md rounded-xl px-4 py-2 border border-white/30">
                  <div className="text-amber-100 text-[10px] uppercase font-bold">First Month</div>
                  <div className="flex items-baseline justify-end gap-2 leading-none">
                    <span className="text-base font-semibold text-white/70 line-through decoration-2">$49</span>
                    <span className="text-3xl font-bold text-white">$9.99</span>
                  </div>
                  <div className="text-amber-100/90 text-[9px] uppercase font-semibold tracking-wide mt-0.5">Then $49/mo</div>
                </div>
              </div>

              <div className="flex flex-col flex-1 mb-4">
                <p className="text-white text-sm leading-snug font-medium mb-3">
                  The champion's choice. Wash unlimited times and always stay track-ready.
                </p>
                <div className="bg-black/20 rounded-lg px-3 py-2 w-fit">
                  <div className="text-white font-bold text-xs flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span>Save $263+ monthly at 2x weekly</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5 mb-6 bg-white/10 rounded-xl p-4 border border-white/20">
                <div className="flex items-center text-white text-sm">
                  <div className="bg-white/30 rounded-full p-0.5 mr-3 flex-shrink-0"><Infinity className="w-3 h-3" strokeWidth={3} /></div>
                  <span className="font-semibold">Wash every single day</span>
                </div>
                <div className="flex items-center text-white text-sm">
                  <div className="bg-white/30 rounded-full p-0.5 mr-3 flex-shrink-0"><Gift className="w-3 h-3" strokeWidth={3} /></div>
                  <span className="font-semibold">Exclusive member perks</span>
                </div>
                <div className="flex items-center text-white text-sm">
                  <div className="bg-white/30 rounded-full p-0.5 mr-3 flex-shrink-0"><Shield className="w-3 h-3" strokeWidth={3} /></div>
                  <span className="font-semibold">Cancel anytime, no penalties</span>
                </div>
              </div>

              <button className="w-full bg-white active:bg-amber-50 text-[#FF6900] py-3 rounded-xl font-bold text-lg shadow-2xl transition-colors mt-auto pointer-events-none">
                Join The Club
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}