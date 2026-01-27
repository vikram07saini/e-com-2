"use client";
import { useState } from "react";
import { IoMdBookmark } from "react-icons/io";
import { IoBookmarkOutline } from "react-icons/io5";
import Image from "next/image";
import RelatedImg from "@/public/RelatedImages/related1.svg";

export default function ProductDetailsSidebar({ product }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  if (!product) return null;

  return (
    <>
      <button
        onClick={() => setIsBookmarked(!isBookmarked)}
        className="text-2xl"
        aria-label="Bookmark"
      >
        {isBookmarked ? <IoMdBookmark /> : <IoBookmarkOutline />}
      </button>

      <p className="p-2">09.04.22</p>

      <div className="p-2">
        <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>

        {product.price && (
          <p className="mt-2 text-gray-600">₹ {product.price}</p>
        )}

        <p>
          Borrowing its nomenclature from The North Face's stalwart outerwear
          style, the Nuptse Jacket, the Nuptse Traction Chukka is a winterised
          footwear silhouette combining comfort and protection...
        </p>

        <div className="pt-[150px]">
          <p className="font-semibold"> SIMILAR PRODUCTS</p>
          <div className="flex gap-7">
            <Image src={RelatedImg} alt="related" width={150} height={150} />     
            <Image
              src={RelatedImg}
              alt="related"
              width={150}
              height={150}
              className="brightness-75 hover:brightness-100 transition"
            />
          </div>
        </div>
      </div>
    </>
  );
}
