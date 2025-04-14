"use client";

import React from "react";

const WinnerSection = () => {
  return (
    <div className="bg-white/5 p-6 rounded-2xl shadow-lg w-full max-w-2xl mx-auto mt-6 text-white">
      <h2 className="text-lg font-semibold mb-4">Winner Info</h2>
      <div className="text-sm">
        <p><strong>Last Winner:</strong> 0x123...abcd</p>
        <p><strong>Prize:</strong> 500 LTK</p>
      </div>
    </div>
  );
};

export default WinnerSection;
