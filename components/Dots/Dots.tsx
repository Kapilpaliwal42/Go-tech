import React from 'react';

/**
 * DottedPattern Component
 * @param {string} clipPath - CSS clip-path value (e.g., 'circle(50%)', 'inset(0)')
 * @param {string} radius - The dot size/radius (e.g., '2px')
 * @param {boolean} motion - Whether the pattern should subtly pulse/move
 * @param {string} color - Color of the dots (default: 'gray')
 * @param {string} density - Spacing between dots (default: '12px')
 */
const DottedPattern = ({ 
  clipPath = 'none', 
  radius = '2px', 
  motion = false, 
  color = 'gray',
  density = '12px',
  className = "" 
}) => {
  return (
    <div 
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{ clipPath }}
    >
      <div 
        className={`w-full h-full opacity-20 ${motion ? 'animate-dotted-pulse' : ''}`}
        style={{
          backgroundImage: `radial-gradient(circle, ${color} ${radius}, transparent ${radius})`,
          backgroundSize: `${density} ${density}`,
          maskImage: 'radial-gradient(circle at top right, black, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle at top right, black, transparent 70%)',
        }}
      />

      <style jsx>{`
        @keyframes dotted-pulse {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.05); opacity: 0.3; }
        }
        .animate-dotted-pulse {
          animation: dotted-pulse 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default DottedPattern;