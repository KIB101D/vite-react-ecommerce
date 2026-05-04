import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="px-4 py-10 mx-auto max-w-7xl sm:px-6 md:px-10 ">
        <div className="flex flex-col justify-between gap-10 text-center md:flex-row md:text-left">
          {/* Brand */}
          <div>
            <h2 className="mb-2 text-lg font-semibold text-gray-700 font-heading">
              ReactShop
            </h2>
            <p className="max-w-xs mx-auto text-sm text-gray-500 md:mx-0">
              Simple modern e-commerce experience with clean UI and smooth UX.
            </p>
          </div>

          {/* Links */}
          <div className="flex justify-center gap-12 text-sm md:justify-start">
            {/* Shop */}
            <div>
              <p className="mb-2 font-medium text-gray-700">Shop</p>
              <ul className="space-y-1 text-gray-500">
                <li>
                  <Link to="/" className="transition hover:text-indigo-600">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className="transition hover:text-indigo-600">
                    Cart
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="mb-2 font-medium text-gray-700">Company</p>
              <ul className="space-y-1 text-gray-500">
                <li>
                  <Link
                    to="/about"
                    className="transition hover:text-indigo-600"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="transition hover:text-indigo-600"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/support"
                    className="transition hover:text-indigo-600"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <p className="mt-10 text-xs text-center text-gray-400">
          © 2026 ReactShop. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
