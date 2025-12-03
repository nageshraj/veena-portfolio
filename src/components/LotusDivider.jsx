import React from 'react';
import { motion } from 'framer-motion';

const LotusDivider = ({ className = '' }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8 }}
            className={`flex items-center justify-center my-8 ${className}`}
        >
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-50"></div>
            <div className="mx-4 text-gold-500 text-2xl">❋</div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-50"></div>
        </motion.div>
    );
};

export default LotusDivider;
