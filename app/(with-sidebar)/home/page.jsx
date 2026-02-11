"use client";
import img1 from "@/public/ShoesGallery/1.png";
import img2 from "@/public/ShoesGallery/2.png";
import img3 from "@/public/ShoesGallery/3.png";
import img4 from "@/public/ShoesGallery/4.png";
import img5 from "@/public/ShoesGallery/5.png";
import img6 from "@/public/ShoesGallery/6.png";
import img7 from "@/public/ShoesGallery/7.png";
import img8 from "@/public/ShoesGallery/8.png";
import img9 from "@/public/ShoesGallery/9.png";
import img10 from "@/public/ShoesGallery/10.png";
import img11 from "@/public/ShoesGallery/11.png";
import img12 from "@/public/ShoesGallery/12.png";
import img13 from "@/public/ShoesGallery/13.png";
import img14 from "@/public/ShoesGallery/14.png";
import img15 from "@/public/ShoesGallery/15.png";
import img16 from "@/public/ShoesGallery/16.png";
import img17 from "@/public/ShoesGallery/17.png";
import img18 from "@/public/ShoesGallery/18.png";
import { useRouter } from "next/navigation";

const items = [
  {
    id: 1,
   img:img1,
    title: "adidas Pro Model by Edison Chen",
    name:"adidas Pro Model",
    slug: "adidas-pro-model",
  },
  {
    id: 2,
    img:img2,
    title: "IRDEA Bouquet Trainer",
    name:"IRDEA Bouquet Trainer",
    slug: "irdea-bouquet-trainer",
  },
  {
    id: 3,
    img:img3,
    title: "adidas Adizero ArukuYagi by Mr Bailey",
    name:"adidas Adizero ArukuYagi",
    slug: "adizero-arukuyagi",
  },
  {
    id: 4,
    img:img4,
    title: "Above The Ground Cowhide Loafer",
    name:"Above The Ground Cowhide Loafer",
    slug: "cowhide-loafer",
  },
  {
    id: 5,
    img:img5,
    title: "Saucony Endorphin Speed 5 by Distance",
    name:"Saucony Endorphin Speed 5",
    slug: "saucony-endorphin-speed-5",
  },
  {
    id: 6,
    img:img6,
    title: "The North Face Basecamp Thermoball Mule",
    name:"Basecamp Thermoball Mule",
    slug: "basecamp-thermoball-mule",
  },
  {
    id: 7,
    img:img7,
    title: "The North Face Basecamp Waterproof Mule",
    name:"Basecamp Waterproof Mule",
    slug: "basecamp-waterproof-mule",
  },
  {
    id: 8,
    img:img8,
    title: 'Puma Suede "Burger" by Vandy The Pink',
    name:'Puma Suede "Burger"',
    slug: "puma-suede-burger",
  },
  {
    id: 9,
    img:img9,
    title: "The North Face Base Camp 100",
    name:"Base Camp 100",
    slug: "base-camp-100",
  },
  {
    id: 10,
    img:img10,
    title: "The North Face Base Camp 200",
    name:"Base Camp 200",
    slug: "base-camp-200",
  },
  { id: 11,
    img:img11, title: "Vans Era 95", name:"Vans Era 95", slug: "vans-era-95" },
  {
    id: 12,
    img:img12,
    title: 'Arc\'teryx Norvan Nivalis In "Grotto"',
    name:"Norvan Nivalis Grotto",
    slug: "norvan-nivalis-grotto",
  },
  { id: 13,
    img:img13, title: "ROA Hida", name:"ROA Hida", slug: "roa-hida" },
  {
    id: 14,
    img:img14,
    title: "Timberland 6-Inch Boot by One Block Down",
    name:"Timberland 6-Inch Boot",
    slug: "timberland-6-inch",
  },
  {
    id: 15,
    img:img15,
    title: "Clarks Original Wallabee By Invisible",
    name:"Clarks Wallabee Invisible",
    slug: "clarks-wallabee-invisible",
  },
  {
    id: 16,
    img:img16,
    title: "Filling Pieces Gowtu Loafer Solid",
    name:"Filling Pieces Gowtu Loafer",
    slug: "gowtu-loafer",
  },
  {
    id: 17,
    img:img17,
    title: "Moon Boot X adidas UB 1.0",
    name:"Moon Boot X adidas UB 1.0",
    slug: "moon-boot-adidas-ub",
  },
  {
    id: 18,
    img:img18,
    title: "Moon Boot X adidas Ace",
    name:"Moon Boot X adidas Ace",
    slug: "moon-boot-adidas-ace",
  },
  {
    id: 19,
    img:img1,
    title: "The North Face Nuptse Traction Chukka",
    name:"Nuptse Traction Chukka",
    slug: "nuptse-traction-chukka",
  },
  {
    id: 20,
    img:img2,
    title: "adidas Adizero Evo SL",
    name:"adidas Adizero Evo SL",
    slug: "adizero-evo-sl",
  },
   {
    id: 21,
    img:img3,
    title: "adidas Pro Model by Edison Chen",
    name:"adidas Pro Model",
    slug: "adidas-pro-model",
  },
  {
    id: 22,
    img:img4,
    title: "IRDEA Bouquet Trainer",
    name:"IRDEA Bouquet Trainer",
    slug: "irdea-bouquet-trainer",
  },
  {
    id: 23,
    img:img5,
    title: "adidas Adizero ArukuYagi by Mr Bailey",
    name:"adidas Adizero ArukuYagi",
    slug: "adizero-arukuyagi",
  },
  {
    id: 24,
    img:img6,
    title: "Above The Ground Cowhide Loafer",
    name:"Above The Ground Cowhide Loafer",
    slug: "cowhide-loafer",
  },
  {
    id: 25,
    img:img7,
    title: "Saucony Endorphin Speed 5 by Distance",
    name:"Saucony Endorphin Speed 5",
    slug: "saucony-endorphin-speed-5",
  },
  {
    id: 26,
    img:img8,
    title: "The North Face Basecamp Thermoball Mule",
    name:"Basecamp Thermoball Mule",
    slug: "basecamp-thermoball-mule",
  },
  {
    id: 27,
    img:img9,
    title: "The North Face Basecamp Waterproof Mule",
    name:"Basecamp Waterproof Mule",
    slug: "basecamp-waterproof-mule",
  },
  {
    id: 28,
    img:img10,
    title: 'Puma Suede "Burger" by Vandy The Pink',
    name:'Puma Suede "Burger"',
    slug: "puma-suede-burger",
  },
  {
    id: 29,
    img:img11,
    title: "The North Face Base Camp 100",
    name:"Base Camp 100",
    slug: "base-camp-100",
  },
  {
    id: 30,
    img:img12,
    title: "The North Face Base Camp 200",
    name:"Base Camp 200",
    slug: "base-camp-200",
  },
  { id: 31,
    img:img13, title: "Vans Era 95", name:"Vans Era 95", slug: "vans-era-95" },
  {
    id: 32,
    img:img14,
    title: 'Arc\'teryx Norvan Nivalis In "Grotto"',
    name:"Norvan Nivalis Grotto",
    slug: "norvan-nivalis-grotto",
  },
  { id: 33,
    img:img15, title: "ROA Hida", name:"ROA Hida", slug: "roa-hida" },
  {
    id: 34,
    img:img16,
    title: "Timberland 6-Inch Boot by One Block Down",
    name:"Timberland 6-Inch Boot",
    slug: "timberland-6-inch",
  },
];

const Page = () => {
  const router = useRouter();

  const handleProductClick = (item) => {
    router.push(`/product/${item.slug}`, { scroll: false });
    window.dispatchEvent(
  new CustomEvent("productSelected", {
    detail: item, 
  })
);

  };

  return (
    
    <div className="flex md:block justify-center md:justify-start px-2 sm:px-4 md:px-0 pb-20">
      <div
        className="
          w-full
          sm:w-[350px]
          max-h-[87vh]
          p-3
          sm:p-5
          md:p-5
          bg-white
          overflow-y-auto
        "
      >
        <ul>
          {items.map((item, index) => (
            <li key={item.id}>
              <button
                onClick={() => handleProductClick(item)}
                className="
                  w-full text-left flex gap-2 text-xs 
                  hover:underline items-center whitespace-nowrap 
                  overflow-hidden text-ellipsis cursor-pointer
                  hover:bg-gray-50 p-1 rounded
                "
              >
                <span className="w-4 sm:w-5 md:w-3 text-sm">
                  {index + 1}.
                </span>
                <span className="p-1 truncate">
                  {item.title}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
