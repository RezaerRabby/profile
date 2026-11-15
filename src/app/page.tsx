
// export default function Home() {
//   return (
//     <div>
//       askdjfhlh
//     </div>
//   );
// }



import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import BiographySection from "@/components/sections/BiographySection";
import EducationSection from "@/components/sections/EducationSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import PublicationsSection from "@/components/sections/PublicationsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <BiographySection />
        <EducationSection />
        <ExperienceSection />
        <AchievementsSection />
        <PublicationsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
