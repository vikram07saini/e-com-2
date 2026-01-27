"use client";
import { ProductProvider } from "@/Context/ProductContext";
import { useProduct } from "@/Context/ProductContext";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/sidebar";

function LayoutContent({ children }) {
  const { selectedProduct } = useProduct();
  const pathname = usePathname();
  const isStoryDetail = pathname.startsWith("/Stories/");

  return (
    <div className="flex min-h-screen">
      <aside className="w-[420px] border-r">
        <Sidebar />
      </aside>

      <main className="flex-1 overflow-y-auto ">
        {isStoryDetail ? children : children}
      </main>
    </div>
  );
}

export default function Layout({ children }) {
  return (
    <ProductProvider>
      <LayoutContent>{children}</LayoutContent>
    </ProductProvider>
  );
}
