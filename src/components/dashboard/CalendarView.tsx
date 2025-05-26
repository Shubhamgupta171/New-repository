import React from 'react';
import { ChevronLeft, ChevronRight, Activity, Stethoscope } from 'lucide-react';
import { calendarData } from '../../data/calendarData';

const CalendarView: React.FC = () => {
  const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  const currentMonth = 'October 2021';
  
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <button className="p-1 rounded hover:bg-gray-100">
            <ChevronLeft size={16} className="text-gray-500" />
          </button>
          <h2 className="font-bold">{currentMonth}</h2>
          <button className="p-1 rounded hover:bg-gray-100">
            <ChevronRight size={16} className="text-gray-500" />
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xs text-gray-500">This Week</span>
          <ChevronRight size={14} className="text-gray-500" />
        </div>
      </div>
      
      {/* Calendar grid */}
      <div className="mb-6">
        {/* Days of week */}
        <div className="grid grid-cols-7 mb-2">
          {days.map((day) => (
            <div key={day} className="text-center text-xs font-medium text-gray-500">
              {day}
            </div>
          ))}
        </div>
        
        {/* Calendar dates */}
        <div className="grid grid-cols-7 gap-2">
          {calendarData.days.map((day) => (
            <div 
              key={day.date} 
              className={`text-center py-1 rounded-md ${
                day.isCurrentMonth ? '' : 'text-gray-300'
              } ${day.isToday ? 'bg-blue-100 font-bold text-blue-800' : ''}`}
            >
              <div className="text-sm mb-1">{day.number}</div>
              {day.appointments.map((time, idx) => (
                <div 
                  key={idx} 
                  className="text-[10px] mx-auto text-gray-500 bg-blue-50 rounded px-1 mb-1 max-w-14 overflow-hidden text-ellipsis"
                >
                  {time}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      {/* Appointment cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-indigo-900 rounded-xl p-4 text-white flex flex-col">
          <div className="flex justify-between mb-2">
            <h3 className="font-medium">Dentist</h3>
            <Stethoscope size={20} className="text-white" />
          </div>
          <div className="text-xs opacity-80 mb-1">09:00-11:00</div>
          <div className="text-xs opacity-80">Dr. Cameron Williamson</div>
        </div>
        
        <div className="bg-blue-100 rounded-xl p-4 text-blue-900 flex flex-col">
          <div className="flex justify-between mb-2">
            <h3 className="font-medium">Physiotherapy Appointment</h3>
            <Activity size={20} className="text-yellow-500" />
          </div>
          <div className="text-xs opacity-80 mb-1">11:00-12:00</div>
          <div className="text-xs opacity-80">Dr. Kevin Davies</div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
