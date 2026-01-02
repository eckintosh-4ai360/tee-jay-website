'use client';

import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

/**
 * Videography Service Page
 * Showcases videography capabilities and services
 */
export default function Videography() {
  const services = [
    {
      title: 'Commercial Videos',
      description: 'Professional commercials and advertisements for TV and digital platforms.',
      features: ['Concept development', 'Full production', 'Post-production included'],
    },
    {
      title: 'Corporate Videos',
      description: 'Promotional and training videos for your business.',
      features: ['Company profiles', 'Training materials', 'Internal communications'],
    },
    {
      title: 'Event Videography',
      description: 'Professional video coverage of your events and celebrations.',
      features: ['Multi-camera setup', 'Live editing', 'Highlight reels'],
    },
    {
      title: 'Music Videos',
      description: 'Creative music video production for artists and musicians.',
      features: ['Creative direction', 'Professional crew', 'Color grading'],
    },
    {
      title: 'Social Media Content',
      description: 'Short-form video content optimized for social platforms.',
      features: ['Platform optimization', 'Quick turnaround', 'Trending formats'],
    },
    {
      title: 'Documentary & Storytelling',
      description: 'Compelling documentary-style videos that tell your story.',
      features: ['Research & planning', 'Cinematic style', 'Professional narration'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-videography.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-6xl md:text-7xl font-black text-white mb-4">
            Videography <span className="text-yellow-400">Services</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Cinematic video production that brings your story to life with professional quality.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-5xl font-black text-white mb-4">
              Video <span className="text-yellow-400">Services</span>
            </h2>
            <div className="w-20 h-1 bg-yellow-400"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-700 p-8 hover:border-yellow-400 transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-12 h-12 bg-blue-600 mb-6"></div>
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

      {/* Production Process */}
      <section className="bg-gray-900 py-20 border-y-2 border-yellow-400">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-black text-white mb-12">
            Production <span className="text-yellow-400">Process</span>
          </h2>

          <div className="space-y-8">
            {[
              {
                title: 'Pre-Production',
                items: ['Concept development', 'Scriptwriting', 'Storyboarding', 'Location scouting'],
              },
              {
                title: 'Production',
                items: ['Professional filming', 'Multi-camera setup', 'Professional crew', 'Equipment & lighting'],
              },
              {
                title: 'Post-Production',
                items: ['Video editing', 'Color grading', 'Sound design', 'Motion graphics'],
              },
            ].map((phase, index) => (
              <div key={index} className="bg-black border border-yellow-400 p-8">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">{phase.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {phase.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-yellow-400"></div>
                      <span className="text-white">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Technology */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-black text-white mb-12">
            Professional <span className="text-yellow-400">Equipment</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div
              className="h-96 bg-cover bg-center rounded-lg overflow-hidden shadow-2xl"
              style={{
                backgroundImage: 'url(/images/hero-videography.jpg)',
              }}
            ></div>
            <div className="space-y-6">
              {[
                '4K and 8K cinema cameras',
                'Professional cinema lenses',
                'Advanced stabilization equipment',
                'Professional lighting rigs',
                'Audio recording systems',
                'Drone and aerial capabilities',
                'Color grading workstations',
                'Advanced editing suites',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-yellow-400 flex-shrink-0 mt-1"></div>
                  <span className="text-white text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-black text-white mb-12">
            Featured <span className="text-yellow-400">Projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-72 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer flex items-center justify-center"
              >
                <span className="text-white text-6xl font-black opacity-20">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-black text-white mb-6">
            Ready to Produce <span className="text-yellow-400">Your Video?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's create cinematic content that captivates your audience. Contact us to discuss your video project.
          </p>
          <Link href="/contact">
            <button className="btn-primary inline-flex items-center gap-2 text-lg">
              Start Production <ArrowRight size={24} />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

