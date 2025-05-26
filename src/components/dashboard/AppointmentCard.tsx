import React from 'react';
import { Heart, Eye, Brain, User, Syringe } from 'lucide-react';
import { Appointment } from '../../types';

interface AppointmentCardProps {
  appointment: Appointment;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointment }) => {
  return (
    <div className="bg-blue-50 rounded-xl p-4 h-24 w-full flex items-center justify-between">
      <div className="flex items-center">
        <div className="ml-2">
          <h4 className="font-medium text-sm">{appointment.title}</h4>
          <p className="text-xs text-gray-500">{appointment.time}</p>
        </div>
      </div>
      {appointment.icon && (
        <div className="text-right">
          {getSpecialtyIcon(appointment.specialty, appointment.type)}
        </div>
      )}
    </div>
  );
};

function getSpecialtyIcon(specialty: string | undefined, type: string) {
  // Special case for health checkup
  if (type === 'checkup') {
    return (
      <div className="w-8 h-8 rounded-md bg-green-100 flex items-center justify-center">
        <Syringe size={18} className="text-green-500" />
      </div>
    );
  }
  
  // Handle specialty icons
  if (!specialty) return null;
  
  switch (specialty) {
    case 'ophthalmologist':
      return (
        <div className="w-8 h-8 rounded-md bg-blue-100 flex items-center justify-center">
          <Eye size={18} className="text-blue-500" />
        </div>
      );
    case 'cardiologist':
      return (
        <div className="w-8 h-8 rounded-md bg-red-100 flex items-center justify-center">
          <Heart size={18} className="text-red-500" />
        </div>
      );
    case 'neurologist':
      return (
        <div className="w-8 h-8 rounded-md bg-purple-100 flex items-center justify-center">
          <Brain size={18} className="text-purple-500" />
        </div>
      );
    default:
      return (
        <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center">
          <User size={18} className="text-gray-500" />
        </div>
      );
  }
}

export default AppointmentCard;
