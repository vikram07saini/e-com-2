// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { stories } from "@/data/stories";
// import { useState, useRef } from "react";
// import { FaArrowLeft } from "react-icons/fa";

// export default function StoriesPage() {
//   const [activeStory, setActiveStory] = useState(null);
//   const storyRef = useRef(null);

//   return (
//     <>
//     {!activeStory && (
//   <div
//     style={{ height: "100%", overflowY: "auto", paddingBottom: "120px" }}
//     className="p-3"
//   >
//         {stories.map((story) => (
//           <div
//             key={story.id}
//             onClick={() => setActiveStory(story)}
//             className="block cursor-pointer"
//           >
//             <Link
//               href={`/Stories/${story.slug}`}
//               className="hidden sm:block"
//               onClick={() => window.scrollTo(0, 0)}
//             >
//               <div className="flex flex-col rounded-xl sm:flex-row  items-startsm:py-6 mt-0 sm:mt-2 p-2 sm:p-0 bg-[#F5F5F5] hover:bg-[#EDEDED] transition">
//                 <div className="w-full sm:w-[220px] mb-4 sm:mb-0 ">
//                   <Image
//                     src={story.image}
//                     alt={story.title}
//                     width={120}
//                     height={120}
//                     className="object-cover w-full h-auto sm:w-[140px] sm:h-[140px] rounded-l-xl "
//                   />
//                 </div>
//                 <div className="flex flex-col gap-2 w-full p-2">
//                   <div className="flex flex-col sm:flex-row sm:gap-4   text-xs uppercase lg:justify-between ">
//                     <span>{story.category}</span>
//                     <span className="mt-1 sm:mt-0">{story.date}</span>
//                   </div>
//                   <h2 className="text-base sm:text-sm font-medium leading-snug">
//                     {story.title}
//                   </h2>
//                 </div>
//               </div>
//             </Link>
//             <Link
//               href={`/Stories/${story.slug}`}
//               className="block md:hidden"
//               onClick={() => window.scrollTo(0, 0)}
//             >
//               <div className="flex flex-row mb-5 gap-2 h-[130px] items-start  bg-white hover:bg-[#EDEDED] transition rounded-lg">
//              <div className=" w-[130px] h-[210px]   sm:mb-0 flex-shrink-0">
//   <Image
//     src={story.image}
//     alt={story.title}
//     width={120}
//     height={120}
//     className="object-cover w-full h-auto sm:w-[140px] sm:h-[180px] rounded-md"
//   />
// </div>


//                 <div className="flex flex-col gap-2 w-full">
//                   <div className="flex gap-3 text-xs uppercase justify-between pr-2 text-gray-600 p-2">
//                     <span>{story.category}</span>
//                     <span>{story.date}</span>
//                   </div>
//                   <h2 className="text-base text-sm leading-snug">
//                     {story.title}
//                   </h2>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     )}
//       {/* mobile view story */}
//       {activeStory && (
//         <div
//           ref={storyRef}
//           className="lg:hidden fixed inset-0 w-screen h-[calc(100vh-80px)] bg-white z-[9999] flex flex-col overflow-y-auto"
//         >
//           <button
//             onClick={() => {
//               setActiveStory(null);
//               window.scrollTo(0, 0);
//             }}
//             className="fixed top-4 left-4 bg-white/50 p-3 rounded-full z-[10000] md:hidden"
//           >
//             <FaArrowLeft />
//           </button>
//           <div className="w-full h-[60vh] bg-gray-100 relative">
//             <Image
//               src={activeStory.image}
//               alt={activeStory.title}
//               fill
//               className="object-contain"
//               priority
//             />
//           </div>
//           <div className="p-4 flex-1 overflow-y-auto">
//             <h1 className="text-xl font-bold mb-2">{activeStory.title}</h1>
//             <p className="text-sm text-gray-700 leading-relaxed">
//               {activeStory.content}
//             </p>
//           </div>
//         </div>
//       )}
      
//         {/* <label className="text-sm font-medium whitespace-nowrap">Find</label> */}
//         {/* <input type="text" className="flex-1 w-full p-3 rounded-md text-sm " />
//         <label className="text-sm font-medium whitespace-nowrap mr-5">
//           Filter
//         </label> */}
   
//     </>
//   );
// }
"use client";
import Link from "next/link";
import Image from "next/image";
import { stories } from "@/data/stories";
import { useState, useRef, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function StoriesPage() {
  const [activeStory, setActiveStory] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const storyRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      {/* STORY LIST (visible on desktop always, hidden on mobile when story open) */}
      {!(activeStory && isMobile) && (
        <div
          style={{ height: "100%", overflowY: "auto", paddingBottom: "120px" }}
          className="p-3"
        >
          {stories.map((story) => (
            <div
              key={story.id}
              onClick={() => {
                if (isMobile) setActiveStory(story);
              }}
              className="block cursor-pointer"
            >
              {/* DESKTOP VIEW */}
              <Link
                href={`/Stories/${story.slug}`}
                className="hidden sm:block"
                onClick={() => window.scrollTo(0, 0)}
              >
                <div className="flex flex-col rounded-xl sm:flex-row mt-0 sm:mt-2 p-2 sm:p-0 bg-[#F5F5F5] hover:bg-[#EDEDED] transition">
                  <div className="w-full sm:w-[220px] mb-4 sm:mb-0">
                    <Image
                      src={story.image}
                      alt={story.title}
                      width={140}
                      height={140}
                      className="object-cover w-full sm:w-[140px] sm:h-[140px] rounded-l-xl"
                    />
                  </div>

                  <div className="flex flex-col gap-2 w-full p-2">
                    <div className="flex flex-col sm:flex-row sm:gap-4 text-xs uppercase lg:justify-between">
                      <span>{story.category}</span>
                      <span className="mt-1 sm:mt-0">{story.date}</span>
                    </div>
                    <h2 className="text-base sm:text-xs font-medium leading-snug">
                      {story.title}
                    </h2>
                  </div>
                </div>
              </Link>

              {/* MOBILE VIEW */}
             {/* MOBILE VIEW (OLD TYPE) */}
<Link
                href={`/Stories/${story.slug}`}
                className="block md:hidden"
                onClick={() => window.scrollTo(0, 0)}
              >
                <div className="flex flex-row mb-2  gap-4 h-[150px] items-start  bg-white hover:bg-[#EDEDED] transition rounded-lg lg:hidden">
                  <div className="w-[220px] h-[150px] lg:flex-shrink-0">
                    <Image
                      src={story.image}
                      alt={story.title}
                      width={120}
                      height={120}
                      className="object-cover w-full h-full rounded-md"
                    />
                  </div>

                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex gap-3 text-xs uppercase justify-between pr-2 text-gray-600">
                      <span>{story.category}</span>
                      <span>{story.date}</span>
                    </div>
                    <h2 className="text-base text-xs leading-snug">
                      {story.title}
                    </h2>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}

      {/* MOBILE STORY DETAIL VIEW */}
      {activeStory && isMobile && (
        <div
          ref={storyRef}
          className="lg:hidden fixed inset-0 w-screen h-[calc(100vh-80px)] bg-white z-[9999] flex flex-col overflow-y-auto"
        >
          <button
            onClick={() => {
              setActiveStory(null);
              window.scrollTo(0, 0);
            }}
            className="fixed top-4 left-4 bg-white/50 p-3 rounded-full z-[10000]"
          >
            <FaArrowLeft />
          </button>

          <div className="w-full h-[60vh] bg-gray-100 relative">
            <Image
              src={activeStory?.image}
              alt={activeStory?.title || "story"}
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="p-4 flex-1 overflow-y-auto">
            <h1 className="text-xl font-bold mb-2">
              {activeStory?.title}
            </h1>
            <p className="text-sm text-gray-700 leading-relaxed">
              {activeStory?.content}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
