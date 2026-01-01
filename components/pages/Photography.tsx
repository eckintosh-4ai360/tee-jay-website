'use client';

import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

/**
 * Photography Service Page
 * Showcases photography capabilities and services
 */
export default function Photography() {
  const services = [
    {
      title: 'Event Photography',
      description: 'Professional coverage of weddings, corporate events, and special occasions.',
      features: ['Full-day coverage', 'Multiple photographers', 'Professional editing'],
    },
    {
      title: 'Product Photography',
      description: 'Stunning product shots for e-commerce and marketing.',
      features: ['Studio lighting', 'Multiple angles', 'Background options'],
    },
    {
      title: 'Portrait Photography',
      description: 'Professional portraits for individuals and families.',
      features: ['Studio or location', 'Professional retouching', 'Digital delivery'],
    },
    {
      title: 'Commercial Photography',
      description: 'High-quality images for advertising and branding.',
      features: ['Brand consistency', 'Commercial rights', 'Quick turnaround'],
    },
    {
      title: 'Real Estate Photography',
      description: 'Professional property photography for listings.',
      features: ['HDR processing', 'Virtual tours', 'Aerial shots'],
    },
    {
      title: 'Food Photography',
      description: 'Appetizing food photography for restaurants and menus.',
      features: ['Styling services', 'Natural lighting', 'Menu optimization'],
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-photography.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-6xl md:text-7xl font-black text-white mb-4">
            Photography <span className="text-yellow-400">Services</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Professional photography services to capture your special moments with excellence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-5xl font-black text-white mb-4">
              Photography <span className="text-yellow-400">Services</span>
            </h2>
            <div className="w-20 h-1 bg-yellow-400"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-700 p-8 hover:border-yellow-400 transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-12 h-12 bg-blue-500 mb-6"></div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check size={18} className="text-yellow-400" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-900 py-20 border-y-2 border-yellow-400">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-black text-white mb-12">
            Our <span className="text-yellow-400">Process</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Consultation', desc: 'Discuss your vision and requirements' },
              { step: 2, title: 'Planning', desc: 'Create a detailed shot list and timeline' },
              { step: 3, title: 'Shooting', desc: 'Professional photography session' },
              { step: 4, title: 'Delivery', desc: 'Edited photos delivered digitally' },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-black border-2 border-yellow-400 p-8 text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-black text-black">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight size={32} className="text-yellow-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-black text-white mb-6">
            Ready to Capture <span className="text-yellow-400">Your Moments?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Contact us today to book your photography session.
          </p>
          <Link href="/contact">
            <button className="btn-primary inline-flex items-center gap-2 text-lg">
              Book a Session <ArrowRight size={24} />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

