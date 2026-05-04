import { Link } from "react-router-dom";
import logo from "../assets/react-blue.png";

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/70 backdrop-blur-md">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6 md:px-10">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <h2 className="text-lg font-semibold tracking-wide text-gray-700 transition group-hover:text-gray-900">
            ReactShop
          </h2>
          <img
            src={logo}
            className="h-5 transition opacity-80 group-hover:opacity-100"
            alt="logo"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link
            to="/"
            className="text-gray-500 transition hover:text-indigo-600"
          >
            Categories
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative flex items-center gap-1 text-gray-500 transition hover:text-indigo-600"
          >
            <span>Cart</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
