import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import JavaHosting from './pages/JavaHosting';
import BedrockHosting from './pages/BedrockHosting';
import ClientArea from './pages/ClientArea';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import { AuthProvider } from './contexts/AuthContext';
import Footer from './components/Footer';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-900 text-white flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/java-hosting" element={<JavaHosting />} />
              <Route path="/bedrock-hosting" element={<BedrockHosting />} />
              <Route path="/client-area" element={<ClientArea />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/checkout/:planId" element={<Checkout />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;