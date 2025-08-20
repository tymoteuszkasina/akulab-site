import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Car, Bike, Zap, Sun, CheckCircle } from 'lucide-react';

const Home = () => {
  const [registrationNumber, setRegistrationNumber] = useState('');

  const handleBatterySearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle battery search logic here
    console.log('Searching for battery with registration:', registrationNumber);
  };

  const productCategories = [
    {
      title: 'Bilbatterier',
      subtitle: 'Från 387 kr',
      description: 'Lågg i varukorg',
      icon: Car,
      image: 'https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'MC-batterier',
      subtitle: 'Från 367 kr',
      description: 'Lågg i varukorg',
      icon: Bike,
      image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Stationära batterier',
      subtitle: 'Från 367 kr',
      description: 'Lågg i varukorg',
      icon: Zap,
      image: 'https://images.pexels.com/photos/4254881/pexels-photo-4254881.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Solcellsbatterier',
      subtitle: 'Från 367 kr',
      description: 'Lågg i varukorg',
      icon: Sun,
      image: 'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const features = [
    'Snabb leverans i hela Sverige',
    'Kända märken & garantier',
    'Klarna, swish & kortbetalning'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                <span className="text-green-400">Batterier</span> från ledande varumärken –{' '}
                <span className="text-green-400">direkt till din dörr</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Bilbatterier, MC-batterier, stationära & solcellsbatterier från branschledande leverantörer
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg transition-colors text-center border border-gray-600"
                >
                  Se våra produkter
                </Link>
                <button className="bg-green-500 hover:bg-green-400 text-white px-8 py-3 rounded-lg transition-colors font-semibold">
                  Sök
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Car Battery"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Battery Finder Section */}
      <section id="battery-finder" className="py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-700 rounded-lg p-8 border border-gray-600">
            <h2 className="text-2xl font-bold text-white mb-4">Sök batteri via registreringsnummer</h2>
            <form onSubmit={handleBatterySearch} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Ange ditt registreringsnummer"
                  value={registrationNumber}
                  onChange={(e) => setRegistrationNumber(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-green-400"
                />
                <p className="text-gray-300 text-sm mt-2">
                  Vi hittar batteri för din bil, motorcykel eller maskin på några sekunder
                </p>
              </div>
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-400 text-white px-8 py-3 rounded-lg transition-colors font-semibold flex items-center gap-2"
              >
                <Search className="h-5 w-5" />
                Sök
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Produkter</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg border border-gray-600 overflow-hidden hover:border-green-400 transition-colors group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <category.icon className="h-6 w-6 text-green-400 mr-2" />
                    <h3 className="text-xl font-semibold text-green-400">{category.title}</h3>
                  </div>
                  <p className="text-gray-200 mb-2">{category.subtitle}</p>
                  <p className="text-gray-300 text-sm">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Om oss</h2>
              <p className="text-gray-200 mb-6 leading-relaxed">
                AKULAB är en ny återförsäljare i Sverige som erbjuder högkvalitativa batterier från välkända märken. 
                Vi samarbetar med ledande leverantörer som Mrakumulator, E-moto och Akulaz för att erbjuda det 
                bästa urvalet på marknaden.
              </p>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-200">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/4254881/pexels-photo-4254881.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Battery Technology"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;