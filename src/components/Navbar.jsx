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
        { name: 'FAQ', path: '/faq' },
        { name: 'Contact', path: '/contact' },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleMuteToggle = (e) => {
        e.stopPropagation(); // Prevent triggering the global click sound when toggling mute
        const newState = toggleMute();
        setIsMuted(newState);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 silk-gradient-dark backdrop-blur-md border-b border-gold-500/10 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2 text-gold-500 hover:text-gold-400 transition-all duration-300 group">
                        <div className="p-1.5 bg-gradient-to-br from-maroon-800 to-peacock-700 rounded-full border border-peacock-500/30 group-hover:border-gold-400 transition-all duration-300">
                            <Music className="h-4 w-4" />
                        </div>
                        <span className="text-lg font-serif font-bold tracking-wide text-creme-100 group-hover:text-gold-400 transition-colors">Saraswati Veena</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`relative text-xs uppercase tracking-wider font-medium hover:text-gold-400 transition-all duration-300 ${location.pathname === link.path ? 'text-gold-500' : 'text-creme-200'
                                    }`}
                            >
                                {link.name}
                                {location.pathname === link.path && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute left-0 top-full mt-0.5 w-full h-px bg-gradient-to-r from-peacock-500 via-gold-500 to-peacock-500"
                                    />
                                )}
                            </Link>
                        ))}
                        {config.enableClickSound && (
                            <button
                                onClick={handleMuteToggle}
                                className="text-creme-300 hover:text-gold-400 transition-all duration-300 focus:outline-none p-1 hover:bg-maroon-800/50 rounded-full"
                                title={isMuted ? "Unmute Sound" : "Mute Sound"}
                            >
                                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                            </button>
                        )}
                    </div>

                    {/* Mobile Menu Button & Mute */}
                    <div className="md:hidden flex items-center space-x-3">
                        {config.enableClickSound && (
                            <button
                                onClick={handleMuteToggle}
                                className="text-creme-300 hover:text-gold-500 transition-colors focus:outline-none"
                            >
                                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                            </button>
                        )}
                        <button
                            onClick={toggleMenu}
                            className="text-creme-100 hover:text-gold-500 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
                        <div className="px-4 pt-2 pb-4 space-y-1">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-3 py-2 rounded-lg text-sm font-medium font-serif tracking-wide transition-all duration-300 ${location.pathname === link.path
                                        ? 'text-gold-500 bg-maroon-800/80 border-l-2 border-l-peacock-500'
                                        : 'text-creme-200 hover:text-gold-400 hover:bg-maroon-800/50'
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
