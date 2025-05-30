import React from 'react';

const DesignLogo = () => {
  const openInNewTab = () => {
    window.open('https://www.canva.com/create/logos/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      id="design"
      className="w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/bg3.png')", // Replace with your background image path
      }}
    >
      <div className="bg-black/60 rounded-xl p-8 shadow-lg backdrop-blur-sm max-w-[800px] text-center">
        <h1 className="text-6xl font-extrabold mb-8 text-white">
          Design Your Logo
        </h1>
        <p className="text-gray-200 mb-12 text-lg leading-relaxed">
          Create a logo that represents your vision. Click the button below to design a stunning logo effortlessly.
        </p>
        <div className="flex justify-center">
          <button
            onClick={openInNewTab}
            className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-white px-8 py-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 text-xl font-bold"
          >
            Open Logo Designer
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesignLogo;
