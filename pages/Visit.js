import React from 'react';

const Visit = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Plan Your Visit</h1>
          <p className="text-lg max-w-3xl">
            We're excited to welcome you to Pamukid Presbyterian Church. Here's everything you need to know for your first visit.
          </p>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Service Times</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Sunday Worship</h3>
                <p className="text-gray-600">9:00 AM</p>
              </div>
              <div className="card text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Bible Study</h3>
                <p className="text-gray-600">Wednesday, 7:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Location</h2>
            <div className="card">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Church Address</h3>
                <p className="text-gray-600">
                  Pamukid Presbyterian Church<br />
                  Pamukid, San Fernando<br />
                  Camarines Sur, Philippines
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Directions</h3>
                <p className="text-gray-600">
                  Our church is located in the heart of Pamukid. You'll find us just off the main road, with ample parking available for all our visitors.
                </p>
              </div>
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                {/* Google Maps embed would go here */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What to Expect</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Warm Welcome</h3>
                <p className="text-gray-600">
                  Our greeters will welcome you and help you find your way around.
                </p>
              </div>
              <div className="card text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Worship Service</h3>
                <p className="text-gray-600">
                  Experience uplifting worship and biblical teaching.
                </p>
              </div>
              <div className="card text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Fellowship</h3>
                <p className="text-gray-600">
                  Join us for fellowship and refreshments after the service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
            <div className="card">
              <form className="space-y-6">
                <div>
                  <label className="label" htmlFor="name">Name</label>
                  <input type="text" id="name" className="input" />
                </div>
                <div>
                  <label className="label" htmlFor="email">Email</label>
                  <input type="email" id="email" className="input" />
                </div>
                <div>
                  <label className="label" htmlFor="message">Message</label>
                  <textarea id="message" rows="4" className="input"></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Visit; 