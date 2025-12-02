import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Music, Volume2, VolumeX } from 'lucide-react';
import { toggleMute, getMuteState } from '../utils/veenaSound';
import config from '../config';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMuted, setIsMuted] = useState(getMuteState());
    const location = useLocation();

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Music', path: '/music' },
        { name: 'Press', path: '/press' },
        { name: 'Contact', path: '/contact' },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleMuteToggle = (e) => {
        e.stopPropagation(); // Prevent triggering the global click sound when toggling mute
        const newState = toggleMute();
        setIsMuted(newState);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-maroon-900/95 backdrop-blur-md border-b border-maroon-800 shadow-lg shadow-maroon-900/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 text-gold-500 hover:text-gold-400 transition-colors group">
                        <div className="p-2 bg-maroon-800 rounded-full border border-maroon-700 group-hover:border-gold-500/50 transition-colors">
                            <Music className="h-6 w-6" />
                        </div>
                        <span className="text-2xl font-serif font-bold tracking-wider uppercase text-creme-100">Saraswati Veena</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`relative text-sm uppercase tracking-widest font-medium hover:text-gold-500 transition-colors ${location.pathname === link.path ? 'text-gold-500' : 'text-creme-200'
                                    }`}
                            >
                                {link.name}
                                {location.pathname === link.path && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute left-0 top-full mt-1 w-full h-0.5 bg-gold-500"
                                    />
                                )}
                            </Link>
                        ))}
                        {config.enableClickSound && (
                            <button
                                onClick={handleMuteToggle}
                                className="text-creme-300 hover:text-gold-500 transition-colors focus:outline-none p-2 hover:bg-maroon-800 rounded-full"
                                title={isMuted ? "Unmute Sound" : "Mute Sound"}
                            >
                                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                            </button>
                        )}
                    </div>

                    {/* Mobile Menu Button & Mute */}
                    <div className="md:hidden flex items-center space-x-4">
                        {config.enableClickSound && (
                            <button
                                onClick={handleMuteToggle}
                                className="text-creme-300 hover:text-gold-500 transition-colors focus:outline-none"
                            >
                                {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
                            </button>
                        )}
                        <button
                            onClick={toggleMenu}
                            className="text-creme-100 hover:text-gold-500 focus:outline-none"
                        >
                            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-maroon-900 border-b border-maroon-800 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-4 py-3 rounded-md text-base font-medium font-serif tracking-wide ${location.pathname === link.path
                                        ? 'text-gold-500 bg-maroon-800'
                                        : 'text-creme-200 hover:text-white hover:bg-maroon-800'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
