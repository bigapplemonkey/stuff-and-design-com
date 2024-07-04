import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './layouts/Home';
import Navigation from './components/Navigation';
import { useContext, useState } from 'react';
import { DataContext } from './context/DataContext';
import { motion } from 'framer-motion';
import AppLoader from './components/animations/AppLoader';
import { ANIMATION } from './config';

function App() {
  const location = useLocation();
  const key = location.pathname;
  const { loading } = useContext(DataContext);
  const [loadingComplete, setLoadingComplete] = useState(false);

  const { CUBIC_BEZIER } = ANIMATION;

  if (loading) {
    return null;
  }

  return (
    <>
      {!loadingComplete && (
        <AppLoader setLoadingComplete={setLoadingComplete} />
      )}
      <motion.div
        className="container full-height"
        initial={{ opacity: 0 }}
        animate={{ opacity: loadingComplete ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: CUBIC_BEZIER }}
      >
        <Navigation />
        <Routes location={location} key={key}>
          <Route index element={<Home />} />
          <Route path="/work" element={<h1>Work</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
        </Routes>
      </motion.div>
    </>
  );
}

export default App;
