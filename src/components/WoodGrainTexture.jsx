import React from 'react';

const WoodGrainTexture = ({ className = '', opacity = 0.08 }) => {
    return (
        <svg
            className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
            style={{ opacity }}
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <pattern id="woodgrain" x="0" y="0" width="200" height="100" patternUnits="userSpaceOnUse">
                    {/* Horizontal wood grain lines */}
                    <path
                        d="M 0 20 Q 50 18 100 20 T 200 20"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        fill="none"
                        opacity="0.3"
                    />
                    <path
                        d="M 0 35 Q 50 33 100 35 T 200 35"
                        stroke="currentColor"
                        strokeWidth="0.3"
                        fill="none"
                        opacity="0.2"
                    />
                    <path
                        d="M 0 50 Q 50 48 100 50 T 200 50"
                        stroke="currentColor"
                        strokeWidth="0.4"
                        fill="none"
                        opacity="0.25"
                    />
                    <path
                        d="M 0 65 Q 50 63 100 65 T 200 65"
                        stroke="currentColor"
                        strokeWidth="0.3"
                        fill="none"
                        opacity="0.2"
                    />
                    <path
                        d="M 0 80 Q 50 78 100 80 T 200 80"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        fill="none"
                        opacity="0.3"
                    />
                    
                    {/* Subtle knots */}
                    <ellipse cx="60" cy="40" rx="8" ry="4" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.15" />
                    <ellipse cx="150" cy="70" rx="6" ry="3" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.15" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#woodgrain)" className="text-sandalwood-600" />
        </svg>
    );
};

export default WoodGrainTexture;
