import React from 'react';
import { Header } from './components/Header';
import { AddItemForm } from './components/AddItemForm';
import { ShoppingListContainer } from './components/ShoppingListContainer';
import { useShoppingList } from './hooks/useLocalStorage';

const ShoppingListApp = () => {
  const {
    items,
    newItem,
    setNewItem,
    editingId,
    editingData,
    setEditingData,
    darkMode,
    errors,
    addItem,
    deleteItem,
    startEdit,
    saveEdit,
    cancelEdit,
    toggleDarkMode
  } = useShoppingList();

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-800'
    }`}>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <AddItemForm
          newItem={newItem}
          setNewItem={setNewItem}
          onAddItem={addItem}
          errors={errors}
          darkMode={darkMode}
        />

        <ShoppingListContainer
          items={items}
          editingId={editingId}
          editingData={editingData}
          setEditingData={setEditingData}
          onStartEdit={startEdit}
          onSaveEdit={saveEdit}
          onCancelEdit={cancelEdit}
          onDeleteItem={deleteItem}
          errors={errors}
          darkMode={darkMode}
        />
      </div>
    </div>
  );
};

export default ShoppingListApp;