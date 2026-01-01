'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/**
 * About Page
 * Company information, mission, and team
 */
export default function About() {
  const team = [
    {
      name: 'John Smith',
      role: 'Founder & Creative Director',
      specialty: 'Overall creative vision and strategy',
    },
    {
      name: 'Sarah Johnson',
      role: 'Lead Photographer',
      specialty: 'Professional photography and visual storytelling',
    },
    {
      name: 'Mike Chen',
      role: 'Videographer & Editor',
      specialty: 'Video production and post-production',
    },
    {
      name: 'Emma Davis',
      role: 'Print Specialist',
      specialty: 'Printing services and design consultation',
    },
    {
      name: 'Alex Rodriguez',
      role: 'Production Manager',
      specialty: 'Project management and client relations',
    },
    {
      name: 'Lisa Anderson',
      role: 'Graphic Designer',
      specialty: 'Design and branding solutions',
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/services-showcase.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-6xl md:text-7xl font-black text-white mb-4">
            About <span className="text-yellow-400">Tee Jay</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Your partner in creative excellence and professional media production.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-black text-white mb-6">
                Our <span className="text-yellow-400">Story</span>
              </h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                Founded in 2010, Tee Jay Multimedia has been at the forefront of creative services, delivering exceptional results for businesses of all sizes. What started as a small design studio has grown into a full-service creative agency specializing in printing, photography, and videography.
              </p>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                Our commitment to excellence, innovation, and customer satisfaction has made us the trusted partner for countless businesses seeking professional creative solutions. We believe in the power of visual storytelling and the impact of quality production.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Today, we continue to push creative boundaries while maintaining the personalized service and attention to detail that defines our brand.
              </p>
            </div>
            <div
              className="h-96 bg-cover bg-center rounded-lg overflow-hidden shadow-2xl"
              style={{
                backgroundImage: 'url(/images/services-showcase.jpg)',
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-gray-900 py-20 border-y-2 border-yellow-400">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-black text-white mb-12">
            Our <span className="text-yellow-400">Mission & Values</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black border border-yellow-400 p-8">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Excellence</h3>
              <p className="text-gray-400">
                We are committed to delivering the highest quality work on every project, regardless of size or scope.
              </p>
            </div>
            <div className="bg-black border border-yellow-400 p-8">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Innovation</h3>
              <p className="text-gray-400">
                We stay ahead of industry trends and continuously invest in the latest technology and techniques.
              </p>
            </div>
            <div className="bg-black border border-yellow-400 p-8">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Partnership</h3>
              <p className="text-gray-400">
                We work closely with our clients to understand their vision and deliver solutions that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-black text-white mb-12">
            Why <span className="text-yellow-400">Choose Us</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Experience',
                desc: 'Over 14 years of industry experience and thousands of successful projects.',
              },
              {
                title: 'Quality',
                desc: 'State-of-the-art equipment and professional team dedicated to excellence.',
              },
              {
                title: 'Expertise',
                desc: 'Comprehensive services covering printing, photography, and videography.',
              },
              {
                title: 'Reliability',
                desc: 'On-time delivery and consistent quality on every project.',
              },
              {
                title: 'Creativity',
                desc: 'Innovative solutions and creative approaches to every challenge.',
              },
              {
                title: 'Support',
                desc: 'Dedicated team providing personalized attention and support throughout your project.',
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="w-12 h-12 bg-yellow-400 flex-shrink-0 flex items-center justify-center">
                  <span className="text-black font-black text-xl">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-900 py-20 border-y-2 border-yellow-400">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-black text-white mb-12">
            Meet Our <span className="text-yellow-400">Team</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-black border border-gray-700 p-8 hover:border-yellow-400 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-red-600 rounded-lg mb-6"></div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-yellow-400 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-400">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '14+', label: 'Years in Business' },
              { number: '200+', label: 'Happy Clients' },
              { number: '50+', label: 'Team Members' },
            ].map((stat, index) => (
              <div key={index} className="bg-gray-900 border border-yellow-400 p-8">
                <div className="text-5xl font-black text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <p className="text-white font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-black text-white mb-6">
            Let's Work <span className="text-yellow-400">Together</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Ready to bring your creative vision to life? Contact us today to discuss your project.
          </p>
          <Link href="/contact">
            <button className="btn-primary inline-flex items-center gap-2 text-lg">
              Get in Touch <ArrowRight size={24} />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

