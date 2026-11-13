'use client';

import React, { useEffect, useState } from 'react';

interface AudioVisualizerProps {
  isPlaying?: boolean;
  barCount?: number;
  height?: number;
  className?: string;
  colorScheme?: 'gold' | 'teal' | 'dual';
}

export const AudioVisualizer: React.FC<AudioVisualizerProps> = ({
  isPlaying = true,
  barCount = 18,
  height = 36,
  className = '',
  colorScheme = 'dual',
}) => {
  const [bars, setBars] = useState<number[]>([]);

  useEffect(() => {
    // Initialize bars
    setBars(Array.from({ length: barCount }, () => Math.random() * 0.7 + 0.2));

    if (!isPlaying) {
      setBars(Array.from({ length: barCount }, () => 0.15));
      return;
    }

    const interval = setInterval(() => {
      setBars((prev) =>
        prev.map(() => {
          // Dynamic harmonic bounce
          return Math.max(0.1, Math.min(1, Math.random() * 0.85 + 0.15));
        })
      );
    }, 120);

    return () => clearInterval(interval);
  }, [isPlaying, barCount]);

  const getBarColor = (index: number) => {
    if (colorScheme === 'gold') {
      return 'from-[#F7C048] to-[#FFD15A] shadow-[0_0_10px_rgba(247,192,72,0.4)]';
    }
    if (colorScheme === 'teal') {
      return 'from-[#4FDBC7] to-[#70F8E3] shadow-[0_0_10px_rgba(79,219,199,0.4)]';
    }
    // Dual scheme
    return index % 2 === 0
      ? 'from-[#F7C048] to-[#C79528] shadow-[0_0_8px_rgba(247,192,72,0.3)]'
      : 'from-[#4FDBC7] to-[#1B938D] shadow-[0_0_8px_rgba(79,219,199,0.3)]';
  };

  return (
    <div
      className={`flex items-end justify-center gap-[3px] px-2 py-1 ${className}`}
      style={{ height: `${height}px` }}
    >
      {bars.map((scale, i) => (
        <div
          key={i}
          className={`w-[3px] rounded-full bg-gradient-to-t transition-all duration-150 ease-out ${getBarColor(i)}`}
          style={{
            height: `${Math.round(scale * height)}px`,
            opacity: isPlaying ? 0.9 : 0.35,
          }}
        />
      ))}
    </div>
  );
};

