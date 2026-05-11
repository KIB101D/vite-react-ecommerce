import Home from "./pages/Home";
import { useEffect, useState } from "react";
import { getCategories, getProducts } from "./api/data";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import { RouterProvider } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import type { Product, Category } from "./Types/types";
import SearchPage from "./pages/SearchPage";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getProducts().then(setProducts);
    getCategories().then(setCategories);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout products={products} />,
      children: [
        { index: true, element: <Home categories={categories} /> },
        {
          path: "category/:CategoryId/",
          element: <CategoryPage products={products} />,
        },
        {
          path: "category/:CategoryId/product/:ProductId",
          element: <ProductPage products={products} />,
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
          path: "contact",
          element: <Contact />,
        },
        {
          path: "support",
          element: <Support />,
        },
        {
          path: "search",
          element: <SearchPage products={products} />,
        },
        {
          path: "*",
          element: <Navigate to={"/"} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
