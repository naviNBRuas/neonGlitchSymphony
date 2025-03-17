
import React from 'react';
import { cn } from '@/lib/utils';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: React.ElementType;
  intensity?: 'low' | 'medium' | 'high';
}

const GlitchText = ({
  text,
  className,
  as: Component = 'span',
  intensity = 'medium'
}: GlitchTextProps) => {
  const animationClasses = {
    low: 'animate-[text-glitch_4s_ease-in-out_infinite]',
    medium: 'animate-[text-glitch_2s_ease-in-out_infinite]',
    high: 'animate-[text-glitch_1s_ease-in-out_infinite]'
  };
  
  return (
    <Component
      className={cn('glitch-text', animationClasses[intensity], className)}
      data-text={text}
    >
      {text}
    </Component>
  );
};

export default GlitchText;
