import { stories } from "@/data/stories";
import Image from "next/image";

export function generateStaticParams() {
  return stories.map((story) => ({
    slug: story.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;   // ✅ FIXED

  const story = stories.find((s) => s.slug === slug);

  if (!story) {
    return {
      title: "Story Not Found",
      description: "The requested story does not exist.",
    };
  }

  return {
    title: story.title,
    description: story.content.slice(0, 150),
    keywords: [
      story.title,
      story.category,
      "fashion news",
      "shoe trends",
      "latest releases",
    ],
    openGraph: {
      title: story.title,
      description: story.content.slice(0, 150),
      type: "article",
      url: `/stories/${story.slug}`,
    },
    twitter: {
      card: "summary",
      title: story.title,
      description: story.content.slice(0, 150),
    },
  };
}

export default async function StoryDetailPage({ params }) {
  const { slug } = await params;   // ✅ FIXED

  const story = stories.find((s) => s.slug === slug);

  if (!story) {
    return (
      <h2 className="text-center mt-10 text-2xl font-bold">
        Story Not Found
      </h2>
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

      <p className="text-xl text-gray-800 leading-relaxed">
        {story.content}
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: story.title,
            description: story.content.slice(0, 150),
            image: story.image,
            datePublished: story.date,
            author: {
              "@type": "Organization",
              name: "Your Store Name",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `/stories/${story.slug}`,
            },
          }),
        }}
      />
    </div>
  );
}
