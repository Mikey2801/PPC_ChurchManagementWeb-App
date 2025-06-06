import React from 'react';

const Events = () => {
  const events = [
    {
      title: "Youth Camp 2024",
      date: "April 15-17, 2024",
      time: "8:00 AM - 5:00 PM",
      location: "Pamukid Retreat Center",
      description: "Join us for three days of worship, fellowship, and spiritual growth. Open to all youth ages 13-25.",
      image: "youth-camp.jpg"
    },
    {
      title: "Easter Sunday Celebration",
      date: "March 31, 2024",
      time: "9:00 AM",
      location: "Main Sanctuary",
      description: "Celebrate the resurrection of our Lord Jesus Christ with special worship service and fellowship lunch.",
      image: "easter.jpg"
    },
    {
      title: "Bible Study Conference",
      date: "May 5, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Fellowship Hall",
      description: "An afternoon of in-depth Bible study and discussion on the book of Romans.",
      image: "bible-study.jpg"
    }
  ];

  const upcomingEvents = [
    {
      title: "Men's Prayer Breakfast",
      date: "Every Saturday",
      time: "7:00 AM",
      location: "Fellowship Hall"
    },
    {
      title: "Women's Bible Study",
      date: "Every Tuesday",
      time: "10:00 AM",
      location: "Room 201"
    },
    {
      title: "Youth Group Meeting",
      date: "Every Friday",
      time: "6:00 PM",
      location: "Youth Center"
    }
  ];

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Church Events</h1>
          <p className="text-lg max-w-3xl">
            Stay connected with our church community through various events and activities throughout the year.
          </p>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div key={index} className="card overflow-hidden">
                <div className="h-48 bg-gray-200 mb-4">
                  {/* Event image would go here */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <div className="mb-4">
                    <p className="text-green-600 font-semibold">{event.date}</p>
                    <p className="text-gray-600">{event.time}</p>
                    <p className="text-gray-600">{event.location}</p>
                  </div>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <button className="btn btn-primary w-full">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Events */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Regular Events</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="p-6 border-b last:border-b-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-gray-600">{event.date} at {event.time}</p>
                      <p className="text-gray-600">{event.location}</p>
                    </div>
                    <button className="btn btn-outline">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Church Calendar</h2>
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                {/* Calendar embed would go here */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-8">
            Subscribe to our newsletter to receive updates about upcoming events.
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md text-gray-900"
              />
              <button type="submit" className="btn btn-outline border-white text-white hover:bg-white hover:text-green-600">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events; 