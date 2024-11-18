import React from 'react';
import { Globe } from 'lucide-react';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export default function Logo({ className = '', showTagline = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <Globe className="w-8 h-8 text-bithra-600" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-bithra-600 rounded-full" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-bithra-400 rounded-full" />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold bg-gradient-to-r from-bithra-700 to-bithra-400 bg-clip-text text-transparent">
          BITHRA
        </span>
        {showTagline && (
          <span className="text-xs text-bithra-600 tracking-wider">
            CONNECT, COLLABORATE, AND CREATE TOGETHER
          </span>
        )}
      </div>
    </div>
  );
}