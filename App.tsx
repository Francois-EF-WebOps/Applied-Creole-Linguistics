import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Readme from './pages/Readme';
import Foundation from './pages/Foundation';
import Hierarchy from './pages/Hierarchy';
import Radio from './pages/Radio';
import Phonotics from './pages/Phonotics';
import Contribution from './pages/Contribution';
import Seo from './pages/Seo';
import Roadmap from './pages/Roadmap';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Readme />} />
          <Route path="/foundation" element={<Foundation />} />
          <Route path="/hierarchy" element={<Hierarchy />} />
          <Route path="/radio" element={<Radio />} />
          <Route path="/phonotics" element={<Phonotics />} />
          <Route path="/contribution" element={<Contribution />} />
          <Route path="/seo" element={<Seo />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;