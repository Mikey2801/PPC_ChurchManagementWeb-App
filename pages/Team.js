import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: "Rev. John Doe",
      role: "Senior Pastor",
      description: "Leading our congregation with wisdom and grace for over 10 years.",
      image: "pastor.jpg"
    },
    {
      name: "Rev. Jane Smith",
      role: "Associate Pastor",
      description: "Dedicated to youth ministry and community outreach.",
      image: "associate-pastor.jpg"
    },
    {
      name: "Elder Mark Johnson",
      role: "Ministry Director",
      description: "Overseeing our various ministry programs and volunteer initiatives.",
      image: "ministry-director.jpg"
    }
  ];

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Our Leadership Team</h1>
          <p className="text-lg max-w-3xl">
            Meet the dedicated individuals who serve and lead our church community with passion and purpose.
          </p>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-200 overflow-hidden">
                  {/* Member image would go here */}
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-green-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Together, our leadership team is committed to building a vibrant church community that serves God 
            and our neighbors with love, compassion, and dedication to spiritual growth.
          </p>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
          <p className="text-gray-600 mb-8">
            Want to serve alongside our team? There are many opportunities to get involved in our ministry.
          </p>
          <button className="btn btn-primary">
            Join Our Team
          </button>
        </div>
      </section>
    </div>
  );
};

export default Team; 