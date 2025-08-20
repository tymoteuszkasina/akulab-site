import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X, Battery } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Produkter', href: '/products' },
    { name: 'Hitta batteri via reg nr', href: '/#battery-finder' },
  ];

  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-400 to-green-400 p-2 rounded-lg">
              <Battery className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-white">AKULAB</span>
              <p className="text-xs text-gray-300 -mt-1">CHARGING SOLUTIONS</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-200 hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Search className="h-5 w-5 text-gray-300 hover:text-green-400 cursor-pointer transition-colors" />
            <User className="h-5 w-5 text-gray-300 hover:text-green-400 cursor-pointer transition-colors" />
            <ShoppingCart className="h-5 w-5 text-gray-300 hover:text-green-400 cursor-pointer transition-colors" />
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-200 hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;