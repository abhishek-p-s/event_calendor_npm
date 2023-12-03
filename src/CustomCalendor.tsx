import { Fragment, memo, useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

type CalendorProps = {
  events?: {
    date: string;
    title: string;
    link: string;
  }[];
};

const CustomCalendor: React.FC<CalendorProps> = ({ events }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysOfWeek] = useState([
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
  ]);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const today = currentDate.getDate();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startingDay = new Date(year, month, 1).getDay();

  const getMonthName = (month: number): string => {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return monthNames[month];
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const renderEvents = (date: number): JSX.Element | null => {
    if (!events) return null;

    const eventsForDate = events.filter(
      (event) =>
        new Date(event.date).getFullYear() === year &&
        new Date(event.date).getMonth() === month &&
        new Date(event.date).getDate() === date
    );

    if (eventsForDate.length === 0) return null;

    return (
      <div className="event-container">
        {eventsForDate.map((event) => (
          <div
            key={event.title}
            className="event text-[10px] text-[#F36A6A] absolute bottom-0"
          >
            <a href={event.link} target="_blank" rel="noopener noreferrer">
              {event.title}
            </a>
          </div>
        ))}
      </div>
    );
  };

  const hasEvents = (date: number): boolean => {
    if (!events) return false;

    return events.some(
      (event) =>
        new Date(event.date).getFullYear() === year &&
        new Date(event.date).getMonth() === month &&
        new Date(event.date).getDate() === date
    );
  };

  return (
    <div className="bg-[#F7F7F9] p-2 rounded-md w-full h-full">
      <div className="calendar">
        <div className="flex justify-between">
          <div className="calendar-header p-2 font-light">
            {getMonthName(month)} {year}
          </div>
          <div className="calendar-header p-2 font-light items-center flex">
            <Icon
              onClick={handlePrevMonth}
              className="cursor-pointer"
              icon="ic:outline-less-than"
            />
            <Icon
              onClick={handleNextMonth}
              className="cursor-pointer"
              icon="ic:outline-greater-than"
            />
          </div>
        </div>
        <div className="calendar-days grid grid-cols-7">
          {daysOfWeek.map((day: string) => (
            <div
              key={day}
              className={`calendar-day p-2 text-center ${day === 'Sun' || day === 'Sat' ? 'text-[#F36A6A]' : ''
                }`}
            >
              {day}
            </div>
          ))}
          {Array.from({ length: startingDay }, (_, index) => (
            <div key={`empty - ${index}`} className="calendar-day"></div>
          ))}
          {Array.from({ length: daysInMonth }, (_, index) => (
            <Fragment key={index + 1}>
              <div
                className={`calendar-day p-2 text-center flex justify-center relative`}
              >
                <span
                  className={`${index + 1 === today
                    ? 'bg-primary text-white rounded-full flex justify-center items-center w-9 h-9'
                    : hasEvents(index + 1)
                      ? 'bg-red-500 text-white rounded-full flex justify-center items-center w-9 h-9'
                      : ''
                    }`}
                >
                  {index + 1}
                </span>
                {renderEvents(index + 1)}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(CustomCalendor);
