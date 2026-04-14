import logoImage from '../../imports/image-1.png';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Logo({ className = "", size = 'lg' }: LogoProps) {
  const sizeClasses = {
    sm: 120,
    md: 180,
    lg: 240,
    xl: 300,
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* 
        Using the original high-res PNG logo image rather than 
        attempting to recreate it with SVGs or text.
      */}
      <img 
        src={logoImage} 
        alt="DERBY Express" 
        width={sizeClasses[size]} 
        className="object-contain"
        style={{ transform: 'translateZ(0)' }}
      />
    </div>
  );
}
