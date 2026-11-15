
import Link from "next/link";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="bg-slate-950 px-5 py-8 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div>
          <h3 className="font-semibold">{profile.name}</h3>
          <p className="mt-1 text-sm text-slate-400">
            {profile.designation} | {profile.college}
          </p>
        </div>

        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>

        <Link
          href="#home"
          className="text-sm text-amber-400 hover:text-amber-300"
        >
          Back to Top ↑
        </Link>
      </div>
    </footer>
  );
}
