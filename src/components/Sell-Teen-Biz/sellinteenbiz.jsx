import React from "react";
import { useNavigate } from "react-router-dom";
import background from "../../../Screenshots/mallimage.png";
import footerImage from "../../../Screenshots/sellingperson.png";

const SellinTeenBiz = () => {
    const navigate = useNavigate();

    const buttons = [
        { text: "Open your Store", link: "/store-dashboard", alignment: "ml-0" },
        { text: "Submit Your Products to Trail Blaze", link: "#" },
        { text: "Visit Trail Blaze Online", link: "http://www.youthpopupshop.com" },
        { text: "Visit Trail Blaze Shops", link: "#" },
    ];

    return (
        <div
            className="relative w-full min-h-screen flex flex-col justify-center items-center gap-6 px-4 lg:pl-10 bg-cover bg-center"
            style={{ backgroundImage: `url(${background})` }}
        >
            {/* Title */}
            <div className="absolute top-5 right-5 flex flex-col items-center lg:items-end text-center lg:text-right w-full lg:w-auto mt-10 lg:mt-20">
                <a href="/nav">
                    <div className="w-[90%] sm:w-[70%] lg:w-[580px] px-6 lg:px-10 py-4 lg:py-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-black bg-[#00ffa0] border-4 border-black rounded-lg shadow-[6px_6px_0px_#530091] transform skew-x-[-10deg] cursor-pointer">
                        Sell in Teen Biz Shop
                    </div>
                </a>

            </div>

            {/* Buttons */}
            <div className="flex flex-col items-center lg:items-start gap-4 w-full px-4 sm:px-6 lg:px-0">
                {buttons.map((btn, index) => (
                    <button
                        key={index} onClick={() => navigate(btn.link)}
                        className={`relative w-full max-w-[280px] sm:max-w-[320px] lg:w-80 px-6 lg:px-8 py-3 lg:py-4 text-lg sm:text-xl lg:text-2xl font-bold text-black 
                        bg-[#00ffa0] border-4 border-black rounded-lg shadow-[6px_6px_0px_#6311df] 
                        transform rotate-[4deg] skew-x-[10deg] ${btn.alignment} transition-all duration-200 ease-in-out 
                        hover:scale-110 hover:shadow-[10px_10px_0px_#530091] active:scale-95 comic-effect`}
                    >
                        {btn.text}
                    </button>
                ))}
            </div>

            {/* Bottom-Right Image (Hidden on Small Screens) */}
            <img
                src={footerImage}
                alt="Footer"
                className="absolute bottom-0 right-5 lg:right-16 w-[60%] lg:w-[35%] hidden sm:block"
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

export default SellinTeenBiz;
