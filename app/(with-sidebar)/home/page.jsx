"use client";
import { useRouter } from "next/navigation";

const items = [
  {
    id: 1,
    title: "adidas Pro Model by Edison Chen",
    slug: "adidas-pro-model",
  },
  {
    id: 2,
    title: "IRDEA Bouquet Trainer",
    slug: "irdea-bouquet-trainer",
  },
  {
    id: 3,
    title: "adidas Adizero ArukuYagi by Mr Bailey",
    slug: "adizero-arukuyagi",
  },
  {
    id: 4,
    title: "Above The Ground Cowhide Loafer",
    slug: "cowhide-loafer",
  },
  {
    id: 5,
    title: "Saucony Endorphin Speed 5 by Distance",
    slug: "saucony-endorphin-speed-5",
  },
  {
    id: 6,
    title: "The North Face Basecamp Thermoball Mule",
    slug: "basecamp-thermoball-mule",
  },
  {
    id: 7,
    title: "The North Face Basecamp Waterproof Mule",
    slug: "basecamp-waterproof-mule",
  },
  {
    id: 8,
    title: 'Puma Suede "Burger" by Vandy The Pink',
    slug: "puma-suede-burger",
  },
  {
    id: 9,
    title: "The North Face Base Camp 100",
    slug: "base-camp-100",
  },
  {
    id: 10,
    title: "The North Face Base Camp 200",
    slug: "base-camp-200",
  },
  { id: 11, title: "Vans Era 95", slug: "vans-era-95" },
  {
    id: 12,
    title: 'Arc\'teryx Norvan Nivalis In "Grotto"',
    slug: "norvan-nivalis-grotto",
  },
  { id: 13, title: "ROA Hida", slug: "roa-hida" },
  {
    id: 14,
    title: "Timberland 6-Inch Boot by One Block Down",
    slug: "timberland-6-inch",
  },
  {
    id: 15,
    title: "Clarks Original Wallabee By Invisible",
    slug: "clarks-wallabee-invisible",
  },
  {
    id: 16,
    title: "Filling Pieces Gowtu Loafer Solid",
    slug: "gowtu-loafer",
  },
  {
    id: 17,
    title: "Moon Boot X adidas UB 1.0",
    slug: "moon-boot-adidas-ub",
  },
  {
    id: 18,
    title: "Moon Boot X adidas Ace",
    slug: "moon-boot-adidas-ace",
  },
  {
    id: 19,
    title: "The North Face Nuptse Traction Chukka",
    slug: "nuptse-traction-chukka",
  },
  {
    id: 20,
    title: "adidas Adizero Evo SL",
    slug: "adizero-evo-sl",
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
