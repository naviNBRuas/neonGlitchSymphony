
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useState, useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="scanlines"></div>
          <div className="scanline"></div>
          <div className="noise"></div>
          <div 
            className="fixed pointer-events-none w-40 h-40 rounded-full opacity-30 z-10 mix-blend-screen animate-hue-rotate"
            style={{
              background: "radial-gradient(circle, rgba(254,2,254,1) 0%, rgba(155,2,252,0.5) 50%, transparent 70%)",
              left: cursorPos.x - 80,
              top: cursorPos.y - 80,
              filter: "blur(20px)",
              transition: "left 0.1s ease-out, top 0.1s ease-out",
            }}
          ></div>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
