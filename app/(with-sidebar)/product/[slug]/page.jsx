// import ShopData from "@/data/ShopData";
// import Image from "next/image";
// export function generateStaticParams() {
//   return ShopData.map((item) => ({
//     slug: item.slug,
//   }));
// }
// export async function generateMetadata({ params }) {
//   const slug = params?.slug;
//   if (!slug) {
//     return {
//       title: "Product",
//     };
//   }
//   const product = ShopData.find((item) => item.slug === slug);
//   if (!product) {
//     return {
//       title: "Product Not Found",
//       description: "The requested product does not exist.",
//     };
//   }
//   return {
//     title: product.name,
//     description: `Buy ${product.name} online at best price.`,
//   };
// }
// export default function ProductPage({ params }) {
//   const slug = params?.slug;

//   const product = ShopData.find((item) => item.slug === slug);
//   if (!product) {
//     return <div className="p-10">Product not found</div>;
//   }
//   return (
//     <div className="p-10">
//       <h1 className="text-3xl font-bold">{product.name}</h1>
//       <Image
//         src={product.img}
//         alt={product.name}
//         width={500}
//         height={400}
//         priority
//       />
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org/",
//             "@type": "Product",
//             name: product.name,
//             image: product.img?.src,
//             description: `Buy ${product.name} at best price.`,
//           }),
//         }}
//       />
//     </div>
//   );
// }
export default function ProductPage() {
  return null;
}