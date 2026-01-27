import { redirect } from "next/navigation";
import { stories } from "@/data/stories.js";

export default function StoriesRedirectPage() {
  if (stories.length > 0) {
    redirect(`/Stories/${stories[0].slug}`);
  }
  return null;
}
