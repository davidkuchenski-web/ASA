import { HorseshoeIcon } from './HorseshoeIcon';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Logo({ className = "", size = 'lg' }: LogoProps) {
  const sizeClasses = {
    sm: {
      container: 'gap-3',
      icon: 32,
      text: 'text-3xl',
      subtext: 'text-[9px] tracking-[0.3em]',
    },
    md: {
      container: 'gap-4',
      icon: 42,
      text: 'text-4xl',
      subtext: 'text-[10px] tracking-[0.35em]',
    },
    lg: {
      container: 'gap-5',
      icon: 60,
      text: 'text-5xl sm:text-6xl',
      subtext: 'text-xs sm:text-sm tracking-[0.4em]',
    },
    xl: {
      container: 'gap-6',
      icon: 76,
      text: 'text-6xl sm:text-7xl',
      subtext: 'text-sm sm:text-base tracking-[0.4em]',
    },
  };

  const s = sizeClasses[size];

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* Clean Corporate Logo Lockup */}
      <div className={`flex items-center justify-center ${s.container}`}>
        
        {/* Flat, Clean Icon without backgrounds or overlays */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <HorseshoeIcon size={s.icon} color="#FF6900" />
        </div>

        {/* Corporate Typography */}
        <div className="flex flex-col justify-center mt-1">
          {/* Main Brand Name */}
          <h1 className={`${s.text} font-black tracking-tight leading-none uppercase font-sans mb-1`}>
            <span className="text-[#FF6900]">D</span>
            <span className="text-white">E</span>
            <span className="text-[#FF6900]">RB</span>
            <span className="text-white">Y</span>
          </h1>
          
          {/* Perfectly Aligned Sub-brand */}
          <div className="w-full h-[1px] bg-gradient-to-r from-slate-700/50 via-slate-700 to-transparent my-1 hidden"></div>
          <div className={`text-slate-400 font-semibold uppercase ${s.subtext} ml-0.5`}>
            Express Wash
          </div>
        </div>
      </div>
    </div>
  );
}