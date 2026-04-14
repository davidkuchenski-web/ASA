import { useEffect, useState } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";

export default function App() {
  const [scale, setScale] = useState(1);
  const [isDigitalSign, setIsDigitalSign] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isSign = window.location.hash.includes("/digital-sign");
      setIsDigitalSign(isSign);
      
      const targetWidth = 1080;
      const targetHeight = isSign ? 1920 : 700;
      
      const scaleX = window.innerWidth / targetWidth;
      const scaleY = window.innerHeight / targetHeight;
      setScale(Math.min(scaleX, scaleY, 1.2));
    };

    handleResize();
    window.addEventListener("hashchange", handleResize);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("hashchange", handleResize);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const targetWidth = 1080;
  const targetHeight = isDigitalSign ? 1920 : 700;

  return (
    <div
      className="flex items-center justify-center bg-black overflow-hidden select-none"
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        inset: 0,
      }}
    >
      <div
        className="relative shadow-2xl overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
        style={{
          width: `${targetWidth}px`,
          height: `${targetHeight}px`,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
        }}
      >
        <style>{`
          /* Override ALL min-h-screen classes strictly INSIDE this container */
          .kiosk-wrapper .min-h-screen {
            min-height: ${targetHeight}px !important;
            height: ${targetHeight}px !important;
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