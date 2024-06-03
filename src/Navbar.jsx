import React from "react";

function Navbar() {
  const toggleTheme = () => {
    const htmlTag = document.documentElement;
    const currentTheme = htmlTag.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    htmlTag.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="navbar p-4 shadow-lg">
      <a className="text-2xl font-semibold text-yellow-400 hover:text-yellow-300 transition duration-300 ease-in-out">
        Security Pulse
      </a>
      <div className="navbar-start mx-8" >
        <button className="navbar-item" onClick={toggleTheme}>
        <input type="checkbox" value="synthwave" className="toggle theme-controller"/>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
