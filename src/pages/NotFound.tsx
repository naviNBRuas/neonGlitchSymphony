
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import GlitchText from "@/components/psychedelic/GlitchText";
import NeonButton from "@/components/psychedelic/NeonButton";
import PsychedelicCard from "@/components/psychedelic/PsychedelicCard";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="relative z-10">
        <PsychedelicCard className="text-center max-w-md">
          <div className="text-9xl font-bold mb-4 neon-text animate-text-glitch">
            <GlitchText text="404" intensity="high" />
          </div>
          
          <h1 className="text-3xl font-bold mb-6">
            <GlitchText text="REALITY ERROR" intensity="medium" />
          </h1>
          
          <p className="mb-8 text-xl">
            The dimensional portal you're trying to access doesn't exist in this reality.
          </p>
          
          <div className="flex justify-center">
            <NeonButton color="blue" as="a" href="/">
              RETURN TO DIMENSION
            </NeonButton>
          </div>
        </PsychedelicCard>
      </div>
      
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle, rgba(155, 2, 252, 0.5) 0%, rgba(0, 0, 0, 0.9) 70%)',
        }}
      ></div>
      
      <div className="scanlines"></div>
      <div className="scanline"></div>
    </div>
  );
};

export default NotFound;
