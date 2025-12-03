import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Newspaper } from 'lucide-react';
import { pressArticles } from '../config';

const Press = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-creme-100 to-creme-200 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Page Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-2xl md:text-3xl font-serif font-bold text-maroon-900 mb-4">
                        Press & Media
                    </h1>
                    <div className="h-1 w-24 bg-gold-500 mx-auto mb-4"></div>
                    <p className="text-sm md:text-base text-maroon-700 max-w-2xl mx-auto">
                        Featured articles and media coverage
                    </p>
                </motion.div>

                {/* Articles Grid */}
                {pressArticles && pressArticles.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pressArticles.map((article, index) => (
                            <motion.a
                                key={index}
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group bg-white rounded-xl shadow-lg overflow-hidden border border-gold-500/20 hover:shadow-2xl hover:border-gold-500/40 transition-all duration-300 transform hover:-translate-y-2"
                            >
                                {/* Article Image (if available) */}
                                {article.imageUrl && (
                                    <div className="relative h-48 bg-maroon-900/10 overflow-hidden">
                                        <img
                                            src={article.imageUrl}
                                            alt={article.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                )}

                                {/* Article Content */}
                                <div className="p-6">
                                    {/* Publication & Date */}
                                    <div className="flex items-center justify-between mb-3 text-sm">
                                        <div className="flex items-center gap-2 text-maroon-700">
                                            <Newspaper size={16} />
                                            <span className="font-medium">{article.publication}</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-maroon-600">
                                            <Calendar size={14} />
                                            <span>{new Date(article.date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            })}</span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-serif font-bold text-maroon-900 mb-3 group-hover:text-gold-700 transition-colors line-clamp-2">
                                        {article.title}
                                    </h3>

                                    {/* Excerpt */}
                                    {article.excerpt && (
                                        <p className="text-maroon-700 text-sm mb-4 line-clamp-3">
                                            {article.excerpt}
                                        </p>
                                    )}

                                    {/* Read More Link */}
                                    <div className="flex items-center gap-2 text-gold-600 font-medium group-hover:text-gold-700 transition-colors">
                                        <span>Read Article</span>
                                        <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <Newspaper size={64} className="mx-auto text-maroon-300 mb-4" />
                        <p className="text-xl text-maroon-700">No press articles available at the moment.</p>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Press;
