import { motion } from 'motion/react';
import { useNavigate, useLocation } from 'react-router';
import { Logo } from './Logo';
import { Shield, Sparkles, Wind, ArrowLeft, CheckCircle2, XCircle } from 'lucide-react';
import { AnimatedBackground } from './AnimatedBackground';

export function Upsell() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedPackage = location.state?.selectedPackage || 'sprint';

  // Determine upsell based on package
  const isSprint = selectedPackage === 'sprint';
  
  const upsell = isSprint
    ? {
        title: "Victory Breeze Air Freshener",
        description: "Complete your champion clean with our premium signature cabin scent. Keeps your ride smelling track-ready for weeks.",
        price: "$3.00",
        icon: <Wind className="w-12 h-12 text-blue-400" strokeWidth={1.5} />,
        color: "from-blue-600 to-blue-800",
        features: ["Eliminates odors", "Signature long-lasting scent", "Sprayed directly on floor mats"]
      }
    : {
        title: "Ceramic Seal Coat",
        description: "Add an impenetrable layer of protection to your vehicle's paint. Defends against dirt, UV rays, and water spots.",
        price: "$5.00",
        icon: <Shield className="w-12 h-12 text-amber-400" strokeWidth={1.5} />,
        color: "from-amber-600 to-[#FF6900]",
        features: ["Extreme water beading", "Mirror-like gloss finish", "Lasts up to 30 days"]
      };

  const handleAction = (accepted: boolean) => {
    // Navigate to payment regardless of acceptance for now
    // In a real app we would pass the modified price or cart
    setTimeout(() => {
      navigate('/payment');
    }, 400);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/20 relative overflow-hidden flex flex-col px-8 py-6">
      <AnimatedBackground />

      {/* Header Section */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-shrink-0 mb-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between w-full max-w-4xl"
        >
          <button
            onClick={() => navigate(-1)}
            className="text-slate-400 transition-colors flex items-center gap-2 group p-4 -ml-4 rounded-full active:bg-white/5 active:text-[#FF6900]"
          >
            <ArrowLeft className="w-8 h-8 transition-transform group-active:-translate-x-1" />
          </button>
          
          <div className="flex flex-col items-center">
            <Logo size="sm" className="mb-2" />
            <h2 className="text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-[#FF6900] to-amber-500 uppercase">
              Add The Finishing Touch
            </h2>
          </div>
          
          <div className="w-16"></div>
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex items-center justify-center w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", delay: 0.1 }}
          className="w-full bg-slate-800/80 backdrop-blur-md rounded-[2.5rem] border border-slate-700 shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Upsell Banner Area */}
          <div className={`bg-gradient-to-r ${upsell.color} p-8 flex items-center gap-8 relative overflow-hidden`}>
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:20px_20px]" />
            <div className="relative z-10 bg-black/20 p-5 rounded-3xl backdrop-blur-sm shadow-xl flex-shrink-0">
              {upsell.icon}
            </div>
            <div className="relative z-10 flex-1">
              <div className="text-white/80 font-bold uppercase tracking-widest text-sm mb-1 flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Recommended Add-On
              </div>
              <h3 className="text-4xl font-black text-white leading-tight">{upsell.title}</h3>
            </div>
            <div className="relative z-10 bg-white/20 px-6 py-4 rounded-2xl backdrop-blur-md text-center border border-white/30">
              <div className="text-white/80 text-xs uppercase font-bold mb-1 tracking-wider">Just</div>
              <div className="text-4xl font-bold text-white">{upsell.price}</div>
            </div>
          </div>

          {/* Upsell Content Area */}
          <div className="p-8 flex items-center gap-10 bg-slate-800/50">
            <div className="flex-1 space-y-6">
              <p className="text-xl text-slate-300 leading-snug">
                {upsell.description}
              </p>
              <ul className="space-y-3">
                {upsell.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-slate-200 text-lg">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col gap-4 w-72 flex-shrink-0">
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => handleAction(true)}
                className="w-full bg-gradient-to-r from-amber-500 to-[#FF6900] active:from-amber-400 active:to-[#ff7c21] text-white py-5 rounded-2xl font-bold text-xl shadow-xl flex items-center justify-center gap-3 transition-colors"
              >
                <CheckCircle2 className="w-6 h-6" />
                Add to Wash
              </motion.button>
              
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => handleAction(false)}
                className="w-full bg-slate-700/50 active:bg-slate-700 border border-slate-600 text-slate-300 py-5 rounded-2xl font-bold text-xl shadow-md flex items-center justify-center gap-3 transition-colors"
              >
                <XCircle className="w-6 h-6" />
                No Thanks
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}