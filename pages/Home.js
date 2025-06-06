import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/PPC_logo-removebg-preview2.png';
import homeBg from '../assets/Homebg.png';
import lowerBg from '../assets/LowerBgHome.png';

const Home = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: `url(${homeBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400/50 to-green-400/50"></div>
        <div className="relative container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 flex justify-center">
              <img src={logo} alt="PPC Logo" className="w-96 h-auto" />
            </div>
            <div className="lg:w-1/2 text-left">
              <h2 className="text-2xl text-white mb-2">Welcome to,</h2>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
                Pamukid<br />Presbyterian Church
              </h1>
              <h3 className="text-xl md:text-2xl mb-4 text-white font-medium">
                A Home for Worship, Growth, and Community
              </h3>
              <p className="text-lg text-white mb-8 italic">
                "Join us in faith, fellowship, and service. Experience God's love and connect with a family that cares."
              </p>
              <Link 
                to="/visit" 
                className="inline-block bg-white text-green-600 hover:bg-green-50 px-12 py-3 rounded-lg font-semibold transition-colors"
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-green-600 mb-12">
            Discover More About Our Church
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-4">Programs</h3>
              <p className="text-sm text-gray-600 mb-4">
                Stay updated with our upcoming worship services, Bible studies, and community events.
              </p>
              <Link to="/program" className="text-green-600 font-semibold hover:text-green-700">
                Learn More →
              </Link>
            </div>
            <div className="bg-green-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-4">Events</h3>
              <p className="text-sm text-gray-600 mb-4">
                Explore ministries for youth, families, and outreach opportunities.
              </p>
              <Link to="/events" className="text-green-600 font-semibold hover:text-green-700">
                Learn More →
              </Link>
            </div>
            <div className="bg-green-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-4">Visit Us</h3>
              <p className="text-sm text-gray-600 mb-4">
                Find our location, service times, and frequently asked questions for new visitors.
              </p>
              <Link to="/visit" className="text-green-600 font-semibold hover:text-green-700">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Worship Service Banner */}
      <section 
        className="relative py-20 text-white"
        style={{
          backgroundImage: `url(${lowerBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Worship Service</h2>
          <p className="text-4xl md:text-5xl font-bold">
            Every Sundays at 9:00 AM
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home; 