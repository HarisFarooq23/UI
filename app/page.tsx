"use client";

import {
  Activity,
  BookmarkCheck,
  Compass,
  Home,
  TrendingUp,
  UserRound,
} from "lucide-react";
import { AppHeader } from "@/components/app-header";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import RainingLetters from "@/components/ui/modern-animated-hero-section";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Home",
    date: "Gateway",
    content: "Overview of GitOracle and how to get project recommendations quickly.",
    category: "Overview",
    icon: Home,
    relatedIds: [2, 3],
    status: "completed" as const,
    energy: 96,
    href: "/",
  },
  {
    id: 2,
    title: "Find Projects",
    date: "Core",
    content: "Enter domain and available time to match beginner to advanced repos.",
    category: "Search",
    icon: Compass,
    relatedIds: [1, 4],
    status: "in-progress" as const,
    energy: 90,
    href: "/find-projects",
  },
  {
    id: 3,
    title: "Trending",
    date: "Explore",
    content: "See currently popular repositories filtered by your learning goals.",
    category: "Discovery",
    icon: TrendingUp,
    relatedIds: [1, 4],
    status: "completed" as const,
    energy: 84,
    href: "/trending-projects",
  },
  {
    id: 4,
    title: "Saved",
    date: "Collection",
    content: "Track repositories you want to build and revisit estimated completion time.",
    category: "Library",
    icon: BookmarkCheck,
    relatedIds: [2, 3, 5],
    status: "pending" as const,
    energy: 72,
    href: "/saved-projects",
  },
  {
    id: 5,
    title: "Profile",
    date: "Personalization",
    content: "Configure your preferred stacks, daily free hours, and current skill level.",
    category: "User",
    icon: UserRound,
    relatedIds: [4],
    status: "pending" as const,
    energy: 65,
    href: "/user-profile",
  },
];

export default function HomePage() {
  return (
    <div className="bg-black text-white">
      <AppHeader />
      <RainingLetters />
      <section className="mx-auto max-w-6xl px-4">
        <ContainerScroll
          titleComponent={
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white">Build Smarter with GitOracle</h2>
              <p className="mt-4 text-zinc-300 max-w-3xl mx-auto">
                Choose your domain like C++, machine learning, or web scraping and the time you
                have. GitOracle maps you to GitHub projects with difficulty and estimated time.
              </p>
            </div>
          }
        >
          <div className="h-full w-full bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-8">
            <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-3">
              {[
                "Domain-based project matching",
                "Difficulty scoring and learning curve",
                "Time-based commitment estimates",
              ].map((item, idx) => (
                <article key={item} className="rounded-xl border border-white/10 bg-zinc-900/60 p-5">
                  <Activity className="h-5 w-5 text-emerald-300" />
                  <h3 className="mt-3 font-semibold">Feature {idx + 1}</h3>
                  <p className="mt-2 text-sm text-zinc-300">{item}</p>
                  <img
                    src={`https://images.unsplash.com/photo-${idx === 0 ? "1518773553398-650c184e0bb3" : idx === 1 ? "1555949963-aa79dcee981c" : "1461749280684-dccba630e2f6"}?auto=format&fit=crop&w=1200&q=80`}
                    alt={item}
                    className="mt-4 h-32 w-full rounded-lg object-cover"
                  />
                </article>
              ))}
            </div>
          </div>
        </ContainerScroll>
      </section>

      <section>
        <RadialOrbitalTimeline timelineData={timelineData} />
      </section>
    </div>
  );
}
