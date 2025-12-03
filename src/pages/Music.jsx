import React, { useState, memo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Minimize2, Maximize2 } from 'lucide-react';
import { musicVideos } from '../config';

// Memoized Video Card Component
const VideoCard = memo(({ video, videoIndex, isLoaded, onLoad }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gold-500/20 hover:shadow-xl transition-shadow duration-300">
            {/* Video Container - Click to Load */}
            <div className="relative aspect-video bg-maroon-900/10">
                {!isLoaded ? (
                    // Thumbnail with Play Button
                    <button
                        onClick={onLoad}
                        className="absolute inset-0 w-full h-full group cursor-pointer"
                    >
                        <img
                            src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                            alt={video.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-maroon-900/20 group-hover:bg-maroon-900/30 transition-colors">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-gold-500/90 group-hover:bg-gold-500 rounded-full flex items-center justify-center shadow-lg transition-all transform group-hover:scale-110">
                                <svg className="w-8 h-8 md:w-10 md:h-10 text-maroon-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                    </button>
                ) : (
                    // Actual YouTube iframe (loaded on click, persists)
                    <iframe
                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                        title={video.title}
                        className="absolute top-0 left-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                )}
            </div>

            {/* Video Title */}
            <div className="p-4 bg-gradient-to-b from-white to-creme-50">
                <h3 className="text-sm md:text-base font-medium text-maroon-900 line-clamp-2">
                    {video.title}
                </h3>
            </div>
        </div>
    );
});

VideoCard.displayName = 'VideoCard';

const Music = () => {
    // Configuration: Set to false to start with all sections collapsed
    const SECTIONS_EXPANDED_BY_DEFAULT = false;

    const sections = [
        { key: 'veena', title: 'Veena', videos: musicVideos.veena },
        { key: 'vocal', title: 'Vocal', videos: musicVideos.vocal },
        { key: 'threeGenVeenaTrio', title: '3 Gen Veena Trio', videos: musicVideos.threeGenVeenaTrio },
        { key: 'rtp', title: 'RTP (Raga Tanam Pallavi)', videos: musicVideos.rtp },
        { key: 'otherForms', title: 'Other Forms', videos: musicVideos.otherForms },
    ];

    // State to track which sections are expanded
    const [expandedSections, setExpandedSections] = useState(
        sections.reduce((acc, section) => {
            acc[section.key] = SECTIONS_EXPANDED_BY_DEFAULT;
            return acc;
        }, {})
    );

    // State to track which videos have been loaded (persists across collapse/expand)
    const [loadedVideos, setLoadedVideos] = useState({});

    const toggleSection = (key) => {
        setExpandedSections(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const toggleAll = () => {
        const allExpanded = Object.values(expandedSections).every(val => val);
        const newState = sections.reduce((acc, section) => {
            acc[section.key] = !allExpanded;
            return acc;
        }, {});
        setExpandedSections(newState);
    };

    const handleVideoLoad = useCallback((videoId) => {
        setLoadedVideos(prev => ({
            ...prev,
            [videoId]: true
        }));
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-creme-100 to-creme-200 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Page Header */}
                <div className="relative mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h1 className="text-2xl md:text-3xl font-serif font-bold text-maroon-900 mb-4">
                            Music Collection
                        </h1>
                        <div className="h-1 w-24 bg-gold-500 mx-auto mb-4"></div>
                        <p className="text-sm md:text-base text-maroon-700 max-w-2xl mx-auto">
                            Explore performances across different styles and forms
                        </p>
                    </motion.div>
                    
                    {/* Toggle All Button - Top Right */}
                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        onClick={toggleAll}
                        className="absolute top-0 right-0 inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm text-maroon-900 hover:text-gold-600 border border-maroon-300 hover:border-gold-500 rounded-full transition-all duration-300 bg-white/80 backdrop-blur-sm hover:bg-white shadow-sm hover:shadow-md"
                    >
                        {Object.values(expandedSections).every(val => val) ? (
                            <>
                                <Minimize2 size={14} />
                                <span className="hidden sm:inline">Collapse All</span>
                            </>
                        ) : (
                            <>
                                <Maximize2 size={14} />
                                <span className="hidden sm:inline">Expand All</span>
                            </>
                        )}
                    </motion.button>
                </div>

                {/* Video Sections */}
                {sections.map((section, sectionIndex) => (
                    section.videos && section.videos.length > 0 && (
                        <section
                            key={section.key}
                            className="mb-6"
                        >
                            {/* Section Header - Elegant & Minimal */}
                            <button
                                onClick={() => toggleSection(section.key)}
                                className="w-full flex items-center justify-between mb-4 py-4 px-1 border-b border-maroon-200/40 hover:border-gold-400/60 transition-all duration-300 group"
                            >
                                <div className="flex items-center gap-4">
                                    <h2 className="text-base md:text-lg font-serif text-maroon-900 group-hover:text-maroon-700 transition-colors">
                                        {section.title}
                                    </h2>
                                    <span className="text-xs text-maroon-400 font-light">
                                        ({section.videos.length})
                                    </span>
                                </div>
                                
                                <div className="text-maroon-300 group-hover:text-gold-600 transition-colors">
                                    {expandedSections[section.key] ? (
                                        <ChevronUp size={16} />
                                    ) : (
                                        <ChevronDown size={16} />
                                    )}
                                </div>
                            </button>

                            {/* Collapsible Videos Grid */}
                            <AnimatePresence mode="wait">
                                {expandedSections[section.key] && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
                                            {section.videos.map((video, videoIndex) => (
                                                <VideoCard 
                                                    key={video.id} 
                                                    video={video} 
                                                    videoIndex={videoIndex}
                                                    isLoaded={loadedVideos[video.id]}
                                                    onLoad={() => handleVideoLoad(video.id)}
                                                />
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </section>
                    )
                ))}

                {/* Empty State */}
                {sections.every(section => !section.videos || section.videos.length === 0) && (
                    <div className="text-center py-20">
                        <p className="text-xl text-maroon-700">No videos available at the moment.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Music;
