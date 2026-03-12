import React from 'react';

interface SvgTextLogoProps {
  text: string;
  className?: string;
  textClassName?: string;
}

export const SvgTextLogo: React.FC<SvgTextLogoProps> = ({
  text,
  className = '',
  textClassName = '',
}) => {
  return (
    <svg
      viewBox="0 0 200 60"
      className={`w-full h-auto ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        className={`text-2xl font-bold fill-current ${textClassName}`}
      >
        {text}
      </text>
    </svg>
  );
};

export default SvgTextLogo;