import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { Logo } from './Logo';
import { Trophy, Gift, Zap, Crown, Sparkles, Phone, Mail } from 'lucide-react';
import { AnimatedBackground } from './AnimatedBackground';

export function MemberWelcome() {
  const navigate = useNavigate();
  const memberId = `DRB${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/20 relative overflow-hidden flex flex-col justify-center items-center py-6 px-8">
      <AnimatedBackground />

      {/* Floating trophy decorations */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-[#FF6900] opacity-10 pointer-events-none"
          style={{ left: `${20 + i * 20}%`, top: `${15 + (i % 2) * 60}%` }}
          animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
        >
          <Trophy className="w-16 h-16" />
        </motion.div>
      ))}

      <div className="relative z-10 w-full max-w-6xl flex flex-col h-full">
        {/* Header */}
        <div className="flex flex-col items-center mb-6">
          <Logo size="sm" className="mb-2" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              className="relative bg-gradient-to-br from-yellow-400 via-amber-500 to-amber-600 p-3 rounded-full shadow-xl"
            >
              <Trophy className="w-8 h-8 text-slate-900 fill-slate-900" strokeWidth={0} />
            </motion.div>
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-amber-600 uppercase">
                Champion Status Unlocked!
              </h2>
              <p className="text-slate-300 font-light">Welcome to the DeRBy Express Unlimited Club</p>
            </div>
          </motion.div>
        </div>

        {/* Main Content 2-Column Layout */}
        <div className="flex-1 grid grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: ID Card & CTA */}
          <div className="col-span-5 flex flex-col gap-6 justify-center">
            {/* Member ID Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative w-full"
            >
              <div className="bg-gradient-to-br from-[#FF6900] via-amber-600 to-amber-700 rounded-3xl p-1 shadow-2xl">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-amber-400 text-xs uppercase tracking-wider mb-0.5 font-semibold">Member Since</p>
                      <p className="text-white text-lg font-bold">April 2026</p>
                    </div>
                    <Crown className="w-8 h-8 text-amber-500" />
                  </div>

                  <div className="bg-slate-950/50 rounded-2xl p-4 mb-3 border border-white/5">
                    <p className="text-slate-400 text-[10px] mb-1 uppercase tracking-wider">Member ID</p>
                    <p className="text-white text-2xl font-bold tracking-wider font-mono">{memberId}</p>
                  </div>

                  <p className="text-slate-400 text-[11px] leading-snug">
                    Check your email for your complete membership details and mobile app download link.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center gap-3"
            >
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/pull-forward')}
                className="w-full bg-gradient-to-r from-[#FF6900] to-amber-600 active:from-amber-400 active:to-[#ff7c21] text-white py-4 rounded-2xl font-bold text-xl shadow-[0_0_30px_rgba(255,105,0,0.3)] flex items-center justify-center gap-3 uppercase tracking-wider"
              >
                <Trophy className="w-5 h-5" />
                Start First Wash
              </motion.button>
              
              <div className="flex items-center gap-4 text-slate-500 text-xs">
                <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> (555) 123-4567</span>
                <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> club@derbyexpress.com</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Benefits Grid */}
          <div className="col-span-7 grid grid-cols-2 gap-4">
            {[
              { icon: Zap, title: "Unlimited Racing", desc: "Wash every single day. Keep your ride championship-ready 24/7.", color: "from-[#FF6900] to-amber-600", text: "text-[#FF6900]" },
              { icon: Gift, title: "VIP Perks", desc: "Exclusive member discounts, promotions, and priority access.", color: "from-purple-500 to-purple-600", text: "text-purple-500" },
              { icon: Phone, title: "Mobile Access", desc: "Manage your membership and track washes via our app.", color: "from-blue-500 to-blue-600", text: "text-blue-500" },
              { icon: Crown, title: "Priority Lanes", desc: "Skip the queue and head straight to express member lanes.", color: "from-amber-500 to-amber-600", text: "text-amber-500" }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="bg-slate-900/60 backdrop-blur-xl rounded-2xl p-5 border border-slate-700/50 relative overflow-hidden flex flex-col"
              >
                <div className={`absolute top-0 right-0 p-4 opacity-5 ${benefit.text}`}>
                  <benefit.icon className="w-24 h-24" />
                </div>
                
                <div className={`bg-gradient-to-br ${benefit.color} w-10 h-10 rounded-xl flex items-center justify-center mb-3 shadow-lg flex-shrink-0`}>
                  <benefit.icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-lg text-white mb-1.5 font-bold">{benefit.title}</h3>
                <p className="text-slate-400 text-sm leading-snug">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}