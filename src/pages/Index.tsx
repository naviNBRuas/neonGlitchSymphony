
import React, { useState, useEffect } from 'react';
import NeonButton from '@/components/psychedelic/NeonButton';
import GlitchText from '@/components/psychedelic/GlitchText';
import DistortedImage from '@/components/psychedelic/DistortedImage';
import PsychedelicCard from '@/components/psychedelic/PsychedelicCard';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hovered, setHovered] = useState('');
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    // Create audio element
    const audioElement = new Audio('https://cdn.pixabay.com/download/audio/2022/03/15/audio_1b1550bbaa.mp3?filename=electronic-future-beats-117997.mp3');
    audioElement.loop = true;
    audioElement.volume = 0.5;
    setAudio(audioElement);
    
    return () => {
      if (audioElement) {
        audioElement.pause();
        audioElement.src = '';
      }
    };
  }, []);
  
  const toggleAudio = () => {
    if (!audio) return;
    
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    
    setIsPlaying(!isPlaying);
  };
  
  const sectionItems = [
    {
      id: 'distortion',
      title: 'DISTORTION',
      description: 'Warped reality through shifting pixels and morphing shapes',
      color: 'purple'
    },
    {
      id: 'glitch',
      title: 'GLITCH',
      description: 'Embracing digital artifacts as aesthetic elements',
      color: 'pink'
    },
    {
      id: 'neon',
      title: 'NEON',
      description: 'Vibrant luminescence bringing digital life into focus',
      color: 'blue'
    },
    {
      id: 'chaos',
      title: 'CHAOS',
      description: 'Structured randomness creating emergent visual patterns',
      color: 'green'
    }
  ];
  
  return (
    <div className="min-h-screen w-full overflow-x-hidden pb-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: `radial-gradient(circle at ${50 + (scrollY * 0.01)}% ${50 + (scrollY * 0.01)}%, rgba(155, 2, 252, 0.8) 0%, rgba(0, 0, 0, 0.9) 70%)`,
            transform: `scale(${1 + scrollY * 0.0005})`,
            transformOrigin: 'center',
            transition: 'transform 0.05s ease-out'
          }}
        ></div>
        
        <div className="z-10 text-center mb-10">
          <h1 className="text-6xl md:text-8xl font-bold neon-text animate-pulse-neon mb-8 max-w-4xl">
            <GlitchText text="PSYCHEDELIC" as="span" intensity="medium" />
            <br />
            <GlitchText text="DIGITAL REALM" as="span" intensity="high" className="mt-4 block" />
          </h1>
          
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-opacity-90 animate-float">
            Explore the boundaries of perception through glitched aesthetics, 
            fluid typography, and chaotic yet controlled visual elements
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <NeonButton color="pink" onClick={toggleAudio}>
              {isPlaying ? 'PAUSE AUDIO' : 'PLAY AUDIO'}
            </NeonButton>
            <NeonButton color="blue" variant="outline">
              ENTER VOID
            </NeonButton>
          </div>
        </div>
        
        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-sm uppercase tracking-widest animate-pulse z-10"
        >
          Scroll to Explore
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">
              <GlitchText text="DIGITAL HALLUCINATIONS" />
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              A collection of visual experiments pushing the boundaries of digital aesthetics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectionItems.map((item) => (
              <PsychedelicCard 
                key={item.id}
                className={`p-0 overflow-hidden hover:z-10 hover:scale-105 transition-all duration-300`}
                glassEffect={true}
                neonBorder={true}
              >
                <div className="relative h-full">
                  <div 
                    className="h-64 w-full"
                    onMouseEnter={() => setHovered(item.id)}
                    onMouseLeave={() => setHovered('')}
                  >
                    <DistortedImage 
                      src={`https://plus.unsplash.com/premium_photo-1673688155358-b4bb586aa8e9?q=80&w=500&auto=format&fit=crop`}
                      alt={item.title}
                      className={`w-full h-full transition-all duration-500 ${hovered === item.id ? 'scale-110' : 'scale-100'}`}
                      intensity={hovered === item.id ? 'high' : 'low'}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className={`text-2xl font-bold mb-2 text-psychedelic-${item.color}`}>
                      {item.title}
                    </h3>
                    <p className="text-sm opacity-80">{item.description}</p>
                  </div>
                </div>
              </PsychedelicCard>
            ))}
          </div>
        </div>
      </section>
      
      {/* Interactive Section */}
      <section className="py-20 relative bg-black/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2">
              <PsychedelicCard className="mb-6">
                <h2 className="text-4xl font-bold mb-6">
                  <GlitchText text="INTERACT WITH" intensity="low" />
                  <br />
                  <span className="neon-text">DIGITAL CHAOS</span>
                </h2>
                
                <p className="mb-4">
                  Our digital playground allows you to manipulate reality through experimental interactions and visual distortions.
                </p>
                
                <div className="flex flex-wrap gap-4 mt-8">
                  <NeonButton color="green">EXPLORE</NeonButton>
                  <NeonButton color="yellow" variant="outline">DOWNLOAD</NeonButton>
                </div>
              </PsychedelicCard>
            </div>
            
            <div className="w-full md:w-1/2 h-80">
              <PsychedelicCard className="h-full flex items-center justify-center relative overflow-hidden">
                {/* Interactive visual element */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                  <div 
                    className="w-full h-full"
                    style={{
                      background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                      animation: 'distort 8s ease-in-out infinite, hue-rotate 10s linear infinite',
                    }}
                  />
                  <div 
                    className="absolute inset-0 animate-float"
                    style={{
                      background: `radial-gradient(circle, rgba(254,2,254,0.7) 0%, rgba(2,254,254,0.7) 50%, rgba(254,2,254,0) 70%)`,
                      mixBlendMode: 'screen',
                      transform: `rotate(${scrollY * 0.1}deg) scale(${1 + Math.sin(Date.now() * 0.001) * 0.1})`,
                    }}
                  ></div>
                </div>
                
                <h3 className="text-3xl font-bold relative z-10 animate-pulse-neon">
                  SYSTEM.OVERRIDE
                </h3>
              </PsychedelicCard>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-10 text-center">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <GlitchText 
              text="PSYCHEDELIC REALM" 
              className="text-2xl font-bold"
              intensity="low"
            />
          </div>
          
          <p className="mb-4 text-sm opacity-70">
            Breaking design conventions since the digital age
          </p>
          
          <div className="flex justify-center gap-4">
            <NeonButton color="purple" variant="outline" className="text-sm py-2 px-4">
              INSTAGRAM
            </NeonButton>
            <NeonButton color="blue" variant="outline" className="text-sm py-2 px-4">
              TWITTER
            </NeonButton>
            <NeonButton color="pink" variant="outline" className="text-sm py-2 px-4">
              DISCORD
            </NeonButton>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
