import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MusicWave from '../components/MusicWave';
import veenaImg from '../assets/veena_closeup_1764330045892.png';
import vocalImg from '../assets/vocal_hero.png';

const Home = () => {
    return (
        <div className="relative min-h-screen bg-creme-100 overflow-hidden">
            {/* Music Wave Visualizer */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
                <MusicWave />
            </div>

            <section className="relative h-screen flex flex-col">
                {/* Split Images Background */}
                <div className="absolute inset-0 flex flex-col md:flex-row">
                    {/* Left Side - Veena */}
                    <div className="w-full md:w-1/2 h-1/2 md:h-full relative group overflow-hidden">
                        <div className="absolute inset-0 bg-maroon-900/40 group-hover:bg-maroon-900/20 transition-colors duration-500 z-10" />
                        <img
                            src={veenaImg}
                            alt="Veena Performance"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-8 left-8 z-20 text-creme-100 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                            <h2 className="text-3xl font-serif drop-shadow-lg">Veena</h2>
                        </div>
                    </div>

                    {/* Right Side - Vocal */}
                    <div className="w-full md:w-1/2 h-1/2 md:h-full relative group overflow-hidden">
                        <div className="absolute inset-0 bg-maroon-900/40 group-hover:bg-maroon-900/20 transition-colors duration-500 z-10" />
                        <img
                            src={vocalImg}
                            alt="Vocal Performance"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-8 right-8 z-20 text-creme-100 opacity-80 group-hover:opacity-100 transition-opacity duration-500 text-right">
                            <h2 className="text-3xl font-serif drop-shadow-lg">Vocal</h2>
                        </div>
                    </div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-30 flex flex-col h-full justify-between py-8 md:py-12">

                    {/* Bio Section (Top/Center) */}
                    <div className="flex-grow flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="bg-creme-100/90 backdrop-blur-md p-6 md:p-10 rounded-2xl shadow-2xl border border-gold-400/30 max-w-xl mx-4 text-center"
                        >
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-maroon-900 mb-3">
                                Veena Srivani
                            </h1>
                            <div className="h-1 w-16 bg-gold-500 mx-auto mb-4"></div>
                            <p className="text-base md:text-lg text-maroon-800 mb-6 font-light leading-relaxed">
                                Bridging ancient tradition and modern expression through the divine Saraswati Veena and soulful vocals.
                            </p>
                            <Link to="/about">
                                <button className="bg-maroon-800 hover:bg-maroon-700 text-creme-100 px-6 py-2 rounded-full text-base font-medium transition-all transform hover:scale-105 shadow-lg">
                                    Read More
                                </button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Videos Section (Bottom) */}
                    <div className="w-full max-w-7xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="bg-maroon-900/60 backdrop-blur-md rounded-xl p-4 border border-gold-500/20"
                        >
                            <h3 className="text-creme-100 font-serif text-xl mb-4 text-center">FEATURED PERFORMANCES</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                    { id: "rC1pyqeLQY0", title: "Brahmakalasha" },
                                    { id: "ccUiMyWMsPc", title: "Dwinade RTP" },
                                    { id: "uIkuDVHl83A", title: "Gajavadana" }
                                ].map((video, index) => (
                                    <div
                                        key={video.id}
                                        className="relative aspect-video rounded-lg overflow-hidden shadow-lg border border-gold-500/30 group"
                                    >
                                        <iframe
                                            src={`https://www.youtube.com/embed/${video.id}`}
                                            title={video.title}
                                            className="absolute top-0 left-0 w-full h-full"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
