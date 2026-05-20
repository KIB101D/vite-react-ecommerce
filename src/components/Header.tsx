import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/react-blue.png";
import SearchBar from "./SearchBar";

function Header() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/70 backdrop-blur-md">
      <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6 md:px-10">
        <Link to="/" className="flex items-center flex-shrink-0 gap-2 group">
          <h2 className="text-lg font-semibold tracking-wide text-gray-700 transition group-hover:text-gray-900">
            ReactShop
          </h2>
          <img
            src={logo}
            className="h-5 opacity-80 group-hover:opacity-100"
            alt="logo"
          />
        </Link>

        <div className="flex items-center justify-end flex-1 gap-4 sm:gap-6">
          <SearchBar
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onClear={() => setQuery("")}
            onKeyDown={(e) => {
              if (e.key === "Enter" && query.trim()) {
                navigate(`/search?q=${query.trim()}`);
              }
            }}
          />

          <nav className="flex items-center flex-shrink-0 text-sm font-medium">
            <Link
              to="/cart"
              className="text-gray-500 transition hover:text-indigo-600"
            >
              Cart
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
