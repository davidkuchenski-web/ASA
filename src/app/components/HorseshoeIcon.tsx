import { useState, useEffect } from 'react';
import horseshoeImage from '../../imports/image-1.png';

interface HorseshoeIconProps {
  className?: string;
  size?: number;
  color?: string;
}

export function HorseshoeIcon({ className = "", size = 120, color = "currentColor" }: HorseshoeIconProps) {
  // Load to base64 synchronously if cached, to prevent split-second broken image flickers on client-side navigation
  const [persistentSrc, setPersistentSrc] = useState<string>(() => {
    try {
      return sessionStorage.getItem('horseshoe-icon-b64') || horseshoeImage;
    } catch(e) {
      return horseshoeImage;
    }
  });

  useEffect(() => {
    if (persistentSrc !== horseshoeImage && persistentSrc.startsWith('data:')) return;

    let isMounted = true;
    fetch(horseshoeImage)
      .then(r => r.blob())
      .then(blob => {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (isMounted && reader.result) {
            const b64 = reader.result as string;
            setPersistentSrc(b64);
            try { sessionStorage.setItem('horseshoe-icon-b64', b64); } catch(e) {}
          }
        };
        reader.readAsDataURL(blob);
      })
      .catch(() => {});

    return () => { isMounted = false; };
  }, []);

  const getColorFilter = () => {
    if (color === '#fde047' || color.toLowerCase().includes('yellow')) {
      return 'brightness(0) saturate(100%) invert(85%) sepia(100%) saturate(350%) hue-rotate(350deg) brightness(110%) contrast(105%)';
    } else if (color === '#93c5fd' || color.toLowerCase().includes('blue')) {
      return 'brightness(0) saturate(100%) invert(80%) sepia(100%) saturate(300%) hue-rotate(180deg) brightness(115%) contrast(100%)';
    } else if (color === 'gray' || color === '#94a3b8' || color === '#cbd5e1') {
      return 'brightness(0) saturate(100%) invert(70%) sepia(10%) saturate(100%) hue-rotate(180deg) brightness(95%) contrast(90%)';
    } else if (color === 'currentColor' || color === '#FF6900' || color.toLowerCase().includes('orange')) {
      return 'brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(2476%) hue-rotate(11deg) brightness(101%) contrast(106%)';
    } else if (color.toLowerCase().includes('amber')) {
      return 'brightness(0) saturate(100%) invert(64%) sepia(83%) saturate(1990%) hue-rotate(0deg) brightness(98%) contrast(101%)';
    } else if (color === 'white') {
      return 'brightness(0) invert(1)';
    }
    return '';
  };

  return (
    <img
      src={persistentSrc}
      alt="" // Prevent raw text from showing up
      width={size}
      height={size}
      className={className}
      style={{ 
        filter: getColorFilter(),
        objectFit: 'contain',
        transform: 'translateZ(0)' // Prevent WebKit layer bugs
      }}
    />
  );
}
