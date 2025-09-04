'use client';

import React from 'react';

interface LogoProps {
    size?: 'sm' | 'md' | 'lg' | 'xl';
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
        },
        xl: {
            iconSize: 32,
            textSize: 'text-lg',
            gap: 'gap-2'
        }
    };

    const config = sizeConfig[size] || sizeConfig.md;

    // Your actual SVG logo
    const LogoIcon = () => {
        const logoSrc = process.env.NODE_ENV === 'production' ? '/vero_landing_page/logo.svg' : '/logo.svg';
        return (
            <img
                src={logoSrc}
                alt="Vero Logo"
                width={config.iconSize}
                height={config.iconSize}
                className="object-contain"
            />
        );
    };

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
            {/* Your Logo */}
            <div className="flex-shrink-0">
                <LogoIcon />
            </div>

            {/* Logo Text */}
            {showText && (
                <span className={`font-semibold text-gray-900 ${config.textSize}`}>
                    Vero
                </span>
            )}
        </div>
    );
};

export default Logo;
