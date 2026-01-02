'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, CheckCircle2, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

/**
 * Contact Page
 * Modern contact form with Gmail integration and company information
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      toast.success('Message sent successfully! We will get back to you soon.', {
        description: 'Check your email for a confirmation.',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/portfolio-bg.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
        </div>

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-transparent to-blue-500/10 animate-pulse"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-semibold">We'd love to hear from you</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Get in <span className="text-yellow-400 relative">
                Touch
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-transparent"></div>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl leading-relaxed">
              Let's discuss your project and bring your vision to life with our creative expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        {/* Background decoration */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-black text-white mb-2">
                  Contact <span className="text-yellow-400">Info</span>
                </h2>
                <p className="text-gray-400">We're here to help you succeed</p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="group bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-gray-700/50 p-6 rounded-2xl hover:border-yellow-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/10">
                  <div className="flex gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 flex-shrink-0 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Phone size={24} className="text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                        Phone
                        <CheckCircle2 size={16} className="text-green-400" />
                      </h3>
                      <p className="text-gray-300 font-medium">(+233) 246 385 559</p>
                      <p className="text-gray-300 font-medium">(+233) 539 683 602</p>
                      <p className="text-gray-300 font-medium">(+233) 257 903 397</p>
                      <p className="text-gray-500 text-sm mt-1 flex items-center gap-1">
                        <Clock size={14} />
                        Mon-Sat, 24Hrs
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-gray-700/50 p-6 rounded-2xl hover:border-yellow-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/10">
                  <div className="flex gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 flex-shrink-0 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Mail size={24} className="text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                        Email
                        <CheckCircle2 size={16} className="text-green-400" />
                      </h3>
                      <p className="text-gray-300 font-small" style={{fontSize: '14px'}}>teejaymultimedia.gh@gmail.com</p>
                      <p className="text-gray-500 text-sm mt-1 flex items-center gap-1">
                        <MessageSquare size={14} />
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-gray-700/50 p-6 rounded-2xl hover:border-yellow-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/10">
                  <div className="flex gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 flex-shrink-0 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <MapPin size={24} className="text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Location</h3>
                      <p className="text-gray-300 font-medium">
                        Dankor, Mumford <br />
                        Gomoa West, Ghana
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services List */}
              <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-gray-700/50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Sparkles className="text-yellow-400" size={20} />
                  Our Services
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3 group">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="group-hover:text-yellow-400 transition-colors">Printing & Design</span>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="group-hover:text-yellow-400 transition-colors">Professional Photography</span>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="group-hover:text-yellow-400 transition-colors">Video Production</span>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="group-hover:text-yellow-400 transition-colors">Media Advertising</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 p-8 md:p-10 rounded-3xl shadow-2xl">
                <div className="mb-8">
                  <h2 className="text-3xl font-black text-white mb-2">
                    Send us a <span className="text-yellow-400">Message</span>
                  </h2>
                  <p className="text-gray-400">Fill out the form below and we'll get back to you as soon as possible.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-white font-semibold mb-2 flex items-center gap-2">
                        Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-black/40 border border-gray-600 text-white px-5 py-3.5 rounded-xl focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none transition-all duration-300 placeholder-gray-500"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="group">
                      <label className="block text-white font-semibold mb-2 flex items-center gap-2">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-black/40 border border-gray-600 text-white px-5 py-3.5 rounded-xl focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none transition-all duration-300 placeholder-gray-500"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-white font-semibold mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-black/40 border border-gray-600 text-white px-5 py-3.5 rounded-xl focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none transition-all duration-300 placeholder-gray-500"
                        placeholder="(+233) 123-4567"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-white font-semibold mb-2">
                        Service Interested In
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-black/40 border border-gray-600 text-white px-5 py-3.5 rounded-xl focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        <option value="printing">Printing & Design</option>
                        <option value="photography">Photography</option>
                        <option value="videography">Videography</option>
                        <option value="Both Photos & Videos">Both Photos & Videos</option>
                        <option value="other">Other Services</option>
                      </select>
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-white font-semibold mb-2 flex items-center gap-2">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full bg-black/40 border border-gray-600 text-white px-5 py-3.5 rounded-xl focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none transition-all duration-300 placeholder-gray-500 resize-none"
                      placeholder="Tell us about your project, requirements, timeline, and any specific details..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/50 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative flex items-center justify-center gap-3 text-lg">
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-2 border-black border-t-transparent"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </span>
                  </button>

                  <p className="text-center text-gray-400 text-sm">
                    By submitting this form, you agree to our privacy policy.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black py-20 border-y border-yellow-400/30 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-2 mb-6">
              <MessageSquare className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-semibold">FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Frequently Asked <span className="text-yellow-400">Questions</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Find answers to common questions about our services and processes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[
              {
                q: 'What is your turnaround time?',
                a: 'Turnaround times vary by project. Most projects are completed within 20 working days. Rush services are available upon request.',
              },
              {
                q: 'Do you offer revisions?',
                a: 'Yes! We include unlimited revisions until you are completely satisfied with the final product.',
              },
              {
                q: 'What is your pricing structure?',
                a: 'Pricing is customized based on your specific project requirements. Contact us for a detailed quote.',
              },
              {
                q: 'Can you work with my existing designs?',
                a: 'Absolutely! We can work with your existing designs or create something new from scratch.',
              },
              {
                q: 'Do you offer retainer services?',
                a: 'Yes, we offer flexible retainer packages for ongoing creative needs and support.',
              },
              {
                q: 'How do I get started?',
                a: 'Simply fill out our contact form or call us. We will schedule a consultation to discuss your project.',
              },
            ].map((item, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 p-6 rounded-2xl hover:border-yellow-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/10"
              >
                <h3 className="text-lg font-bold text-yellow-400 mb-3 flex items-start gap-2">
                  <span className="text-yellow-400 text-xl flex-shrink-0">Q:</span>
                  <span>{item.q}</span>
                </h3>
                <p className="text-gray-300 leading-relaxed pl-7">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

