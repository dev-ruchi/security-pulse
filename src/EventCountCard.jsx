import React from "react";
import { useEffect, useState } from "react";

const EventCountCard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  function fetchEvents() {
    fetch("http://localhost:3000/events")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setEvents(data);
        console.log(data);
      });
  }

  const totalEvents = events.length;

  return (
    <div className="card w-80 bg-gray-800 mb-4 text-white shadow-lg p-6 rounded-lg">
      <div className="card-body">
        <p className="text-2xl text-yellow-400">Total Events: {totalEvents}</p>
      </div>
    </div>
  );
};

export default EventCountCard;
