import React from "react";
import SellServiceImage from "./SellTrailBlaze"; // Local image path

const SellService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-purple-500 to-blue-500">
      {/* Header */}
      <header className="text-white py-12 text-center">
        <h1 className="text-6xl font-extrabold">Sell Your Services and Products</h1>
        <h2 className="text-2xl mt-4 font-medium">Empower Your Business with Trail Blaze!</h2>
      </header>

      {/* Main Content */}
      <main className="p-8">
        {/* Feature Grid Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-2xl font-semibold text-purple-700">Submit Your Service or Product</h3>
            <p className="text-gray-600 mt-4">Create a listing and reach customers online and offline.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-2xl font-semibold text-green-700">Visit Trail Blaze Online</h3>
            <p className="text-gray-600 mt-4">Join our online marketplace and showcase your offerings.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-2xl font-semibold text-blue-700">Sell in Our Physical Stores</h3>
            <p className="text-gray-600 mt-4">Access our retail locations to sell directly to customers.</p>
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

export default SellService;
