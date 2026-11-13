'use client';

import React, { useRef, useState } from 'react';

interface InteractiveHoloCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'gold' | 'teal';
  enableTilt?: boolean;
}

export const InteractiveHoloCard: React.FC<InteractiveHoloCardProps> = ({
  children,
  className = '',
  glowColor = 'gold',
  enableTilt = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableTilt || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6; // max 6 deg
    const rotateY = ((x - centerX) / centerX) * 6;

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.15,
    });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  const glowBorderClass =
    glowColor === 'gold'
      ? 'hover:border-[#F7C048]/60 hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.9),0_0_30px_rgba(247,192,72,0.18)]'
      : 'hover:border-[#4FDBC7]/60 hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.9),0_0_30px_rgba(79,219,199,0.18)]';

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: 'transform 0.2s cubic-bezier(0.2, 0, 0, 1), box-shadow 0.3s ease, border-color 0.3s ease',
      }}
      className={`relative overflow-hidden rounded-xl transition-all duration-300 ${glowBorderClass} ${className}`}
    >
      {/* Specular glare shine */}
      <div
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,${glarePos.opacity}) 0%, transparent 60%)`,
        }}
      />
      {children}
    </div>
  );
};

