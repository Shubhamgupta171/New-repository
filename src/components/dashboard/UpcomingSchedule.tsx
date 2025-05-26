import React from 'react';
import { upcomingAppointments } from '../../data/appointments';
import AppointmentCard from './AppointmentCard';

const UpcomingSchedule: React.FC = () => {
  // Group appointments by day
  const appointmentsByDay = upcomingAppointments.reduce((acc, appointment) => {
    const day = appointment.day;
    if (!acc[day]) {
      acc[day] = [];
    }
    acc[day].push(appointment);
    return acc;
  }, {} as Record<string, typeof upcomingAppointments>);

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="font-bold mb-3">The Upcoming Schedule</h2>
      
      <div className="space-y-3">
        {Object.entries(appointmentsByDay).map(([day, appointments]) => (
          <div key={day}>
            <h3 className="text-sm font-medium text-gray-500 mb-3">On {day}</h3>
            <div
              className={`${
                day === 'Saturday' || day === 'Thursday'
                  ? 'grid grid-cols-2 gap-4'
                  : day === 'Thursday'
                  ? 'flex gap-x-12'
                  : 'space-y-8'
              }`}
            >
              {appointments.map((appointment) => (
                <AppointmentCard key={appointment.id} appointment={appointment} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;
