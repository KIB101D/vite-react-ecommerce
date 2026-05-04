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
            top: "80px",
          }}
        />

        <Header />

        <main className="flex flex-col flex-1">
          <div className="px-6 py-4">
            <Breadcrumbs products={products} />
          </div>

          <div className="flex-1 px-6 py-6">
            <Outlet />
          </div>
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
}

export default Layout;
