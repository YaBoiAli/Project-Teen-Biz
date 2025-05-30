import React, { useState, useEffect } from 'react';
import {
  AiOutlineAppstore,
  AiOutlineBook,
  AiOutlineHighlight,
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineShoppingCart,
  AiOutlineRocket,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Sidenav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    // Disable scrolling on the body when the sidebar is active
    if (nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup function to ensure scrolling is restored
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [nav]);

  const navItems = [
    { to: "/", icon: <AiOutlineHome size={20} />, label: "Home" },
    { to: "/create-app", icon: <AiOutlineAppstore size={20} />, label: "Build an App" },
    { to: "/write-book", icon: <AiOutlineBook size={20} />, label: "Write a Book" },
    { to: "/design", icon: <AiOutlineHighlight size={20} />, label: "Design your Brand & Logo" },
    { to: "/create-product", icon: <AiOutlineShoppingCart size={20} />, label: "Create a Product" },
    { to: "/take-course", icon: <AiOutlineRocket size={20} />, label: "Take a Quick Course" },
    { to: "/sell-trail-blaze", icon: <AiOutlineShoppingCart size={20} />, label: "Sell in Trail Blaze" },
    { to: "/sell-service", icon: <AiOutlineAppstore size={20} />, label: "Sell a Service" },
  ];

  return (
    <div>
      {/* Mobile menu icon */}
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-5 right-4 z-[99] md:hidden cursor-pointer"
        size={30}
      />

      {/* Mobile Navigation */}
      {nav && (
        <div className="fixed w-full h-screen bg-white/90 z-[20]">
          <div className="flex flex-col items-center py-10">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                onClick={handleNav}
                className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
              >
                {item.icon}
                <span className="pl-4">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden md:block fixed top-[25%] z-10">
        <div className="flex flex-col">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
