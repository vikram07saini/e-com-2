"use client";
import { useRouter } from "next/navigation";

const items = [
  {
    id: 1,
    title: "adidas Pro Model by Edison Chen",
    href: "/products/adidas-pro-model",
  },
  {
    id: 2,
    title: "IRDEA Bouquet Trainer",
    href: "/products/irdea-bouquet-trainer",
  },
  {
    id: 3,
    title: "adidas Adizero ArukuYagi by Mr Bailey",
    href: "/products/adizero-arukuyagi",
  },
  {
    id: 4,
    title: "Above The Ground Cowhide Loafer",
    href: "/products/cowhide-loafer",
  },
  {
    id: 5,
    title: "Saucony Endorphin Speed 5 by Distance",
    href: "/products/saucony-endorphin-speed-5",
  },
  {
    id: 6,
    title: "The North Face Basecamp Thermoball Mule",
    href: "/products/basecamp-thermoball-mule",
  },
  {
    id: 7,
    title: "The North Face Basecamp Waterproof Mule",
    href: "/products/basecamp-waterproof-mule",
  },
  {
    id: 8,
    title: "Puma Suede \"Burger\" by Vandy The Pink",
    href: "/products/puma-suede-burger",
  },
  {
    id: 9,
    title: "The North Face Base Camp 100",
    href: "/products/base-camp-100",
  },
  {
    id: 10,
    title: "The North Face Base Camp 200",
    href: "/products/base-camp-200",
  },
  { id: 11, title: "Vans Era 95", href: "/products/vans-era-95" },
  {
    id: 12,
    title: "Arc'teryx Norvan Nivalis In \"Grotto\"",
    href: "/products/norvan-nivalis-grotto",
  },
  { id: 13, title: "ROA Hida", href: "/products/roa-hida" },
  {
    id: 14,
    title: "Timberland 6-Inch Boot by One Block Down",
    href: "/products/timberland-6-inch",
  },
  {
    id: 15,
    title: "Clarks Original Wallabee By Invisible",
    href: "/products/clarks-wallabee-invisible",
  },
  {
    id: 16,
    title: "Filling Pieces Gowtu Loafer Solid",
    href: "/products/gowtu-loafer",
  },
  {
    id: 17,
    title: "Moon Boot X adidas UB 1.0",
    href: "/products/moon-boot-adidas-ub",
  },
  {
    id: 18,
    title: "Moon Boot X adidas Ace",
    href: "/products/moon-boot-adidas-ace",
  },
  {
    id: 19,
    title: "The North Face Nuptse Traction Chukka",
    href: "/products/nuptse-traction-chukka",
  },
  { id: 20, title: "adidas Adizero Evo SL", href: "/products/adizero-evo-sl" },
  { id: 21, title: "Puma Speedcat \"Adorne\" by Feature", href: "/products" },
  { id: 22, title: "Clarks Originals Wallabee by Adaptism", href: "/products" },
  { id: 23, title: "adidas Pro Model by Edison Chen ", href: "/products" },
  { id: 24, title: "Mizuno Wave Rider 10 by SLY", href: "/products" },
  { id: 25, title: "PUMA Mostro Caged by San San Gear", href: "/products" },
  { id: 26, title: "PUMA Mostro Talon by San San Gear", href: "/products" },
  { id: 27, title: "PUMA Speedcat by END.", href: "/products" },
  { id: 28, title: "Salomon XT-Pathway 2 Ferxxo", href: "/products" },
  { id: 29, title: "adidas Karintha WB by Wales Bonner", href: "/products" },
  {
    id: 30,
    title: "Gnuhr FootprintCamp Sandal With Jack Dorrance",
    href: "/products",
  },
  {
    id: 31,
    title: "New Balance FuelCell Rebel V5 \"Samelane\" by Up There Athletics",
    href: "/products",
  },
  {
    id: 32,
    title: "asics Gel-Cumulus 16 'Desert Rose\" by Finesse",
    href: "/products",
  },
  { id: 33, title: "New Balance RC56 by Aime Leon Dore", href: "/products" },
  { id: 34, title: "adidas Superstar by Wales Bonner", href: "/products" },
];

const Page = () => {
  const router = useRouter();

const handleProductClick = (item) => {
  const currentParams = new URLSearchParams(window.location.search);
  currentParams.set("selected", item.id);

  // ✅ If on mobile or not already on shop page, go to shop
  if (window.innerWidth < 1024 || window.location.pathname !== "/") {
    router.push(`/?${currentParams.toString()}`);
  } else {
    // ✅ Desktop: stay on same page, just update query
    router.push(`?${currentParams.toString()}`, undefined, { shallow: true });
  }

  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("productSelected", { detail: item.id })
    );
  }
};


  return (
    <div className="flex md:block justify-center md:justify-start px-2 sm:px-4 md:px-0 ">
      <div
        className="
          w-full
          sm:w-[400px]
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
                  w-full text-left flex gap-2 text-xs sm:text-sm md:text-sm 
                  hover:underline items-center whitespace-nowrap 
                  overflow-hidden text-ellipsis cursor-pointer
                  hover:bg-gray-50 p-1 rounded
                "
              >
                <span className="w-4 sm:w-5 md:w-3 text-sm">{index + 1}.</span>
                <span className="p-1 truncate">{item.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;