import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const key = location.pathname;

  return (
    <div className="container">
        <Routes location={location} key={key}>
          <Route index element={<h1>Home</h1>} />
          <Route path="/work" element={<h1>Work</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
        </Routes>
    </div>
  );
}

export default App;
