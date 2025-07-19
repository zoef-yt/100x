import WeekCard from "@/components/WeekCard";

const weeks = Array.from({ length: 12 }, (_, i) => ({
  week: i + 1,
  title: `Project ${i + 1}`,
  date: "2024",
  description: "Brief summary of work completed.",
}));

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#f0f6fc] font-sans">
      <section className="flex flex-col items-center justify-center gap-4 py-24 text-center">
        <h1 className="text-3xl md:text-5xl font-mono">Week by Week, Skill by Skill</h1>
        <p className="text-[#8b949e] max-w-md">
          Follow my 12-week journey from bootcamp to full-stack developer.
        </p>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-20" id="weeks">
        {weeks.map((w) => (
          <WeekCard key={w.week} {...w} />
        ))}
      </section>
    </main>
  );
}
