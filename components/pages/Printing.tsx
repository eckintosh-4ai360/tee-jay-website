'use client';

import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

/**
 * Printing Service Page
 * Showcases printing capabilities and services
 */
export default function Printing() {
  const services = [
    {
      title: 'Business Cards',
      description: 'Premium quality business cards that make a lasting impression.',
      features: ['Custom designs', 'Multiple finishes', 'Fast delivery'],
    },
    {
      title: 'Brochures & Flyers',
      description: 'Eye-catching marketing materials for your campaigns.',
      features: ['Full color printing', 'Various sizes', 'Professional layouts'],
    },
    {
      title: 'Banners & Signage',
      description: 'Large format prints for events and promotions.',
      features: ['High resolution', 'Durable materials', 'Custom sizes'],
    },
    {
      title: 'Packaging',
      description: 'Custom packaging solutions for your products.',
      features: ['Brand consistency', 'Premium materials', 'Eco-friendly options'],
    },
    {
      title: 'Labels & Stickers',
      description: 'Custom labels and stickers for branding and identification.',
      features: ['Waterproof options', 'Various shapes', 'Quick production'],
    },
    {
      title: 'Promotional Items',
      description: 'Branded merchandise to boost your marketing efforts.',
      features: ['Wide selection', 'Bulk discounts', 'Custom branding'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-72 sm:h-80 md:h-96 flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-printing.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-3 sm:mb-4">
            Printing <span className="text-yellow-400">Services</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl">
            Professional printing solutions for all your business and creative needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 sm:mb-4">
              Our <span className="text-yellow-400">Printing Services</span>
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-yellow-400"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900/70 border border-gray-700 p-5 sm:p-6 md:p-8 hover:border-yellow-400 transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 mb-4 sm:mb-6"></div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">{service.description}</p>
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 sm:gap-3">
                      <Check size={16} className="sm:w-[18px] sm:h-[18px] text-yellow-400" />
                      <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-900/70 py-12 sm:py-16 md:py-20 border-y-2 border-yellow-400">
        <div className="container mx-auto px-3 sm:px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-8 sm:mb-10 md:mb-12">
            Our <span className="text-yellow-400">Process</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { step: 1, title: 'Consultation', desc: 'Discuss your project requirements and vision' },
              { step: 2, title: 'Design', desc: 'Create custom designs tailored to your needs' },
              { step: 3, title: 'Production', desc: 'Print with precision using quality materials' },
              { step: 4, title: 'Delivery', desc: 'Fast and reliable delivery to your location' },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-black/80 border-2 border-yellow-400 p-5 sm:p-6 md:p-8 text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <span className="text-2xl sm:text-3xl font-black text-black">{item.step}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 sm:-right-4 transform -translate-y-1/2">
                    <ArrowRight size={28} className="sm:w-8 sm:h-8 text-yellow-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-3 sm:px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6">
            Ready to Print <span className="text-yellow-400">Your Project?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Contact our team today for a free quote and consultation.
          </p>
          <Link href="/contact">
            <button className="btn-primary inline-flex items-center gap-2 text-base sm:text-lg">
              Get a Quote <ArrowRight size={20} className="sm:w-6 sm:h-6" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

