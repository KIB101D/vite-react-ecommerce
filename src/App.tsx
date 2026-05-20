import Home from "./pages/Home";
import { useCallback, useEffect, useState } from "react";
import { getCategories, getProducts } from "./api/data";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Support from "./pages/Support";
import SearchPage from "./pages/SearchPage";
import type { Product, Category } from "./Types/types";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // TODO: Future Improvement
  // Currently, data is loaded via useEffect to keep the prop architecture simple
  // (passed to Home, Breadcrumbs, etc.). In the future, when scaling,
  // it is worth moving this step to React Router Dom Data Loaders.
  const loadData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const [categoriesData, productsData] = await Promise.all([
        getCategories(),
        getProducts(),
      ]);

      setCategories(categoriesData);
      setProducts(productsData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setIsLoading(false);
    }
  }, []);
  useEffect(() => {
    loadData();
  }, [loadData]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout products={products} />,
      children: [
        {
          index: true,
          element: <Home categories={categories} isLoading={isLoading} />,
        },
        {
          path: "category/:CategoryId",
          element: <CategoryPage products={products} isLoading={isLoading} />,
        },
        {
          path: "category/:CategoryId/product/:ProductId",
          element: <ProductPage products={products} isLoading={isLoading} />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "support",
          element: <Support />,
        },
        {
          path: "search",
          element: <SearchPage products={products} isLoading={isLoading} />,
        },
        {
          path: "*",
          element: <Navigate to="/" />,
        },
      ],
    },
  ]);

  if (error) {
    return <ErrorMessage message={error} onRetry={loadData} />;
  }
  return <RouterProvider router={router} />;
}

export default App;
