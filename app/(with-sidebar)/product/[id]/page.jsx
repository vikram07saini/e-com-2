import ProductDetailsSidebar from "@/components/ProductDetailsSidebar";
import ShopData from "@/data/ShopData";
export function generateStaticParams() {
  return ShopData.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductPage({ params }) {
  return <ProductDetailsSidebar id={params.id} />;
}
