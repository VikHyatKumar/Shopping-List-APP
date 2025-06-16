import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';
import { EditItemForm } from './EditItemForm';

export const ShoppingItem = ({ 
  item, 
  index, 
  editingId, 
  editingData, 
  setEditingData,
  onStartEdit, 
  onSaveEdit, 
  onCancelEdit, 
  onDeleteItem, 
  errors, 
  darkMode 
}) => {
  return (
    <div
      className={`p-4 rounded-xl border transition-all duration-300 hover:shadow-md animate-in slide-in-from-left-5 ${
        darkMode 
          ? 'bg-gray-700 border-gray-600 hover:bg-gray-650' 
          : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
      }`}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {editingId === item.id ? (
        <EditItemForm
          editingData={editingData}
          setEditingData={setEditingData}
          onSaveEdit={onSaveEdit}
          onCancelEdit={onCancelEdit}
          errors={errors}
          darkMode={darkMode}
        />
      ) : (
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="font-medium text-lg">{item.name}</h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Added {new Date(item.createdAt).toLocaleDateString()}
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-xl font-bold text-green-600">
              ₹{item.price.toFixed(2)}
            </span>
            
            <div className="flex space-x-1">
              <button
                onClick={() => onStartEdit(item)}
                className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-lg transition-all duration-200 hover:scale-110"
              >
                <Edit2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => onDeleteItem(item.id)}
                className="p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900 rounded-lg transition-all duration-200 hover:scale-110"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};