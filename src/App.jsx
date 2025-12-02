import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Music from './pages/Music';
import Press from './pages/Press';
import FAQ from './pages/FAQ';
import { About, Vocal, Veena } from './pages/Placeholders';

function App() {
  const location = useLocation();

  return (
    <AuthProvider>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/music" element={<Music />} />
            <Route path="/press" element={<Press />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/vocal" element={<Vocal />} />
            <Route path="/veena" element={<Veena />} />

            <Route path="/login" element={<Login />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AnimatePresence>
      </Layout>
    </AuthProvider>
  );
}

export default App;
