import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white py-1 px-6 border-b flex items-center justify-between">
      <div className="flex items-center flex-1">
        <div className="relative w-1/3 max-w-md">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 text-sm bg-gray-100 border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <Bell size={20} className="text-gray-600" />
          <div className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></div>
        </button>
        <div className="flex items-center">
          <div className="h-9 w-9 rounded-lg bg-cyan-400 flex items-center justify-center shadow-sm">
            <span className="text-white font-medium">JD</span>
          </div>
        </div>
        <button className="flex items-center justify-center h-9 w-9 bg-blue-800 text-white rounded-lg shadow-sm">
          <Plus size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;