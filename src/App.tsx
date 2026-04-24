import Home from "./pages/Home";
import { useEffect, useState } from "react";
import { getCategories, getProducts } from "./api/data";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import { RouterProvider } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import CaterogoryPage from "./pages/CategoryPage";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Support from "./pages/Support";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
    getCategories().then(setCategories);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout products={products} />,
      children: [
        { path: "", element: <Home categories={categories} /> },
        {
          path: "category/:CategoryId/",
          element: <CaterogoryPage products={products} />,
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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
