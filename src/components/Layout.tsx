import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import type { Product } from "../Types/types";
import { CartProvider } from "../Context/CartProvider";
import { Toaster } from "sonner";

type LayoutProps = {
  products: Product[];
};

function Layout({ products }: LayoutProps) {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Toaster
          position="top-right"
          style={{
            top: "60px",
          }}
        />

        <Header />

        <main className="flex flex-col flex-1 px-4 py-4 sm:px-6 md:px-10 sm:py-6">
          <div className="w-full mx-auto max-w-7xl">
            <Breadcrumbs products={products} />
          </div>

          <div className="flex-1 pb-3">
            <Outlet />
          </div>
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
}

export default Layout;
