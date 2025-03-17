
import React from 'react';
import { cn } from '@/lib/utils';

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'purple' | 'pink' | 'blue' | 'green' | 'yellow';
  variant?: 'solid' | 'outline';
  glitch?: boolean;
}

const NeonButton = React.forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, color = 'pink', variant = 'solid', glitch = false, children, ...props }, ref) => {
    const colorClasses = {
      purple: {
        solid: 'bg-psychedelic-purple text-white border-psychedelic-purple hover:bg-transparent',
        outline: 'border-psychedelic-purple text-psychedelic-purple hover:bg-psychedelic-purple hover:text-white'
      },
      pink: {
        solid: 'bg-psychedelic-pink text-white border-psychedelic-pink hover:bg-transparent',
        outline: 'border-psychedelic-pink text-psychedelic-pink hover:bg-psychedelic-pink hover:text-white'
      },
      blue: {
        solid: 'bg-psychedelic-blue text-black border-psychedelic-blue hover:bg-transparent hover:text-psychedelic-blue',
        outline: 'border-psychedelic-blue text-psychedelic-blue hover:bg-psychedelic-blue hover:text-black'
      },
      green: {
        solid: 'bg-psychedelic-green text-black border-psychedelic-green hover:bg-transparent hover:text-psychedelic-green',
        outline: 'border-psychedelic-green text-psychedelic-green hover:bg-psychedelic-green hover:text-black'
      },
      yellow: {
        solid: 'bg-psychedelic-yellow text-black border-psychedelic-yellow hover:bg-transparent hover:text-psychedelic-yellow',
        outline: 'border-psychedelic-yellow text-psychedelic-yellow hover:bg-psychedelic-yellow hover:text-black'
      }
    };
    
    const shadowColors = {
      purple: '0 0 10px rgba(155, 2, 252, 0.7)',
      pink: '0 0 10px rgba(254, 2, 254, 0.7)',
      blue: '0 0 10px rgba(2, 254, 254, 0.7)',
      green: '0 0 10px rgba(1, 255, 137, 0.7)',
      yellow: '0 0 10px rgba(255, 239, 0, 0.7)'
    };
    
    return (
      <button
        className={cn(
          'relative px-6 py-3 font-bold uppercase tracking-wider border-2 transition-all duration-300 rounded-md',
          colorClasses[color][variant],
          glitch && 'animate-text-glitch',
          className
        )}
        style={{
          boxShadow: shadowColors[color]
        }}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

NeonButton.displayName = 'NeonButton';

export default NeonButton;
