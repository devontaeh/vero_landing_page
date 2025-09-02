'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary';
    size?: 'sm' | 'default' | 'lg';
    children: React.ReactNode;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'default',
    children,
    className = '',
    ...props
}) => {
    // Base styles
    const baseStyles = 'font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-opacity-50';

    // Variant styles
    const variantStyles = {
        primary: 'bg-[#015FFC] text-white hover:opacity-90 focus:ring-[#015FFC]'
    };

    // Size styles
    const sizeStyles = {
        sm: 'px-3 py-2 text-sm',
        default: 'px-4 py-2 text-base',
        lg: 'px-6 py-4 text-lg'
    };

    // Combine all styles
    const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    return (
        <button
            className={buttonStyles}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
