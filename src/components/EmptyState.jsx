import React from 'react';
import { ShoppingCart } from 'lucide-react';

export const EmptyState = ({ darkMode }) => {
  return (
    <div className={`text-center py-12 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
      <ShoppingCart className="w-16 h-16 mx-auto mb-4 opacity-50" />
      <p className="text-lg">Your shopping list is empty</p>
      <p className="text-sm">Add some items to get started!</p>
    </div>
  );
};