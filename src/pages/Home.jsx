import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="relative">
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="h-[90vh] flex items-center justify-center relative overflow-hidden bg-creme-100">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-maroon-500 blur-[120px]" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gold-500 blur-[120px]" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-8xl font-serif font-bold mb-6 text-maroon-900 drop-shadow-sm"
                    >
                        Soulful Veena Melodies
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-maroon-700 mb-10 font-light max-w-3xl mx-auto leading-relaxed"
                    >
                        Experience the divine resonance of classical Indian music through the strings of the Saraswati Veena.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Link to="/veena">
                            <button className="bg-maroon-800 hover:bg-maroon-700 text-creme-100 px-10 py-4 rounded-full text-lg font-medium transition-all transform hover:scale-105 shadow-xl shadow-maroon-900/20 border border-maroon-700 hover:border-gold-500/50">
                                Explore Music
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
