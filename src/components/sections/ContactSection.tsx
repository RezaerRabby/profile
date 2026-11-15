
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white px-5 py-24">
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact Information"
          description="For academic collaboration, professional communication, and institutional inquiries."
        />

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-slate-50 p-7">
            <h3 className="font-bold text-slate-900">Email</h3>
            <a
              href={`mailto:${profile.email}`}
              className="mt-3 block break-all text-amber-700 hover:underline"
            >
              {profile.email}
            </a>
          </div>

          <div className="rounded-xl bg-slate-50 p-7">
            <h3 className="font-bold text-slate-900">Phone</h3>
            <a
              href={`tel:${profile.phone}`}
              className="mt-3 block text-amber-700 hover:underline"
            >
              {profile.phone}
            </a>
          </div>

          <div className="rounded-xl bg-slate-50 p-7">
            <h3 className="font-bold text-slate-900">Address</h3>
            <p className="mt-3 text-slate-600">{profile.address}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href={profile.socialLinks.linkedin}
            target="_blank"
            className="rounded-md bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-amber-600"
          >
            LinkedIn
          </Link>

          <Link
            href={profile.socialLinks.facebook}
            target="_blank"
            className="rounded-md border border-slate-300 px-6 py-3 font-semibold text-slate-800 hover:border-amber-500"
          >
            Facebook
          </Link>
        </div>
      </div>
    </section>
  );
}
