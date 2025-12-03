import React from 'react';

const RangoliPattern = ({ className = '', opacity = 0.05 }) => {
    return (
        <svg
            className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
            style={{ opacity }}
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <pattern id="rangoli" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    {/* Central lotus motif */}
                    <circle cx="50" cy="50" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    
                    {/* Petals */}
                    <path d="M 50 35 Q 45 42 50 50 Q 55 42 50 35" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <path d="M 65 50 Q 58 45 50 50 Q 58 55 65 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <path d="M 50 65 Q 45 58 50 50 Q 55 58 50 65" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <path d="M 35 50 Q 42 45 50 50 Q 42 55 35 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    
                    {/* Diagonal petals */}
                    <path d="M 40 40 Q 43 45 50 50 Q 45 43 40 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <path d="M 60 40 Q 57 45 50 50 Q 55 43 60 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <path d="M 60 60 Q 57 55 50 50 Q 55 57 60 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <path d="M 40 60 Q 43 55 50 50 Q 45 57 40 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    
                    {/* Corner dots */}
                    <circle cx="25" cy="25" r="2" fill="currentColor" opacity="0.3" />
                    <circle cx="75" cy="25" r="2" fill="currentColor" opacity="0.3" />
                    <circle cx="25" cy="75" r="2" fill="currentColor" opacity="0.3" />
                    <circle cx="75" cy="75" r="2" fill="currentColor" opacity="0.3" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#rangoli)" className="text-gold-600" />
        </svg>
    );
};

export default RangoliPattern;
