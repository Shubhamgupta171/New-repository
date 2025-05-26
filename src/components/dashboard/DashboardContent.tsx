import React from 'react';
import AnatomySection from './AnatomySection';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityChart from './ActivityChart';

const DashboardContent: React.FC = () => {
  return (
    <div className="container mx-auto px-2 ">
      <h1 className="text-2xl font-bold mb-1 -mt-2">Dashboard</h1>
      
      <div className="grid grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Left column */}
        <div className="space-y-2">
          <AnatomySection />
          <ActivityChart />
        </div>
        
        {/* Right column */}
        <div className="space-y-2">
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;