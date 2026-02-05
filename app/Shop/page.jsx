"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import ShopData from "@/data/ShopData";
import { stories } from "@/data/stories.js";
import Link from "next/link";
import story4 from "@/public/storiesImages/story4.png";
import { FaRegBookmark } from "react-icons/fa6";
import { HiOutlineArrowSmRight, HiOutlineArrowSmLeft } from "react-icons/hi";
import { FaLongArrowAltLeft } from "react-icons/fa";
import logo from "@/public/logo.svg";
import { useRouter, usePathname } from "next/navigation";
import ProductDetailsSidebar from "@/components/ProductDetailsSidebar";

export default function Page() {
  const [isFinding, setIsFinding] = useState(false);
  const [selectedShoe, setSelectedShoe] = useState(null);
  const [selectedStory, setSelectedStory] = useState(null);
  const pathname = usePathname();
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const storyContentRef = useRef(null);
  const [zoom, setZoom] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeSlides, setActiveSlides] = useState([]);
  const [isFading, setIsFading] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedProductId, setSelectedProductId] = useState(null);
  const hideOnHome = pathname === "/home";
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const [gridCols, setGridCols] = useState(2);
   const tagRef = useRef(null);
   const [showDiv, setShowDiv] = useState(false);
   
   const openPDP = (product) => {
  router.push(`/product/${product.slug}`, { scroll: false });
};

   const openProduct = (product) => {
  setSelectedShoe(product);

  const reordered = [
    product.img,
    ...Slide[0].images.filter((img) => img !== product.img),
  ];

  setActiveSlides(reordered);
  setCurrentSlide(0);
};


  useEffect(() => {
    const updateGridByScreen = () => {
      if (window.innerWidth < 1024) {
        setGridCols(2); // mobile
      } else {
        setGridCols(6); // desktop
      }
    };

    updateGridByScreen();
    window.addEventListener("resize", updateGridByScreen);

    return () => window.removeEventListener("resize", updateGridByScreen);
  }, []);
useEffect(() => {
  if (!selectedShoe) return;

  const scrollEl = document.getElementById("main-scroll") || window;

  const getScrollTop = () =>
    scrollEl === window ? window.scrollY : scrollEl.scrollTop;
})

useEffect(() => {
  if (!selectedShoe) return;

  const main = document.getElementById("main-scroll");

  if (main) {
    main.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}, [selectedShoe?.id]);

  const sortedShopData = [...ShopData].sort((a, b) =>
    sortOrder === "asc" ? a.id - b.id : b.id - a.id,
  );

  const zoomIn = () => {
  setGridCols((prev) => {
    const isMobile = window.innerWidth < 1024;

    if (isMobile) {
     
      return prev > 2 ? prev - 1 : 2;
    } else {
      return prev > 1 ? prev - 1 : 1;
    }
  });
};

 const zoomOut = () => {
  setGridCols((prev) => {
    const isMobile = window.innerWidth < 1024;
    const maxCols = isMobile ? 3 : 6;

    return prev < maxCols ? prev + 1 : maxCols;
  });
};
useEffect(() => {
  if (!pathname.startsWith("/product/")) return;

  const slug = pathname.split("/")[2];
  const product = ShopData.find((p) => p.slug === slug);

  if (product) {
    openProduct(product); 
  }
}, [pathname]);




useEffect(() => {
  const handleProductSelected = (e) => {
    const product = e.detail;
    if (!product) return;

    setSelectedShoe(product);

    const reordered = [
      product.img,
      ...Slide[0].images.filter((img) => img !== product.img),
    ];

    setActiveSlides(reordered);
    setCurrentSlide(0);
  };

  window.addEventListener("productSelected", handleProductSelected);

  return () => {
    window.removeEventListener("productSelected", handleProductSelected);
  };
}, []);
 const handleHighlightClick = (product) => {
  setSelectedProductId(product.id);
  router.push(`/product/${product.slug}`, { scroll: false });

  const el = document.getElementById(`product-${product.id}`);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};


  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  useEffect(() => {
  const handleCloseProduct = () => {
  setSelectedShoe(null);
  setActiveSlides(Slide[0].images);
  setCurrentSlide(0);
};


    window.addEventListener("closeProductDetails", handleCloseProduct);

    return () => {
      window.removeEventListener("closeProductDetails", handleCloseProduct);
    };
  }, []);

  const isStoriesPage = pathname.startsWith("/Stories");
 useEffect(() => {
  if (pathname.startsWith("/product/")) {
    return; 
  }

  const lowerPath = pathname.toLowerCase();
  const isMobile = window.innerWidth < 1024;

  if (lowerPath === "/stories" && isMobile) {
    setSelectedStory(null);
    return;
  }

  if (lowerPath === "/stories" && !isMobile) {
    setSelectedStory(stories[0] || null);
    return;
  }

  if (lowerPath.startsWith("/stories/")) {
    const slug = pathname.split("/")[2];
    const story = stories.find((s) => s.slug === slug);
    setSelectedStory(story || null);
    return;
  }

  setSelectedStory(null);
}, [pathname]);


  const Slide = [
    {
      id: 1,
      name: "Nike Shoe",
      images: [
        "/ShoesGallery/21.png",
        "/ShoesGallery/16.png",
        "/ShoesGallery/2.png",
        "/ShoesGallery/2.png",
        "/ShoesGallery/13.png",
      ],
    },
  ];

  const slides =
  activeSlides.length > 0
    ? activeSlides.filter(Boolean)
    : Slide[0].images.filter(Boolean);


  const prevSlide = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentSlide((p) => (p === 0 ? slides.length - 1 : p - 1));
      setIsFading(false);
    }, 150);
  };

  const nextSlide = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentSlide((p) => (p === slides.length - 1 ? 0 : p + 1));
      setIsFading(false);
    }, 150);
  };

  const handleProductClick = (product) => {
  router.push(`/product/${product.slug}`);
  if (window.innerWidth >= 1024) {
    setSelectedShoe(product);

    const reordered = [
      product.img,
      ...Slide[0].images.filter((img) => img !== product.img),
    ];

    setActiveSlides(reordered);
    setCurrentSlide(0);

    window.dispatchEvent(
      new CustomEvent("productSelected", { detail: product })
    );
  }
};


  const showDesktopZoomBar = !isMobile && !selectedStory && !selectedShoe;
  useEffect(() => {
    if (selectedStory) {
      const main = document.getElementById("main-scroll");
      if (main) {
        main.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }
  }, [selectedStory]);
  useEffect(() => {

  if (pathname.startsWith("/product/")) {
    setSelectedStory(null);
  }
}, [pathname]);

  useEffect(() => {
    const handleImageChange = (e) => {
      setCurrentSlide(e.detail);
    };

    window.addEventListener("changeBigImage", handleImageChange);

    return () => {
      window.removeEventListener("changeBigImage", handleImageChange);
    };
  }, []);
  useEffect(() => {
    const handleImageChange = (e) => {
      const newImg = e.detail;

      setActiveSlides((prev) => [
        newImg,
        ...prev.filter((img) => img !== newImg),
      ]);
      setCurrentSlide(0);
    };

    window.addEventListener("changeBigImage", handleImageChange);

    return () => {
      window.removeEventListener("changeBigImage", handleImageChange);
    };
  }, []);

  return (
    <>
      <div className="relative min-h-screen h-[500px] rounded-2xl ">
        {selectedStory && !selectedShoe && (
          <div
            ref={storyContentRef}
            className="max-w-5xl mx-auto pt-10 mb-10 bg-white rounded-2xl "
          >
       <div className="relative flex justify-center bg-white rounded-2xl mb-6">
  <Image
    src={
      selectedStory.slug === stories[0].slug
        ? story4
        : selectedStory.image
    }
    alt={selectedStory.title}
    width={1200}
    height={600}
    className="w-full h-120 object-cover rounded-xl mt-11"
  />

  <div className="lg:absolute lg:top-[74%] lg:left-[3%] lg:-translate-y-1/6 lg:p-3 absolute top-[75%] left-[1%] -translate-y-1/4 p-2">
    <h1 className="text-xs text-white">New Release</h1>
    <h1 className="lg:text-3xl text-lg text-white">
      The North Face Nuptse <br />
      Traction Chukka
    </h1>
    <h1 className="text-sm text-white">
      A conversation with Ghostly International founder Sam
      <br /> Valenti IV on the occasion of his new coffee table book.
    </h1>
  </div>
</div>


            <div className="transition-all duration-200 ">
              <div className="flex justify-between pl-2 pr-2 pb-4 lg:hidden">
                <h1 className="text-sm">spotlight:</h1>
                <h1 className="text-sm">{selectedStory.date}</h1>
              </div>
             <div className="w-full lg:max-w-4xl  px-4 break-words leading-relaxed">
  {selectedStory.content}
</div>

              <div className="mt-6 max-w-md mx-auto text-justify leading-relaxed pb-20">
                <p className="p-3">
                  I've known Valenti for a few years; we circled each other as
                  something like mutual admirers before we ever talked to one
                  another in person. He's best known as the founder of Ghostly
                  International, the venerable record label he started from a
                  University of Michigan dorm room in 1999. Ghostly is mostly
                  known as an electronic music label, but when you take a closer
                  look at the label roster it's like thumbing through the record
                  collection of a free-form radio DJ.
                  <br />
                  Ghostly emerged during a relative fallow period for American
                  electronic music. Valenti is from the Detroit suburbs, and has
                  a deep appreciation for the different sounds the Motor City
                  has incubated over the decades. He entered the city's club
                  scene as a teenager, carrying records for Detroit legend DJ
                  House Shoes and playing gigs with Mike Servito. His love for
                  Detroit carried over to Ghostly's first release, the funky
                  house track "Hands Up for Detroit" by Matthew Dear whom
                  Valenti met in his first week of undergrad. Dear's song was
                  both an indication and a smokescreen of where Ghostly was
                  headed. The label would become an electronic music tastemaker,
                  of course, but also became known for signing hard-to-define
                  acts like Tycho and Ginger Root. Being genre-agnostic doesn't
                  go against the Ghostly philosophy, Valenti told me. "The human
                  has to be leading through all the music," he said.
                  <br /> Last month, Valenti published a coffee table book that
                  looks back at Ghostly's first 25 years. I wanted to talk to
                  him about what he's seen change in that quarter century, as
                  Valenti has always had an expansive, optimistic view of the
                  music community's ability to adapt and endure, which runs
                  counter to so much of the current discourse. One thing that
                  was clear after our conversation is that Valenti knows that
                  even after 25 years of shaping part of the music landscape, he
                  knows the next generation is coming for him. And he's just
                  fine with that.
                </p>
              </div>
              <div className="lg:flex  justify-center gap-6 pb-50 hidden">
                <div className="bg-gray-400 w-50 h-60"></div>
                <div className="bg-gray-400 w-50 h-60"></div>
                <div className="bg-gray-400 w-50 h-60"></div>
              </div>
            </div>
          </div>
        )}

        {!selectedShoe && !selectedStory && (
          <div className="transition-all duration-200">
            <div
              className={`group grid gap-6 p-1 pb-20 pt-20 lg:pt-5 ${
                gridCols === 1
                  ? "grid-cols-1"
                  : gridCols === 2
                    ? "grid-cols-2"
                    : gridCols === 3
                      ? "grid-cols-3"
                      : gridCols === 4
                        ? "grid-cols-4"
                        : gridCols === 5
                          ? "grid-cols-5"
                          : "grid-cols-6"
              }`}
            >
              {sortedShopData.map((item) => {
                const isSelected = selectedProductId === item.id;

                return (
    <div
  key={item.id}
  id={`product-${item.id}`}
  onClick={() => handleProductClick(item)}
  onDoubleClick={() => handleHighlightClick(item)}
  className={`
    relative bg-gray-100 p-1 sm:p-3 cursor-pointer
    transition-all duration-300 ease-in-out
    group-hover:opacity-40 group-hover:bg-white/60
    hover:opacity-100 hover:bg-gray-100 hover:scale-105
    m-1 sm:m-3 
  `}
>
  {/* ID TAG */}
  <span
    className="
      absolute top-1 left-1 sm:top-2 sm:left-2
      text-[10px] sm:text-xs
      text-black 
      px-1 sm:px-2 py-[1px] sm:py-1
      rounded
    "
  >
    {item.id}
  </span>

  {/* SALE TAG */}
  {item.sale && (
    <span
      className="
        absolute top-1 right-1 sm:top-2 sm:right-2
        text-[10px] sm:text-xs
        bg-red-600 text-white
        px-1 sm:px-2 py-[1px] sm:py-1
        rounded
      "
    >
      {item.sale}
    </span>
  )}

  <Image
    src={item.img}
    alt={item.name}
    width={600}
    height={600}
    className="
      object-contain
      w-full
      aspect-square
      mx-auto
      scale-125 sm:scale-100
    "
  />
</div>


                );
              })}
            </div>
          </div>
        )}
       {selectedShoe && (
  <div className="max-w-5xl mx-auto lg:block">

           
           {/* FIXED IMAGE + THUMBNAILS – MOBILE */}
<div
  className="
    lg:static
    fixed
    top-[80px]
    left-0
    right-0
    h-[50vh]
    bg-gray-100
    z-20
    flex
    flex-col
    justify-center
    items-center
  "
>
  {/* BIG IMAGE */}
  <div className="relative w-full flex-1 flex justify-center items-center">
    <button
      onClick={prevSlide}
      className="absolute left-2 text-3xl z-30"
    >
      <HiOutlineArrowSmLeft />
    </button>

   {slides[currentSlide] && (
  <Image
    src={slides[currentSlide]}
    alt={Slide[0].name}
    width={600}
    height={400}
    className={`object-contain transition-all duration-300
      ${isFading ? "opacity-0 translate-x-5" : "opacity-100 translate-x-0"}
    `}
  />
)}


    <button
      onClick={nextSlide}
      className="absolute right-2 text-3xl z-30"
    >
      <HiOutlineArrowSmRight />
    </button>
  </div>

  {/* THUMBNAILS */}
  <div className="lg:hidden flex gap-2  mr-20 pb-28">
    {slides
  .filter(Boolean)        // 🚨 removes "" and undefined
  .slice(0, 2)
  .map((img, index) => (
    <Image
      key={index}
      src={img}
      alt="related"
      width={130}
      height={130}
      onClick={() => setCurrentSlide(index)}
      className={`
        bg-white rounded-xl cursor-pointer
        ${currentSlide === index ? "ring-2 ring-blue-500" : ""}
      `}
    />
))}

  </div>
</div>


<div className="lg:hidden mt-[60vh]">
  {/* Date */}
  <div className="flex justify-between items-center bg-white p-3 rounded-t-2xl">
    <span className="text-sm text-gray-600">
      20th April 2025
    </span>
    <FaRegBookmark className="text-3xl" />
  </div>

  <div className="bg-white">
    <p className="text-2xl font-bold flex-1 mx-3 truncate">
      {selectedShoe.name}
    </p>
  </div>
</div>



            <h1 className="text-justify leading-relaxed p-5 lg:hidden bg-white ">
              Borrowing its nomenclature from The North Face's stalwart
              outerwear style, the Nuptse Jacket, the Nuptse Traction Chukka is
              a winterised footwear silhouette combining comfort and protection.
              Insulated using a 700-fill-power goose down, the upper is made
              from a durable ripstop nylon, with a PFC-free DWR coating,
              shedding light moisture and resisting stains. In place of
              traditional lacing, the Chukka opts for a toggle closure to
              prevent snow and ice from getting in while you traverse snow-laden
              surfaces. The shoe is fitted with a Winter Grip® rubber outsole,
              with IcePick® temperature-sensitive rubber lugs. The Black and
              Yellow colours are mainstays in The North Face footwear, while a
              Real Tree camo option is a nod to hunting and outdoor wear.
            </h1>
<div
  ref={tagRef}
  className="
    lg:hidden
    flex
    gap-[0.4rem]
    rounded-xl
    pl-[1.25rem]
    flex-wrap
  "
>
  <h1 className="bg-gray-300 text-black text-[0.75rem] px-[0.4rem] py-[0.2rem] rounded-sm shadow-md">
    The North Face
  </h1>

  <h1 className="bg-gray-300 text-black text-[0.75rem] px-[0.4rem] py-[0.2rem] rounded-sm shadow-md">
    Nov 2025
  </h1>

  <h1 className="bg-gray-300 text-black text-[0.75rem] px-[0.4rem] py-[0.2rem] rounded-sm shadow-md">
    Camouflage
  </h1>

  <h1 className="bg-gray-300 text-black text-[0.75rem] px-[0.4rem] py-[0.2rem] rounded-sm shadow-md">
    High
  </h1>

  <h1 className="bg-gray-300 text-black text-[0.75rem] px-[0.4rem] py-[0.2rem] rounded-sm shadow-md">
    Slip On
  </h1>
</div>





             <div className="bg-white rounded-b-2xl">
            <div className="mt-8 pl-8 lg:hidden bg-white ">
              <h1 className="pt-5">SIMILAR PRODUCTS</h1>
            </div>
           
            <div className="flex gap-5 md:pb-20 lg:pb-3 items-center  justify-center  w-50 pl-2 pt-1 mt-2 lg:fixed lg:bottom-1 lg:left-100 ">
   <div className="flex gap-5 ">
  {ShopData
    .filter((item) => item.id !== selectedShoe?.id) 
    .slice(0, 2) 
    .map((item) => (
      <Image
        key={item.id}
        src={item.img}
        alt={item.name}
        width={150}
        height={150}
        onClick={() => handleProductClick(item)} 
        className="object-contain cursor-pointer  rounded-2xl lg:bg-white  "
      />
    ))}
</div>


            </div>
            </div>
           
            <div className="p-5 rounded-xl">
              <div
                className="
    lg:hidden
    fixed
    bottom-0
    left-0
    right-0
    z-30
    flex
    justify-between
    items-center
    p-4
    bg-white
    rounded-t-2xl
    shadow-md
  "
              >
                <button className="font-medium text-black p-2">Find</button>
                <button className="font-medium text-black p-2">Filter</button>
              </div>
            </div>
            {/* ************************************************* */}
            <div className=" p-7">
              <h1 className="text-justify hidden leading-relaxed lg:pb-30">
                Borrowing its nomenclature from The North Face's stalwart
                outerwear style, the Nuptse Jacket, the Nuptse Traction Chukka
                is a winterised footwear silhouette combining comfort and
                protection. Insulated using a 700-fill-power goose down, the
                upper is made from a durable ripstop nylon, with a PFC-free DWR
                coating, shedding light moisture and resisting stains. In place
                of traditional lacing, the Chukka opts for a toggle closure to
                prevent snow and ice from getting in while you traverse
                snow-laden surfaces. The shoe is fitted with a Winter Grip®
                rubber outsole, with IcePick® temperature-sensitive rubber lugs.
                The Black and Yellow colours are mainstays in The North Face
                footwear, while a Real Tree camo option is a nod to hunting and
                outdoor wear.
              </h1>
            </div>
          </div>
        )}

        {!(selectedShoe && isMobile) && (
          <>
            {showDesktopZoomBar && (
              <div
                className="
      hidden lg:flex
      justify-between
      bg-white
      rounded-2xl
      p-5
      fixed
      bottom-4
      right-6
      z-50
      w-[calc(100%-440px)]
      h-[72px]
      shadow-md
    "
              >
                <div className="flex gap-6 items-center">
                  <h1>ZOOM</h1>
                  <button className="text-2xl cursor-pointer" onClick={zoomOut}>
                    -
                  </button>
                  <button className="text-2xl cursor-pointer" onClick={zoomIn}>
                    +
                  </button>
                </div>

                <div className="flex gap-4 items-center">
                  <button
                    className="cursor-pointer"
                    onClick={() =>
                      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
                    }
                  >
                    SORT {sortOrder === "asc" ? "↑" : "↓"}
                  </button>
                  <button className="cursor-pointer">RANDOM</button>
                </div>
              </div>
            )}

            <div
              className="
    lg:hidden
    fixed
    bottom-2
    left-2
    right-2
    rounded-2xl
    z-50
    flex
    items-center
    bg-white
    p-5
    h-[64px]
    shadow-md
  "
            >
              {!isFinding ? (
                <div className="flex w-full justify-between items-center">
                  <button onClick={() => setIsFinding(true)}>Find</button>

                  {!isStoriesPage && !hideOnHome && (
                    <>
                      <button onClick={zoomOut} className="text-2xl">
                        -
                      </button>

                      <button onClick={zoomIn} className="text-2xl">
                        +
                      </button>
                    </>
                  )}

                  <button>Filter</button>
                </div>
              ) : (
                <div className="flex w-full items-center gap-3">
                  <button
                    onClick={() => setIsFinding(false)}
                    className="text-lg font-semibold"
                  >
                    <FaLongArrowAltLeft />
                  </button>

                  <input
                    type="text"
                    placeholder="Search here..."
                    className="
          flex-1
          border
          border-gray-300
          rounded-md
          px-3
          py-2
          outline-none
          focus:border-black
        "
                    autoFocus
                  />
                </div>
              )}
              <ProductDetailsSidebar product={selectedShoe} />
            </div>
          </>
        )}
      </div>
    </>
  );
}
