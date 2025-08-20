import React from 'react';
import { Link } from 'react-router-dom';
import { Battery } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Help & Support */}
          <div>
            <h3 className="text-green-400 font-semibold mb-4">Hjälp och support</h3>
            <ul className="space-y-2">
              <li><Link to="/support" className="text-gray-200 hover:text-green-400 transition-colors">Vanliga frågor</Link></li>
              <li><Link to="/contact" className="text-gray-200 hover:text-green-400 transition-colors">Kontakta oss</Link></li>
              <li><Link to="/support" className="text-gray-200 hover:text-green-400 transition-colors">Kundtjänst</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-green-400 font-semibold mb-4">Om oss</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-200 hover:text-green-400 transition-colors">Vår vision</Link></li>
              <li><Link to="/about" className="text-gray-200 hover:text-green-400 transition-colors">Varför välja oss</Link></li>
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h3 className="text-green-400 font-semibold mb-4">Mitt konto</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-200 hover:text-green-400 transition-colors">Personlig information</a></li>
              <li><a href="#" className="text-gray-200 hover:text-green-400 transition-colors">Orderhistorik</a></li>
              <li><a href="#" className="text-gray-200 hover:text-green-400 transition-colors">Adress</a></li>
              <li><a href="#" className="text-gray-200 hover:text-green-400 transition-colors">Lösenord</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-green-400 font-semibold mb-4">Kontakta oss</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-200 hover:text-green-400 transition-colors">Kontaktformulär</Link></li>
              <li><a href="tel:+46777777777" className="text-gray-200 hover:text-green-400 transition-colors">Telefon</a></li>
              <li><a href="mailto:info@akulab.se" className="text-gray-200 hover:text-green-400 transition-colors">E-post</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="bg-gradient-to-r from-blue-400 to-green-400 p-2 rounded-lg">
              <Battery className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="text-lg font-bold text-white">AKULAB</span>
              <p className="text-xs text-gray-300 -mt-1">CHARGING SOLUTIONS</p>
            </div>
          </div>
          <p className="text-gray-300 text-sm">© 2025 Akulab AB</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;