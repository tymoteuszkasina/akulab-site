import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Mail, Phone, Clock } from 'lucide-react';

const Support = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Hur hittar jag rätt batteri till min bil?',
      answer: 'Använd vårt sökverktyg med registreringsnummer på startsidan. Ange bara ditt reg.nr så hittar vi rätt batteri för din bil på några sekunder. Alternativt kan du kontakta vår kundtjänst så hjälper vi dig.'
    },
    {
      question: 'Hur lång är leveranstiden?',
      answer: 'Vi levererar normalt inom 1-2 arbetsdagar till hela Sverige. För akuta behov erbjuder vi även expressleverans samma dag i Stockholmsområdet.'
    },
    {
      question: 'Vilka betalningsmetoder erbjuder ni?',
      answer: 'Vi accepterar alla vanliga betalningsmetoder: Klarna (faktura, delbetalning), Swish, kort (Visa, Mastercard, American Express) samt banköverföring.'
    },
    {
      question: 'Hur returnerar jag en produkt?',
      answer: 'Du har 30 dagars returrätt på oanvända produkter. Kontakta vår kundtjänst så skickar vi dig en returfraktsedel. Batterier måste returneras i originalförpackning.'
    },
    {
      question: 'Vad gör jag om mitt batteri är trasigt?',
      answer: 'Kontakta oss direkt så hjälper vi dig med garantiärende. Alla våra batterier har tillverkargaranti. Vi hjälper dig med reklamation och utbyte om det behövs.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-green-400 mb-8">Hjälp & Support</h1>
        </div>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-green-400 mb-8">Vanliga frågor</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg border border-gray-600 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-700 transition-colors"
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-green-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-green-400 flex-shrink-0" />
                  )}
                </button>
                
                {openFaq === index && (
                  <div className="px-6 pb-4 pt-2 border-t border-gray-600">
                    <p className="text-gray-200 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Customer Service Section */}
        <section>
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-600">
            <h2 className="text-2xl font-bold text-green-400 mb-6">Kundtjänst</h2>
            <p className="text-gray-200 mb-6">
              Om du inte hittar svar på din fråga här, är du alltid välkommen att kontakta oss:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Mail className="h-8 w-8 text-green-400 mx-auto mb-3" />
                <p className="text-white font-semibold mb-1">E-post:</p>
                <a 
                  href="mailto:support@akulab.se" 
                  className="text-green-400 hover:text-green-300 transition-colors"
                >
                  support@akulab.se
                </a>
              </div>

              <div className="text-center">
                <Phone className="h-8 w-8 text-green-400 mx-auto mb-3" />
                <p className="text-white font-semibold mb-1">Telefon:</p>
                <a 
                  href="tel:+46777777777" 
                  className="text-green-400 hover:text-green-300 transition-colors"
                >
                  +46 777 777 7777
                </a>
              </div>

              <div className="text-center">
                <Clock className="h-8 w-8 text-green-400 mx-auto mb-3" />
                <p className="text-white font-semibold mb-1">Öppettider:</p>
                <p className="text-gray-200">Mån-Fre 09:00-17:00</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Support;