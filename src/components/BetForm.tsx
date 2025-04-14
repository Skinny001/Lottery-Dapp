"use client";

import React from "react";

const BetForm = () => {
  return (
    <div className="bg-white/5 p-6 rounded-2xl shadow-lg w-full max-w-md mx-auto mt-6">
      <h2 className="text-lg font-semibold mb-4 text-white">Place Your Bet</h2>
      <button className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white px-4 py-2 rounded-md font-medium mb-3">
        Bet Once
      </button>
      <button className="w-full bg-blue-800 hover:bg-blue-900 transition-all text-white px-4 py-2 rounded-md font-medium">
        Bet Many Times
      </button>
    </div>
  );
};

export default BetForm;