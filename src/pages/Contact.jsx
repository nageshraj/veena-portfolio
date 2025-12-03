import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Form is valid - show success message
            setSubmitted(true);
            // Reset form after 3 seconds
            setTimeout(() => {
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
                setSubmitted(false);
            }, 3000);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-4xl mx-auto px-4 py-12"
        >
            <h1 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-center text-maroon-900">
                Get in Touch
            </h1>
            <p className="text-maroon-700 text-center mb-8 text-sm md:text-base">
                Interested in concerts, classes, or collaborations? Send us a message.
            </p>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-maroon-900 rounded-2xl p-8 shadow-2xl border border-maroon-800"
            >
                {submitted ? (
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-center py-12"
                    >
                        <div className="w-20 h-20 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-maroon-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-lg md:text-xl font-serif font-bold text-gold-500 mb-2">Thank You!</h3>
                        <p className="text-sm md:text-base text-creme-200">Your message has been sent successfully. We'll get back to you soon.</p>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-creme-200 mb-2">
                                Name <span className="text-gold-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 bg-creme-100 border ${errors.name ? 'border-red-500' : 'border-maroon-200'
                                    } rounded-lg text-maroon-900 placeholder-maroon-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all`}
                                placeholder="Your full name"
                            />
                            {errors.name && (
                                <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                            )}
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-creme-200 mb-2">
                                Email <span className="text-gold-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 bg-creme-100 border ${errors.email ? 'border-red-500' : 'border-maroon-200'
                                    } rounded-lg text-maroon-900 placeholder-maroon-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all`}
                                placeholder="your.email@example.com"
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                            )}
                        </div>

                        {/* Phone Field */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-creme-200 mb-2">
                                Phone <span className="text-creme-400 text-xs">(optional)</span>
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-creme-100 border border-maroon-200 rounded-lg text-maroon-900 placeholder-maroon-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                                placeholder="+1 (555) 123-4567"
                            />
                        </div>

                        {/* Message Field */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-creme-200 mb-2">
                                Message <span className="text-gold-500">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={6}
                                className={`w-full px-4 py-3 bg-creme-100 border ${errors.message ? 'border-red-500' : 'border-maroon-200'
                                    } rounded-lg text-maroon-900 placeholder-maroon-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all resize-none`}
                                placeholder="Tell us about your interest in concerts, classes, or collaborations..."
                            />
                            {errors.message && (
                                <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-maroon-900 px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-[1.02] shadow-lg shadow-gold-900/20 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 focus:ring-offset-maroon-900"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                )}
            </motion.div>
        </motion.div>
    );
};

export default Contact;
