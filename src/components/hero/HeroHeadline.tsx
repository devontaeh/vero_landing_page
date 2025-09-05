"use client";
import React, { useEffect, useState } from "react";

const words = ["Disciplined", "Successful", "Professional", "Confident", "Fearless", "Calculated", "Consistently Profitable"];

export default function HeroHeadline() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < words.length - 1) {
            const timeout = setTimeout(() => {
                setIndex((i) => i + 1);
            }, index < words.length - 2 ? 200 : 600); // fast for first 3, slow for final
            return () => clearTimeout(timeout);
        }
    }, [index]);

    return (
        <h1
            aria-label="Become a Consistently Profitable Trader"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight text-center"
            style={{
                fontSize: 'clamp(1.5rem, 5vw, 3.5rem)',
                minHeight: 'clamp(2rem, 6vw, 4rem)',
                lineHeight: '1.1',
            }}
        >
            <span>Become a </span>
            <span
                key={index}
                className="text-primary inline-block animate-flip"
                style={{ color: "#015FFC" }}
            >
                {words[index]}
            </span>
            <span> Trader</span>
        </h1>
    );
}