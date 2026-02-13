"use client";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/lib/firebase";
import Image from "next/image";

export default function StoryDetailPage({ params }) {
  const [story, setStory] = useState(null);
  const slug = params?.slug;

  useEffect(() => {
    const fetchStory = async () => {
      const snapshot = await getDocs(collection(db, "stories"));

      const stories = snapshot.docs.map((doc) => doc.data());

      const found = stories.find((s) => s.slug === slug);

      setStory(found || null);
    };

    fetchStory();
  }, [slug]);

  if (!story) {
    return <h2 className="text-center mt-10 text-2xl font-bold">Loading...</h2>;
  }

  return (
    <div className="max-w-5xl mx-auto p-10">
      <div className="text-xs uppercase text-gray-500 mb-2">
        {story.category} • {story.date}
      </div>

      <h1 className="text-4xl font-bold mb-6">{story.title}</h1>

      <div className="flex justify-center bg-gray-100 p-6 rounded-2xl mb-6">
        <Image
          src={story.image}
          alt={story.title || "Story image"}
          width={600}
          height={400}
          className="object-contain rounded-xl"
        />
      </div>

      <p className="text-xl text-gray-800 leading-relaxed">{story.content}</p>
    </div>
  );
}
