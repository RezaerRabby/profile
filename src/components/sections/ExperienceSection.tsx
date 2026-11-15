
import SectionHeading from "@/components/ui/SectionHeading";
import { experiences } from "@/data/profile";

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-slate-50 px-5 py-24">
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Career"
          title="Professional Experience"
          description="Professional journey and institutional contributions."
        />

        <div className="max-w-4xl space-y-6">
          {experiences.map((item, index) => (
            <article
              key={`${item.position}-${index}`}
              className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {item.position}
                  </h3>
                  <p className="mt-2 text-amber-600">
                    {item.institution}
                  </p>
                </div>
                <span className="rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700">
                  {item.period}
                </span>
              </div>
              <p className="mt-5 leading-7 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
