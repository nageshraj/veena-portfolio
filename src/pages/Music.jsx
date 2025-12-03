import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { musicVideos } from '../config';

const Music = () => {
    const sections = [
        { key: 'veena', title: 'Veena', videos: musicVideos.veena },
        { key: 'vocal', title: 'Vocal', videos: musicVideos.vocal },
        { key: 'threeGenVeenaTrio', title: '3 Gen Veena Trio', videos: musicVideos.threeGenVeenaTrio },
        { key: 'rtp', title: 'RTP (Raga Tanam Pallavi)', videos: musicVideos.rtp },
        { key: 'otherForms', title: 'Other Forms', videos: musicVideos.otherForms },
    ];

    // State to track which sections are expanded (all expanded by default)
    const [expandedSections, setExpandedSections] = useState(
        sections.reduce((acc, section) => {
            acc[section.key] = true;
            return acc;
        }, {})
    );

    const toggleSection = (key) => {
        setExpandedSections(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-creme-100 to-creme-200 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Page Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-2xl md:text-3xl font-serif font-bold text-maroon-900 mb-4">
                        Music Collection
                    </h1>
                    <div className="h-1 w-24 bg-gold-500 mx-auto mb-4"></div>
                    <p className="text-sm md:text-base text-maroon-700 max-w-2xl mx-auto">
                        Explore performances across different styles and forms
                    </p>
                </motion.div>

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
                            {/* Section Header - Clickable */}
                            <button
                                onClick={() => toggleSection(section.key)}
                                className="w-full flex items-center justify-between mb-4 p-4 bg-maroon-900/10 hover:bg-maroon-900/20 rounded-lg transition-colors duration-300 group"
                            >
                                <div className="flex items-center gap-3">
                                    <h2 className="text-lg md:text-xl font-serif font-bold text-maroon-900">
                                        {section.title}
                                    </h2>
                                    <span className="text-sm text-maroon-700 bg-gold-500/20 px-3 py-1 rounded-full">
                                        {section.videos.length} {section.videos.length === 1 ? 'video' : 'videos'}
                                    </span>
                                </div>
                                <div className="text-maroon-900 group-hover:text-gold-600 transition-colors">
                                    {expandedSections[section.key] ? (
                                        <ChevronUp size={28} />
                                    ) : (
                                        <ChevronDown size={28} />
                                    )}
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
