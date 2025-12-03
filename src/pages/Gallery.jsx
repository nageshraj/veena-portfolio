import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import images
import veenaCloseup from '../assets/veena_closeup_1764330045892.png';
import concertPerformance from '../assets/concert_performance_1764330062551.png';
import traditionalSetting from '../assets/traditional_setting_1764330078504.png';
import veenaStrings from '../assets/veena_strings_1764330092782.png';
import musicAcademy from '../assets/music_academy_1764330112040.png';
import performanceHall from '../assets/performance_hall_1764330128084.png';

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const galleryImages = [
        {
            id: 1,
            url: veenaCloseup,
            name: 'Saraswati Veena',
            date: 'Traditional Instrument'
        },
        {
            id: 2,
            url: concertPerformance,
            name: 'Concert Hall',
            date: 'Performance Venue'
        },
        {
            id: 3,
            url: traditionalSetting,
            name: 'Traditional Setting',
            date: 'Music Room'
        },
        {
            id: 4,
            url: veenaStrings,
            name: 'Veena Strings',
            date: 'Artistic Detail'
        },
        {
            id: 5,
            url: musicAcademy,
            name: 'Music Academy',
            date: 'Learning Space'
        },
        {
            id: 6,
            url: performanceHall,
            name: 'Performance Hall',
            date: 'Concert Venue'
        }
    ];

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            if (newDirection === 1) {
                return prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1;
            } else {
                return prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1;
            }
        });
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                paginate(-1);
            } else if (e.key === 'ArrowRight') {
                paginate(1);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Auto-play carousel
    useEffect(() => {
        const interval = setInterval(() => {
            paginate(1);
        }, 3000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [currentIndex]); // Reset timer when image changes

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="text-center mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl md:text-3xl font-serif font-bold mb-4 text-maroon-900"
                >
                    Visual Journey
                </motion.h1>
                <div className="h-1 w-24 bg-gold-500 mx-auto mb-4"></div>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-maroon-700 text-sm md:text-base max-w-2xl mx-auto"
                >
                    Glimpses of performances, instruments, and musical moments
                </motion.p>
            </div>

            <div className="relative max-w-5xl mx-auto">
                {/* Main Carousel Container */}
                <div className="relative aspect-video bg-maroon-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-maroon-800">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);

                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                            className="absolute inset-0"
                        >
                            <img
                                src={galleryImages[currentIndex].url}
                                alt={galleryImages[currentIndex].name}
                                className="w-full h-full object-cover"
                            />
                            {/* Image Caption Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-maroon-900/90 to-transparent p-8">
                                <h3 className="text-creme-100 text-lg md:text-xl font-serif font-bold mb-1">
                                    {galleryImages[currentIndex].name}
                                </h3>
                                <p className="text-gold-400 text-sm">
                                    {galleryImages[currentIndex].date}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <button
                        onClick={() => paginate(-1)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-maroon-900/50 hover:bg-maroon-900/80 text-creme-100 p-3 rounded-full transition-all backdrop-blur-sm z-10 group border border-creme-100/20"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </button>
                    <button
                        onClick={() => paginate(1)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-maroon-900/50 hover:bg-maroon-900/80 text-creme-100 p-3 rounded-full transition-all backdrop-blur-sm z-10 group border border-creme-100/20"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </button>
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center gap-3 mt-8">
                    {galleryImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className={`transition-all ${index === currentIndex
                                ? 'w-12 h-3 bg-maroon-500'
                                : 'w-3 h-3 bg-maroon-200 hover:bg-maroon-400'
                                } rounded-full`}
                            aria-label={`Go to image ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Image Counter */}
                <div className="text-center mt-4 text-maroon-600">
                    <span className="text-maroon-900 font-bold">{currentIndex + 1}</span>
                    {' / '}
                    {galleryImages.length}
                </div>
            </div>

            {/* Instructions */}
            <div className="text-center mt-12 text-maroon-400 text-sm">
                <p>Use arrow keys or swipe to navigate • Click dots to jump to specific images</p>
            </div>
        </div>
    );
};

export default Gallery;
