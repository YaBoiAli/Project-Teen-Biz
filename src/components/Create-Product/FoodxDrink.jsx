import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../../Screenshots/foodxdrinkbg.webp"; // Adjust path if needed

const FoodDrinkPage = () => {
  const foodDrinkOptions = [
    { text: "Sell Food and Drinks", link: "https://www.cookin.com/", description: "Platform to sell homemade food online." },
    { text: "Create Recipes", link: "https://www.allrecipes.com/", description: "Community to share and discover recipes." },
    { text: "Catering Services", link: "https://www.roaminghunger.com/", description: "Connects food trucks with events." },
    { text: "Food Blog", link: "https://joythebaker.com/", description: "A personal blog sharing baking recipes and stories." },
    { text: "Baking Business", link: "https://www.happycow.net/", description: "Directory of vegan and vegan-friendly businesses." },
  ];

  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat px-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Title */}
      <div className="mb-10 text-center bg-white/70 px-6 py-4 rounded-lg shadow-lg">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#6311df]">
          <a href="/nav">Food & Drink Hub </a>
        </h1>
      </div>

      {/* Buttons Grid (2 rows, 3 columns) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-white/70 p-8 rounded-lg shadow-xl">
        {/* First row with three buttons */}
        <div className="flex justify-between sm:col-span-2 lg:col-span-3">
          {foodDrinkOptions.slice(0, 3).map((option, index) => (
            <a
              key={index}
              href={option.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-center w-64 sm:w-80 px-8 py-5 mr-5 text-xl sm:text-2xl font-bold text-black 
              bg-[#00ffa0] border-4 border-black rounded-xl shadow-[8px_8px_0px_#6311df] 
              transition-all duration-200 ease-in-out 
              hover:scale-110 hover:shadow-[12px_12px_0px_#530091] active:scale-95 comic-effect"
            >
              {option.text}
            </a>
          ))}
        </div>

        {/* Second row with two buttons centered */}
        <div className="flex justify-center sm:col-span-2 lg:col-span-3">
          {foodDrinkOptions.slice(3, 5).map((option, index) => (
            <a
              key={index}
              href={option.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-center w-64 sm:w-80 px-8 py-5 mr-5 text-xl sm:text-2xl font-bold text-black 
              bg-[#00ffa0] border-4 border-black rounded-xl shadow-[8px_8px_0px_#6311df] 
              transition-all duration-200 ease-in-out 
              hover:scale-110 hover:shadow-[12px_12px_0px_#530091] active:scale-95 comic-effect"
            >
              {option.text}
            </a>
          ))}
        </div>
      </div>

      {/* Comic Effect Styling */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');

          .comic-effect {
            font-family: 'Fredoka One', cursive;
            position: relative;
          }

          .comic-effect::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            top: 4px;
            left: 4px;
            background: rgba(0, 0, 0, 0.2);
            border-radius: 8px;
            z-index: -1;
          }

          @keyframes wobble {
            0% { transform: rotate(0deg); }
            25% { transform: rotate(-1deg); }
            50% { transform: rotate(1deg); }
            75% { transform: rotate(-1deg); }
            100% { transform: rotate(0deg); }
          }

          .comic-effect:hover {
            animation: wobble 0.3s ease-in-out infinite alternate;
          }
        `}
      </style>
    </div>
  );
};

export default FoodDrinkPage;
