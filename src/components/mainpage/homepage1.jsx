import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import background from "../../../Screenshots/bgmain1.png";
import footerImage from "../../../Screenshots/mainpagepeople.png";

const MainPage1 = () => {
    return (
        <div
            className="relative w-full h-screen flex flex-col justify-center items-center bg-cover bg-center"
            style={{ backgroundImage: `url(${background})` }}
        >
            {/* Main Title */}
            <div
                className="text-center text-7xl lg:text-9xl font-extrabold text-[#00ffa0] relative"
                style={{
                    textShadow:
                        "-4px -4px 0px #530091, 4px 4px 0px #530091, -4px 4px 0px #530091, 4px -4px 0px #530091",
                    transform: "rotate(-15deg) skewX(-20deg) translateY(-30px)",
                }}
            >
                The Teen Biz <br />App
            </div>

            {/* Bottom-Right Clickable Image (Hidden on Small Screens) */}
            <Link
                to="/nav"
                className="absolute bottom-0 right-5 md:right-10 lg:right-16 w-[60%] lg:w-[90%] hidden sm:block"
            >
                <img
                    src={footerImage}
                    alt="Footer"
                    className="w-full"
                />
            </Link>
        </div>
    );
};

export default MainPage1;
