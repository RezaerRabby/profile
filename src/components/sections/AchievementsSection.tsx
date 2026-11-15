
import SectionHeading from "@/components/ui/SectionHeading";
import { achievements } from "@/data/profile";

export default function AchievementsSection() {
  return (
    <section id="achievements" className="bg-white px-5 py-24">
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Recognition"
          title="Achievements & Awards"
          description="Recognition and contributions throughout the professional career."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {achievements.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="rounded-xl bg-slate-950 p-8 text-white"
            >
              <span className="text-3xl text-amber-400">✦</span>
              <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">
                {item.description}
              </p>
              <p className="mt-5 text-sm font-semibold text-amber-400">
                {item.year}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
