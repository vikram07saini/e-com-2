import ShopData from "@/data/ShopData";
import Image from "next/image";

export function generateStaticParams() {
  return ShopData.map((item) => ({
    slug: item.slug,
  }));
}

export default function ProductPage({ params }) {
  const product = ShopData.find(
    (item) => item.slug === params.slug
  );

  if (!product) {
    return <div className="p-10">Product not found</div>;
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <Image
        src={product.img}
        alt={product.name}
        width={500}
        height={400}
      />
    </div>
  );
}
