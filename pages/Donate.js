import React from 'react';

const Donate = () => {
  const givingOptions = [
    {
      title: "Online Giving",
      description: "Make a secure one-time or recurring donation through our online platform.",
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      title: "Bank Transfer",
      description: "Transfer your donation directly to our church bank account.",
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      )
    },
    {
      title: "Sunday Offering",
      description: "Give during our Sunday service offering collection.",
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Support Our Ministry</h1>
          <p className="text-lg max-w-3xl">
            Your generous giving helps us continue our mission of spreading God's love and making a difference in our community.
          </p>
        </div>
      </section>

      {/* Giving Options */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Ways to Give</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {givingOptions.map((option, index) => (
              <div key={index} className="card text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    {option.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{option.title}</h3>
                <p className="text-gray-600 mb-6">{option.description}</p>
                <button className="btn btn-primary w-full">
                  Give Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Giving Form */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Make a Donation</h2>
            <div className="card">
              <form className="space-y-6">
                <div>
                  <label className="label" htmlFor="amount">Amount</label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-gray-500">₱</span>
                    <input
                      type="number"
                      id="amount"
                      className="input pl-8"
                      placeholder="0.00"
                      min="0"
                      step="100"
                    />
                  </div>
                </div>
                <div>
                  <label className="label">Giving Type</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button type="button" className="btn btn-outline">One-time</button>
                    <button type="button" className="btn btn-outline">Monthly</button>
                  </div>
                </div>
                <div>
                  <label className="label" htmlFor="purpose">Purpose</label>
                  <select id="purpose" className="input">
                    <option>Tithes</option>
                    <option>Missions</option>
                    <option>Building Fund</option>
                    <option>Youth Ministry</option>
                    <option>General Fund</option>
                  </select>
                </div>
                <div>
                  <label className="label" htmlFor="name">Name (Optional)</label>
                  <input type="text" id="name" className="input" />
                </div>
                <div>
                  <label className="label" htmlFor="email">Email (Optional)</label>
                  <input type="email" id="email" className="input" />
                </div>
                <button type="submit" className="btn btn-primary w-full">
                  Proceed to Payment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Details */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Bank Account Details</h2>
            <div className="card">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold mb-2">Bank Transfer Information</h3>
                  <p className="text-gray-600">
                    You can make a direct bank transfer to our church account:
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold">Bank Name:</p>
                    <p className="text-gray-600">Sample Bank</p>
                  </div>
                  <div>
                    <p className="font-semibold">Account Name:</p>
                    <p className="text-gray-600">Pamukid Presbyterian Church</p>
                  </div>
                  <div>
                    <p className="font-semibold">Account Number:</p>
                    <p className="text-gray-600">1234-5678-9012</p>
                  </div>
                  <div>
                    <p className="font-semibold">Branch:</p>
                    <p className="text-gray-600">San Fernando Branch</p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-sm text-gray-600">
                    Please include your name in the transfer reference for proper recording of your donation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Message */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Thank You for Your Support</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your generous contributions help us maintain our church facilities, support our ministries, and serve our community. We are grateful for your partnership in spreading God's love.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Donate; 