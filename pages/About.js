import React from 'react';

const About = () => {
  return (
    <div className="animate-fadeIn">
      {/* Vision & Mission Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Vision</h2>
              <p className="text-lg">
                "We envision Proclaiming Christ to families in the community both in our words in actions. Preparing then to be spiritually mature members, and sending them to Participate in fulfilling Christ's great commission with integrity and in love."
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Mission</h2>
              <p className="text-lg">
                "To empower and equip people to help fulfill the great commission through evangelism discipleship, and becoming an example of the true Christian faith in the community."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Core Values</h2>
          <p className="text-center text-lg mb-12">
            Pamukid Presbyterian Church subscribes to the proclamation of the gospel prepares the converts for Christian maturity and commissions them for G-D's work.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">PROCLAIM</h3>
              <p className="text-gray-600">
                We put value on the gospel presentation because it is the primary role of the church
              </p>
            </div>
            <div className="card text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">PREPARE</h3>
              <p className="text-gray-600">
                Every member is a leader and discipleship are the venues to have a vibrant church.
              </p>
            </div>
            <div className="card text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">COMMISSION</h3>
              <p className="text-gray-600">
                Christians are called to be the salt and light, deploying every member to the key sectors of the society are the main purpose of the church
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 