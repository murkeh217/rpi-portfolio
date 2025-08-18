'use client';

import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (_e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [_e.target.name]: _e.target.value
    });
  };

  const handleSubmit = (_e: React.FormEvent) => {
    _e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with emailjs, netlify forms, or your own backend
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Contact</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Get In Touch
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Let&apos;s Connect</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold">📧</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">kanorwalamurtaza217@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold">📱</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">+91 9307565891</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold">📍</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-medium text-gray-900">Location</p>
                      <p className="text-gray-600">Pune, India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/murkeh217"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                    >
                      <span className="sr-only">GitHub</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a
                      href="https://discord.com/users/404565785105924097"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white hover:bg-indigo-500 transition-colors"
                    >
                      <span className="sr-only">Discord</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9554 2.4189-2.1568 2.4189Z"/>
                      </svg>
                    </a>
                    <a
                      href="https://play.google.com/store/apps/dev?id=8964139791369830071"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-500 transition-colors"
                    >
                      <span className="sr-only">Google Play Developer</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                    </a>
                    <a
                      href="https://steamcommunity.com/profiles/76561198874984852"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-white hover:bg-slate-600 transition-colors"
                    >
                      <span className="sr-only">Steam</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.001 0C5.373 0 0 5.373 0 12.001c0 5.245 3.36 9.69 8.052 11.275l2.879-4.196c-.159-.052-.332-.081-.513-.081-1.102 0-2 .898-2 2s.898 2 2 2c1.102 0 2-.898 2-2 0-.17-.022-.335-.058-.496l4.149-2.968C17.634 16.827 18.816 16 20.126 16c2.073 0 3.754-1.681 3.754-3.754s-1.681-3.754-3.754-3.754-3.754 1.681-3.754 3.754c0 .207.017.409.05.606l-2.968 4.149c-.161-.036-.326-.058-.496-.058-.17 0-.335.022-.496.058L9.573 12.7c.036-.161.058-.326.058-.496 0-2.073-1.681-3.754-3.754-3.754S2.123 9.958 2.123 12.031s1.681 3.754 3.754 3.754c.207 0 .409-.017.606-.05l4.149 2.968c-.036.161-.058.326-.058.496 0 1.102.898 2 2 2s2-.898 2-2c0-.18-.029-.353-.081-.513l4.196-2.879C21.641 15.36 24 18.756 24 12.001 24 5.373 18.627 0 12.001 0zM20.126 10.492c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25zM5.877 14.281c-.967 0-1.75-.783-1.75-1.75s.783-1.75 1.75-1.75 1.75.783 1.75 1.75-.783 1.75-1.75 1.75z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="mt-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
