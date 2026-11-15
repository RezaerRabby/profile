
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export default function BiographySection() {
  return (
    <section id="biography" className="bg-slate-50 px-5 py-24">
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Biography"
          title="Professional Biography"
          description="A journey of knowledge, dedication, and educational leadership."
        />

        <div className="max-w-4xl rounded-xl border-l-4 border-amber-500 bg-white p-8 shadow-sm md:p-12">
          <p className="text-lg leading-9 text-slate-600">
            {profile.biography}
          </p>
        </div>
      </div>
    </section>
  );
}
