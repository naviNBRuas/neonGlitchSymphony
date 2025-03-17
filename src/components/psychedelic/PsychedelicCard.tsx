
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface PsychedelicCardProps {
  children: React.ReactNode;
  className?: string;
  glassEffect?: boolean;
  neonBorder?: boolean;
  interactive?: boolean;
}

const PsychedelicCard = ({
  children,
  className,
  glassEffect = true,
  neonBorder = true,
  interactive = true
}: PsychedelicCardProps) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive) return;
    
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = ((x - centerX) / centerX) * 5;
    const rotateX = ((centerY - y) / centerY) * 5;
    
    setRotation({ x: rotateX, y: rotateY });
  };
  
  const handleMouseLeave = () => {
    if (!interactive) return;
    setRotation({ x: 0, y: 0 });
  };
  
  return (
    <div
      className={cn(
        'p-6 rounded-xl transition-all duration-300 transform-gpu',
        glassEffect && 'glass-card',
        neonBorder && 'psychedelic-border',
        className
      )}
      style={{
        transform: interactive ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` : undefined
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default PsychedelicCard;
