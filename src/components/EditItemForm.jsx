import React from 'react';
import { Check, X } from 'lucide-react';

export const EditItemForm = ({ 
  editingData, 
  setEditingData, 
  onSaveEdit, 
  onCancelEdit, 
  errors, 
  darkMode 
}) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSaveEdit();
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <input
          type="text"
          value={editingData.name}
          onChange={(e) => setEditingData(prev => ({ ...prev, name: e.target.value }))}
          onKeyPress={handleKeyPress}
          className={`w-full p-2 rounded-lg border transition-all duration-200 focus:ring-2 focus:ring-indigo-500 ${
            darkMode 
              ? 'bg-gray-600 border-gray-500 text-white' 
              : 'bg-white border-gray-300 text-gray-800'
          } ${errors.name ? 'border-red-500' : ''}`}
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name}</p>
        )}
      </div>
      
      <div className="flex items-start space-x-2">
        <div className="flex-1">
          <input
            type="number"
            value={editingData.price}
            onChange={(e) => setEditingData(prev => ({ ...prev, price: e.target.value }))}
            onKeyPress={handleKeyPress}
            step="0.01"
            min="0"
            className={`w-full p-2 rounded-lg border transition-all duration-200 focus:ring-2 focus:ring-indigo-500 ${
              darkMode 
                ? 'bg-gray-600 border-gray-500 text-white' 
                : 'bg-white border-gray-300 text-gray-800'
            } ${errors.price ? 'border-red-500' : ''}`}
          />
          {errors.price && (
            <p className="text-red-500 text-xs mt-1">{errors.price}</p>
          )}
        </div>
        
        <div className="flex space-x-1">
          <button
            onClick={onSaveEdit}
            className="p-2 text-green-600 hover:bg-green-100 dark:hover:bg-green-900 rounded-lg transition-all duration-200 hover:scale-110"
          >
            <Check className="w-4 h-4" />
          </button>
          <button
            onClick={onCancelEdit}
            className="p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900 rounded-lg transition-all duration-200 hover:scale-110"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
