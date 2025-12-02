import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import { playVeenaSoundWithMuteCheck as playVeenaSound } from '../utils/veenaSound';
import config, { socialLinks } from '../config';

const Layout = ({ children }) => {
    useEffect(() => {
        if (!config.enableClickSound) return;

        const handleGlobalClick = () => {
            playVeenaSound();
        };

        window.addEventListener('click', handleGlobalClick);

        return () => {
            window.removeEventListener('click', handleGlobalClick);
        };
    }, []);

    return (
        <div className="min-h-screen bg-creme-100 text-maroon-900 font-sans selection:bg-maroon-500/30">
            <Navbar />
            <main className="pt-20">
                {children}
            </main>
            <footer className="bg-maroon-900 text-creme-200 py-4 mt-20 border-t border-maroon-800">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-xs">&copy; {new Date().getFullYear()} Veena Musician. All rights reserved.</p>

                        <div className="flex items-center gap-4">
                            {socialLinks.youtube && (
                                <a
                                    href={socialLinks.youtube}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gold-400 hover:text-gold-300 transition-colors duration-300 hover:scale-110 transform"
                                    aria-label="YouTube"
                                >
                                    <i className="fab fa-youtube text-xl"></i>
                                </a>
                            )}
                            {socialLinks.instagram && (
                                <a
                                    href={socialLinks.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gold-400 hover:text-gold-300 transition-colors duration-300 hover:scale-110 transform"
                                    aria-label="Instagram"
                                >
                                    <i className="fab fa-instagram text-xl"></i>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
