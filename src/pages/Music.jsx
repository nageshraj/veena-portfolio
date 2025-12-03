import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Minimize2, Maximize2 } from 'lucide-react';
import { musicVideos } from '../config';

const Music = () => {
    // Configuration: Set to false to start with all sections collapsed
    const SECTIONS_EXPANDED_BY_DEFAULT = true;

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
                        <motion.section
                            key={section.key}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                            className="mb-6"
                        >
                            {/* Section Header - Minimal & Sophisticated */}
                            <button
                                onClick={() => toggleSection(section.key)}
                                className="w-full flex items-center justify-between mb-4 py-3 px-4 border-l-2 border-peacock-500 bg-white/60 hover:bg-white/90 backdrop-blur-sm rounded-r-lg transition-all duration-300 group shadow-sm hover:shadow-md"
                            >
                                <div className="flex items-center gap-3">
                                    <h2 className="text-base md:text-lg font-serif font-semibold text-maroon-900 group-hover:text-peacock-700 transition-colors">
                                        {section.title}
                                    </h2>
                                    <span className="text-xs text-maroon-600 bg-gold-500/15 px-2 py-0.5 rounded-full font-medium">
                                        {section.videos.length}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="h-px w-8 bg-gradient-to-r from-transparent to-gold-500/50 group-hover:to-gold-500 transition-all"></div>
                                    <div className="text-peacock-600 group-hover:text-gold-600 transition-colors">
                                        {expandedSections[section.key] ? (
                                            <ChevronUp size={20} />
                                        ) : (
                                            <ChevronDown size={20} />
                                        )}
                                    </div>
                                </div>
                            </button>

                            {/* Collapsible Videos Grid */}
                            <AnimatePresence>
                                {expandedSections[section.key] && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
                                            {section.videos.map((video, videoIndex) => (
                                                <motion.div
                                                    key={video.id}
                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ duration: 0.4, delay: videoIndex * 0.05 }}
                                                    className="bg-white rounded-xl shadow-lg overflow-hidden border border-gold-500/20 hover:shadow-xl transition-shadow duration-300"
                                                >
                                                    {/* Video Container */}
                                                    <div className="relative aspect-video bg-maroon-900/10">
                                                        <iframe
                                                            src={`https://www.youtube.com/embed/${video.id}`}
                                                            title={video.title}
                                                            className="absolute top-0 left-0 w-full h-full"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                            allowFullScreen
                                                        ></iframe>
                                                    </div>

                                                    {/* Video Title */}
                                                    <div className="p-4 bg-gradient-to-b from-white to-creme-50">
                                                        <h3 className="text-sm md:text-base font-medium text-maroon-900 line-clamp-2">
                                                            {video.title}
                                                        </h3>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.section>
                    )
                ))}

                {/* Empty State */}
                {sections.every(section => !section.videos || section.videos.length === 0) && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <p className="text-xl text-maroon-700">No videos available at the moment.</p>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Music;
