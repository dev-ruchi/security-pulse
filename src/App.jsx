import { useState, useEffect } from "react";

import Dashboard from "./Dashboard";
import Drawer from "./Drawer";
import Navbar from "./Navbar";

function App() {
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

  return (
    <>
      <Navbar />
      <h1 className=" text-4xl font-bold text-center mt-8 text-gray-800">
        Welcome to The Dashboard
      </h1>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}

          <div className="overflow-x-auto">
            <table className="table table-xs">
              <thead>
                <tr>
                  <th>Timestamp</th>
                  <th>Event Type</th>
                  <th>Source IP</th>
                  <th>Source Port</th>
                  <th>Destination IP</th>
                  <th>Destination Port</th>
                  <th>Protocol</th>
                  <th>Action</th>
                  <th>Signature</th>
                  <th>Category</th>
                  <th>Severity</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event, index) => (
                  <tr key={index}>
                    <td>{event.timestamp}</td>
                    <td>{event.event_type}</td>
                    <td>{event.src_ip}</td>
                    <td>{event.src_port}</td>
                    <td>{event.dest_ip}</td>
                    <td>{event.dest_port}</td>
                    <td>{event.proto}</td>
                    <td>{event.alert ? event.alert.action : "N/A"}</td>
                    <td>{event.alert ? event.alert.signature : "N/A"}</td>
                    <td>{event.alert ? event.alert.category : "N/A"}</td>
                    <td>{event.alert ? event.alert.severity : "N/A"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Dashboard />
        </div>
        <Drawer />
      </div>
    </>
  );
}

export default App;
