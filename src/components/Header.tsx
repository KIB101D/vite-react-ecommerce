import { Link } from "react-router-dom";
import logo from "../assets/react-blue.png";

function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b shadow-sm bg-white/70 backdrop-blur-md border-white/20">
      <Link to={"/"} className="flex items-center gap-2">
        <h2 className="text-lg font-semibold tracking-wide text-gray-700">
          ReactShop
        </h2>
        <img src={logo} className="h-5 opacity-80" alt="logo" />
      </Link>

      <nav className="flex gap-8 text-sm font-medium">
        <Link
          to={"/"}
          className="text-gray-500 transition cursor-pointer hover:text-indigo-600"
        >
          Home
        </Link>
        <Link
          to={"/about"}
          className="text-gray-500 transition cursor-pointer hover:text-indigo-600"
        >
          About
        </Link>
        <Link
          to={"/cart"}
          className="text-gray-500 transition cursor-pointer hover:text-indigo-600"
        >
          Cart
        </Link>
      </nav>
    </header>
  );
}

export default Header;
