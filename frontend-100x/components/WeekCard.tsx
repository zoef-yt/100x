
export interface WeekCardProps {
  week: number;
  title: string;
  date: string;
  description: string;
}

export default function WeekCard({
  week,
  title,
  date,
  description,
}: WeekCardProps) {
  return (
    <article className="bg-[#0d1117] text-[#f0f6fc] border border-[#58a6ff]/30 rounded p-4 flex flex-col gap-2 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between text-sm font-mono">
        <span className="bg-[#58a6ff] text-black px-2 py-0.5 rounded">Week {week}</span>
        <span className="text-[#8b949e]">{date}</span>
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-[#8b949e]">{description}</p>
    </article>
  );
}
