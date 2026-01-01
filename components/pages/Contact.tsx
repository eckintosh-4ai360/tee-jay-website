'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

/**
 * Contact Page
 * Contact form and company information
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
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success('Message sent successfully! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/portfolio-bg.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-6xl md:text-7xl font-black text-white mb-4">
            Get in <span className="text-yellow-400">Touch</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Let's discuss your project and bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-black text-white mb-8">
                  Contact <span className="text-yellow-400">Info</span>
                </h2>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-yellow-400 flex-shrink-0 flex items-center justify-center">
                  <Phone size={24} className="text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Phone</h3>
                  <p className="text-gray-400">(555) 123-4567</p>
                  <p className="text-gray-500 text-sm">Mon-Fri, 9am-6pm EST</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-yellow-400 flex-shrink-0 flex items-center justify-center">
                  <Mail size={24} className="text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                  <p className="text-gray-400">info@teejay.com</p>
                  <p className="text-gray-500 text-sm">We respond within 24 hours</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-yellow-400 flex-shrink-0 flex items-center justify-center">
                  <MapPin size={24} className="text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Location</h3>
                  <p className="text-gray-400">
                    123 Creative Street<br />
                    Studio City, CA 90000
                  </p>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-700 p-6 mt-8">
                <h3 className="text-lg font-bold text-white mb-4">Services</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-400"></div>
                    Printing
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-400"></div>
                    Photography
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-400"></div>
                    Videography
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-400"></div>
                    Consulting
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 focus:border-yellow-400 focus:outline-none transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="printing">Printing</option>
                      <option value="photography">Photography</option>
                      <option value="videography">Videography</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 focus:border-yellow-400 focus:outline-none transition-colors"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-900 py-20 border-y-2 border-yellow-400">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-black text-white mb-12">
            Frequently Asked <span className="text-yellow-400">Questions</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: 'What is your turnaround time?',
                a: 'Turnaround times vary by project. Most projects are completed within 2-4 weeks. Rush services are available upon request.',
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
              <div key={index} className="bg-black border border-gray-700 p-6">
                <h3 className="text-lg font-bold text-yellow-400 mb-3">{item.q}</h3>
                <p className="text-gray-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

