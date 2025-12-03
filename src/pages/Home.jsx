import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MusicWave from '../components/MusicWave';
import RangoliPattern from '../components/RangoliPattern';
import LotusDivider from '../components/LotusDivider';
import veenaImg from '../assets/veena_closeup_1764330045892.png';
import vocalImg from '../assets/vocal_hero.png';
import { featuredVideos } from '../config';

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
                        <div className="absolute top-6 left-6 z-20 text-creme-100 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                            <h2 className="text-xl md:text-2xl font-serif drop-shadow-lg">Veena</h2>
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
                        <div className="absolute top-6 right-6 z-20 text-creme-100 opacity-80 group-hover:opacity-100 transition-opacity duration-500 text-right">
                            <h2 className="text-xl md:text-2xl font-serif drop-shadow-lg">Vocal</h2>
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
                            className="card-elegant bg-creme-100/95 backdrop-blur-md p-6 md:p-10 shadow-2xl border border-gold-400/40 max-w-xl mx-4 text-center relative overflow-hidden"
                        >
                            <RangoliPattern className="text-gold-500" opacity={0.04} />
                            <div className="relative z-10">
                            <h1 className="text-2xl md:text-3xl font-serif font-bold text-maroon-900 mb-3">
                                Veena Srivani
                            </h1>
                            <LotusDivider className="my-3" />
                            <p className="text-sm md:text-base text-maroon-800 mb-4 font-light leading-relaxed">
                                Bridging ancient tradition and modern expression through the divine Saraswati Veena and soulful vocals.
                            </p>
                            <Link to="/about">
                                <button className="bg-gradient-to-r from-maroon-800 to-peacock-700 hover:from-maroon-700 hover:to-peacock-600 text-creme-100 px-5 py-2 rounded-full text-sm md:text-base font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-peacock-500/40">
                                    Read More
                                </button>
                            </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Videos Section (Bottom) */}
                    <div className="w-full max-w-7xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="card-elegant bg-maroon-900/70 backdrop-blur-md p-4 border border-gold-500/30 shadow-2xl"
                        >
                            <h3 className="text-creme-100 font-serif text-base md:text-lg mb-3 text-center tracking-wider">FEATURED PERFORMANCES</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {featuredVideos.map((video, index) => (
                                    <div
                                        key={video.id}
                                        className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-gold-500/40 group hover:border-gold-400 transition-all duration-300"
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
