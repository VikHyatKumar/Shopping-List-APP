import React from 'react';
import { ShoppingItem } from './ShoppingItem';
import { EmptyState } from './EmptyState';
import { TotalCalculator } from './TotalCalculator';

export const ShoppingListContainer = ({ 
  items, 
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
  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className={`p-6 rounded-2xl shadow-xl transition-all duration-300 ${
      darkMode 
        ? 'bg-gray-800 border border-gray-700' 
        : 'bg-white border border-gray-200'
    }`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Your Shopping List</h2>
        <div className={`px-4 py-2 rounded-full text-sm font-medium ${
          darkMode ? 'bg-indigo-900 text-indigo-200' : 'bg-indigo-100 text-indigo-800'
        }`}>
          {items.length} item{items.length !== 1 ? 's' : ''}
        </div>
      </div>

      {items.length === 0 ? (
        <EmptyState darkMode={darkMode} />
      ) : (
        <>
          <div className="space-y-3">
            {items.map((item, index) => (
              <ShoppingItem
                key={item.id}
                item={item}
                index={index}
                editingId={editingId}
                editingData={editingData}
                setEditingData={setEditingData}
                onStartEdit={onStartEdit}
                onSaveEdit={onSaveEdit}
                onCancelEdit={onCancelEdit}
                onDeleteItem={onDeleteItem}
                errors={errors}
                darkMode={darkMode}
              />
            ))}
          </div>
          <TotalCalculator total={calculateTotal()} darkMode={darkMode} />
        </>
      )}
    </div>
  );
};