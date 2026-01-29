"use client";
import { useState } from "react";
import { IoMdBookmark } from "react-icons/io";
import { IoBookmarkOutline } from "react-icons/io5";
import Image from "next/image";
import ShopData from "@/data/ShopData";

export default function ProductDetailsSidebar({ product }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  if (!product) return null;


const currentIndex = ShopData.findIndex(p => p.id === product.id);

const similarProducts = [
  ShopData[(currentIndex + 1) % ShopData.length],
  ShopData[(currentIndex + 2) % ShopData.length],
];


  return (
    <>
      <button
        onClick={() => setIsBookmarked(!isBookmarked)}
        className="text-2xl p-5 mt-5"
      >
        {isBookmarked ? <IoMdBookmark /> : <IoBookmarkOutline />}
      </button>

      <p className="pl-5">09.04.22</p>

      <div className="pl-5">
        <h2 className="mt-1 text-lg font-semibold">{product.name}</h2>

        <p>
          Borrowing its nomenclature from The North Face's stalwart outerwear
          style, the Nuptse Jacket, the Nuptse Traction Chukka is a winterised
          footwear silhouette combining comfort and protection...
        </p>

        <div className="pt-[150px] lg:fixed lg:bottom-20">
          <p className="font-semibold lg:pb-4">SIMILAR PRODUCTS</p>

          <div className="flex gap-2 pb-2">
            {similarProducts.map((item) => (
              <Image
                key={item.id}
                src={item.img}
                alt={item.name}
                width={150}
                height={150}
                className="cursor-pointer bg-gray-100 rounded-xl hover:scale-105 transition"
                onClick={() => {
                  window.dispatchEvent(
                    new CustomEvent("openProductDetails", { detail: item })
                  );
                  window.dispatchEvent(
                    new CustomEvent("changeBigImage", { detail: item.img })
                  );
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
