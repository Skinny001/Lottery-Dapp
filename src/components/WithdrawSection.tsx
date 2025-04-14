"use client";

import React, { useState } from "react";

const WithdrawSection = () => {
  const [amount, setAmount] = useState("");

  return (
    <div className="bg-white/5 p-6 rounded-2xl shadow-lg w-full max-w-2xl mx-auto mt-6 text-white">
      <h2 className="text-lg font-semibold mb-4">Withdraw Winnings</h2>
      <input
        type="number"
        placeholder="Enter token amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white mb-4"
      />
      <button className="w-full bg-green-600 hover:bg-green-700 transition-all text-white px-4 py-2 rounded-md font-medium mb-3">
        Withdraw Prize
      </button>
      <button className="w-full bg-red-600 hover:bg-red-700 transition-all text-white px-4 py-2 rounded-md font-medium">
        Return Tokens
      </button>
    </div>
  );
};

export default WithdrawSection;