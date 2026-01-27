"use client";
import Link from "next/link";
import Image from "next/image";
import { stories } from "@/data/stories";
import { useState, useRef } from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function StoriesPage() {
  const [activeStory, setActiveStory] = useState(null);
  const storyRef = useRef(null);

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 sm:px-0">
        {stories.map((story) => (
          <div
            key={story.id}
            onClick={() => setActiveStory(story)}
            className="block cursor-pointer"
          >
            <Link
              href={`/Stories/${story.slug}`}
              className="hidden sm:block"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <div className="flex flex-col sm:flex-row sm:gap-6 items-start py-4 sm:py-6 mt-0 sm:mt-2 p-2 sm:p-0 bg-[#F5F5F5] hover:bg-[#EDEDED] transition">
                <div className="w-full sm:w-[120px] mb-4 sm:mb-0">
                  <Image
                    src={story.image}
                    alt={story.title}
                    width={120}
                    height={120}
                    className="object-cover w-full h-auto sm:w-[120px] sm:h-[120px]"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <div className="flex flex-col sm:flex-row sm:gap-4 text-xs uppercase">
                    <span>{story.category}</span>
                    <span className="mt-1 sm:mt-0">{story.date}</span>
                  </div>
                  <h2 className="text-base sm:text-lg font-medium leading-snug">
                    {story.title}
                  </h2>
                </div>
              </div>
            </Link>
            <Link
              href={`/Stories/${story.slug}`}
              className="block md:hidden"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <div className="flex flex-row gap-4 h-[200px] items-start p-2 bg-[#F5F5F5] hover:bg-[#EDEDED] transition rounded-lg">
                <div className="w-[120px] h-[120px] flex-shrink-0">
                  <Image
                    src={story.image}
                    alt={story.title}
                    width={120}
                    height={120}
                    className="object-cover w-full h-full rounded-md"
                  />
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <div className="flex gap-3 text-xs uppercase text-gray-600">
                    <span>{story.category}</span>
                    <span>{story.date}</span>
                  </div>
                  <h2 className="text-base font-medium leading-snug">
                    {story.title}
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* mobile view story */}
      {activeStory && (
        <div
          ref={storyRef}
          className="lg:hidden fixed inset-0 w-screen h-[calc(100vh-80px)] bg-white z-[9999] flex flex-col overflow-y-auto"
        >
          <button
            onClick={() => {
              setActiveStory(null);
              window.scrollTo(0, 0);
            }}
            className="fixed top-4 left-4 bg-white/50  p-3 rounded-full z-[10000] md:hidden"
          >
            <FaArrowLeft />
          </button>

          <div className="w-full h-[60vh] bg-gray-100 relative">
            <Image
              src={activeStory.image}
              alt={activeStory.title}
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="p-4 flex-1 overflow-y-auto">
            <h1 className="text-xl font-bold mb-2">{activeStory.title}</h1>
            <p className="text-sm text-gray-700 leading-relaxed">
              {activeStory.content}
            </p>
          </div>
        </div>
      )}
      <div className="md:hidden w-full flex p-5 mr-20 items-center fixed bottom-0 bg-white gap-3 shadow-sm p-4 z-[10000]">
        <label className="text-sm font-medium whitespace-nowrap">Find</label>
        <input type="text" className="flex-1 w-full p-3 rounded-md text-sm " />
        <label className="text-sm font-medium whitespace-nowrap mr-5">
          Filter
        </label>
      </div>
    </>
  );
}
