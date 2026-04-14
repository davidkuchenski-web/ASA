import { motion } from 'motion/react';
import { HorseshoeIcon } from './HorseshoeIcon';

export function AnimatedBackground() {
  return (
    <>
      {/* Animated Background Mesh / Scrolling Lines */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <motion.div
          animate={{
            backgroundPosition: ['0px 0px', '100px 100px'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="w-full h-full opacity-20"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, rgba(255,105,0,0.4) 0px, rgba(255,105,0,0.4) 2px, transparent 2px, transparent 30px)`,
            backgroundSize: '42.42px 42.42px', // 30px * sqrt(2)
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/80 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80 pointer-events-none" />
      </div>

      {/* Subtle Horseshoe Watermarks */}
      <motion.div
        initial={{ rotate: -45, opacity: 0 }}
        animate={{ 
          rotate: [-45, -25, -45], 
          opacity: [0.08, 0.15, 0.08],
          y: [0, -15, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 left-16 text-[#FF6900] pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <HorseshoeIcon size={120} />
      </motion.div>

      <motion.div
        initial={{ rotate: 45, opacity: 0 }}
        animate={{ 
          rotate: [45, 65, 45], 
          opacity: [0.08, 0.15, 0.08],
          y: [0, 15, 0]
        }}
        transition={{ duration: 9, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-16 right-16 text-[#FF6900] pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <HorseshoeIcon size={100} />
      </motion.div>
    </>
  );
}