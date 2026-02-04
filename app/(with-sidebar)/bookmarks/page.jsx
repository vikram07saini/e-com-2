"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoMdBookmark } from "react-icons/io";
import { IoBookmarkOutline } from "react-icons/io5";
import RelatedImg from "@/public/RelatedImages/related1.svg";
import Image from "next/image";
import story2 from "@/public/storiesImages/story2.png";
import { FaBookmark } from "react-icons/fa6";
import ShopData from "@/data/ShopData";
import { useRouter } from "next/navigation";


const Page = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const router = useRouter();


  const bookmark = [
    {
      id: 1,
      image: story2,
      title: "The North Face Nuptse Traction Chukka",
      subtitle: <FaBookmark />,
    },
    {
      id: 2,
      image: story2,
      title: "The North Face Nuptse Trcation Chukka",
      subtitle: <FaBookmark />,
    },
    {
      id: 3,
      image: story2,
      title: "The North Face Nuptse Traction Chukka",
      subtitle: <FaBookmark />,
    },
    {
      id: 4,
      image: story2,
      title: "The North Face Nuptse Traction Chukka",
      subtitle: <FaBookmark />,
    },
    {
      id: 5,
      image: story2,
      title: "The North Face Nuptse Traction Chukka",
      subtitle: <FaBookmark />,
    },
    {
      id: 6,
      image: story2,
      title: "The North Face Nuptse Traction Chukka",
      subtitle: <FaBookmark />,
    },
  ];

  return (
    <>
      <div className="hidden md:block">
        <div className="px-4 sm:px-6 md:px-0">
          <div className="w-full max-w-[400px] pe-5 mx-auto md:mx-0 md:w-[400px]">
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className="text-2xl p-5 mt-5"
              aria-label="Bookmark"
            >
              {isBookmarked ? <IoMdBookmark /> : <IoBookmarkOutline />}
            </button>

            <h1 className=" pl-5 text-center md:text-left">09.04.22</h1>

            <h1 className="font-semibold text-lg sm:text-xl text-center md:text-left p-5">
              The North Face Nuptse Traction Chukka
            </h1>

            <p className="text-sm pt-5 md:me-10 text-justify p-5">
              Borrowing its nomenclature from The North Face's stalwart
              outerwear style, the Nuptse Jacket, the Nuptse Traction Chukka is
              a winterised footwear silhouette combining comfort and protection.
              Insulated using 700-fill-power goose down, the upper is made from
              durable ripstop nylon with a PFC-free DWR coating, resisting
              moisture and stains. Instead of traditional laces, it uses a
              toggle closure to block snow and ice. The outsole features Winter
              Grip® rubber with IcePick® temperature-sensitive lugs for traction
              on icy surfaces.
            </p>
          </div>

          <div className="pt-[5px] mt-6 p-3 pb-25">
            <p className="text-center md:text-left ml-2">SIMILAR PRODUCTS</p>
           <div className="flex flex-wrap justify-center md:justify-start gap-7">
  {bookmark.slice(0, 2).map((item) => {
    const product = ShopData.find((p) => p.id === item.id);

    if (!product) return null;

    return (
      <Image
        key={product.id}
        src={product.img}
        alt={product.name}
        width={150}
        height={150}
        onClick={() => router.push(`/product/${product.slug}`)} // ✅ PDP route
        className="object-contain w-[120px] sm:w-[140px] md:w-[150px] h-auto cursor-pointer"
      />
    );
  })}
</div>

          </div>
        </div>
      </div>
     <div className="block md:hidden mt-6 pb-15">
  {bookmark.map((item) => (
    <Link
      key={item.id}
      href={`/products/${item.id}`}
      className="block"
    >
      <div className="flex items-center mb-4 p-4 bg-white rounded-xl ">
        <Image
          src={item.image}
          alt={item.title}
          width={100}
          height={100}
          className="object-contain"
        />

        <div className="ml-3 text-left flex items-center">
          <h2 className="font-semibold text-base">{item.title}</h2>
          <p className="text-lg mt-1">{item.subtitle}</p>
        </div>
      </div>
    </Link>
  ))}
</div>

      <div className="block md:hidden w-full bg-white flex justify-around items-center gap-3 fixed bottom-0 left-0 z-20 p-7 shadow-sm">
        <label className="text-sm font-medium">Find</label>
        <button>-</button>
        <button>+</button>
        <label className="text-sm font-medium">Filter</label>
      </div>
    </>
  );
};
export default Page;
