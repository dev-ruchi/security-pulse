//import { useState } from "react";

import Dashboard from "./Dashboard";
import Drawer from "./Drawer";
import Navbar from "./Navbar";

function App() {
  fetch("http://localhost:3000/events")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });

  return (
    <>
      <Navbar />
      <h1>Welcome to The Dashboard</h1>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}

          <Dashboard />
        </div>
        <Drawer />
      </div>
    </>
  );
}

export default App;
