import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/admin';

    const handleSubmit = (e) => {
        e.preventDefault();
        if (login(username, password)) {
            navigate(from, { replace: true });
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-neutral-900 p-8 rounded-2xl shadow-2xl border border-neutral-800 w-full max-w-md"
            >
                <div className="flex justify-center mb-6">
                    <div className="p-3 bg-amber-500/10 rounded-full">
                        <Lock className="w-8 h-8 text-amber-500" />
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-center mb-6 text-white">Admin Access</h2>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-2 rounded-lg mb-4 text-sm text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-neutral-400 mb-1">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                            placeholder="Enter username"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-neutral-400 mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                            placeholder="Enter password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 rounded-lg transition-colors mt-4"
                    >
                        Sign In
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default Login;
