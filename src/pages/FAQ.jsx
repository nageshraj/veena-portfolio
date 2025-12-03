import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import RangoliPattern from '../components/RangoliPattern';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is the Saraswati Veena?",
            answer: "The Saraswati Veena is a traditional Indian string instrument, considered one of the oldest and most revered instruments in Carnatic music. It has 7 strings and produces a rich, resonant sound that is deeply connected to classical Indian musical traditions."
        },
        {
            question: "Do you offer private lessons?",
            answer: "Yes, I offer private lessons for both Veena and vocal music. Lessons are available for students of all levels, from beginners to advanced. Please contact me through the Contact page for more information about scheduling and rates."
        },
        {
            question: "What styles of music do you perform?",
            answer: "I specialize in Carnatic classical music, performing traditional compositions as well as devotional pieces. My repertoire includes kritis, varnams, and bhajans, showcasing both instrumental Veena performances and vocal renditions."
        },
        {
            question: "Are you available for concerts and events?",
            answer: "Yes, I am available for concerts, cultural events, weddings, and private functions. I can perform solo or with accompanying artists. Please reach out through the Contact page to discuss your event requirements."
        },
        {
            question: "How long have you been performing?",
            answer: "I have been training and performing in Carnatic music for many years, studying under renowned gurus and performing at various prestigious venues and festivals. My journey with the Veena and vocal music has been a lifelong dedication to preserving and sharing this beautiful art form."
        },
        {
            question: "Can I purchase recordings of your performances?",
            answer: "Yes, recordings and albums are available. You can find some of my performances on YouTube and other streaming platforms. For physical copies or special recordings, please contact me directly."
        },
        {
            question: "Do you collaborate with other artists?",
            answer: "Absolutely! I enjoy collaborating with other musicians, both within the Carnatic tradition and across different musical genres. If you're interested in a collaboration, please get in touch through the Contact page."
        },
        {
            question: "What should I expect from a Veena lesson?",
            answer: "Veena lessons cover fundamental techniques including finger positioning, string plucking, and fret work. Students will learn traditional compositions, develop their understanding of ragas and talas, and gradually build their repertoire. Each lesson is tailored to the student's level and goals."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen silk-gradient py-12 relative overflow-hidden">
            {/* Decorative Rangoli Pattern Background */}
            <RangoliPattern className="text-gold-600" opacity={0.03} />
            
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-2xl md:text-3xl font-serif font-bold text-maroon-900 mb-4">
                        Frequently Asked Questions
                    </h1>
                    <div className="h-1 w-24 bg-gold-500 mx-auto mb-4"></div>
                    <p className="text-sm md:text-base text-maroon-700 max-w-2xl mx-auto">
                        Find answers to common questions about performances, lessons, and the Saraswati Veena
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="card-elegant bg-white/95 backdrop-blur-sm border border-gold-300/40 overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-4 py-3 md:px-6 md:py-4 flex items-center justify-between text-left hover:bg-creme-50 transition-all duration-300 gold-shimmer-hover"
                            >
                                <span className="text-sm md:text-base font-medium text-maroon-900 pr-4">
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex-shrink-0"
                                >
                                    <ChevronDown className="h-5 w-5 text-gold-600" />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-4 md:px-6 pb-4 pt-2 text-sm md:text-base text-maroon-700 leading-relaxed border-t border-gold-100">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-12 text-center silk-gradient-dark card-elegant p-8 shadow-2xl border border-gold-500/20 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-peacock-700/20 to-transparent pointer-events-none"></div>
                    <div className="relative z-10">
                    <h3 className="text-lg md:text-xl font-serif text-creme-100 mb-2">
                        Still have questions?
                    </h3>
                    <p className="text-sm md:text-base text-creme-200 mb-4">
                        Feel free to reach out, and I'll be happy to help
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-gold-500 hover:bg-gold-600 text-maroon-900 px-6 py-2 text-sm md:text-base rounded-full font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-gold-500/50"
                    >
                        Contact Me
                    </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default FAQ;
