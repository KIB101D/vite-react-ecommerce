import { Link, useParams } from "react-router-dom";
import type { Product } from "../Types/types";

type CategoryPageProps = {
  products: Product[];
};

function CategoryPage({ products }: CategoryPageProps) {
  const { CategoryId } = useParams();

  const actualCategory = products.filter(
    (product) => product.categoryId === CategoryId?.toLowerCase(),
  );

  return (
    <main className="min-h-screen px-6 py-10">
      {/* Title */}
      <h1 className="mb-8 text-4xl font-semibold text-center text-gray-800 capitalize font-heading">
        {CategoryId}
      </h1>

      {/* Grid */}
      <div className="grid gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {actualCategory.map((product) => {
          return (
            <Link
              to={`/category/${CategoryId}/product/${product.id}`}
              state={{ category: CategoryId }}
              key={product.id}
              className="overflow-hidden transition bg-white shadow-sm rounded-lg hover:shadow-md hover:-translate-y-0.5"
            >
              {/* Image */}
              <div className="overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-cover w-full h-full transition duration-300 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-2">
                <p className="text-sm text-gray-600 line-clamp-1">
                  {product.title}
                </p>

                <p className="mt-1 text-sm font-semibold text-gray-900">
                  ${product.price}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}

export default CategoryPage;
