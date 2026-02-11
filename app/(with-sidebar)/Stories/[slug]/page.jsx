import ShopData from "@/data/ShopData";
import Image from "next/image";

// ✅ Generate unique static params
export function generateStaticParams() {
  const uniqueSlugs = [
    ...new Set(
      ShopData.filter((item) => item.slug).map((item) => item.slug)
    ),
  ];

  return uniqueSlugs.map((slug) => ({
    slug,
  }));
}

// ✅ Metadata
export async function generateMetadata({ params }) {
  const { slug } = params;

  const product = ShopData.find(
    (item) => item.slug === slug
  );

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product does not exist.",
    };
  }

  return {
    title: `${product.name} | Sneaker Store`,
    description: `Buy ${product.name} online at best price.`,
  };
}

// ✅ Page
export default function ProductPage({ params }) {
  const { slug } = params;

  const product = ShopData.find(
    (item) => item.slug === slug
  );

  if (!product) {
    return <div className="p-10">Product not found</div>;
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        {product.name}
      </h1>

      <Image
        src={product.img}
        alt={product.name}
        width={500}
        height={400}
        priority
      />
    </div>
  );
}
