import { useState, } from 'react';

// Custom hook for using localStorage
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
};

// Custom hook for managing a shopping list
export const useShoppingList = () => {
  const [items, setItems] = useLocalStorage('shoppingItems', []);
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);

  const [newItem, setNewItem] = useState({ name: '', price: '' });
  const [editingId, setEditingId] = useState(null);
  const [editingData, setEditingData] = useState({ name: '', price: '' });
  const [errors, setErrors] = useState({ name: '', price: '' });

  const validateItem = (name, price) => {
    const newErrors = { name: '', price: '' };

    if (!name.trim()) {
      newErrors.name = 'Item name is required';
    }

    if (!price || isNaN(price) || parseFloat(price) <= 0) {
      newErrors.price = 'Please enter a valid positive price';
    }

    setErrors(newErrors);
    return !newErrors.name && !newErrors.price;
  };

  const addItem = () => {
    if (validateItem(newItem.name, newItem.price)) {
      const item = {
        id: Date.now(),
        name: newItem.name.trim(),
        price: parseFloat(newItem.price),
        createdAt: new Date().toISOString()
      };

      setItems(prev => [...prev, item]);
      setNewItem({ name: '', price: '' });
      setErrors({ name: '', price: '' });
    }
  };

  const deleteItem = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
    if (editingId === id) {
      setEditingId(null);
    }
  };

  const startEdit = (item) => {
    setEditingId(item.id);
    setEditingData({ name: item.name, price: item.price.toString() });
    setErrors({ name: '', price: '' });
  };

  const saveEdit = () => {
    if (validateItem(editingData.name, editingData.price)) {
      setItems(prev => prev.map(item =>
        item.id === editingId
          ? { ...item, name: editingData.name.trim(), price: parseFloat(editingData.price) }
          : item
      ));
      setEditingId(null);
      setEditingData({ name: '', price: '' });
      setErrors({ name: '', price: '' });
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditingData({ name: '', price: '' });
    setErrors({ name: '', price: '' });
  };

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return {
    // State
    items,
    newItem,
    setNewItem,
    editingId,
    editingData,
    setEditingData,
    darkMode,
    errors,

    // Actions
    addItem,
    deleteItem,
    startEdit,
    saveEdit,
    cancelEdit,
    toggleDarkMode
  };
};
