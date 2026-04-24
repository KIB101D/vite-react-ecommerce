import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="px-8 py-10 border-t border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="flex flex-col justify-between max-w-6xl gap-8 mx-auto md:flex-row">
        <div>
          <h2 className="mb-2 text-lg font-semibold text-gray-700 font-heading">
            ReactShop
          </h2>
          <p className="max-w-xs text-sm text-gray-500">
            Simple modern e-commerce experience with clean UI and smooth UX.
          </p>
        </div>

        <div className="flex gap-12 text-sm">
          <div>
            <p className="mb-2 font-medium text-gray-700">Company</p>
            <ul className="space-y-1 text-gray-500">
              <Link to={"/about"}>
                <li className="cursor-pointer hover:text-indigo-600">About</li>
              </Link>
              <Link to={"/contact"}>
                <li className="cursor-pointer hover:text-indigo-600">
                  Contact
                </li>
              </Link>
              <Link to={"/support"}>
                <li className="cursor-pointer hover:text-indigo-600">
                  Support
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      <p className="mt-10 text-xs text-center text-gray-400">
        © 2026 ReactShop. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
