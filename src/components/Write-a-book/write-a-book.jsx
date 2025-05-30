import React from "react";
import { useNavigate } from "react-router-dom";
import background from "../../../Screenshots/library.png";
import footerImage from "../../../Screenshots/readingpeople.png";

const Writing = () => {
  const navigate = useNavigate();

  const buttons = [
    { text: "Write Your Book", link: "https://goteenwriters.com/", alignment: "ml-0" },
    { text: "Edit/Proofread Your Book", link: "https://proofed.com/author/book/", alignment: "ml-20" },
    { text: "Design Your Book", link: "https://www.wattpad.com/", alignment: "ml-0" },
    { text: "Convert to Audiobook", link: "https://speechify.com/blog/turn-any-book-into-audiobook/?srsltid=AfmBOopkw5d1BiGEXMFjh4N87x51l34iyoDotkoXntUCRtx5yexXuiDd", alignment: "ml-20" },
    { text: "Publish & Distribute Your Book", link: "https://kdp.amazon.com/en_US/", alignment: "ml-0" },
  ];

  return (
    <div
      className="relative w-full h-screen flex flex-col justify-center items-start gap-6 px-4 lg:pl-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Title */}
      <div className="absolute top-5 right-5 flex flex-col items-end text-right w-full lg:w-auto mt-20">
        {/* Main Title */}
        <a href="/nav">
          <div className="w-[90%] sm:w-[70%] lg:w-[500px] px-6 lg:px-10 py-4 lg:py-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-black bg-[#00ffa0] border-4 border-black rounded-lg shadow-[6px_6px_0px_#530091] transform skew-x-[-10deg] cursor-pointer">
            Write a Book
          </div>
        </a>
      </div>

      {/* Buttons */}
      <div className="flex flex-col items-start gap-4 w-full lg:w-auto px-4">
        {buttons.map((btn, index) => (
          <a
            key={index}
            href={btn.link}
            target={btn.link.startsWith("http") ? "_blank" : "_self"}
            rel={btn.link.startsWith("http") ? "noopener noreferrer" : ""}
          >
            <button
              className={`relative w-full max-w-[30 0px] lg:w-80 px-6 lg:px-8 py-3 lg:py-4 text-lg lg:text-2xl font-bold text-black 
                bg-[#00ffa0] border-4 border-black rounded-lg shadow-[6px_6px_0px_#6311df] 
                transform rotate-[4deg] skew-x-[10deg] ${btn.alignment} transition-all duration-200 ease-in-out 
                hover:scale-110 hover:shadow-[10px_10px_0px_#530091] active:scale-95 comic-effect`}
            >
              {btn.text}
            </button>
          </a>
        ))}
      </div>

      {/* Bottom-Right Image (Hidden on Small Screens) */}
      <img
        src={footerImage}
        alt="Footer"
        className="absolute bottom-0 right-5 md:right-10 lg:right-16 w-[70%] lg:w-[45%] hidden sm:block"
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
            25% { transform: rotate(1deg); }
            50% { transform: rotate(-1deg); }
            75% { transform: rotate(1deg); }
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

export default Writing;
