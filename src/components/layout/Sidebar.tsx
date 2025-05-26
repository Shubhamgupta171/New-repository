import React from 'react';
import { 
  LayoutDashboard, History, Calendar, ClipboardList, 
  BarChart2, MessageSquare, LifeBuoy, Settings 
} from 'lucide-react';
import { navigationItems } from '../../data/navigationItems';

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-white w-56 border-r flex flex-col h-full">
      <div className="p-6">
        <h1 className="text-xl font-semibold">
          <span className="text-cyan-400">Health</span>
          <span>care.</span>
        </h1>
      </div>
      
      <nav className="flex-1 px-4">
        <div className="mb-6">
          <h2 className="text-xs uppercase font-medium text-gray-400 mb-3 px-3">
            General
          </h2>
          <ul className="space-y-2">
            {navigationItems.general.map((item) => (
              <li key={item.name}>
                <a 
                  href="#" 
                  className={`flex items-center px-3 py-2 text-sm rounded-md ${
                    item.active 
                      ? 'text-blue-800 bg-blue-50 font-medium' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {getIcon(item.icon, item.active)}
                  <span className="ml-3">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs uppercase font-medium text-gray-400 mb-3 px-3">
            Tools
          </h2>
          <ul className="space-y-2">
            {navigationItems.tools
              .filter(item => item.name !== 'Settings')
              .map((item) => (
                <li key={item.name}>
                  <a 
                    href="#" 
                    className={`flex items-center px-3 py-2 text-sm rounded-md ${
                      item.active 
                        ? 'text-blue-800 bg-blue-50 font-medium' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {getIcon(item.icon, item.active)}
                    <span className="ml-3">{item.name}</span>
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </nav>
      
      <div className="px-4 pb-6">
        <a 
          href="#" 
          className="flex items-center px-3 py-2 text-sm rounded-md text-gray-600 hover:bg-gray-100"
        >
          <Settings size={20} className="text-gray-500" />
          <span className="ml-3">Settings</span>
        </a>
      </div>
    </aside>
  );
};

function getIcon(iconName: string, active: boolean) {
  const className = active ? "text-blue-800" : "text-gray-500";
  const size = 20;

  switch (iconName) {
    case 'dashboard': return <LayoutDashboard size={size} className={className} />;
    case 'history': return <History size={size} className={className} />;
    case 'calendar': return <Calendar size={size} className={className} />;
    case 'appointments': return <ClipboardList size={size} className={className} />;
    case 'statistics': return <BarChart2 size={size} className={className} />;
   
    case 'chat': return <MessageSquare size={size} className={className} />;
    case 'support': return <LifeBuoy size={size} className={className} />;
    case 'settings': return <Settings size={size} className={className} />;
    default: return <LayoutDashboard size={size} className={className} />;
  }
}

export default Sidebar;
