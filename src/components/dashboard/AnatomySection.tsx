import React from 'react';
import { Search, ChevronRight } from 'lucide-react';
import { healthStatuses } from '../../data/healthStatuses';
import HealthStatusCard from './HealthStatusCard';
import anatomyImage from '../../assets/anaton.jpg'; // adjust path as per location


const AnatomySection: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-3 shadow-sm flex">
      <div className="relative flex-1 flex justify-center">
        <div className="relative">
          <img 
           src={anatomyImage}
           alt="Human Anatomy"
          className="h-[300px] object-contain"
          />

          
          <button className="absolute right-0 top-0 p-1 rounded-full bg-white shadow-md">
            <Search size={16} className="text-gray-600" />
          </button>

          {/* Health indicators positioned absolutely */}
          <div className="absolute top-[60px] -right-[60px] bg-red-500 text-white text-xs px-2 py-1 rounded-full shadow-md">
            <div className="flex items-center">
              <span className="mr-1">•</span>
              <span>Healthy Heart</span>
            </div>
          </div>

          <div className="absolute bottom-[80px] -left-[35px] bg-cyan-400 text-white text-xs px-1 py-1 rounded-full shadow-md">
            <div className="flex items-center">
              <span className="mr-1">•</span>
              <span>Healthy Leg</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex-1 space-y-6">
        {healthStatuses.map((status) => (
          <HealthStatusCard key={status.id} healthStatus={status} />
        ))}
        
       <div className="flex justify-end">
  <button className="flex items-center text-blue-600 text-sm font-medium">
    <span>Details</span>
    <ChevronRight size={16} />
  </button>
</div>

      </div>
    </div>
  );
};

export default AnatomySection;
