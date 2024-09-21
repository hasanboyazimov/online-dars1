// rrd
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/globalContext";

function Navbar() {
  const dataFromContext = useContext(GlobalContext);
  const { colors } = dataFromContext || {}; // Safely destructure colors
  const [bgColor, setBgColor] = useState("bg-slate-200"); // State for the navbar background color

  const handleColorChange = (color) => {
    setBgColor(color); // Update background color state
  };

  return (
    <header className="py-5" style={{ backgroundColor: bgColor }}>
      <div className="flex justify-between items-center align-elements">
        {/* LOGO */}
        <Link className="text-3xl font-bold" to="/">
          Logo
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex">
          <ul className="flex gap-5">
            <li>
              <Link className="font-medium" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="font-medium" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="font-medium" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <button className="md:hidden">Show</button>
      </div>

      {/* Display colors from the context */}
      <div className="mt-4">
        {colors && colors.length > 0 ? (
          colors.map((color, index) => (
            <span
              key={index}
              style={{ backgroundColor: color }}
              className="inline-block px-2 py-1 text-white mr-2 rounded cursor-pointer"
              onClick={() => handleColorChange(color)} // Change background color on click
            >
              {color}
            </span>
          ))
        ) : (
          <span>No colors available</span>
        )}
      </div>
    </header>
  );
}

export default Navbar;
