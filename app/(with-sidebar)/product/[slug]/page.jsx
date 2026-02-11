import ShopData from "@/data/ShopData";
import Image from "next/image";

// ✅ Generate Static Paths
export function generateStaticParams() {
  return ShopData.map((item) => ({
    slug: item.slug,
  }));
}

// ✅ Dynamic Metadata
export async function generateMetadata({ params }) {
  const { slug } = params;

  const product = ShopData.find(
    (item) => item.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!product) {
    return {
      title: "Product Not Found | Sneaker Store",
      description: "The requested product does not exist.",
    };
  }

  return {
    title: `${product.name} | Sneaker Store`,
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
      url: `https://e-com-2-cyan.vercel.app/product/${product.slug}`,
      type: "website",
      images: [
        {
          url: product.img.src || product.img,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: `Buy ${product.name} online at best price.`,
    },
  };
}

// ✅ Product Page
export default async function ProductPage({ params }) {
  const { slug } = params;

  const product = ShopData.find(
    (item) => item.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!product) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
        <p className="text-gray-600 mt-2">
          The product you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="p-10">
      {/* ✅ SEO H1 */}
      <h1 className="text-3xl font-bold mb-6">
        {product.name}
      </h1>

      {/* ✅ Product Image */}
      <Image
        src={product.img}
        alt={product.name}
        width={500}
        height={400}
        priority
        className="rounded-lg"
      />

      {/* ✅ JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: product.name,
            image: product.img.src || product.img,
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
