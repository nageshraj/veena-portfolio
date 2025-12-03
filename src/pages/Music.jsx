import React, { useState, memo, useCallback } from 'react';
import { musicVideos } from '../config';

// Memoized Video Card Component - Clean Design
const VideoCard = memo(({ video, videoIndex, isLoaded, onLoad }) => {
    return (
        <div className="group">
            {/* Video Container - Click to Load */}
            <div className="relative aspect-video bg-maroon-900/5 rounded-lg overflow-hidden mb-3 shadow-md hover:shadow-xl transition-shadow duration-300">
                {!isLoaded ? (
                    // Thumbnail with Play Button
                    <button
                        onClick={onLoad}
                        className="absolute inset-0 w-full h-full cursor-pointer"
                    >
                        <img
                            src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                            alt={video.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-maroon-900/10 group-hover:bg-maroon-900/20 transition-colors">
                            <div className="w-12 h-12 bg-gold-500/95 group-hover:bg-gold-500 rounded-full flex items-center justify-center shadow-lg transition-all transform group-hover:scale-110">
                                <svg className="w-6 h-6 text-maroon-900 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
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

            {/* Video Title - Below thumbnail */}
            <h3 className="text-xs md:text-sm text-center text-maroon-900 font-medium leading-snug line-clamp-2 px-1">
                {video.title}
            </h3>
        </div>
    );
});

VideoCard.displayName = 'VideoCard';

const Music = () => {
    const sections = [
        { key: 'veena', title: 'Veena', videos: musicVideos.veena },
        { key: 'vocal', title: 'Vocal', videos: musicVideos.vocal },
        { key: 'threeGenVeenaTrio', title: '3 Gen Veena Trio', videos: musicVideos.threeGenVeenaTrio },
        { key: 'rtp', title: 'RTP (Raga Tanam Pallavi)', videos: musicVideos.rtp },
        { key: 'otherForms', title: 'Other Forms', videos: musicVideos.otherForms },
    ];

    // State to track which videos have been loaded
    const [loadedVideos, setLoadedVideos] = useState({});

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
                <div className="text-center mb-12">
                    <h1 className="text-2xl md:text-3xl font-serif font-bold text-maroon-900 mb-4">
                        Music Collection
                    </h1>
                    <div className="h-1 w-24 bg-gold-500 mx-auto mb-4"></div>
                    <p className="text-sm md:text-base text-maroon-700 max-w-2xl mx-auto">
                        Explore performances across different styles and forms
                    </p>
                </div>

                {/* Video Sections */}
                {sections.map((section, sectionIndex) => {
                    const isNotFirst = sectionIndex > 0;
                    
                    return section.videos && section.videos.length > 0 && (
                        <section
                            key={section.key}
                            className="py-6 px-4"
                        >
                            {/* Divider line between sections */}
                            {isNotFirst && (
                                <div className="max-w-5xl mx-auto mb-6">
                                    <div className="h-px bg-gradient-to-r from-transparent via-maroon-200 to-transparent"></div>
                                </div>
                            )}
                            
                            <div className="max-w-7xl mx-auto">
                                {/* Section Header - Centered */}
                                <div className="text-center mb-6">
                                    <h2 className="text-xl md:text-2xl font-serif text-maroon-900 mb-2">
                                        {section.title}
                                    </h2>
                                    <div className="h-px w-32 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto"></div>
                                </div>

                                {/* Videos Grid - Larger thumbnails */}
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
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
                            </div>
                        </section>
                    );
                })}

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
