'use client';

import Link from 'next/link';
import { ArrowRight, Printer, Camera, Video, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

/**
 * Home Page - Modern & Intuitive Design
 * Features hero carousel, services showcase, testimonials, and trusted partners
 */
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const testimonialContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  const heroImages = [
    { url: '/images/hero-printing.jpg', title: 'Premium Printing Services' },
    { url: '/images/hero-photography.jpg', title: 'Professional Photography' },
    { url: '/images/hero-videography.jpg', title: 'Cinematic Videography' },
    { url: '/images/media.jpg', title: 'Complete Media Solutions' }
  ];

  const testimonials = [
    {
      name: "Tee Jay",
      role: "CEO & Founder",
      company: "TechCorp Inc",
      rating: 5,
      image: "/images/passpicture.jpg",
      text: "Tee Jay exceeded our expectations! Their attention to detail and creative approach transformed our brand materials. Highly recommend!"
    },
    {
      name: "Mark Aggrey",
      role: "Entrepreneur & CEO",
      company: "Eckintosh",
      rating: 5,
      image: "/images/passpicture.jpg",
      text: "Outstanding photography and videography services. They captured every moment perfectly. Professional, punctual, and creative!"
    },
    {
      name: "Choco Milo",
      role: "Small Business Owner",
      company: "Bloom Boutique",
      rating: 5,
      image: "/images/passpicture.jpg",
      text: "The printing quality is exceptional! From business cards to banners, everything looks stunning. Great customer service too!"
    },
    {
      name: "Abena Shyflex",
      role: "Creative Director",
      company: "Design Studio X",
      rating: 5,
      image: "/images/passpicture.jpg",
      text: "Working with Tee Jay is always a pleasure. They bring ideas to life with precision and artistry. Our go-to for all media needs!"
    },
    {
      name: "Tee Jay",
      role: "CEO & Founder",
      company: "TechCorp Inc",
      rating: 5,
      image: "/images/passpicture.jpg",
      text: "Tee Jay exceeded our expectations! Their attention to detail and creative approach transformed our brand materials. Highly recommend!"
    },
    {
      name: "Mark Aggrey",
      role: "Entrepreneur & CEO",
      company: "Eckintosh",
      rating: 5,
      image: "/images/passpicture.jpg",
      text: "Outstanding photography and videography services. They captured every moment perfectly. Professional, punctual, and creative!"
    },
    {
      name: "Choco Milo",
      role: "Small Business Owner",
      company: "Bloom Boutique",
      rating: 5,
      image: "/images/passpicture.jpg",
      text: "The printing quality is exceptional! From business cards to banners, everything looks stunning. Great customer service too!"
    },
    {
      name: "Abena Shyflex",
      role: "Creative Director",
      company: "Design Studio X",
      rating: 5,
      image: "/images/passpicture.jpg",
      text: "Working with Tee Jay is always a pleasure. They bring ideas to life with precision and artistry. Our go-to for all media needs!"
    }
  ];

  const trustedPartners = [
    "TechCorp Inc",
    "Elite Events",
    "Design Studio X",
    "Bloom Boutique",
    "Creative Agency",
    "Global Media Co",
    "Innovation Labs",
    "Summit Group"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  const nextTestimonial = () => {
    if (testimonialIndex < testimonials.length - 1) {
      setTestimonialIndex(prev => prev + 1);
    }
  };

  const prevTestimonial = () => {
    if (testimonialIndex > 0) {
      setTestimonialIndex(prev => prev - 1);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!testimonialContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - testimonialContainerRef.current.offsetLeft);
    setScrollLeft(testimonialContainerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !testimonialContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - testimonialContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    testimonialContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!testimonialContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - testimonialContainerRef.current.offsetLeft);
    setScrollLeft(testimonialContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !testimonialContainerRef.current) return;
    const x = e.touches[0].pageX - testimonialContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    testimonialContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (testimonialContainerRef.current) {
      const cardWidth = testimonialContainerRef.current.querySelector('.testimonial-card')?.clientWidth || 0;
      const gap = 24;
      testimonialContainerRef.current.scrollTo({
        left: testimonialIndex * (cardWidth + gap),
        behavior: 'smooth'
      });
    }
  }, [testimonialIndex]);

  return (
    <div className="min-h-screen bg-black/40">
      {/* Hero Section with Carousel */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        {/* Carousel Images */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image.url})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
               
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-tight animate-fade-in">
                Bring Your Vision to <span className="text-yellow-400">Life</span>
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl text-gray-200 mb-10 leading-relaxed font-medium animate-fade-in" style={{ animationDelay: '0.2s' }}>
                From stunning prints to captivating media, we deliver excellence in every project. Let's create something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <Link href="/contact">
                  <button className="group bg-yellow-400 text-black font-bold py-5 px-10 text-xl rounded-xl hover:bg-yellow-300 transition-all duration-300 flex items-center justify-center gap-3 hover:gap-4 shadow-lg hover:shadow-2xl hover:scale-105">
                    Get Started <ArrowRight size={24} className="transition-all group-hover:translate-x-1" />
                  </button>
                </Link>
                <Link href="/about">
                  <button className="group bg-white/10 backdrop-blur-sm text-white font-bold py-5 px-10 text-xl rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/50 hover:scale-105">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all hover:scale-110 animate-fade-in"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all hover:scale-110 animate-fade-in"
        >
          <ChevronRight size={24} className="text-white" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 hover:scale-110 ${
                index === currentSlide ? 'w-8 bg-yellow-400' : 'w-2 bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Image Showcase Carousel */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <img src="/images/printing.jpg" alt="Printing" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 rounded-xl border-4 border-transparent group-hover:border-green-400"></div>
              </div>
              <div className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-300 flex items-end p-6"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-green-800/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white text-2xl font-bold transform translate-y-[-8px]">Printing</h3>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img src="/images/photography.jpg" alt="Photography" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 rounded-xl border-4 border-transparent group-hover:border-yellow-400"></div>
              </div>
              <div className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-300 flex items-end p-6"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-700/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white text-2xl font-bold transform translate-y-[-8px]">Photography</h3>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <img src="/images/media.jpg" alt="Videography" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 rounded-xl border-4 border-transparent group-hover:border-red-400"></div>
              </div>
              <div className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-300 flex items-end p-6"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-red-800/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white text-2xl font-bold transform translate-y-[-8px]">Videography</h3>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <img src="/images/graphics design.jpg" alt="Graphics Design" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 " />
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 rounded-xl border-4 border-transparent group-hover:border-blue-400"></div>
              </div>
              <div className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-300 flex items-end p-6"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white text-2xl font-bold transform translate-y-[-8px]">Design</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              What <span className="text-yellow-400">We Do</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive creative solutions for all your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Printing Service */}
            <Link href="/printing" className="h-full">
              <div className="group cursor-pointer bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-yellow-400/50 animate-slide-up hover:-translate-y-2 h-full flex flex-col" style={{ animationDelay: '0.1s' }}>
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-pulse-slow">
                  <Printer size={32} className="text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Premium Printing</h3>
                <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                  High-quality printing services including business cards, brochures, banners, and large format prints. Superior quality, vibrant colors, fast turnaround.
                </p>
                <div className="flex items-center text-yellow-400 font-semibold group-hover:gap-2 transition-all">
                  Explore Printing <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Photography Service */}
            <Link href="/media/photography" className="h-full">
              <div className="group cursor-pointer bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-yellow-400/50 animate-slide-up hover:-translate-y-2 h-full flex flex-col" style={{ animationDelay: '0.2s' }}>
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-pulse-slow" style={{ animationDelay: '0.5s' }}>
                  <Camera size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Professional Photography</h3>
                <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                  Stunning photography for events, products, portraits, and corporate needs. Expert lighting, composition, and post-production for perfect results.
                </p>
                <div className="flex items-center text-yellow-400 font-semibold group-hover:gap-2 transition-all">
                  View Portfolio <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Videography Service */}
            <Link href="/media/videography" className="h-full">
              <div className="group cursor-pointer bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-yellow-400/50 animate-slide-up hover:-translate-y-2 h-full flex flex-col" style={{ animationDelay: '0.3s' }}>
                <div className="bg-gradient-to-br from-red-500 to-red-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-pulse-slow" style={{ animationDelay: '1s' }}>
                  <Video size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Cinematic Videography</h3>
                <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                  Professional video production for commercials, events, documentaries, and digital content. Cinematic storytelling that captivates your audience.
                </p>
                <div className="flex items-center text-yellow-400 font-semibold group-hover:gap-2 transition-all">
                  Watch Showreel <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-4">
              What Our <span className="text-yellow-400">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="relative px-12 md:px-16">
            <button
              onClick={prevTestimonial}
              disabled={testimonialIndex === 0}
              className={`absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-gray-800 shadow-lg p-3 rounded-full transition-all duration-300 ${
                testimonialIndex === 0 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-yellow-400 hover:scale-110 cursor-pointer'
              }`}
            >
              <ChevronLeft size={24} className="text-gray-900 dark:text-white" />
            </button>
            
            <button
              onClick={nextTestimonial}
              disabled={testimonialIndex >= testimonials.length - 1}
              className={`absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-gray-800 shadow-lg p-3 rounded-full transition-all duration-300 ${
                testimonialIndex >= testimonials.length - 1
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-yellow-400 hover:scale-110 cursor-pointer'
              }`}
            >
              <ChevronRight size={24} className="text-gray-900 dark:text-white" />
            </button>

            <div 
              ref={testimonialContainerRef}
              className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="flex gap-6 pb-4 pt-4" style={{ minWidth: 'max-content' }}>
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="testimonial-card bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:-translate-y-2 hover:border-yellow-400 animate-fade-in-up flex flex-col w-80 flex-shrink-0"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={18} className="fill-yellow-400 text-yellow-400 animate-pulse-slow" style={{ animationDelay: `${i * 0.1}s` }} />
                      ))}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed flex-grow">
                      "{testimonial.text}"
                    </p>
                    <div className="border-t border-gray-100 dark:border-gray-700 pt-4 mt-auto">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-yellow-400 shadow-md">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-gray-900 dark:text-white">{testimonial.name}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                          <p className="text-sm text-yellow-600 font-semibold">{testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setTestimonialIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === testimonialIndex ? 'w-8 bg-yellow-400' : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
              Trusted By <span className="text-yellow-400">Leading Brands</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're proud to work with amazing organizations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustedPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 flex items-center justify-center hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-yellow-400/50 animate-float cursor-pointer group"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  animationDuration: `${3 + (index % 3)}s`
                }}
              >
                <p className="text-white font-bold text-lg text-center group-hover:scale-110 group-hover:text-yellow-400 transition-all duration-300">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-white rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '3.5s' }}></div>
          <div className="absolute bottom-40 right-1/4 w-12 h-12 bg-white rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-black mb-6 animate-fade-in">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Let's collaborate and bring your creative vision to life. Get in touch with us today!
          </p>
          <Link href="/contact">
            <button className="group bg-black text-white font-bold py-4 px-10 rounded-lg hover:bg-gray-900 transition-all duration-300 inline-flex items-center gap-2 hover:gap-3 shadow-xl text-lg animate-fade-in hover:scale-110" style={{ animationDelay: '0.4s' }}>
              Contact Us Now <ArrowRight size={24} className="transition-all group-hover:translate-x-2" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

