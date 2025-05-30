import React from "react";
import SellServiceImage from "./SellTrailBlaze"; // Local image path
import SellTrailImage from "./SellTrail.png";

const Sell = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-purple-500 to-blue-500">
      {/* Header */}
      <header className="text-white py-12 text-center">
        <h1 className="text-6xl font-extrabold">Sell Your Services and Products</h1>
        <h2 className="text-2xl mt-4 font-medium">Empower Your Business with Trail Blaze!</h2>
      </header>

      {/* Main Content */}
      <main className="p-8">
        {/* Service Section */}
        <section className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-purple-700 mb-4">Sell a Service</h2>
          <p className="text-lg text-gray-100 mb-8">
            Start creating your service by selecting an option from the following categories.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href="#">
              <button className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-all">
                Service for Businesses
              </button>
            </a>
            <a href="#">
              <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all">
                Service for Individuals
              </button>
            </a>
          </div>
        </section>

        {/* Trail Blaze Section */}
        <section className="mb-12 text-center">
          <img
            src={SellTrailImage}
            alt="Trail Blaze Shop"
            className="mb-6 rounded-lg shadow-md mx-auto w-full max-w-md"
          />
          <h2 className="text-white text-4xl font-bold mb-4">
            Ready to Showcase Your Products?
          </h2>
          <p className="text-lg text-gray-100 mb-8">
            Submit your product mockups and information to sell at Trail Blaze Shops online and in physical stores. Empower your entrepreneurial journey and connect with real-world customers!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="#" className="block">
              <button className="w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700">
                Submit Your Products
              </button>
            </a>
            <a
              href="http://www.youthpopupshop.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <button className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700">
                Visit Trail Blaze Online
              </button>
            </a>
            <a href="#" className="block">
              <button className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
                Visit Our Physical Stores
              </button>
            </a>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="text-center mt-12">
          <a href="#">
            <button className="px-8 py-4 bg-purple-600 text-white text-xl font-semibold rounded-full shadow-lg hover:bg-purple-700 transition-all">
              Get Started Now
            </button>
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-12">
        <p>© {new Date().getFullYear()} Target Evolution Inc. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Sell;
