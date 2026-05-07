import { useParams, Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import type { Product } from "../Types/types";

type ProductPageProps = {
  products: Product[];
};

function ProductPage({ products }: ProductPageProps) {
  const { ProductId, CategoryId } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === Number(ProductId));

  if (!product) {
    return (
      <div className="p-20 text-center text-gray-500">Product not found</div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .filter((p) => p.tags.some((tag) => product.tags.includes(tag)))
    .slice(0, 3);

  return (
    <main className="pt-2 pb-10">
      <div className="grid max-w-7xl gap-8 mx-auto lg:grid-cols-[minmax(340px,520px)_1fr]">
        {/* Image */}
        <div className="overflow-hidden bg-white shadow-sm rounded-2xl aspect-square lg:max-w-[620px]">
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
        <div className="flex gap-4 lg:min-h-full lg:py-6">
          <div className="flex flex-col flex-1">
            <div>
              <Link
                to={`/category/${CategoryId}`}
                className="text-[11px] font-semibold tracking-[0.18em] text-indigo-600 uppercase transition hover:opacity-70 w-fit"
              >
                {CategoryId}
              </Link>

              {/* Title */}
              <h1 className="mt-3 text-5xl font-semibold leading-[0.95] tracking-tight text-gray-900 font-heading">
                {product.title}
              </h1>

              <div className="flex flex-wrap gap-2 mt-5">
                {product.tags.map((tag) => (
                  <button
                    key={tag}
                    className="px-2.5 py-1 text-[11px] text-gray-500 transition bg-gray-100 rounded-md hover:bg-gray-200"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 hidden lg:block" />

            {/* Purchase Section */}
            <div className="flex flex-col gap-5">
              {/* Price & Rating */}
              <div className="flex items-end gap-4">
                <p className="text-5xl font-bold tracking-tight text-gray-900">
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
