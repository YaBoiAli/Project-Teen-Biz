import React from 'react';

const CreateApp = () => {
  const openAppCreationTool = () => {
    window.open('https://www.appmysite.com/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      id="create-app"
      className="w-full h-screen bg-cover bg-center flex flex-col justify-between text-white relative"
      style={{
        backgroundImage: "url('../../Screenshots/bgImgbuildapp.png')", // Background image path
      }}
    >
      {/* Build App Title at the Top */}
      <div className="absolute top-8 w-full flex justify-center">
        <img
          src="../../Screenshots/build app title.png" // Path to Build App Title image
          alt="Build App Title"
          className="h-[100px] object-contain lg:h-[120px]" // Larger title size
        />
      </div>

      {/* Crystal Image at the Bottom Left */}
      <div className="absolute bottom-4 left-10 flex flex-col items-center">
        <img
          src="../../Screenshots/Crystalbuildapp.png" // Path to Crystal image
          alt="Crystal"
          className="h-[400px] object-contain" // Maintained original size
        />
      </div>

      {/* Build App Button Closer to the Middle */}
      <div className="absolute top-1/3 right-4 transform -translate-y-1/2">
        <img
          src="../../Screenshots/build app btn.png" // Path to Build App button image
          alt="Build App Button"
          onClick={openAppCreationTool} // Click handler to open the app creation tool
          className="cursor-pointer hover:scale-105 transition-transform duration-300 
            sm:h-[150px]   // Button size for small screens
            md:h-[180px]   // Button size for medium screens
            lg:h-[200px]   // Button size for large screens
            xl:h-[220px]   // Button size for extra-large screens
            w-auto"
        />
      </div>

      {/* Logo Kids at the Bottom Center */}
      <div className="absolute bottom-4 w-full flex justify-center">
        <img
          src="../../Screenshots/logo kids.png" // Path to Logo Kids image
          alt="Logo Kids"
          className="h-20 object-contain" // Maintained original size
        />
      </div>
    </div>
  );
};

export default CreateApp;
