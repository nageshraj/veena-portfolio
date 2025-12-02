import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

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
        <div className="min-h-screen bg-gradient-to-b from-creme-100 to-creme-200 pt-32 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-maroon-900 mb-4">
                        Frequently Asked Questions
                    </h1>
                    <div className="h-1 w-24 bg-gold-500 mx-auto mb-6"></div>
                    <p className="text-lg text-maroon-700 max-w-2xl mx-auto">
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
                            className="bg-white rounded-lg shadow-md border border-gold-200/30 overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-creme-50 transition-colors"
                            >
                                <span className="text-lg font-medium text-maroon-900 pr-4">
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
                                        <div className="px-6 pb-5 pt-2 text-maroon-700 leading-relaxed border-t border-gold-100">
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
                    className="mt-12 text-center bg-maroon-900 rounded-lg p-8 shadow-lg"
                >
                    <h3 className="text-2xl font-serif text-creme-100 mb-3">
                        Still have questions?
                    </h3>
                    <p className="text-creme-200 mb-6">
                        Feel free to reach out, and I'll be happy to help
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-gold-500 hover:bg-gold-600 text-maroon-900 px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg"
                    >
                        Contact Me
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default FAQ;
