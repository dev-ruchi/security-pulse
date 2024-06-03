import React from "react";

function Drawer() {
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-2"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-4 w-80 min-h-full bg-gray-800 text-gray-100">
        {/* Sidebar content here */}
        <li className="mb-4">
          <a
            href="#home"
            className="text-lg font-semibold hover:bg-gray-700 hover:text-yellow-400 transition-colors duration-300 ease-in-out p-2 rounded-md"
          >
            Home
          </a>
        </li>
        <li className="mb-4">
          <a
            href="#dashboard"
            className="text-lg font-semibold hover:bg-gray-700 hover:text-yellow-400 transition-colors duration-300 ease-in-out p-2 rounded-md"
          >
            Dashboard
          </a>
        </li>
        <li className="mb-4">
          <a
            href="#settings"
            className="text-lg font-semibold hover:bg-gray-700 hover:text-yellow-400 transition-colors duration-300 ease-in-out p-2 rounded-md"
          >
            Settings
          </a>
        </li>
        <li>
          <a
            href="#logout"
            className="text-lg font-semibold hover:bg-gray-700 hover:text-yellow-400 transition-colors duration-300 ease-in-out p-2 rounded-md"
          >
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Drawer;
