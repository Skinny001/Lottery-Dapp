"use client";

import React from "react";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-lg bg-white/10 border-b border-white/10 px-4 md:px-10 py-4 flex justify-between items-center">
      <div className="text-xl md:text-2xl font-semibold text-white tracking-wide">
        🎰 Lottery DApp
      </div>
      <button className="bg-gradient-to-br from-purple-600 to-blue-500 text-white px-4 py-2 rounded-xl shadow-md hover:scale-105 transition-all duration-200 font-medium text-sm">
        Connect Wallet
      </button>
    </header>
  );
};

export default Header;
