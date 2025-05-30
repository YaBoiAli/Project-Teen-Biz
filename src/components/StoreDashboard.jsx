import React from "react";
import { useNavigate } from "react-router-dom";
import background from "../../Screenshots/mallimage.png";

// Hardcoded Example Products
const exampleProducts = [
  {
    id: 1,
    name: "Work in progress",
    price: "Sorry for the wait",
    image: "https://media1.tenor.com/m/-6Ko760sP4IAAAAd/rell-seas-sea-monkey-pirates.gif", // Replace with actual image
    description: "High-quality custom web app under construction."
  },
  
];

const StoreDashboard = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative w-full min-h-screen flex flex-col justify-center items-center gap-6 px-4 lg:pl-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Title */}
      <div className="absolute top-5 right-5 flex flex-col items-center lg:items-end text-center lg:text-right w-full lg:w-auto mt-10 lg:mt-20">
        <div className="w-[90%] sm:w-[70%] lg:w-[700px] px-6 lg:px-10 py-4 lg:py-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-white bg-[#6311df] border-4 border-black rounded-lg shadow-[6px_6px_0px_#530091] transform rotate-[-4deg] skew-x-[-10deg]">
          Your Store Dashboard
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {exampleProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white border-4 border-black p-4 rounded-lg shadow-md w-64 flex flex-col items-center transform hover:scale-105 transition-all duration-300"
          >
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold">{product.name}</h3>
            <p className="text-gray-600 text-center">{product.description}</p>
            <p className="text-lg font-semibold text-green-600 mt-2">{product.price}</p>
            <button className="mt-4 bg-[#00ffa0] text-black font-bold py-2 px-4 rounded-lg border-2 border-black shadow-lg hover:shadow-xl active:scale-95">
              BTN
            </button>
          </div>
        ))}
      </div>

      {/* Footer Image */}
      
    </div>
  );
};

export default StoreDashboard;
