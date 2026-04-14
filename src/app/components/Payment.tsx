import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { Logo } from './Logo';
import { useState } from 'react';
import { CreditCard, Lock, Shield, Check } from 'lucide-react';
import { AnimatedBackground } from './AnimatedBackground';

export function Payment() {
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const simulatePayment = () => {
    if (processing) return;
    setProcessing(true);
    
    setTimeout(() => {
      setSuccess(true);
      setTimeout(() => {
        navigate('/pull-forward');
      }, 1500);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/20 relative overflow-hidden flex flex-col justify-center items-center py-6 px-8">
      <AnimatedBackground />

      {/* Security badge decorations */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.08, 0.05] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 right-20 text-[#FF6900] pointer-events-none"
      >
        <Shield className="w-64 h-64" />
      </motion.div>

      <div className="relative z-10 max-w-2xl w-full flex flex-col items-center justify-center flex-1">
        <Logo size="md" className="mb-6" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-slate-800/90 via-slate-800/95 to-slate-900/90 backdrop-blur-xl rounded-[2rem] p-8 sm:p-10 shadow-2xl border border-slate-700/50 relative overflow-hidden w-full flex flex-col items-center"
        >
          {/* Animated scanning line */}
          <motion.div
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF6900] to-transparent opacity-30 z-0 pointer-events-none"
          />

          <div className="relative z-10 flex flex-col items-center justify-center space-y-6 w-full">
            {/* Center Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative"
            >
              {success ? (
                <div className="bg-emerald-500 p-6 rounded-full shadow-[0_0_40px_rgba(16,185,129,0.5)]">
                  <Check className="w-12 h-12 text-white" strokeWidth={4} />
                </div>
              ) : processing ? (
                <div className="bg-gradient-to-br from-[#FF6900] to-amber-600 p-6 rounded-full shadow-[0_0_40px_rgba(255,105,0,0.5)]">
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}>
                    <CreditCard className="w-12 h-12 text-white" strokeWidth={2} />
                  </motion.div>
                </div>
              ) : (
                <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-6 rounded-full shadow-2xl relative border-2 border-slate-600">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-full border-4 border-[#FF6900]"
                  />
                  <CreditCard className="w-12 h-12 text-white" strokeWidth={2} />
                </div>
              )}
            </motion.div>

            {/* Status Text */}
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold text-white tracking-wide">
                {success ? "Payment Approved" : processing ? "Processing Payment..." : "Please Pay Below"}
              </h2>
              <p className="text-lg text-slate-300 font-light">
                {success ? "Thank you for your purchase" : processing ? "Please do not remove your card" : "Insert your card into the reader"}
              </p>
            </div>

            {/* Accepted Methods */}
            {!success && !processing && (
              <div className="flex items-center justify-center gap-8 text-slate-400 py-2">
                <CreditCard className="w-8 h-8" />
              </div>
            )}

            {/* Simulation Button */}
            {!success && !processing && (
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={simulatePayment}
                className="mt-4 px-10 py-4 bg-gradient-to-r from-slate-700 to-slate-800 active:from-slate-600 active:to-slate-700 border border-slate-500 rounded-xl text-white font-semibold flex items-center gap-3 shadow-lg"
              >
                <Lock className="w-5 h-5 text-amber-500" />
                Simulate Successful Payment
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* Cancel Button */}
        {!processing && !success && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6"
          >
            <button
              onClick={() => navigate(-1)}
              className="text-slate-400 active:text-amber-400 transition-colors text-base font-light px-6 py-2 rounded-full active:bg-white/5"
            >
              Cancel Payment
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}