import { useState, useEffect } from "react";
import EventCountCard from "./EventCountCard";
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
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        console.log(data);
      });
  }

  function formatDate(timestamp) {
    return new Date(timestamp).toLocaleString();
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-gray-100">
        <Dashboard />
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-start">
            <div className="w-full px-4 py-6">
              <EventCountCard />
              <div className="overflow-x-auto mt-6">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead>
                    <tr className="bg-gray-800 text-gray-300">
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        Timestamp
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        Event Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        Source IP
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        Source Port
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        Destination IP
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        Destination Port
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        Protocol
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        Action
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        Signature
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        Severity
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-700 divide-y divide-gray-600">
                    {events.map((event, index) => (
                      <tr key={index} className="hover:bg-gray-600">
                        <td className="px-6 py-4 text-sm">
                          {formatDate(event.timestamp)}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          {event.event_type}
                        </td>
                        <td className="px-6 py-4 text-sm">{event.src_ip}</td>
                        <td className="px-6 py-4 text-sm">{event.src_port}</td>
                        <td className="px-6 py-4 text-sm">{event.dest_ip}</td>
                        <td className="px-6 py-4 text-sm">{event.dest_port}</td>
                        <td className="px-6 py-4 text-sm">{event.proto}</td>
                        <td className="px-6 py-4 text-sm">
                          {event.alert ? event.alert.action : "N/A"}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          {event.alert ? event.alert.signature : "N/A"}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          {event.alert ? event.alert.category : "N/A"}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          {event.alert ? event.alert.severity : "N/A"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Drawer />
        </div>
      </div>
    </>
  );
}

export default App;
