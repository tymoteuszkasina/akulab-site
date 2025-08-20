import React, { useState } from 'react';
import { Mail, Phone, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-green-400 mb-8">Kontakta oss</h1>
        </div>

        {/* Contact Info */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-green-400 mb-6">Vi hjälper dig gärna!</h2>
          <p className="text-gray-200 mb-8 text-lg leading-relaxed">
            Har du frågor om våra produkter, leveranser eller behöver hjälp att hitta rätt batteri? Fyll i 
            formuläret nedan eller kontakta oss direkt.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center space-x-4">
              <Mail className="h-8 w-8 text-green-400" />
              <div>
                <p className="text-white font-semibold">E-post:</p>
                <a href="mailto:info@gmail.com" className="text-green-400 hover:text-green-300 transition-colors">
                  info@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Phone className="h-8 w-8 text-green-400" />
              <div>
                <p className="text-white font-semibold">Telefon:</p>
                <a href="tel:+46777777777" className="text-green-400 hover:text-green-300 transition-colors">
                  +46 777 777 7777
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Clock className="h-8 w-8 text-green-400" />
              <div>
                <p className="text-white font-semibold">Öppettider:</p>
                <p className="text-gray-200">Mån-Fre 09:00-17:00</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-600">
            <h2 className="text-2xl font-bold text-green-400 mb-6">Kontakt formulär</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                  Namn:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Karl Johansson"
                  className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-green-400 transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                  E-post:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="karl@gmail.com"
                  className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-green-400 transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                  Meddelande:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  placeholder="Lorem ipsum dolor sit amet consectetur. Id nunc velit eget morbi pellentesque netus diam sit interdum. Euismod sed enim rutrum egestas. Erat sollicitudin sit et vestibulum est nisi. Cursus pretium vitae sagittis lectus mauris amet pulvinar nulla amet."
                  className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-green-400 transition-colors resize-vertical"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-green-500 hover:bg-green-400 text-white px-8 py-3 rounded-lg transition-colors font-semibold"
              >
                Skicka formulär
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;