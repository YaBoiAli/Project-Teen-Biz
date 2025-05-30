import React from 'react';

const WriteBook = () => {
  const openInNewTab = () => {
    window.open('https://noveleasy.com/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      id="write-book"
      className="w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('bg.png')",
      }}
    >
      <div className="bg-black/60 rounded-xl p-8 shadow-lg backdrop-blur-sm max-w-[800px] text-center">
        <h1 className="text-6xl font-extrabold mb-8 text-white">
          Write Your Book
        </h1>
        <p className="text-gray-200 mb-12 text-lg leading-relaxed">
          Begin your creative journey and bring your story to life. Click the button below to get started!
        </p>
        <div className="flex justify-center">
          <button
            onClick={openInNewTab}
            className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-white px-8 py-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 text-xl font-bold"
          >
            Open Book Writing Tool
          </button>
        </div>
      </div>
    </div>
  );
};

export default WriteBook;
