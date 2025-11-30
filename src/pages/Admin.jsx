import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Trash2, LogOut, Image as ImageIcon } from 'lucide-react';

const Admin = () => {
    const { logout } = useAuth();
    const [images, setImages] = useState([]);
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        const storedImages = JSON.parse(localStorage.getItem('gallery_images') || '[]');
        setImages(storedImages);
    }, []);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (file.size > 5000000) { // 5MB limit
            alert('File is too large. Please choose an image under 5MB.');
            return;
        }

        setUploading(true);
        const reader = new FileReader();
        reader.onloadend = () => {
            const newImage = {
                id: Date.now(),
                url: reader.result,
                name: file.name,
                date: new Date().toLocaleDateString()
            };

            const updatedImages = [newImage, ...images];
            setImages(updatedImages);
            localStorage.setItem('gallery_images', JSON.stringify(updatedImages));
            setUploading(false);
        };
        reader.readAsDataURL(file);
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this image?')) {
            const updatedImages = images.filter(img => img.id !== id);
            setImages(updatedImages);
            localStorage.setItem('gallery_images', JSON.stringify(updatedImages));
        }
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
                <button
                    onClick={logout}
                    className="flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors text-neutral-300"
                >
                    <LogOut size={18} />
                    Logout
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Upload Section */}
                <div className="md:col-span-1">
                    <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 sticky top-24">
                        <h2 className="text-xl font-semibold mb-4 text-amber-500 flex items-center gap-2">
                            <Upload size={20} />
                            Upload Image
                        </h2>

                        <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-neutral-700 border-dashed rounded-lg cursor-pointer bg-neutral-800/50 hover:bg-neutral-800 transition-colors">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <ImageIcon className="w-10 h-10 mb-3 text-neutral-400" />
                                <p className="mb-2 text-sm text-neutral-400"><span className="font-semibold">Click to upload</span></p>
                                <p className="text-xs text-neutral-500">PNG, JPG or GIF (MAX. 5MB)</p>
                            </div>
                            <input
                                type="file"
                                className="hidden"
                                accept="image/*"
                                onChange={handleImageUpload}
                                disabled={uploading}
                            />
                        </label>
                        {uploading && <p className="text-center mt-2 text-amber-500 animate-pulse">Processing...</p>}
                    </div>
                </div>

                {/* Gallery Preview Section */}
                <div className="md:col-span-2">
                    <h2 className="text-xl font-semibold mb-4 text-white">Gallery Management ({images.length})</h2>

                    <div className="grid grid-cols-2 gap-4">
                        <AnimatePresence mode="popLayout">
                            {images.map((img) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    key={img.id}
                                    className="group relative aspect-video bg-neutral-800 rounded-lg overflow-hidden border border-neutral-800"
                                >
                                    <img
                                        src={img.url}
                                        alt={img.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                        <button
                                            onClick={() => handleDelete(img.id)}
                                            className="p-2 bg-red-500/20 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-colors"
                                            title="Delete"
                                        >
                                            <Trash2 size={20} />
                                        </button>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/50 text-xs text-neutral-300 truncate">
                                        {img.name}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {images.length === 0 && (
                            <div className="col-span-2 text-center py-12 text-neutral-500 bg-neutral-900/50 rounded-lg border border-neutral-800 border-dashed">
                                No images uploaded yet.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
