import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const productCategories = [
    "Apparel",
    "Jewelry",
    "Cosmetics",
    "Arts & Crafts",
    "Shoes",
    "Food & Drink",
    "Bath & Spa"
  ];

  const CategoryButtons = () => {
    return (
      <div className="category-buttons">
        {productCategories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategorySelect(category)}
            className="category-btn"
          >
            {category}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div
      className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "radial-gradient(circle, #0050b3, #002060)",
      }}
    >
      {/* Marvel-Style Burst Effect */}
      <div
        className="absolute inset-0 animate-burst"
        style={{
          background:
            "conic-gradient(from 90deg, transparent, white 15%, transparent 30%)",
          mask: "radial-gradient(circle, transparent 20%, black 20%)",
          WebkitMask: "radial-gradient(circle, transparent 20%, black 20%)",
          backgroundSize: "100% 100%",
          opacity: 0.2,
        }}
      ></div>

      {/* App Title with Animation */}
      <h1
        className="text-6xl font-extrabold mb-12 drop-shadow-lg text-center z-10 animate-fade-in"
        style={{
          color: "#00FFA0",
          textShadow:
            "-2px -2px 0 #6110DB, 2px -2px 0 #6110DB, -2px 2px 0 #6110DB, 2px 2px 0 #6110DB",
        }}
      >
        The Teen Biz App
      </h1>

      {/* Speech Bubble: Enter */}
      <div
        onClick={() => navigate("/main")}
        className="speech-bubble bg-white text-black px-8 py-4 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform z-10 animate-bounce"
        style={{
          border: "2px solid black",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          maxWidth: "300px",
        }}
      >
        <p className="text-lg font-bold text-center">
          Click this bubble to <span className="text-blue-600">ENTER!</span>
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
