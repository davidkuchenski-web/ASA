import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';

export default function App() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const scaleX = window.innerWidth / 1080;
      const scaleY = window.innerHeight / 700;
      setScale(Math.min(scaleX, scaleY, 1.2));
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div 
      className="flex items-center justify-center bg-black overflow-hidden select-none"
      style={{ width: '100vw', height: '100vh', position: 'fixed', inset: 0 }}
    >
      <div 
        className="relative shadow-2xl overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
        style={{
          width: '1080px',
          height: '700px',
          transform: `scale(${scale})`,
          transformOrigin: 'center center'
        }}
      >
        <style>{`
          /* Override ALL min-h-screen classes strictly INSIDE this container */
          .kiosk-wrapper .min-h-screen {
            min-height: 700px !important;
            height: 700px !important;
            overflow: hidden !important;
            padding-bottom: 0 !important;
          }
        `}</style>
        <div className="kiosk-wrapper w-full h-full">
          <RouterProvider router={router} />
        </div>
      </div>
    </div>
  );
}