import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { Logo } from './Logo';
import { useState } from 'react';
import { Phone, CheckCircle2, Delete, ChevronRight, ArrowLeft } from 'lucide-react';
import { AnimatedBackground } from './AnimatedBackground';

export function ContactInfo() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  
  // Mocked captured license plate
  const capturedPlate = 'DRB 2026';

  const handleKeyPress = (num: string) => {
    if (phone.length < 10) {
      setPhone(prev => prev + num);
    }
  };

  const handleBackspace = () => {
    setPhone(prev => prev.slice(0, -1));
  };

  const formatPhone = (val: string) => {
    if (!val) return '';
    if (val.length <= 3) return `(${val}`;
    if (val.length <= 6) return `(${val.slice(0, 3)}) ${val.slice(3)}`;
    return `(${val.slice(0, 3)}) ${val.slice(3, 6)}-${val.slice(6, 10)}`;
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (phone.length === 10) {
      navigate('/terms');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/20 relative overflow-hidden flex flex-col px-8 py-6">
      <AnimatedBackground />

      {/* Header Section */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-shrink-0 space-y-2 mb-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between w-full max-w-5xl"
        >
          <button
            onClick={() => navigate(-1)}
            className="text-slate-400 transition-colors flex items-center gap-2 group p-4 -ml-4 rounded-full active:bg-white/5 active:text-[#FF6900]"
          >
            <ArrowLeft className="w-8 h-8 transition-transform group-active:-translate-x-1" />
          </button>
          
          <div className="flex flex-col items-center">
            <Logo size="sm" className="mb-1" />
            <h2 className="text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-[#FF6900] to-amber-500 uppercase">
              Join the Winner's Circle
            </h2>
            <p className="text-lg text-slate-300 font-light mt-1">
              Verify your vehicle and enter your phone number
            </p>
          </div>
          
          {/* Spacer to balance the back button */}
          <div className="w-16"></div>
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex items-center justify-center max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-slate-800/90 via-slate-800/95 to-slate-900/90 backdrop-blur-xl rounded-[2rem] p-8 shadow-2xl border border-slate-700/50 w-full"
        >
          <div className="grid grid-cols-2 gap-10 items-stretch">
            
            {/* Left Column: Vehicle & Info */}
            <div className="flex flex-col gap-6 justify-center">
              {/* Vehicle Verification Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-slate-900/60 rounded-2xl p-6 border border-[#FF6900]/30 shadow-[0_0_20px_rgba(255,105,0,0.1)] relative overflow-hidden flex flex-col items-center text-center"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-[#FF6900]"></div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-slate-400 text-sm uppercase tracking-wider font-semibold">Vehicle Detected</span>
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                </div>
                <div className="text-5xl font-mono font-bold text-white tracking-widest mt-2 mb-3">
                  {capturedPlate}
                </div>
                <p className="text-emerald-400 text-sm flex items-center justify-center gap-2 bg-emerald-500/10 px-4 py-1.5 rounded-full w-fit">
                  <CheckCircle2 className="w-4 h-4" /> License plate successfully scanned
                </p>
              </motion.div>

              {/* Marketing Opt-in Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-slate-900/40 rounded-2xl p-5 border border-[#FF6900]/30 shadow-[0_0_15px_rgba(255,105,0,0.05)] flex items-start gap-4"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-7 h-7 rounded-md bg-[#FF6900] flex items-center justify-center shadow-[0_0_10px_rgba(255,105,0,0.5)]">
                    <CheckCircle2 className="w-5 h-5 text-white" strokeWidth={3} />
                  </div>
                </div>
                <div>
                  <h3 className="text-amber-500 font-semibold mb-1 flex items-center gap-2 text-sm uppercase tracking-wide">
                    Marketing Opt-In Required
                  </h3>
                  <p className="text-slate-300 text-sm leading-snug">
                    By continuing, you agree to receive automated promotional text messages and membership updates from DeRBy Express. Consent is a condition of membership. Message & data rates may apply.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Phone Input & Keypad */}
            <div className="flex flex-col h-full space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-slate-900/80 rounded-2xl p-4 border border-slate-700/50 flex flex-col items-center justify-center h-24"
              >
                <div className="flex items-center gap-2 mb-1 text-amber-500">
                  <Phone className="w-4 h-4" />
                  <span className="font-semibold tracking-wider uppercase text-xs">Mobile Number</span>
                </div>
                <div className={`text-4xl font-light tracking-wider flex items-center ${phone ? 'text-white' : 'text-slate-600'}`}>
                  {phone ? formatPhone(phone) : '(   )   -    '}
                </div>
              </motion.div>

              {/* Number Pad */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-3 gap-3 flex-1"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                  <motion.button
                    key={num}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleKeyPress(num.toString())}
                    className="bg-slate-800 border border-slate-700 text-white text-2xl font-light rounded-xl transition-colors active:border-[#FF6900]/50 active:bg-[#FF6900]/20"
                  >
                    {num}
                  </motion.button>
                ))}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={handleBackspace}
                  className="bg-slate-800 border border-slate-700 text-slate-400 flex items-center justify-center rounded-xl transition-colors active:text-white active:border-[#FF6900]/50 active:bg-[#FF6900]/20"
                >
                  <Delete className="w-6 h-6" />
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleKeyPress('0')}
                  className="bg-slate-800 border border-slate-700 text-white text-2xl font-light rounded-xl transition-colors active:border-[#FF6900]/50 active:bg-[#FF6900]/20"
                >
                  0
                </motion.button>
                <motion.button
                  whileTap={phone.length === 10 ? { scale: 0.95 } : {}}
                  onClick={() => handleSubmit()}
                  disabled={phone.length !== 10}
                  className={`flex items-center justify-center rounded-xl transition-all border ${
                    phone.length === 10
                      ? 'bg-gradient-to-r from-[#FF6900] to-amber-600 border-transparent text-white shadow-[0_0_15px_rgba(255,105,0,0.5)]'
                      : 'bg-slate-800/50 border-slate-700 text-slate-600 cursor-not-allowed'
                  }`}
                >
                  <ChevronRight className="w-8 h-8" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}