


import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-(--c2)/80 border-b border-white/10">
      <div
        className="
          max-w-7xl mx-auto
          flex flex-col sm:flex-row
          gap-4 sm:gap-0
          items-center sm:justify-between
          px-4 sm:px-10 py-4
        "
      >
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-semibold tracking-wide text-white"
        >
          Media<span className="text-blue-400">Search</span>
        </Link>

        {/* Navigation */}
        <div className="flex gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `
              px-4 py-2 rounded-lg text-sm sm:text-base font-medium
              transition-all duration-300
              ${
                isActive
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                  : "bg-(--c4)/70 text-(--c1) hover:bg-(--c4)"
              }
              active:scale-95
              `
            }
          >
            Search
          </NavLink>

          <NavLink
            to="/collection"
            className={({ isActive }) =>
              `
              px-4 py-2 rounded-lg text-sm sm:text-base font-medium
              transition-all duration-300
              ${
                isActive
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                  : "bg-(--c4)/70 text-(--c1) hover:bg-(--c4)"
              }
              active:scale-95
              `
            }
          >
            Collection
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
