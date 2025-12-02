import React, { useEffect, useRef } from 'react';
import { getAnalyser } from '../utils/veenaSound';

const MusicWave = () => {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const timeRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let analyser = getAnalyser();

        const renderFrame = () => {
            // Re-fetch analyser in case it was initialized late
            if (!analyser) {
                analyser = getAnalyser();
            }

            // Resize canvas to match parent container
            if (canvas.width !== canvas.offsetWidth || canvas.height !== canvas.offsetHeight) {
                canvas.width = canvas.offsetWidth;
                canvas.height = canvas.offsetHeight;
            }

            const width = canvas.width;
            const height = canvas.height;

            ctx.clearRect(0, 0, width, height);

            // Idle animation if no analyser or no sound
            if (!analyser) {
                timeRef.current += 0.05;
                ctx.beginPath();
                ctx.strokeStyle = 'rgba(184, 134, 11, 0.6)'; // Dark Goldenrod, more visible
                ctx.lineWidth = 3;

                for (let x = 0; x < width; x++) {
                    // Gentle sine wave
                    const y = (height / 2) + Math.sin(x * 0.01 + timeRef.current) * 20;
                    if (x === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.stroke();

                animationRef.current = requestAnimationFrame(renderFrame);
                return;
            }

            const bufferLength = analyser.fftSize;
            const dataArray = new Uint8Array(bufferLength);
            analyser.getByteTimeDomainData(dataArray);

            ctx.lineWidth = 4;
            ctx.strokeStyle = 'rgba(184, 134, 11, 0.8)'; // Darker gold for visibility
            ctx.beginPath();

            const sliceWidth = width * 1.0 / bufferLength;
            let x = 0;

            for (let i = 0; i < bufferLength; i++) {
                const v = dataArray[i] / 128.0;
                const y = v * height / 2;

                if (i === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }

                x += sliceWidth;
            }

            ctx.lineTo(canvas.width, canvas.height / 2);
            ctx.stroke();

            // Echo wave
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(128, 0, 0, 0.4)'; // Maroon
            ctx.lineWidth = 2;
            x = 0;
            for (let i = 0; i < bufferLength; i++) {
                const v = dataArray[i] / 128.0;
                const y = (v * height / 2) + 10;

                if (i === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
                x += sliceWidth;
            }
            ctx.stroke();

            animationRef.current = requestAnimationFrame(renderFrame);
        };

        renderFrame();

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <div className="absolute bottom-0 left-0 w-full h-64 pointer-events-none z-0">
            <canvas ref={canvasRef} className="w-full h-full" />
        </div>
    );
};

export default MusicWave;
