
import SectionHeading from "@/components/ui/SectionHeading";
import { education } from "@/data/profile";

export default function EducationSection() {
  return (
    <section id="education" className="bg-white px-5 py-24">
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Education"
          title="Academic Qualifications"
          description="Educational background and academic achievements."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {education.map((item, index) => (
            <article
              key={`${item.degree}-${index}`}
              className="rounded-xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg"
            >
              <span className="text-sm font-bold text-amber-600">
                0{index + 1}
              </span>
              <h3 className="mt-4 text-xl font-bold text-slate-900">
                {item.degree}
              </h3>
              <p className="mt-3 font-medium text-slate-700">
                {item.institution}
              </p>
              <p className="mt-2 text-sm text-amber-600">{item.year}</p>
              <p className="mt-4 leading-7 text-slate-500">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
