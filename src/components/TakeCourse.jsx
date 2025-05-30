import React from "react";

const TakeCourse = () => {
  const courses = [
    
    {
      title: "Write a Book",
      description: "Learn the steps to transform your ideas into a published book.",
      bgColor: "bg-teal-500",
      hoverColor: "hover:bg-teal-600",
    },
    {
      title: "Build an App or Game",
      description: "Explore development techniques to bring your ideas to life.",
      bgColor: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
    },
    {
      title: "Create a Product",
      description: "Design, prototype, and launch your product to the market.",
      bgColor: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
    },
    {
      title: "Sell a Service",
      description: "Discover strategies to monetize your skills and expertise.",
      bgColor: "bg-indigo-500",
      hoverColor: "hover:bg-indigo-600",
    },
    {
      title: "Code",
      description: "Learn coding basics and start building applications.",
      bgColor: "bg-red-500",
      hoverColor: "hover:bg-red-600",
    },
    {
      title: "Start a Business",
      description: "Learn the essentials to kickstart your entrepreneurial journey.",
      bgColor: "bg-green-700",
      hoverColor: "hover:bg-green-800",
      link: "https://targetevolution.thinkific.com/courses/teen-biz-camp",
    },
    {
      title: "Sell and Communicate with Customers",
      description: "Master the art of selling and build lasting relationships.",
      bgColor: "bg-green-600",
      hoverColor: "hover:bg-green-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#6110DB] to-[#00FFA0] flex flex-col items-center">
      {/* Header */}
      <header className="text-center py-12 px-6">
        <h1 className="text-5xl font-extrabold text-white">Take a Quick Course</h1>
        <p className="text-lg text-[#D7FFED] mt-4">
        Learn How To
        </p>
      </header>

      {/* Main Content */}
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full px-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="rounded-xl shadow-md p-6 bg-white text-center hover:shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{course.title}</h3>
            {/* Description */}
            <p className="text-gray-600 mb-6">{course.description}</p>
            {/* Button */}
            <a
              href={course.link || "#"}
              target={course.link ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="block"
            >
              <button
                className={`w-full px-6 py-3 text-white font-semibold rounded-md shadow-md ${course.bgColor} ${course.hoverColor}`}
              >
                Learn More
              </button>
            </a>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 mt-12 w-full">
        <p>© {new Date().getFullYear()} Target Evolution, Inc. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TakeCourse;