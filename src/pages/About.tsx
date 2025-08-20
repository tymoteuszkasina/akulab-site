import React from 'react';
import { CheckCircle, Target, Users, Zap } from 'lucide-react';

const About = () => {
  const features = [
    'Snabb leverans i hela Sverige',
    'Kända märken & garantier',
    'Klarna, swish & kortbetalning'
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-green-400 mb-8">Om oss</h1>
        </div>

        {/* Welcome Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-green-400 mb-6">
            Välkommen till AKULAB – din batteripartner i Sverige
          </h2>
          <div className="text-gray-300 space-y-4 leading-relaxed">
            <p>
              <span className="text-gray-200">AKULAB är en ny återförsäljare i Sverige som erbjuder högkvalitativa batterier från välkända 
              varumärken – direkt till din dörr. Vi brinner för att erbjuda pålitliga lösningar för alla 
              dina batteribehov, vare sig det gäller bil, motorcykel, stationära system eller solcellslösningar.</span>
            </p>
            <p>
              <span className="text-gray-200">Vi samarbetar med branschledande leverantörer som Mrakumulator, E-moto och Akulaz för att 
              säkerställa att våra kunder får tillgång till ett bästa urval som marknaden har att erbjuda.</span>
            </p>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-green-400 mb-8">Varför välja oss?</h2>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-200">
                <CheckCircle className="h-6 w-6 text-green-400 mr-4 flex-shrink-0" />
                <span className="text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Vision Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-green-400 mb-6">Vår vision</h2>
          <div className="text-gray-200 space-y-4 leading-relaxed">
            <p>
              Vi vill förenkla hur privatpersoner och företag hittar rätt batteri – snabbt, smidigt och 
              till ett bra pris. Med hjälp av vårt smarta sökverktyg via registreringsnummer tar det bara 
              några sekunder att hitta rätt produkt för just ditt fordon eller maskin.
            </p>
            <p>
              Har du frågor? Tveka inte att{' '}
              <a href="/contact" className="text-green-400 underline hover:text-green-300">
                kontakta oss
              </a>
              . Vi hjälper dig gärna!
            </p>
          </div>
        </section>

        {/* Values Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-600 text-center">
            <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Kvalitet först</h3>
            <p className="text-gray-300">
              Vi samarbetar endast med välkända märken och leverantörer för att garantera 
              högsta kvalitet på alla våra produkter.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-600 text-center">
            <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Kundservice</h3>
            <p className="text-gray-300">
              Vår expertkunskap och personliga service hjälper dig att hitta rätt 
              batterilösning för dina specifika behov.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-600 text-center">
            <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
            <p className="text-gray-300">
              Vi använder den senaste teknologin för att göra batterisökning och 
              inköp så enkelt och effektivt som möjligt.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;