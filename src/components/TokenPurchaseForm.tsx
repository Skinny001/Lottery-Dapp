"use client";

import React, { useState } from "react";

const TokenPurchaseForm = () => {
  const [ethAmount, setEthAmount] = useState("");

  return (
    <div className="bg-white/5 p-6 rounded-2xl shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-4 text-white">Buy Lottery Tokens</h2>
      <input
        type="number"
        placeholder="Enter ETH amount"
        value={ethAmount}
        onChange={(e) => setEthAmount(e.target.value)}
        className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white mb-4"
      />
      <button className="w-full bg-purple-600 hover:bg-purple-700 transition-all text-white px-4 py-2 rounded-md font-medium">
        Purchase
      </button>
    </div>
  );
};

export default TokenPurchaseForm;