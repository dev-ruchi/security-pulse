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
    <div className="card w-96 bg-blue-500 text-white shadow-xl p-4 rounded-lg">
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">Total Events</h2>
        <p className="text-xl">{totalEvents}</p>
      </div>
    </div>
  );
};

export default EventCountCard;
