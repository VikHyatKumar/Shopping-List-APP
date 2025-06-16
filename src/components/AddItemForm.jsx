import React from 'react';
import { Plus } from 'lucide-react';

export const AddItemForm = ({ newItem, setNewItem, onAddItem, errors, darkMode }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onAddItem();
    }
  };

  return (
    <div className={`p-6 rounded-2xl shadow-xl mb-8 transition-all duration-300 ${
      darkMode 
        ? 'bg-gray-800 border border-gray-700' 
        : 'bg-white border border-gray-200'
    }`}>
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Plus className="w-5 h-5 mr-2 text-indigo-500" />
        Add New Item
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <input
            type="text"
            placeholder="Enter item name..."
            value={newItem.name}
            onChange={(e) => setNewItem(prev => ({ ...prev, name: e.target.value }))}
            onKeyPress={handleKeyPress}
            className={`w-full p-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
              darkMode 
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                : 'bg-gray-50 border-gray-300 text-gray-800 placeholder-gray-500'
            } ${errors.name ? 'border-red-500' : ''}`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1 animate-pulse">{errors.name}</p>
          )}
        </div>
        
        <div>
          <input
            type="number"
            placeholder="Enter price..."
            value={newItem.price}
            onChange={(e) => setNewItem(prev => ({ ...prev, price: e.target.value }))}
            onKeyPress={handleKeyPress}
            step="0.01"
            min="0"
            className={`w-full p-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
              darkMode 
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                : 'bg-gray-50 border-gray-300 text-gray-800 placeholder-gray-500'
            } ${errors.price ? 'border-red-500' : ''}`}
          />
          {errors.price && (
            <p className="text-red-500 text-sm mt-1 animate-pulse">{errors.price}</p>
          )}
        </div>
      </div>
      
      <button
        onClick={onAddItem}
        className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-medium transition-all duration-200 hover:from-indigo-600 hover:to-purple-700 hover:shadow-lg transform hover:scale-105 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <Plus className="w-5 h-5 inline mr-2" />
        Add Item
      </button>
    </div>
  );
};