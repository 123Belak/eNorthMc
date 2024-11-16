import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Server, Shield, Users, Menu, X } from 'lucide-react';

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Server className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-white">eNorth Hosting</span>
            </Link>
            
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <Link to="/java-hosting" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Java Hosting
                </Link>
                <Link to="/bedrock-hosting" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Bedrock Hosting
                </Link>
                <Link to="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  <Link to="/client-area" className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    <Users className="h-5 w-5 mr-1" />
                    Client Area
                  </Link>
                  <button
                    onClick={logout}
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
              )}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/java-hosting" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Java Hosting
            </Link>
            <Link to="/bedrock-hosting" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Bedrock Hosting
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
            {user ? (
              <>
                <Link to="/client-area" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Client Area
                </Link>
                <button
                  onClick={logout}
                  className="w-full text-left text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}