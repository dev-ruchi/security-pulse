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
    <div className="card w-96 mb-2 mt-4 shadow-lg rounded-lg">
      <div className="card-body">
        <p className="text-4xl font-bold text-yellow-400 mb-2">Total Events</p>
        <p className="text-3xl">{totalEvents}</p>
      </div>
    </div>
  );
};

export default EventCountCard;
