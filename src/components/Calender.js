import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MyCalendar() {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [newEventTitle, setNewEventTitle] = useState('');

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleInputChange = (e) => {
    setNewEventTitle(e.target.value);
  };

  const handleAddEvent = () => {
    if (newEventTitle.trim() !== '') {
      setEvents([...events, { id: Date.now(), date, title: newEventTitle }]);
      setNewEventTitle('');
    }
  };

  const handleDeleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <div>
    <div className="container mx-auto p-4 mt-10">
      
      <div className="flex items-center justify-center mb-4">
        <Calendar onChange={handleDateChange} value={date} />
      </div>
      <div className="flex items-center justify-center mb-4">
        <input
          type="text"
          className="border border-gray-300 rounded px-4 py-2 mr-2"
          placeholder="Enter event title"
          value={newEventTitle}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 text-white items-center justify-center h-10 w-10 text-2xl pt-0 pb-1  rounded-full hover:bg-blue-700"
          onClick={handleAddEvent}
        >
          +
        </button>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Events:</h2>
        <ul>
          {events.map((event) => (
            <li
              key={event.id}
              className="bg-gray-100 p-2 mb-2 rounded"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span>Event: {event.title}</span>
                </div>
                <div>
                  <span>Date: {event.date.toLocaleDateString()}</span>
                </div>
                <div>
                  <button
                    onClick={() => handleDeleteEvent(event.id)}
                    className="bg-red-500 text-white rounded-full items-center justify-center h-8 w-8 hover:bg-red-700"
                  >
                    X
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  
      <footer className="bg-gray-200 p-7 mt-32 mb-0 w-full">
        <div className="container mx-auto">
          <p className="text-center text-gray-800">© 2024 Task Manager. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}

export default MyCalendar;
