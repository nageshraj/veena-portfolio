import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import { playVeenaSoundWithMuteCheck as playVeenaSound } from '../utils/veenaSound';
import config from '../config';

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
            <footer className="bg-maroon-900 text-creme-200 py-12 mt-20 border-t border-maroon-800">
                <div className="max-w-7xl mx-auto px-4 text-center text-sm">
                    <p className="font-serif text-lg mb-2 text-gold-500">Saraswati Veena</p>
                    &copy; {new Date().getFullYear()} Veena Musician. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Layout;
