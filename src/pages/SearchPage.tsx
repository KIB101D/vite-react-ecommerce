import { Link, useSearchParams } from "react-router-dom";
import ProductImage from "../components/ProductImage";
import filterProducts from "../utils/filterProducts";
import type { Product } from "../Types/types";

type SearchPageProps = {
  products: Product[];
};

function SearchPage({ products }: SearchPageProps) {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const filtered = filterProducts(products, query);

  if (filtered.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="max-w-md text-center">
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 font-heading">
            Nothing found
          </h2>

          <p className="mt-3 text-base leading-relaxed text-gray-500">
            No products match{" "}
            <span className="font-medium text-gray-700">"{query}"</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto max-w-7xl">
      <div className="flex flex-col items-baseline justify-between gap-4 mb-8 border-b border-gray-100 sm:flex-row">
        <div>
          <h1 className="text-gray-900 font-heading font-semibold tracking-tight text-[clamp(1.6rem,3vw,2.8rem)]">
            Search
          </h1>
          <p className="mt-1 text-gray-500">
            Showing results for{" "}
            <span className="italic font-medium text-indigo-600">
              "{query}"
            </span>
          </p>
        </div>

        <span className="px-3 py-1 text-xs font-medium text-gray-500 bg-gray-100 rounded-full">
          {filtered.length} {filtered.length === 1 ? "item" : "items"}
        </span>
      </div>

      {/* Grid */}
      <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(180px,240px))] justify-center md:justify-stretch">
        {filtered.map((product) => {
          return (
            <Link
              to={`/category/${product.categoryId}/product/${product.id}`}
              state={{ category: product.categoryId, fromSearch: query }}
              key={product.id}
              className="overflow-hidden transition bg-white shadow-sm rounded-lg hover:shadow-md hover:-translate-y-0.5"
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

export default SearchPage;
