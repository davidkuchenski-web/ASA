import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { Logo } from './Logo';
import { useState } from 'react';
import { FileText, Check, ArrowLeft } from 'lucide-react';
import { AnimatedBackground } from './AnimatedBackground';

export function MembershipTerms() {
  const navigate = useNavigate();
  const [accepted, setAccepted] = useState(false);

  const handleContinue = () => {
    if (accepted) {
      navigate('/payment', { state: { amount: 49, label: 'Unlimited Club Membership', recurring: true } });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/20 relative overflow-hidden flex flex-col px-8 py-6">
      <AnimatedBackground />

      {/* Header Section */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-shrink-0 mb-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between w-full max-w-5xl"
        >
          <button
            onClick={() => navigate('/contact')}
            className="text-slate-400 transition-colors flex items-center gap-2 group p-4 -ml-4 rounded-full active:bg-white/5 active:text-[#FF6900]"
          >
            <ArrowLeft className="w-8 h-8 transition-transform group-active:-translate-x-1" />
          </button>
          
          <div className="flex flex-col items-center">
            <Logo size="sm" className="mb-2" />
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-[#FF6900] to-amber-600 p-2.5 rounded-full shadow-lg">
                <FileText className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <h2 className="text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-[#FF6900] to-amber-500 uppercase">
                Club Membership Terms
              </h2>
            </div>
          </div>
          
          {/* Spacer to balance the back button */}
          <div className="w-16"></div>
        </motion.div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col max-w-5xl mx-auto w-full overflow-hidden">
        {/* Terms Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex-1 bg-gradient-to-br from-slate-800/90 via-slate-800/95 to-slate-900/90 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-slate-700/50 mb-4 overflow-hidden flex flex-col"
        >
          <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar">
            <div className="text-slate-300 space-y-6">
              {[
                { title: 'Unlimited Access Benefits', content: 'Your DeRBy Express Unlimited Club membership grants you access to unlimited express washes at any participating location. Members may wash their vehicle once per day during operating hours. Additional same-day washes are at the discretion of management based on lane availability.' },
                { title: 'Monthly Billing & Renewal', content: 'Membership fees are billed monthly on a recurring basis to your payment method on file. Your first payment will be processed immediately upon enrollment. Subsequent charges occur automatically on the same calendar day each month. Membership continues until cancelled.' },
                { title: 'Cancellation Policy', content: 'You may cancel your membership at any time through your online account, mobile app, or by contacting our customer care team. To avoid the next billing cycle, cancellation must be completed at least 3 business days before your renewal date. Partial month refunds are not available, and unused washes do not carry value upon cancellation.' },
                { title: 'Vehicle Registration', content: 'Each membership covers one (1) vehicle identified by the license plate registered during enrollment. To use a different vehicle, you must update your registration through your account. Vehicle must fit standard wash dimensions: maximum height 7 feet, maximum length 20 feet, maximum width 8 feet.' },
                { title: 'Liability & Disclaimers', content: 'DeRBy Express takes every precaution to provide safe, quality service. However, we are not liable for pre-existing damage, loose or protruding parts, antenna damage, or items left inside or on the vehicle. Members assume responsibility for ensuring their vehicle is wash-ready.' },
              ].map((term, i) => (
                <div key={i}>
                  <div className="flex items-start gap-3">
                    <div className="bg-[#FF6900] text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1 leading-tight">{term.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-300">{term.content}</p>
                    </div>
                  </div>
                  {i < 4 && <div className="border-t border-slate-700/50 my-4" />}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Agreement & Action */}
        <div className="flex-shrink-0 flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-slate-900/80 backdrop-blur-xl rounded-xl p-4 shadow-xl border border-slate-700/50"
          >
            <label className="flex items-center cursor-pointer group">
              <div className="relative flex-shrink-0">
                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  className="sr-only"
                />
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                    accepted ? 'bg-gradient-to-br from-[#FF6900] to-amber-600 border-[#FF6900]' : 'bg-slate-700 border-slate-600'
                  }`}
                >
                  {accepted && <Check className="w-4 h-4 text-white" strokeWidth={3} />}
                </motion.div>
              </div>
              <span className="text-white text-sm ml-3 transition-colors leading-snug">
                I have read, understand, and agree to the Terms & Conditions of the DeRBy Express Unlimited Club
                membership program
              </span>
            </label>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileTap={accepted ? { scale: 0.98 } : {}}
            onClick={handleContinue}
            disabled={!accepted}
            className={`w-full py-4 rounded-xl font-bold text-xl transition-all shadow-xl ${
              accepted
                ? 'bg-gradient-to-r from-[#FF6900] to-amber-600 text-white cursor-pointer active:shadow-[0_0_20px_rgba(255,105,0,0.4)]'
                : 'bg-slate-800/50 text-slate-500 border border-slate-700 cursor-not-allowed'
            }`}
          >
            Continue to Payment
          </motion.button>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(51, 65, 85, 0.3); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: linear-gradient(to bottom, #FF6900, #D97706); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: linear-gradient(to bottom, #E55D00, #B45309); }
      `}</style>
    </div>
  );
}