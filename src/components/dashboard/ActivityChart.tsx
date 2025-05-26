import React from 'react';
import { activityData } from '../../data/activityData';

/**
 * ActivityChart Component
 * 
 * This component displays a weekly activity chart showing three categories:
 * - Checkups (cyan bars)
 * - Tests (blue bars)
 * - Appointments (green bars)
 * 
 * The chart visualizes data from activityData.ts as vertical bars
 * with heights proportional to their values.
 */
const ActivityChart: React.FC = () => {
  // Find the maximum value across all data points for scaling
  // (Using Math.max(1, ...) ensures we don't divide by zero)
  const maxValue = Math.max(1, ...activityData.map(day => Math.max(...day.values)));
  
  // Define the visual properties for each category
  const categories = [
    { name: 'Checkups', color: 'bg-cyan-400', hoverColor: 'hover:bg-cyan-500', index: 0 },
    { name: 'Tests', color: 'bg-blue-800', hoverColor: 'hover:bg-blue-900', index: 1 },
    { name: 'Appointments', color: 'bg-green-400', hoverColor: 'hover:bg-green-500', index: 2 }
  ];
  
  // Calculate the total number of appointments for the header
  const totalAppointments = activityData.reduce((sum, day) => sum + day.values[2], 0);

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      {/* Chart header with title and appointment count */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold">Activity</h2>
        <p className="text-sm text-gray-500">{totalAppointments} appointments this week</p>
      </div>

      {/* Main chart area with fixed height */}
      <div className="h-48 mb-4 relative">
        {/* Horizontal grid lines for better readability */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="border-t border-gray-100 w-full h-0"></div>
          ))}
        </div>

        {/* The actual bar chart */}
        <div className="h-full flex items-end justify-between relative z-10">
          {/* Loop through each day */}
          {activityData.map((day, dayIndex) => (
            <div key={dayIndex} className="flex items-end justify-center space-x-1 px-">
              {/* For each day, create bars for each category */}
              {day.values.map((value, valueIndex) => {
                // Convert the value to a percentage of the maximum for the height
                const height = (value / maxValue) * 100;
                const category = categories[valueIndex];
                
                return (
                  <div
                    key={valueIndex}
                    className={`w-4 ${category.color} ${category.hoverColor} rounded-sm transition-all duration-200 ease-in-out`}
                    style={{ height: `${height}%` }}
                    title={`${category.name}: ${value}`}
                  ></div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Day labels below the chart (Mon, Tues, etc.) */}
      <div className="flex justify-between px-1">
        {activityData.map((day, index) => (
          <div key={index} className="text-xs text-gray-500">{day.label}</div>
        ))}
      </div>

      {/* Color legend explaining what each bar color represents */}
      <div className="flex justify-end mt-4 space-x-4">
        {categories.map((category, index) => (
          <div key={index} className="flex items-center">
            <div className={`w-2 h-2 ${category.color} rounded-sm mr-1`}></div>
            <span className="text-xs text-gray-500">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityChart;
