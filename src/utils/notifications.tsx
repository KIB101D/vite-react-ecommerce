import { toast } from "sonner";
import { Link } from "react-router-dom";
import type { Product } from "../Types/types";
export const showAddToCartToast = (product: Product) => {
  toast(
    <div className="flex items-center gap-4 py-1">
      <div className="relative">
        <img
          src={product.image}
          className="object-cover w-10 h-10 border border-gray-100 rounded-lg"
        />
      </div>

      <div className="flex flex-col">
        <span className="text-sm font-semibold leading-tight text-gray-900">
          {product.title}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">Added to cart</span>
          <span className="text-gray-300">•</span>
          <Link
            to="/cart"
            className="text-xs font-semibold text-indigo-600 underline-offset-2 hover:underline"
          >
            View Cart
          </Link>
        </div>
      </div>
    </div>,
    {
      className:
        "rounded-2xl border-none shadow-md bg-white/95 backdrop-blur-md px-4 py-3",
      duration: 3000,
    },
  );
};
