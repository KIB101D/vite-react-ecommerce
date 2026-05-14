import { Link, useParams } from "react-router-dom";
import type { Product } from "../Types/types";
import ProductImage from "../components/ProductImage";
import { sortProductsByPrice } from "../utils/filterProductsByPrice";
import { useState } from "react";

type CategoryPageProps = {
  products: Product[];
};

function CategoryPage({ products }: CategoryPageProps) {
  const { CategoryId } = useParams();
  const actualCategory = products.filter(
    (product) => product.categoryId === CategoryId?.toLowerCase(),
  );
  const [orderBy, setOrderBy] = useState<"asc" | "desc">("asc");
  const sortedProducts = sortProductsByPrice(actualCategory, orderBy);

  return (
    <div className="w-full mx-auto max-w-7xl">
      <div className="flex flex-row items-baseline justify-between f">
        {/* Title */}
        <h1 className="mt-2 sm:mt-3 mb-6 text-gray-800 capitalize font-heading font-semibold text-[clamp(1.8rem,3vw,3rem)]">
          {CategoryId}
        </h1>
        <div className="flex items-center justify-end mb-5">
          <button
            onClick={() => setOrderBy(orderBy === "asc" ? "desc" : "asc")}
            className="px-3 py-1.5 text-sm rounded-lg bg-gray-100 text-gray-600 transition hover:bg-gray-200"
          >
            {orderBy === "asc" ? "Lowest first ↑" : "Highest first ↓"}
          </button>
        </div>
      </div>

      {/* Grid */}
      <div
        className=" 
    grid gap-5

    grid-cols-[repeat(auto-fit,minmax(160px,1fr))]

    lg:grid-cols-[repeat(auto-fit,minmax(180px,240px))]
    lg:justify-stretch"
      >
        {sortedProducts.map((product) => {
          return (
            <Link
              to={`/category/${CategoryId}/product/${product.id}`}
              state={{ category: CategoryId }}
              key={product.id}
              className="overflow-hidden transition bg-white shadow-sm rounded-lg animate-fade-in hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="overflow-hidden aspect-square">
                <ProductImage src={product.image} alt={product.title} />
              </div>

              <div className="p-2">
                <p className="text-[clamp(0.85rem,0.9vw,1.1rem)] text-gray-600 line-clamp-1">
                  {product.title}
                </p>

                <p className="mt-1 font-semibold text-gray-900 text-[clamp(0.9rem,1vw,1.25rem)]">
                  ${product.price}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryPage;
