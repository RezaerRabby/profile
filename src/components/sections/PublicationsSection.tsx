
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { publications } from "@/data/profile";

export default function PublicationsSection() {
  return (
    <section id="publications" className="bg-slate-50 px-5 py-24">
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Research & Publications"
          title="Academic Publications"
          description="Books, research papers, articles, and academic contributions."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {publications.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="rounded-xl border border-slate-200 bg-white p-7"
            >
              <span className="text-sm font-semibold text-amber-600">
                {item.category} · {item.year}
              </span>
              <h3 className="mt-4 text-xl font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                {item.description}
              </p>
              {item.link !== "#" && (
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block font-semibold text-amber-700 hover:underline"
                >
                  Read Publication →
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
