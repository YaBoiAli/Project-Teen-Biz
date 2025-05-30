import React from "react";

const Features = () => {
  const features = [
    {
      title: "Entrepreneurship Training",
      description: "Empowering youth with business skills to create their own futures.",
      icon: "🚀", // Replace with an icon library if needed
    },
    {
      title: "Real-World Experience",
      description: "Hands-on learning through product creation and sales.",
      icon: "🌟",
    },
    {
      title: "Supportive Community",
      description: "Join a network of young innovators and mentors.",
      icon: "🤝",
    },
    {
      title: "Practical Resources",
      description: "Access toolkits, guides, and opportunities to succeed.",
      icon: "📦",
    },
    {
      title: "Innovative Thinking",
      description: "Encouraging creativity and problem-solving skills.",
      icon: "💡",
    },
    {
      title: "Financial Literacy",
      description: "Teaching essential money management skills.",
      icon: "💵",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#6110DB] to-[#00FFA0] flex flex-col items-center justify-center">
      {/* Header */}
      <div className="text-center mb-10 px-6">
        <h1 className="text-5xl font-extrabold text-white">
          Target Evolution Empowers the Future.
        </h1>
        <p className="text-lg text-[#D7FFED] mt-4">
          Discover the features that make youth entrepreneurship a reality.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full px-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            {/* Icon */}
            <div className="text-6xl text-[#00B76C] mb-4">{feature.icon}</div>
            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              {feature.title}
            </h3>
            {/* Description */}
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
