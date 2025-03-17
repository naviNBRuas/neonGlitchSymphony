
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface DistortedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  intensity?: 'low' | 'medium' | 'high';
  hueRotate?: boolean;
}

const DistortedImage = ({
  src,
  alt,
  className,
  width,
  height,
  intensity = 'medium',
  hueRotate = true
}: DistortedImageProps) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const interval = setInterval(() => {
      const intensityValues = {
        low: 3,
        medium: 6,
        high: 10
      };
      
      const maxOffset = intensityValues[intensity];
      
      setOffset({
        x: Math.random() * maxOffset * 2 - maxOffset,
        y: Math.random() * maxOffset * 2 - maxOffset
      });
    }, 100);
    
    return () => clearInterval(interval);
  }, [intensity]);
  
  return (
    <div className="relative overflow-hidden">
      <div 
        className={cn(
          'relative',
          hueRotate && 'animate-hue-rotate',
          className
        )}
        style={{ 
          width, 
          height,
          filter: `saturate(1.5) contrast(1.2)${hueRotate ? ' hue-rotate(0deg)' : ''}`,
        }}
      >
        <img 
          src={src} 
          alt={alt}
          className="absolute w-full h-full object-cover"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px)`,
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            transition: 'transform 0.1s ease-out'
          }}
        />
        <img 
          src={src} 
          alt=""
          className="absolute w-full h-full object-cover opacity-70"
          style={{
            transform: `translate(${-offset.x * 1.5}px, ${-offset.y * 1.5}px)`,
            filter: 'hue-rotate(90deg)',
            mixBlendMode: 'screen',
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            transition: 'transform 0.1s ease-out'
          }}
        />
        <img 
          src={src} 
          alt=""
          className="absolute w-full h-full object-cover opacity-70"
          style={{
            transform: `translate(${offset.y * 1.5}px, ${offset.x * 1.5}px)`,
            filter: 'hue-rotate(180deg)',
            mixBlendMode: 'screen',
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            transition: 'transform 0.1s ease-out'
          }}
        />
      </div>
    </div>
  );
};

export default DistortedImage;
