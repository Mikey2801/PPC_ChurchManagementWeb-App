import React from 'react';

const Program = () => {
  const programs = [
    {
      title: "Men's Fellowship",
      schedule: "EVERY FRIDAY 6PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc turpis diam, fringilla nec nisl et, fringilla molestie turpis. Maecenas in lectus neque. Nam at nibh sit amet ante pellentesque consectetur non eget nisi.",
      image: "mens-fellowship.jpg"
    },
    {
      title: "Nanay Fellowship",
      schedule: "---",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc turpis diam, fringilla nec nisl et, fringilla molestie turpis. Maecenas in lectus neque. Nam at nibh sit amet ante pellentesque consectetur non eget nisi.",
      image: "nanay-fellowship.jpg"
    },
    {
      title: "Children Ministry",
      schedule: "EVERY FRIDAY 2:00-5:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc turpis diam, fringilla nec nisl et, fringilla molestie turpis. Maecenas in lectus neque. Nam at nibh sit amet ante pellentesque consectetur non eget nisi.",
      image: "children-ministry.jpg"
    },
    {
      title: "Youth Jam",
      schedule: "EVERY END OF THE MONTH",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc turpis diam, fringilla nec nisl et, fringilla molestie turpis. Maecenas in lectus neque. Nam at nibh sit amet ante pellentesque consectetur non eget nisi.",
      image: "youth-jam.jpg"
    },
    {
      title: "Youth Camp",
      schedule: "EVERY YEAR",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc turpis diam, fringilla nec nisl et, fringilla molestie turpis. Maecenas in lectus neque. Nam at nibh sit amet ante pellentesque consectetur non eget nisi.",
      image: "youth-camp.jpg"
    }
  ];

  return (
    <div className="animate-fadeIn">
      {/* Header Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Our Programs</h1>
          <p className="text-lg max-w-3xl">
            From dynamic youth groups to enriching adult studies, there's something for everyone to deepen their connection with God and each other. Join us as we navigate life's path together, guided by faith and fellowship.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="card overflow-hidden">
                <div className="h-48 bg-gray-200 mb-4">
                  {/* Program image would go here */}
                </div>
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-sm font-semibold text-green-600 mb-4">{program.schedule}</p>
                <p className="text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-gray-600 mb-8">
            Be part of our growing family and participate in these enriching programs.
          </p>
          <button className="btn btn-primary">
            Register Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Program; 