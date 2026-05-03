import { useParams } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import type { Product } from "../Types/types";

type ProductPageProps = {
  products: Product[];
};

function ProductPage({ products }: ProductPageProps) {
  const { ProductId } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === Number(ProductId));

  if (!product) {
    return <p className="p-10">Product not found</p>;
  }

  return (
    <main className="min-h-screen px-10 py-12">
      <div className="grid max-w-5xl gap-10 mx-auto md:grid-cols-2">
        {/* Image */}
        <div className="overflow-hidden bg-white rounded-xl">
          <img
            src={product.image}
            alt={product.title}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-semibold text-gray-800 font-heading">
            {product.title}
          </h1>

          <p className="mt-4 text-2xl font-bold text-gray-900">
            ${product.price}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="px-6 py-3 mt-6 text-white bg-black rounded-xl hover:bg-gray-800"
          >
            Add to cart
          </button>
        </div>
      </div>
    </main>
  );
}

export default ProductPage;
