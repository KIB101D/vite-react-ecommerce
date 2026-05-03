import { Link, useLocation, useParams } from "react-router-dom";
import type { Product } from "../Types/types";

type BreadcrumbsProps = {
  products: Product[];
};

function Breadcrumbs({ products }: BreadcrumbsProps) {
  const { pathname } = useLocation();
  const { ProductId, CategoryId } = useParams();

  if (pathname === "/") return null;

  const product = products.find((p) => p.id === Number(ProductId));

  return (
    <div className="mt-4 ml-4 text-sm text-gray-500 animate-slide-in">
      <Link to="/" className="transition hover:text-indigo-600">
        Home
      </Link>

      {CategoryId && (
        <>
          <span className="mx-2">/</span>
          <Link
            to={`/category/${CategoryId}`}
            className="capitalize transition hover:text-indigo-600"
          >
            {CategoryId}
          </Link>
        </>
      )}

      {ProductId && product && (
        <>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{product.title}</span>
        </>
      )}
    </div>
  );
}

export default Breadcrumbs;
