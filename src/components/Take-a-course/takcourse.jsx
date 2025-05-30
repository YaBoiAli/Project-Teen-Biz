import React from "react";
import { useNavigate } from "react-router-dom";
import background from "../../../Screenshots/courseBG.png";
import footerImage from "../../../Screenshots/coursepeople.png";

const TakeCourses = () => {
    const navigate = useNavigate();

    const buttons = [
        { text: "Write a Book", link: "https://www.coursera.org/learn/write-your-first-novel" },
        { text: "Build an App or Game", link: "https://playacademy.withgoogle.com/courses/" },
        { text: "Create a Product", link: "https://www.coursera.org/courses?query=product+development" },
        { text: "Sell a Service", link: "https://www.sandler.com/online-sales-courses/" },
        { text: "Code", link: "https://www.codecademy.com/" },
        { text: "Start a Business", link: "https://www.scu.edu/mobi/" },
    ];

    return (
        <div
            className="relative w-full min-h-screen flex flex-col justify-center items-center gap-6 px-4 lg:pl-10 bg-cover bg-center"
            style={{ backgroundImage: `url(${background})` }}
        >
            {/* Title */}
            <div className="absolute top-5 right-5 flex flex-col items-center lg:items-end text-center lg:text-right w-full lg:w-auto mt-10 lg:mt-20">
                <a href="/nav">
                    <div className="w-[90%] sm:w-[70%] lg:w-[500px] px-6 lg:px-10 py-4 lg:py-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-black bg-[#00ffa0] border-4 border-black rounded-lg shadow-[6px_6px_0px_#530091] transform skew-x-[-10deg] cursor-pointer">
                        Take a Course!
                    </div>
                </a>
            </div>

            {/* Buttons */}
            <div className="flex flex-col items-center lg:items-start gap-4 w-full px-4 sm:px-6 lg:px-0">
                {buttons.map((btn, index) => (
                    <button
                        key={index} onClick={() => window.open(btn.link, '_blank')}
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
                className="absolute bottom-0 right-5 lg:right-16 w-[70%] lg:w-[50%] hidden sm:block"
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

export default TakeCourses;
