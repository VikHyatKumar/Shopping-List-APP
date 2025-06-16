import React from 'react';

export const TotalCalculator = ({ total, darkMode }) => {
  return (
    <div className={`mt-6 p-4 rounded-xl border-2 border-dashed transition-all duration-300 ${
      darkMode 
        ? 'border-indigo-500 bg-indigo-900/20' 
        : 'border-indigo-300 bg-indigo-50'
    }`}>
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold">Estimated Total:</span>
        <span className="text-2xl font-bold text-green-600 animate-pulse">
          ₹{total.toFixed(2)}
        </span>
      </div>
    </div>
  );
};