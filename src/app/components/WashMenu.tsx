import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { Logo } from './Logo';
import { Check, Star, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { HorseIcon } from './HorseIcon';
import { AnimatedBackground } from './AnimatedBackground';

const washPackages = [
  {
    id: 'trot',
    name: 'Trot',
    subtitle: 'Essential Clean',
    price: 15,
    features: ['Premium Foam Wash', 'Tire Shine', 'Spot-Free Rinse', 'Speed Dry'],
    color: 'from-slate-700 via-slate-600 to-slate-700',
    iconColor: '#94a3b8',
    tier: 'bronze',
  },
  {
    id: 'sprint',
    name: 'Sprint',
    subtitle: 'Ultimate Champion',
    price: 39,
    features: ['All Trot & Gallop Features', 'Ceramic Seal Coat', 'Signature Hot Wax', 'Tire Gel Dressing', 'Premium Interior Fragrance', 'Ultimate Shine Guarantee'],
    color: 'from-[#FF6900] via-orange-500 to-amber-600',
    iconColor: '#fde047',
    tier: 'platinum',
    popular: true,
  },
  {
    id: 'gallop',
    name: 'Gallop',
    subtitle: 'Premium Shine',
    price: 25,
    features: ['Everything in Trot', 'Wheel Detail', 'Underbody Flush', 'Rain-X Shield', 'Triple Foam Polish', 'Premium Wax'],
    color: 'from-blue-600 via-blue-500 to-blue-600',
    iconColor: '#93c5fd',
    tier: 'silver',
  },
];

export function WashMenu() {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const handleSelectPackage = (packageId: string) => {
    setSelectedPackage(packageId);
    setTimeout(() => {
      navigate('/upgrade', { state: { selectedPackage: packageId } });
    }, 600);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/20 relative overflow-hidden flex flex-col px-8 py-6">
      <AnimatedBackground />

      {/* Header Section */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-shrink-0 space-y-2 mb-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between w-full max-w-6xl"
        >
          <button
            onClick={() => navigate('/')}
            className="text-slate-400 transition-colors flex items-center gap-2 group p-4 -ml-4 rounded-full active:bg-white/5 active:text-[#FF6900]"
          >
            <ArrowLeft className="w-8 h-8 transition-transform group-active:-translate-x-1" />
          </button>
          
          <div className="flex flex-col items-center">
            <Logo size="md" className="mb-2" />
            <h2 className="text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-[#FF6900] to-amber-500 uppercase">
              Choose Your Champion
            </h2>
          </div>
          
          {/* Spacer to balance the back button */}
          <div className="w-16"></div>
        </motion.div>
      </div>

      {/* Cards Section */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="grid grid-cols-3 gap-12 max-w-6xl w-full items-stretch px-4">
          {washPackages.map((pkg, index) => {
            const isSelected = selectedPackage === pkg.id;
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                whileTap={{ scale: pkg.popular ? 1.12 : 0.98 }}
                onClick={() => handleSelectPackage(pkg.id)}
                className={`relative cursor-pointer flex flex-col ${pkg.popular ? 'scale-[1.15] z-10' : 'z-0'}`}
              >
                {/* Glowing Animated Border for Popular Package */}
                {pkg.popular && (
                  <div className="absolute inset-[-6px] rounded-[2.25rem] z-0 overflow-hidden shadow-[0_0_40px_rgba(255,105,0,0.5)]">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square opacity-80"
                      style={{
                        background: 'conic-gradient(from 0deg, transparent 0 270deg, #FF6900 360deg)',
                      }}
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square opacity-50"
                      style={{
                        background: 'conic-gradient(from 0deg, transparent 0 270deg, #fbbf24 360deg)',
                      }}
                    />
                  </div>
                )}

                <div className={`relative bg-gradient-to-b ${pkg.color} rounded-[2rem] shadow-2xl flex flex-col border border-white/10 overflow-hidden flex-1 ${
                  isSelected ? 'ring-4 ring-white ring-offset-4 ring-offset-slate-900' : ''
                }`}>
                  
                  {/* Shimmer effect wrapper */}
                  <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                      animate={{ x: ['-200%', '200%'] }}
                      transition={{ duration: 3, repeat: Infinity, repeatDelay: pkg.popular ? 2 : 5 }}
                    />
                  </div>

                  {pkg.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-amber-400 to-[#FF6900] text-white py-1.5 text-xs font-bold uppercase tracking-widest text-center shadow-md flex items-center justify-center gap-1.5">
                      <Star className="w-3.5 h-3.5 fill-white" />
                      Most Popular
                    </div>
                  )}
                  
                  <div className={`flex flex-col items-center flex-1 p-6 ${pkg.popular ? 'pt-10' : 'pt-6'}`}>
                    {/* Card Header: Icon + Title */}
                    <div className="flex items-center gap-4 mb-4 w-full justify-center">
                      <div className="bg-white/20 backdrop-blur-md p-3 rounded-2xl shadow-inner">
                        <HorseIcon className="w-8 h-8" color={pkg.iconColor} />
                      </div>
                      <div className="text-left">
                        <h3 className="text-3xl font-black text-white leading-none uppercase tracking-tight">{pkg.name}</h3>
                        <p className="text-white/80 text-sm font-medium italic mt-1">{pkg.subtitle}</p>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mb-6 flex items-baseline justify-center w-full bg-black/20 rounded-2xl py-3 shadow-inner">
                      <span className="text-3xl font-bold text-white/80 mr-1">$</span>
                      <span className="text-6xl font-black text-white leading-none">{pkg.price}</span>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 w-full px-2 mb-2 flex-1">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-white">
                          <div className="bg-white/20 rounded-full p-0.5 mr-3 mt-0.5 flex-shrink-0">
                            <Check className="w-4 h-4 text-white" strokeWidth={3} />
                          </div>
                          <span className="text-[15px] font-medium leading-tight text-white/95">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}