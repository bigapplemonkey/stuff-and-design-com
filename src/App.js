import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './layouts/Home';
import Navigation from './components/Navigation';
import { useContext } from 'react';
import { DataContext } from './context/DataContext';
import { motion } from 'framer-motion';

function App() {
  const location = useLocation();
  const key = location.pathname;
  const { loading } = useContext(DataContext);

  if (loading) {
    return null;
  }

  return (
    <motion.div
      className="container full-height"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <Navigation />
      <Routes location={location} key={key}>
        <Route index element={<Home />} />
        <Route path="/work" element={<h1>Work</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
    </motion.div>
  );
}

export default App;
