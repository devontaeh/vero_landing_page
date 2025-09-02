'use client';

import React from 'react';

interface LogoProps {
    size?: 'sm' | 'md' | 'lg';
    showText?: boolean;
    className?: string;
}

const Logo: React.FC<LogoProps> = ({
    size = 'md',
    showText = true,
    className = ''
}) => {
    // Size configurations
    const sizeConfig = {
        sm: {
            iconSize: 12,
            textSize: 'text-xs',
            gap: 'gap-1.5'
        },
        md: {
            iconSize: 16,
            textSize: 'text-sm',
            gap: 'gap-1.5'
        },
        lg: {
            iconSize: 20,
            textSize: 'text-base',
            gap: 'gap-1.5'
        }
    };

    const config = sizeConfig[size];

    // Custom V icon with jagged line
    const VIcon = () => (
        <svg
            width={config.iconSize}
            height={config.iconSize}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3 21L12 3L21 21"
                stroke="#030213"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8 15L12 9L16 15"
                stroke="#015FFC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );

    // Check icon
    const CheckIcon = () => (
        <svg
            width={config.iconSize * 0.75}
            height={config.iconSize * 0.75}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M20 6L9 17L4 12"
                stroke="#015FFC"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );

    return (
        <div className={`flex items-center ${config.gap} ${className}`}>
            {/* Custom V Icon */}
            <div className="flex-shrink-0">
                <VIcon />
            </div>

            {/* Logo Text */}
            {showText && (
                <div className="flex items-center gap-1">
                    <span className={`font-semibold text-gray-900 ${config.textSize}`}>
                        Vero
                    </span>
                    <CheckIcon />
                </div>
            )}
        </div>
    );
};

export default Logo;
