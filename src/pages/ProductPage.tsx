import { useParams, Link, useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import type { Product } from "../Types/types";

type ProductPageProps = {
  products: Product[];
  isLoading: boolean;
};

function ProductPage({ products, isLoading }: ProductPageProps) {
  const { ProductId, CategoryId } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <main className="pt-2 pb-10">
        <div className="grid max-w-7xl gap-8 mx-auto md:grid-cols-[minmax(280px,420px)_1fr] lg:grid-cols-[minmax(340px,520px)_1fr] animate-pulse">
          {/* Image-skeleton */}
          <div className="bg-gray-200 shadow-sm rounded-2xl aspect-square lg:max-w-[620px]" />

          {/* info-skeleton */}
          <div className="flex flex-col justify-between py-6 space-y-6">
            <div className="space-y-3">
              <div className="w-24 h-3 bg-gray-200 rounded" />
              <div className="w-3/4 h-10 bg-gray-200 rounded" />
              <div className="w-1/2 h-4 bg-gray-200 rounded" />
            </div>
            <div className="space-y-4">
              <div className="w-32 h-12 bg-gray-200 rounded" />
              <div className="w-full h-20 bg-gray-200 rounded" />
              <div className="h-12 bg-gray-200 rounded-xl lg:min-w-[400px] lg:w-auto" />
            </div>
          </div>
        </div>
      </main>
    );
  }

  const product = products.find((p) => p.id === Number(ProductId));

  if (!product) {
    return (
      <div className="p-20 text-3xl font-semibold flex items-center justify-center min-h-[50vh] font-heading">
        Product not found
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .filter((p) => p.tags.some((tag) => product.tags.includes(tag)))
    .slice(0, 3);

  return (
    <main key={product.id} className="pt-2 pb-10">
      <div className="grid max-w-7xl gap-8 mx-auto md:grid-cols-[minmax(280px,420px)_1fr] lg:grid-cols-[minmax(340px,520px)_1fr]">
        {/* Image */}
        <div className="overflow-hidden bg-white shadow-sm rounded-2xl aspect-square lg:max-w-[620px] animate-fade-in">
          <img
            src={product.image}
            alt={product.title}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/src/assets/not-found.png";
            }}
            className="object-cover w-full h-full"
          />
        </div>
        {/* Info */}
        <div className="flex gap-4 lg:min-h-full lg:py-6 animate-fade-in">
          <div className="flex flex-col flex-1">
            <div>
              <Link
                to={`/category/${CategoryId}`}
                className="text-[11px] font-semibold tracking-[0.18em] text-indigo-600 uppercase transition hover:opacity-70 w-fit"
              >
                {CategoryId}
              </Link>

              <h1 className="mt-3 text-5xl md:text-4xl lg:text-5xl font-semibold leading-[0.95] tracking-tight text-gray-900 font-heading">
                {product.title}
              </h1>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-3 mb-5">
                {product.tags.map((tag) => (
                  <button
                    key={tag}
                    className="px-2.5 py-1 text-[11px] text-gray-500 transition bg-gray-100 rounded-md hover:bg-gray-200"
                    onClick={() => {
                      navigate(`/search?q=${tag}`);
                    }}
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Spacer */}
            <div className="flex-1 hidden lg:block" />
            <div className="flex flex-col gap-5">
              <div className="flex items-end gap-4">
                <p className="text-5xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
                  ${product.price}
                </p>

                <div className="flex items-center gap-1 pb-1">
                  <span className="text-yellow-500">★</span>

                  <span className="text-sm font-medium text-gray-500">
                    {product.rating}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="max-w-lg text-lg leading-relaxed text-gray-600">
                {product.description}
              </p>

              <p className="text-sm font-semibold text-green-600">In stock</p>
              {/* Button */}
              <div className="flex flex-col items-start gap-3 pt-2">
                <button
                  onClick={() => addToCart(product)}
                  className="w-full px-8 py-4 text-base font-medium text-white transition-all bg-black rounded-xl hover:bg-gray-800 active:scale-[0.985] lg:min-w-[400px] lg:w-auto"
                >
                  Add to cart
                </button>
              </div>
            </div>

            {/* Bottom Spacer */}
            <div className="flex-1 hidden lg:block" />
          </div>

          <div className="hidden xl:flex xl:flex-col xl:w-52">
            <h3 className="mb-4 text-xs font-bold tracking-[0.18em] text-gray-400 uppercase">
              Related products
            </h3>

            <div className="space-y-4">
              {relatedProducts.map((item) => (
                <Link
                  key={item.id}
                  to={`/category/${item.categoryId}/product/${item.id}`}
                  className="flex gap-3 p-2 transition rounded-2xl hover:bg-gray-50"
                >
                  <div className="overflow-hidden bg-gray-100 rounded-xl w-18 h-18">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-900 line-clamp-1">
                      {item.title}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">${item.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductPage;
