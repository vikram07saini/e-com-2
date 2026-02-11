import ShopData from "@/data/ShopData";
import Image from "next/image";
export function generateStaticParams() {
  return ShopData.map((item) => ({
    slug: item.slug,
  }));
}
export async function generateMetadata({ params }) {
  const product = ShopData.find(
    (item) => item.slug === params.slug
  );

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product does not exist.",
    };
  }

  return {
    title: product.name,
    description: `Buy ${product.name} online at best price. Fast delivery and secure checkout available.`,
    keywords: [
      product.name,
      "buy shoes online",
      "premium sneakers",
      "fashion footwear",
      "online shopping",
    ],
    openGraph: {
      title: product.name,
      description: `Shop ${product.name} at best price.`,
      type: "website",
      url: `https://e-com-2-cyan.vercel.app/product/${product.slug}`,
    },
    twitter: {
      card: "summary",
      title: product.name,
      description: `Buy ${product.name} online at best price.`,
    },
  };
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
        priority
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: product.name,
            image: product.img,
            description: `Buy ${product.name} at best price.`,
            brand: {
              "@type": "Brand",
              name: product.name.split(" ")[0],
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "INR",
              price: "9999",
              availability: "https://schema.org/InStock",
              url: `https://e-com-2-cyan.vercel.app/product/${product.slug}`,
            },
          }),
        }}
      />
    </div>
  );
}
