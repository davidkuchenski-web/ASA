import { motion } from 'motion/react';
import horseImage from '../../imports/image.png';

interface HorseIconProps {
  className?: string;
  animate?: boolean;
  color?: string;
}

export function HorseIcon({ className = "w-32 h-32", animate = false, color = "white" }: HorseIconProps) {
  const getColorFilter = (c: string) => {
    // Sprint Package (Gold / Yellow: #fde047)
    if (c === '#fde047' || c.toLowerCase().includes('yellow')) {
      // High sepia and high saturation guarantees a bright, undeniable yellow/gold
      return 'brightness(0) saturate(100%) invert(85%) sepia(100%) saturate(350%) hue-rotate(350deg) brightness(110%) contrast(105%)';
    } 
    // Gallop Package (Light Blue: #93c5fd)
    else if (c === '#93c5fd' || c.toLowerCase().includes('blue')) {
      // High sepia, high saturation, and 180deg hue rotate guarantees a clear, undeniable light blue
      return 'brightness(0) saturate(100%) invert(80%) sepia(100%) saturate(300%) hue-rotate(180deg) brightness(115%) contrast(100%)';
    }
    // Trot Package (Slate Gray: #94a3b8)
    else if (c === 'gray' || c === '#94a3b8' || c === '#cbd5e1') {
      // Very low sepia and saturation ensures it remains gray, just lightened
      return 'brightness(0) saturate(100%) invert(70%) sepia(10%) saturate(100%) hue-rotate(180deg) brightness(95%) contrast(90%)';
    } 
    // DRB Orange / Default Active
    else if (c === 'currentColor' || c === '#FF6900' || c.toLowerCase().includes('orange')) {
      return 'brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(2476%) hue-rotate(11deg) brightness(101%) contrast(106%)';
    } 
    // Bronze / Amber
    else if (c.toLowerCase().includes('amber') || c === '#F59E0B') {
      return 'brightness(0) saturate(100%) invert(64%) sepia(83%) saturate(1990%) hue-rotate(0deg) brightness(98%) contrast(101%)';
    } 
    // Default White
    return c.includes('#FF6900') 
      ? 'brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(2476%) hue-rotate(11deg) brightness(101%) contrast(106%)'
      : 'brightness(0) invert(1)';
  };

  const effectiveColor = className.includes('text-[#FF6900]') ? '#FF6900' : color;
  const filter = getColorFilter(effectiveColor);

  const imgContent = (
    <img
      src={horseImage}
      alt=""
      className={className}
      style={{
        filter,
        objectFit: 'contain',
        transform: 'translateZ(0)' // Prevent WebKit layer bugs
      }}
    />
  );

  if (animate) {
    return (
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {imgContent}
      </motion.div>
    );
  }

  return imgContent;
}
