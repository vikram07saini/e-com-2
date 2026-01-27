import { stories } from "@/data/stories";
import Image from "next/image";

export function generateStaticParams() {
  return stories.map((story) => ({
    slug: story.slug,
  }));
}

export default function StoryDetailPage({ params }) {
  const story = stories.find((s) => s.slug === params.slug);

  if (!story) {
    return (
      <h1 className="text-center mt-10 text-2xl font-bold">Story Not Found</h1>
    );
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
          alt={story.title}
          width={600}
          height={400}
          className="object-contain rounded-xl"
          priority
        />
      </div>

      <p className="text-xl text-gray-800 leading-relaxed">{story.content}</p>
    </div>
  );
}
