"use client";
import { useEffect, useState } from "react";
import ProductDetailsSidebar from "@/components/ProductDetailsSidebar";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/public/logo.svg";
import Index from "@/app/(with-sidebar)/home/page.jsx";
import Stories from "@/app/(with-sidebar)/Stories/page.jsx";
import Bookmarks from "@/app/(with-sidebar)/bookmarks/page.jsx";
import SHOP from "@/app/Shop/page.jsx";
import { useRouter } from "next/navigation";

const MenuIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

export default function Sidebar({ children }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileFull, setMobileFull] = useState(false);
  const pathname = usePathname();
  const effectivePath = pathname === "/" ? "/home" : pathname;

  const router = useRouter();

  const handleMobileNav = (path) => {
    if (window.innerWidth < 1024) {
      setIsMobileMenuOpen(false);
      if (path !== "/") setMobileFull(true);
    }
  };

  const openSidebarMobile = () => {
    if (window.innerWidth < 1024) setMobileFull(false);
  };

  useEffect(() => {
    const openHandler = (e) => setSelectedProduct(e.detail);
    const closeHandler = () => setSelectedProduct(null);

    window.addEventListener("openProductDetails", openHandler);
    window.addEventListener("closeProductDetails", closeHandler);
    return () => {
      window.removeEventListener("openProductDetails", openHandler);
      window.removeEventListener("closeProductDetails", closeHandler);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (pathname === "/") {
      setSelectedProduct(null);
      setMobileFull(false);
    }
  }, [pathname]);

  const isHome = effectivePath === "/home";
  const isStories = effectivePath === "/Stories";
  const isStoryDetail = effectivePath.match(/^\/Stories\/[^/]+$/);
  const isBookmarks = effectivePath.startsWith("/bookmarks");
  const isHomeMobile = effectivePath === "/home";
  const isStoriesMobile = effectivePath === "/Stories" || isStoryDetail;
  const isBookmarksMobile = effectivePath.startsWith("/bookmarks");
  const isShopMobile = effectivePath === "/";

  const linkClass = (path) =>
    pathname === path
      ? "text-red-500 font-semibold"
      : "text-black hover:text-red-500";

  const showBackButton =
    selectedProduct !== null || isStoryDetail !== null || mobileFull === true;

  return (
    <>
      <div className="hidden lg:block pt-5 pl-5 pb-5 rounded-2xl lg:w-[200px]">
<aside className="
  fixed
  bg-white
  pr-4
  rounded-2xl
  overflow-hidden
  z-40
  w-full lg:w-[370px]
  h-[95.4%]
  mb-20
  flex flex-col
">
<div className="flex flex-col overflow-hidden min-h-0">

            <div className="hidden rounded-3xl lg:flex p-5 justify-between items-center">
              <Link
                href="/"
                onClick={(e) => {
                  if (window.innerWidth < 1024) return;

                  e.preventDefault();
                  setSelectedProduct(null);
                  window.dispatchEvent(new CustomEvent("closeProductDetails"));

                  setTimeout(() => {
                    window.location.href = "/";
                  }, 0);
                }}
              >
                <Image
                  src={logo}
                  alt="logo"
                  width={60}
                  height={60}
                  priority
                  className="cursor-pointer"
                />
              </Link>

              {showBackButton && (
                <Link
                  className="mr-10"
                  href="/"
                  onClick={(e) => {
                    if (window.innerWidth < 1024) return;

                    e.preventDefault();
                    setSelectedProduct(null);
                    setMobileFull(false);

                    window.dispatchEvent(
                      new CustomEvent("closeProductDetails"),
                    );

                    setTimeout(() => {
                      window.location.href = "/";
                    }, 0);
                  }}
                >
                  <div className="text-red-600">
                    <ArrowLeftIcon />
                  </div>
                </Link>
              )}
            </div>
            <nav className="flex flex-col lg:flex-row gap-3 px-5 mt-2">
              <Link href="/home" className={linkClass("/home")}>
                INDEX
              </Link>
              <Link href="/Stories" className={linkClass("/Stories")}>
                STORIES
              </Link>
              <Link href="/" className={linkClass("/")}>
                SHOP
              </Link>
              <Link href="/bookmarks" className={linkClass("/bookmarks")}>
                BOOKMARKS
              </Link>
            </nav>
           <div className="relative flex-1 overflow-y-auto text-sm">

              {selectedProduct ? (
                <ProductDetailsSidebar
                  product={selectedProduct}
                  onClose={() => setSelectedProduct(null)}
                />
              ) : (
                <>
                  {isHome && <Index />}
                  {(isStories || isStoryDetail) && <Stories />}
                  {isBookmarks && <Bookmarks />}
                </>
              )}
              
              
            </div>
          </div>
          <div
  className="m-1 lg:flex items-center gap-5 px-5
  sticky bottom-0 bg-white p-4 z-50
  shadow-[0_-10px_10px_rgba(255,255,255,0.9)]"
>

            <label htmlFor="Find" className="text-sm font-medium ">
              FIND
            </label>
            <input
              className="bg-gray-100 text-sm w-[90%] p-2 rounded-lg"
              placeholder="Search Brand, Style, Colour or Year"
            />
          </div>
        </aside>
      </div>

      <div className="lg:hidden fixed top-0 left-0 right-0 h-[80px] bg-gray-100 z-40 pb-5"></div>
      <header className="lg:hidden fixed top-0 left-0 right-0 bg-white z-50 m-2 rounded-2xl ">
        <div
          className="
      flex
      items-center
      justify-between
      px-5
      py-3
      bg-white
      rounded-xl
    "
        >
          <Link
            href="/"
            onClick={(e) => {
              if (window.innerWidth < 1024) return;

              e.preventDefault();
              setSelectedProduct(null);
              window.dispatchEvent(new CustomEvent("closeProductDetails"));

              setTimeout(() => {
                window.location.href = "/";
              }, 0);
            }}
            className="flex items-center"
          >
            <Image
              src={logo}
              alt="logo"
              width={52}
              height={52}
              priority
              className="cursor-pointer"
            />
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="
        flex
        items-center
        justify-center
        w-10
        h-10
        rounded-full
        text-red-600
        hover:bg-gray-100
        transition
      "
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      <aside
        className={`lg:hidden fixed top-0 left-0 w-screen h-screen bg-white z-40 transition-transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-6">
          <Link href="/home" onClick={handleMobileNav}>
            INDEX
          </Link>
          <Link href="/Stories" onClick={handleMobileNav}>
            STORIES
          </Link>
          <Link href="/" onClick={() => handleMobileNav("shop")}>
            SHOP
          </Link>
          <Link href="/bookmarks" onClick={handleMobileNav}>
            BOOKMARKS
          </Link>
        </nav>
      </aside>

      {mobileFull && (
        <main className="lg:hidden fixed inset-0 bg-white z-30 p-5 overflow-y-auto mt-8 ">
          <button onClick={openSidebarMobile}>
            <ArrowLeftIcon />
          </button>

          {isHomeMobile && <Index />}
          {isStoriesMobile && <Stories />}
          {isBookmarksMobile && <Bookmarks />}
          {isShopMobile && children}
        </main>
      )}
    </>
  );
}
