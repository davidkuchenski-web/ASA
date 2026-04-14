import { useEffect, useState, Component, ReactNode } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";

class ErrorBoundary extends Component<{children: ReactNode}, {hasError: boolean, error: Error | null}> {
  constructor(props: {children: ReactNode}) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return <div className="text-white p-10 z-50 fixed bg-red-900 w-full h-full">
        <h1>Something went wrong.</h1>
        <pre>{this.state.error?.toString()}</pre>
        <pre>{this.state.error?.stack}</pre>
      </div>;
    }
    return this.props.children;
  }
}

export default function App() {
  const [scale, setScale] = useState(1);
  const [isDigitalSign, setIsDigitalSign] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isSign = window.location.pathname.includes("/digital-sign") || window.location.hash.includes("/digital-sign");
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
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
}