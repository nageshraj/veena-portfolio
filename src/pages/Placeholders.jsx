import React from 'react';
import { motion } from 'framer-motion';
import { Award, Music, Users, Calendar, Star, BookOpen } from 'lucide-react';

export const About = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="max-w-6xl mx-auto px-4 py-12"
    >
        <div className="text-center mb-16">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl md:text-3xl font-serif font-bold mb-4 text-maroon-900"
            >
                About the Artist
            </motion.h1>
            <div className="h-1 w-24 bg-gold-500 mx-auto mb-4"></div>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-maroon-700 text-sm md:text-base max-w-2xl mx-auto"
            >
                A journey through the divine world of classical Indian music
            </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
            >
                <div className="bg-gradient-to-br from-maroon-800 to-maroon-900 rounded-2xl h-96 flex items-center justify-center shadow-xl border border-maroon-700">
                    <Music className="w-32 h-32 text-gold-500 opacity-50" />
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col justify-center"
            >
                <h2 className="text-xl md:text-2xl font-serif font-bold text-maroon-900 mb-4">Musical Journey</h2>
                <p className="text-sm md:text-base text-maroon-800 mb-3 leading-relaxed">
                    With over 25 years of dedicated practice and performance, our artist has established themselves as a distinguished practitioner of the Saraswati Veena and Carnatic vocal music. Their journey began at the age of 5 under the tutelage of renowned gurus in Chennai.
                </p>
                <p className="text-sm md:text-base text-maroon-800 mb-3 leading-relaxed">
                    Having performed at prestigious venues across India and internationally, they bring a unique blend of traditional authenticity and contemporary expression to their art. Their performances are known for their emotional depth and technical precision.
                </p>
                <p className="text-sm md:text-base text-maroon-800 leading-relaxed">
                    Beyond performance, they are deeply committed to preserving and propagating this ancient art form through dedicated teaching and mentorship.
                </p>
            </motion.div>
        </div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
        >
            <div className="bg-maroon-900 rounded-xl p-6 border border-maroon-800 shadow-lg text-creme-100">
                <Award className="w-12 h-12 text-gold-500 mb-4" />
                <h3 className="text-xl font-serif font-bold text-gold-400 mb-2">Achievements</h3>
                <ul className="text-creme-200 space-y-2">
                    <li>• Sangeet Visharad (Honors)</li>
                    <li>• National Award Winner</li>
                    <li>• Featured Artist at Music Academy</li>
                    <li>• 500+ Concerts Worldwide</li>
                </ul>
            </div>

            <div className="bg-maroon-900 rounded-xl p-6 border border-maroon-800 shadow-lg text-creme-100">
                <Users className="w-12 h-12 text-gold-500 mb-4" />
                <h3 className="text-xl font-serif font-bold text-gold-400 mb-2">Teaching Legacy</h3>
                <ul className="text-creme-200 space-y-2">
                    <li>• 200+ Students Trained</li>
                    <li>• 15 Years Teaching Experience</li>
                    <li>• Online & In-Person Classes</li>
                    <li>• Beginner to Advanced Levels</li>
                </ul>
            </div>

            <div className="bg-maroon-900 rounded-xl p-6 border border-maroon-800 shadow-lg text-creme-100">
                <Star className="w-12 h-12 text-gold-500 mb-4" />
                <h3 className="text-xl font-serif font-bold text-gold-400 mb-2">Specializations</h3>
                <ul className="text-creme-200 space-y-2">
                    <li>• Saraswati Veena</li>
                    <li>• Carnatic Vocal</li>
                    <li>• Raga Alapana</li>
                    <li>• Composition & Improvisation</li>
                </ul>
            </div>
        </motion.div>
    </motion.div>
);

export const Vocal = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="max-w-6xl mx-auto px-4 py-12"
    >
        <div className="text-center mb-16">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl md:text-3xl font-serif font-bold mb-4 text-maroon-900"
            >
                Carnatic Vocal Music
            </motion.h1>
            <div className="h-1 w-24 bg-gold-500 mx-auto mb-4"></div>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-maroon-700 text-sm md:text-base max-w-2xl mx-auto"
            >
                Discover the beauty of South Indian classical vocal tradition
            </motion.p>
        </div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-maroon-900 rounded-2xl p-8 mb-12 border border-maroon-800 shadow-xl text-creme-100"
        >
            <h2 className="text-3xl font-serif font-bold text-gold-500 mb-6">Training Programs</h2>
            <p className="text-creme-200 mb-8 leading-relaxed">
                Our vocal music program offers comprehensive training in Carnatic classical music, covering fundamental concepts to advanced performance techniques. Each student receives personalized attention and a curriculum tailored to their learning pace and goals.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-semibold text-gold-400 mb-4 flex items-center">
                        <BookOpen className="w-6 h-6 mr-2" />
                        Curriculum Highlights
                    </h3>
                    <ul className="text-creme-200 space-y-3">
                        <li className="flex items-start">
                            <span className="text-gold-500 mr-2">•</span>
                            <span>Sarali Varisai & Janta Varisai (Basic exercises)</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-gold-500 mr-2">•</span>
                            <span>Geetham, Swarajathi, and Varnam</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-gold-500 mr-2">•</span>
                            <span>Krithis from various composers</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-gold-500 mr-2">•</span>
                            <span>Raga Alapana and Neraval</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-gold-500 mr-2">•</span>
                            <span>Kalpana Swaram (Improvisation)</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-gold-500 mr-2">•</span>
                            <span>Bhajans and Devotional songs</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-gold-400 mb-4 flex items-center">
                        <Calendar className="w-6 h-6 mr-2" />
                        Class Structure
                    </h3>
                    <ul className="text-creme-200 space-y-3">
                        <li className="flex items-start">
                            <span className="text-gold-500 mr-2">•</span>
                            <span>One-on-one sessions (60 minutes)</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-gold-500 mr-2">•</span>
                            <span>Group classes available</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-gold-500 mr-2">•</span>
                            <span>Flexible scheduling (weekdays/weekends)</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-gold-500 mr-2">•</span>
                            <span>Online and in-person options</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-gold-500 mr-2">•</span>
                            <span>Monthly progress assessments</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-gold-500 mr-2">•</span>
                            <span>Annual student concerts</span>
                        </li>
                    </ul>
                </div>
            </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-creme-200 rounded-2xl p-8 border border-maroon-200 shadow-md"
        >
            <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6 text-center">Student Testimonials</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-creme-100 rounded-xl p-6 border border-maroon-100 shadow-sm">
                    <p className="text-maroon-800 italic mb-4">
                        "The depth of knowledge and patience in teaching is remarkable. I've grown tremendously as a vocalist in just one year."
                    </p>
                    <p className="text-maroon-600 font-semibold">- Priya S., Advanced Student</p>
                </div>
                <div className="bg-creme-100 rounded-xl p-6 border border-maroon-100 shadow-sm">
                    <p className="text-maroon-800 italic mb-4">
                        "Perfect blend of traditional teaching methods with modern accessibility. The online classes are just as effective!"
                    </p>
                    <p className="text-maroon-600 font-semibold">- Rajesh K., Intermediate Student</p>
                </div>
            </div>
        </motion.div>
    </motion.div>
);

export const Veena = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="max-w-6xl mx-auto px-4 py-12"
    >
        <div className="text-center mb-16">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl md:text-3xl font-serif font-bold mb-4 text-maroon-900"
            >
                Saraswati Veena Classes
            </motion.h1>
            <div className="h-1 w-24 bg-gold-500 mx-auto mb-4"></div>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-maroon-700 text-sm md:text-base max-w-2xl mx-auto"
            >
                Master the divine instrument of Goddess Saraswati
            </motion.p>
        </div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-maroon-900 rounded-2xl p-8 mb-12 border border-maroon-800 shadow-xl text-creme-100"
        >
            <h2 className="text-3xl font-serif font-bold text-gold-500 mb-6">About the Veena</h2>
            <p className="text-creme-200 mb-6 leading-relaxed">
                The Saraswati Veena is one of the most ancient and revered instruments in Indian classical music. Known for its rich, resonant tone and intricate playing technique, the Veena is considered the queen of string instruments. Our classes offer a structured approach to mastering this beautiful instrument.
            </p>
            <p className="text-creme-200 leading-relaxed">
                Whether you're a complete beginner or looking to refine your skills, our comprehensive program guides you through every aspect of Veena playing, from basic finger positioning to advanced raga elaboration.
            </p>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
        >
            <div className="bg-creme-200 rounded-xl p-6 border border-maroon-200 shadow-md">
                <h3 className="text-xl font-bold text-maroon-900 mb-4">Beginner Level</h3>
                <ul className="text-maroon-800 space-y-2 text-sm">
                    <li>• Instrument basics & posture</li>
                    <li>• Finger placement techniques</li>
                    <li>• Sarali Varisai exercises</li>
                    <li>• Simple Geetham compositions</li>
                    <li>• Basic raga introduction</li>
                    <li>• Duration: 6-12 months</li>
                </ul>
            </div>

            <div className="bg-creme-200 rounded-xl p-6 border border-maroon-200 shadow-md">
                <h3 className="text-xl font-bold text-maroon-900 mb-4">Intermediate Level</h3>
                <ul className="text-maroon-800 space-y-2 text-sm">
                    <li>• Advanced finger techniques</li>
                    <li>• Varnam mastery</li>
                    <li>• Multiple raga exploration</li>
                    <li>• Krithis from great composers</li>
                    <li>• Basic improvisation</li>
                    <li>• Duration: 12-24 months</li>
                </ul>
            </div>

            <div className="bg-creme-200 rounded-xl p-6 border border-maroon-200 shadow-md">
                <h3 className="text-xl font-bold text-maroon-900 mb-4">Advanced Level</h3>
                <ul className="text-maroon-800 space-y-2 text-sm">
                    <li>• Concert repertoire building</li>
                    <li>• Raga Alapana mastery</li>
                    <li>• Tanam & Pallavi</li>
                    <li>• Advanced improvisation</li>
                    <li>• Performance preparation</li>
                    <li>• Duration: Ongoing</li>
                </ul>
            </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-maroon-900 rounded-2xl p-8 border border-maroon-800 shadow-xl text-creme-100"
        >
            <h2 className="text-2xl font-serif font-bold text-gold-500 mb-6">Class Information</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-lg font-semibold text-gold-400 mb-4">Learning Methodology</h3>
                    <ul className="text-creme-200 space-y-3">
                        <li className="flex items-start">
                            <span className="text-gold-500 mr-2">✓</span>
                            <span>Traditional guru-shishya parampara approach</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-gold-500 mr-2">✓</span>
                            <span>Personalized lesson plans for each student</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-gold-500 mr-2">✓</span>
                            <span>Regular practice assignments and feedback</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-gold-500 mr-2">✓</span>
                            <span>Audio/video recordings for practice</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-gold-500 mr-2">✓</span>
                            <span>Performance opportunities for students</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-gold-400 mb-4">Class Formats</h3>
                    <ul className="text-creme-200 space-y-3">
                        <li className="flex items-start">
                            <span className="text-gold-500 mr-2">✓</span>
                            <span><strong>In-Person:</strong> Chennai studio location</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-gold-500 mr-2">✓</span>
                            <span><strong>Online:</strong> Live video sessions via Zoom</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-gold-500 mr-2">✓</span>
                            <span><strong>Duration:</strong> 60-minute sessions</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-gold-500 mr-2">✓</span>
                            <span><strong>Frequency:</strong> Weekly or bi-weekly</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-gold-500 mr-2">✓</span>
                            <span><strong>Timing:</strong> Flexible scheduling available</span>
                        </li>
                    </ul>
                </div>
            </div>
        </motion.div>
    </motion.div>
);
