
// import Image from "next/image";
// import Link from "next/link";
// import { profile, stats } from "@/data/profile";

// export default function HeroSection() {
//   return (
//     <section
//       id="home"
//       className="relative overflow-hidden bg-slate-950 px-5 pb-24 pt-36 text-white"
//     >
//       <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />

//       <div className="container relative mx-auto grid items-center gap-14 lg:grid-cols-2">
//         <div>
//           <span className="inline-block rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-2 text-sm text-amber-400">
//             Welcome to My Portfolio
//           </span>

//           <h1 className="mt-7 text-4xl font-bold leading-tight md:text-6xl">
//             {profile.name}
//           </h1>

//           <h2 className="mt-4 text-2xl font-semibold text-amber-400">
//             {profile.designation}
//           </h2>

//           <p className="mt-6 max-w-xl leading-8 text-slate-300">
//             {profile.shortBio}
//           </p>

//           <div className="mt-9 flex flex-wrap gap-4">
//             <Link
//               href="#biography"
//               className="rounded-md bg-amber-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-400"
//             >
//               Explore Profile
//             </Link>

//             <a
//               href={profile.cv}
//               download
//               className="rounded-md border border-white/30 px-6 py-3 font-semibold transition hover:bg-white hover:text-slate-950"
//             >
//               Download CV ↓
//             </a>
//           </div>
//         </div>

//         <div className="flex justify-center">
//           <div className="relative h-[340px] w-[280px] overflow-hidden rounded-t-full border-4 border-amber-500/70 bg-slate-800 shadow-2xl md:h-[430px] md:w-[350px]">
//             <Image
//               src={profile.image}
//               alt={profile.name}
//               fill
//               priority
//               sizes="(max-width: 768px) 280px, 350px"
//               className="object-cover"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="container relative mx-auto mt-20 grid grid-cols-1 gap-6 border-t border-white/10 pt-10 sm:grid-cols-3">
//         {stats.map((stat) => (
//           <div key={stat.label} className="text-center">
//             <h3 className="text-3xl font-bold text-amber-400">
//               {stat.value}
//             </h3>
//             <p className="mt-2 text-sm text-slate-400">
//               {stat.label}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { profile, stats } from "@/data/profile";

function TypingText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState("");
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    setDisplayText("");
    setIsFinished(false);

    let index = 0;

    const timer = setInterval(() => {
      index++;
      setDisplayText(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(timer);
        setIsFinished(true);
      }
    }, 120);

    return () => clearInterval(timer);
  }, [text]);

  return (
    <span>
      {displayText}
      <span
        className={`ml-1 inline-block text-amber-400 ${
          isFinished ? "animate-pulse" : ""
        }`}
      >
        |
      </span>
    </span>
  );
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 px-5 pb-24 pt-36 text-white"
    >
      {/* Background Effects */}
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container relative mx-auto grid items-center gap-14 lg:grid-cols-2">

        {/* Left Content */}
        <div>
          {/* Welcome Badge */}
          <span className="animate-fade-up inline-block rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-2 text-sm text-amber-400">
            Welcome to My Portfolio
          </span>

          {/* Animated Name */}
          <h1 className="mt-7 min-h-[1.3em] text-4xl font-bold leading-tight md:text-6xl">
            <TypingText text={profile.name} />
          </h1>

          {/* Designation */}
          <h2 className="animate-fade-up animation-delay-200 mt-4 text-2xl font-semibold text-amber-400">
            {profile.designation}
          </h2>

          {/* Description */}
          <p className="animate-fade-up animation-delay-400 mt-6 max-w-xl leading-8 text-slate-300">
            {profile.shortBio}
          </p>

          {/* Buttons */}
          <div className="animate-fade-up animation-delay-600 mt-9 flex flex-wrap gap-4">

            <Link
              href="#biography"
              className="rounded-md bg-amber-500 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-amber-400"
            >
              Explore Profile
            </Link>

            {profile.cv && (
              <a
                href={profile.cv}
                download
                className="rounded-md border border-white/30 px-6 py-3 font-semibold transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-slate-950"
              >
                Download CV ↓
              </a>
            )}

          </div>
        </div>

        {/* Right Profile Image */}
        <div className="flex justify-center">
          <div className="animate-image-reveal relative h-[340px] w-[280px] overflow-hidden rounded-t-full border-4 border-amber-500/70 bg-slate-800 shadow-2xl md:h-[430px] md:w-[350px]">

            <Image
              src={profile.image}
              alt={profile.name}
              fill
              priority
              sizes="(max-width: 768px) 280px, 350px"
              className="object-cover transition duration-700 hover:scale-105"
            />

          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="container relative mx-auto mt-20 grid grid-cols-1 gap-6 border-t border-white/10 pt-10 sm:grid-cols-3">

        {stats.map((stat, index) => (
          <div
            key={stat.label}
            style={{
              animationDelay: `${index * 200}ms`,
            }}
            className="animate-fade-up text-center"
          >
            <h3 className="text-3xl font-bold text-amber-400">
              {stat.value}
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              {stat.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}
