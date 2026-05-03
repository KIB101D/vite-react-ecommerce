import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import type { Product } from "../Types/types";

type LayoutProps = {
  products: Product[];
};

function Layout({ products }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
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
  );
}

export default Layout;

