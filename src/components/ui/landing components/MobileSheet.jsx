import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { MdCancelPresentation } from "react-icons/md";

function MobileSheet() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative font-Restora cursor-pointer">
      {/* Hamburger Button (Only visible on mobile and tablet) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden fixed top-4 right-4 z-50  text-white p-2 rounded"
      >
        {isOpen ? <MdCancelPresentation size={30} /> : <HiBars3 size={40} />}
      </button>

      {/* Sheet Navigation */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-black text-secondary transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 sm:hidden z-10`}
      >
        <ul className="flex flex-col space-y-6 mt-10 p-6">
          <li>
            <NavLink
              to="/"
              className="text-lg font-semibold hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="text-lg font-semibold hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="text-lg font-semibold hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Past Show
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reservation"
              className="text-lg font-semibold hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Reservation
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileSheet;
