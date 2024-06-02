//import { useState } from "react";

import Dashboard from "./Dashboard";
import Drawer from "./Drawer";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
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
