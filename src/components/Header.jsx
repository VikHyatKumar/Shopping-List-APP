import React from 'react';
import { Sun, Moon, ShoppingCart } from 'lucide-react';

export const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center space-x-3">
        <div className={`p-3 rounded-full ${
          darkMode ? 'bg-indigo-600' : 'bg-indigo-500'
        } transform hover:scale-110 transition-transform duration-200`}>
          <ShoppingCart className="w-8 h-8 text-white" />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Smart Shopping List
          </h1>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Organize your shopping with ease
          </p>
        </div>
      </div>
      
      <button
        onClick={toggleDarkMode}
        className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
          darkMode 
            ? 'bg-yellow-500 hover:bg-yellow-400 text-gray-900' 
            : 'bg-gray-800 hover:bg-gray-700 text-yellow-400'
        }`}
      >
        {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>
    </div>
  );
};
