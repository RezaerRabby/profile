
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export default function AboutSection() {
  return (
    <section id="about" className="bg-white px-5 py-24">
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="About Me"
          title="Dedicated to Educational Excellence"
          description="A commitment to education, leadership, and the development of future generations."
        />

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              Academic Leadership
            </h3>
            <p className="mt-5 leading-8 text-slate-600">
              {profile.shortBio}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-7">
            <h3 className="text-xl font-bold text-slate-900">
              Professional Information
            </h3>

            <div className="mt-6 space-y-4 text-slate-600">
              <p><strong>Name:</strong> {profile.name}</p>
              <p><strong>Designation:</strong> {profile.designation}</p>
              <p><strong>Institution:</strong> {profile.college}</p>
              <p><strong>Email:</strong> {profile.email}</p>
              <p><strong>Address:</strong> {profile.address}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
