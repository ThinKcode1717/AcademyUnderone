/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface FeducationLogoProps {
  className?: string;
  textColor?: string;
}

export default function FeducationLogo({ className = '', textColor = 'text-theme-title' }: FeducationLogoProps) {
  return (
    <div className={`flex items-center font-sans tracking-normal select-none ${className}`}>
      {/* Red bubble for "FED" */}
      <div className="relative bg-brand-red px-2.5 py-1.5 rounded flex items-center justify-center shadow-sm">
        <span className="text-white font-black text-base sm:text-lg tracking-wider leading-none">FED</span>
        {/* Tail of speech bubble at the bottom-left */}
        <div className="absolute -bottom-1.5 left-2 w-0 h-0 border-t-[6px] border-t-brand-red border-r-[6px] border-r-transparent"></div>
      </div>
      {/* "UCATION" text */}
      <span className={`font-black text-base sm:text-lg tracking-wider pl-2 leading-none ${textColor}`}>
        UCATION
      </span>
    </div>
  );
}
