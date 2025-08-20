import React from 'react';
import { Car, Bike, Zap, Sun } from 'lucide-react';

const Products = () => {
  const productCategories = [
    {
      title: 'Bilbatterier',
      subtitle: 'Från 387 kr',
      description: 'Lågg i varukorg',
      icon: Car,
      image: 'https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=400',
      products: ['Startbatterier', 'AGM-batterier', 'EFB-batterier', 'Gelé-batterier']
    },
    {
      title: 'MC-batterier',
      subtitle: 'Från 367 kr',
      description: 'Lågg i varukorg',
      icon: Bike,
      image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=400',
      products: ['Vätskebatterier', 'AGM-batterier', 'Litium-batterier', 'Underhållsfria batterier']
    },
    {
      title: 'Stationära batterier',
      subtitle: 'Från 367 kr',
      description: 'Lågg i varukorg',
      icon: Zap,
      image: 'https://images.pexels.com/photos/4254881/pexels-photo-4254881.jpeg?auto=compress&cs=tinysrgb&w=400',
      products: ['UPS-batterier', 'Reservkraftsbatterier', 'Telekom-batterier', 'Industribatterier']
    },
    {
      title: 'Solcellsbatterier',
      subtitle: 'Från 367 kr',
      description: 'Lågg i varukorg',
      icon: Sun,
      image: 'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=400',
      products: ['Djurcykel-batterier', 'AGM-batterier', 'Litium-batterier', 'VRLA-batterier']
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Produkter</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Vi erbjuder ett komplett sortiment av batterier för alla dina behov. 
            Från bilbatterier till solcellslösningar - vi har det du behöver.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {productCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg border border-gray-600 overflow-hidden hover:border-green-400 transition-colors group"
            >
              <div className="flex">
                <div className="flex-1 p-8">
                  <div className="flex items-center mb-4">
                    <category.icon className="h-8 w-8 text-green-400 mr-3" />
                    <h2 className="text-2xl font-bold text-green-400">{category.title}</h2>
                  </div>
                  <p className="text-lg text-gray-200 mb-2">{category.subtitle}</p>
                  <p className="text-gray-300 mb-6">{category.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
                      Produkttyper:
                    </h3>
                    <ul className="space-y-2">
                      {category.products.map((product, idx) => (
                        <li key={idx} className="text-gray-200 text-sm">
                          • {product}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="bg-green-500 hover:bg-green-400 text-white px-6 py-2 rounded-lg transition-colors font-semibold">
                    Se alla produkter
                  </button>
                </div>
                
                <div className="w-48 h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="mt-16 bg-gray-800 rounded-lg p-8 border border-gray-600">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Varför välja våra produkter?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Hög kvalitet</h3>
              <p className="text-gray-300">Endast batterier från ledande tillverkare med dokumenterad kvalitet</p>
            </div>
            <div className="text-center">
              <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Snabb leverans</h3>
              <p className="text-gray-300">Leverans inom 1-2 arbetsdagar till hela Sverige</p>
            </div>
            <div className="text-center">
              <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Fullständig garanti</h3>
              <p className="text-gray-300">Alla våra batterier kommer med tillverkarens fullständiga garanti</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;