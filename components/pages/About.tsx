'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

/**
 * Animated Counter Component
 * Counts from 0 to target value with easing animation
 */
interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ target, suffix = '', duration = 2000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function: starts slow, speeds up (ease-in-cubic)
      const easedProgress = progress * progress * progress;
      const currentCount = Math.floor(startValue + (target - startValue) * easedProgress);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return (
    <div ref={counterRef} className="text-5xl font-black text-yellow-400 mb-2">
      {count}{suffix}
    </div>
  );
}

/**
 * About Page
 * Company information, mission, and team
 */
export default function About() {
  const team = [
    {
      name: 'Smart Joel Simpson',
      role: 'CEO',
      specialty: 'Professional media services',
      image: '/images/Smar,t Joel Simpson.png',
    },
    {
      name: 'Sam Francis',
      role: 'General Manager',
      specialty: 'Professional media services',
      image: '/images/Sam, Francis.png',
    },
    {
      name: 'Degraft Ewusi Johnson Moses',
      role: 'Team Member',
      specialty: 'Professional media services',
      image: '/images/Degraft, Ewusi Johnson Moses.png',
    },
  {
      name: 'Cecilia Bassaw',
      role: 'Financial Manager',
      specialty: 'Professional media services',
      image: '/images/Cecilia Bassaw .png',
    },
    
    {
      name: 'Brebo Prince',
      role: 'Marketing Director',
      specialty: 'Professional media services',
      image: '/images/Brebo Prince.png',
    },
    
   
  ];

  return (
    <div className="min-h-screen">
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
            About <span className="text-yellow-400">TEE-JAY MULTIMEDIA</span>
          </h1>
          <p className="text-2xl text-gray-200 max-w-2xl">
            Your partner in creative excellence and professional media production.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
        <span className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></span>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-black text-white mb-6">
                Our <span className="text-yellow-400">Story</span>
              </h2>
              <p className="text-gray-400 text-xl mb-6 leading-relaxed">
              Tee-Jay Multimedia was registered in June 2018 under the name TEE-JAY MULTIMEDIA. The company later established its physical office in Mumford in August 2020, beginning operations with three working staff and seven management board members.              </p>
              <p className="text-gray-400 text-xl mb-6 leading-relaxed">
              Initially, the company specialized in graphic designing and media printing. As the business expanded, Tee-Jay Multimedia grew to include four working staff, three student learners (apprentices), and five management board members, which led to an expansion of its operations into television broadcasting and media advertising, including the use of digital advertising boards and other related platforms.              </p>
              <p className="text-gray-400 text-xl leading-relaxed">
              Currently, Tee-Jay Multimedia is located in Mumford, Gomoa West District, Central Region of Ghana, and operates as a full-service media firm. The company provides professional services in advertising, printing of souvenirs, branding and customization, photography, and videography, delivering creative and innovative media solutions to individuals, institutions, and corporate organizations.              </p>
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
      <section className="bg-gray-900/70 py-20 border-y-2 border-yellow-400">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-black text-white mb-12">
            Our <span className="text-yellow-400">Mission & Values</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/80 border border-yellow-400 p-8">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Excellence</h3>
              <p className="text-gray-400">
                We are committed to delivering the highest quality work on every project, regardless of size or scope.
              </p>
            </div>
            <div className="bg-black/80 border border-yellow-400 p-8">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Innovation</h3>
              <p className="text-gray-400">
                We stay ahead of industry trends and continuously invest in the latest technology and techniques.
              </p>
            </div>
            <div className="bg-black/80 border border-yellow-400 p-8">
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
      <section className="bg-gray-900/70 py-20 border-y-2 border-yellow-400">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-black text-white mb-12">
            Meet Our <span className="text-yellow-400">Team</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-black/80 border border-gray-700 p-8 hover:border-yellow-400 transition-all duration-300 group"
              >
                <div className="w-24 h-24 rounded-lg mb-6 overflow-hidden border-2 border-yellow-400 relative transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
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
              { number: 500, suffix: '+', label: 'Projects Completed' },
              { number: 14, suffix: '+', label: 'Years in Business' },
              { number: 200, suffix: '+', label: 'Happy Clients' },
              { number: 50, suffix: '+', label: 'Team Members' },
            ].map((stat, index) => (
              <div key={index} className="bg-gray-900/70 border border-yellow-400 p-8">
                <AnimatedCounter 
                  target={stat.number} 
                  suffix={stat.suffix}
                  duration={2000}
                />
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

