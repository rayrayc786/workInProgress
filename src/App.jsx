import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import PropertiesPage from './pages/PropertiesPage/PropertiesPage';
import AgentsPage from './pages/AgentsPage/AgentsPage';
import BlogPage from './pages/BlogPage/BlogPage';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
import LoginPage from './pages/LoginPage/LoginPage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Login page without Layout */}
        <Route path="/login" element={<LoginPage />} />

        {/* All other pages inside the Layout */}
        <Route
          path="*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/properties" element={<PropertiesPage />} />
                <Route path="/agents" element={<AgentsPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/contact-us" element={<ContactUsPage />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
