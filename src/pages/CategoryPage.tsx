import { Link, useParams } from "react-router-dom";
import type { Product } from "../Types/types";
import { useState } from "react";

type CategoryPageProps = {
  products: Product[];
};

function ProductImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="flex items-center justify-center w-full h-full bg-gray-100">
        <span className="text-xs text-gray-400">No image</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setImageError(true)}
      className="object-cover w-full h-full transition duration-300 hover:scale-105"
    />
  );
}

function CategoryPage({ products }: CategoryPageProps) {
  const { CategoryId } = useParams();

  const actualCategory = products.filter(
    (product) => product.categoryId === CategoryId?.toLowerCase(),
  );

  return (
    <div className="w-full mx-auto max-w-7xl">
      {/* Title */}
      <h1 className="mt-2 sm:mt-3 mb-6 text-gray-800 capitalize font-heading font-semibold text-[clamp(1.8rem,3vw,3rem)]">
        {CategoryId}
      </h1>

      {/* Grid */}
      <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(180px,1fr))]">
        {actualCategory.map((product) => {
          return (
            <Link
              to={`/category/${CategoryId}/product/${product.id}`}
              state={{ category: CategoryId }}
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

export default CategoryPage;
