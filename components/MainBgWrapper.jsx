"use client";

import { usePathname } from "next/navigation";
import { cloneElement } from "react";

export default function MainBgWrapper({ children }) {
  const pathname = usePathname();

  let bgClass = "bg-white";
  let mainExtraClass = "";

  if (pathname === "/" || pathname === "/home" || pathname === "/bookmarks") {
    bgClass = "bg-gray-100";
  }

  if (pathname === "/stories") {
    bgClass = "bg-white";
    mainExtraClass = "rounded-2xl bg-white overflow-hidden shadow-lg";
  }

  /* PDP */
  if (pathname.startsWith("/product")) {
    bgClass = "bg-gray-100";
    mainExtraClass = "";
  }

  return (
    <div className={`${bgClass} w-full h-full p-4`}>
      {cloneElement(children, {
        className: `${children.props.className || ""} ${mainExtraClass}`,
      })}
    </div>
  );
}
