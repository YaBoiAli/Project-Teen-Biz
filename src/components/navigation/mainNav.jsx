import React from "react";
import { useNavigate } from "react-router-dom";
import background from "../../../Screenshots/MainNavBG.png";
import footerImage from "../../../Screenshots/business.png";

const MainNav = () => {
  const navigate = useNavigate();

  const buttons = [
    { text: "Create a Product", link: "/product", alignment: "mr-0" },
    { text: "Sell a Service", link: "/service", alignment: "lg:mr-20" },
    { text: "Build an App", link: "/sellapp", alignment: "mr-0" },
    { text: "Write a Book", link: "/writing", alignment: "lg:mr-20" },
    { text: "Design Station", link: "/Design-Station", alignment: "mr-0" },
    { text: "Take a Course", link: "/take-course", alignment: "lg:mr-20" },
    { text: "Sell in Biz Shop", link: "/sell-in-the-teen-biz-shop", alignment: "mr-0" },
  ];

  return (
    <div
      className="relative w-full min-h-screen flex flex-col justify-center items-end gap-6 px-4 lg:pr-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Title */}
      <div className="absolute top-0 left-5 flex flex-col items-start text-center lg:text-left w-full lg:w-auto mt-10">
        {/* Main Title */}
        <div className="w-[90%] sm:w-[70%] lg:w-[500px] px-6 lg:px-10 py-4 lg:py-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-white bg-[#6311df] border-4 border-black rounded-lg shadow-[6px_6px_0px_#530091] transform rotate-[-4deg] skew-x-[-10deg]">
          The Teen Biz App
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col items-end gap-4 w-full lg:w-auto px-4 sm:px-6 lg:px-0 mt-20">
        {buttons.map((btn, index) => (
          <button
            key={index}
            onClick={() => navigate(btn.link)}
            className={`relative w-full max-w-[280px] sm:max-w-[320px] lg:w-80 px-6 lg:px-8 py-3 lg:py-4 text-lg sm:text-xl lg:text-2xl font-bold text-black 
            bg-[#00ffa0] border-4 border-black rounded-lg shadow-[6px_6px_0px_#6311df] 
            transform rotate-[-4deg] skew-x-[-10deg] ${btn.alignment} transition-all duration-200 ease-in-out 
            hover:scale-110 hover:shadow-[10px_10px_0px_#530091] active:scale-95 comic-effect`}
          >
            {btn.text}
          </button>
        ))}
      </div>

      {/* Bottom-Left Image (Hidden on Small Screens) */}
      <img
        src={footerImage}
        alt="Footer"
        className="absolute bottom-0 left-5 md:left-10 lg:left-16 w-[60%] sm:w-[50%] md:w-[45%] lg:w-[35%] hidden sm:block"
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

export default MainNav;
