import React from 'react';
import { HealthStatus } from '../../types';

interface HealthStatusCardProps {
  healthStatus: HealthStatus;
}

const HealthStatusCard: React.FC<HealthStatusCardProps> = ({ healthStatus }) => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center space-x-3">
        <img 
          src={healthStatus.icon} 
          alt={healthStatus.name}
          className="w-6 h-6 object-contain"
        />
        <h3 className="font-medium">{healthStatus.name}</h3>
      </div>
      
      <p className="text-xs text-gray-500">
        Date: {healthStatus.date}
      </p>
      
      <div className="w-60 h-2 bg-gray-100 rounded-full overflow-hidden">
        <div 
          className={`h-full  ${
            healthStatus.status === 'good' ? 'bg-green-400' : 
            healthStatus.status === 'warning' ? 'bg-yellow-400' : 'bg-red-500'
          }`}
          style={{ width: `${healthStatus.percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default HealthStatusCard;