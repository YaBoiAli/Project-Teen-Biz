import React from "react";
import { useNavigate } from "react-router-dom";
import background from "../../../Screenshots/bgProduct.png";
import footerImage from "../../../Screenshots/productLady.png";

const Product = () => {
  const navigate = useNavigate();

  const buttons = [
    { text: "Apparel", link: "https://www.vistaprint.com/clothing-bags/clothing?srsltid=AfmBOopOkhSBR06KUG1vG4ZiSsLr_rHc9SJSCedpD8IcvATVYQU1ZOE7", alignment: "mr-0" },
    { text: "Jewelry", link: "https://www.metalpressions.com/ojd?skipLanding=True", alignment: "lg:mr-20" },
    { text: "Cosmetics", link: "https://onoxa.com/all-products", alignment: "mr-0" },
    { text: "Arts & Crafts", link: "https://www.thestartupsquad.com/11-of-the-best-craft-business-ideas-for-crafty-kids-and-teens/", alignment: "lg:mr-20" },
    { text: "Shoes", link: "https://brandyourwalk.com/sneakers/974-create-your-own.html", alignment: "mr-0" },
    { text: "Food & Drink", link: "/create-product/food-drink", alignment: "lg:mr-20" },
    { text: "Bath & Spa", link: "https://www.happinessishomemade.net/category/craft/bath-body/", alignment: "mr-0" },

  ];

  return (
    <div
      className="relative w-full min-h-screen flex flex-col justify-center items-end gap-6 px-4 lg:pr-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Title */}
      <div className="absolute top-0 left-5 flex flex-col items-start text-center lg:text-left w-full lg:w-auto mt-10">
        <a href="/nav">
          <div className="w-[90%] sm:w-[70%] md:w-[500px] px-4 lg:px-10 py-2 lg:py-6 text-2xl sm:text-3xl lg:text-5xl font-bold text-black bg-[#00ffa0] border-4 border-black rounded-lg shadow-[6px_6px_0px_#530091] transform skew-x-[-10deg] cursor-pointer">
            Create A Product
          </div>
        </a>

      </div>

      {/* Buttons */}
      <div className="flex flex-col items-end gap-10 w-full lg:w-auto px-4 sm:px-6 lg:px-0">
        {buttons.map((btn, index) => (
          <button
            key={index}
            onClick={() => {
              if (btn.link.startsWith("http")) {
                // Open external links in a new tab
                window.open(btn.link, "_blank");
              } else {
                // Navigate within the app for internal links
                navigate(btn.link);
              }
            }}
            className={`relative w-full max-w-[160px] sm:max-w-[160px] lg:max-w-[270px] px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-lg sm:text-xl font-bold text-white 
            bg-[#6311df] border-4 border-black rounded-lg shadow-[6px_6px_0px_#00ffa0] 
            transform rotate-[-4deg] skew-x-[-10deg] ${btn.alignment} transition-all duration-200 ease-in-out 
            hover:scale-110 hover:shadow-[10px_10px_0px_#530091] active:scale-95 comic-effect`}
          >
            {btn.text}
          </button>
        ))}
      </div>

      {/* Bottom-Left Image (Hidden on smaller screens) */}
      <img
        src={footerImage}
        alt="Footer"
        className="absolute bottom-0 left-5 md:left-10 lg:left-16 w-[60%] sm:w-[50%] md:w-[45%] lg:w-[35%] hidden md:block"
      />

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

export default Product;
