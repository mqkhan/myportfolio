import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectSection";
import ContactSection from "./ContactSection";

export default function Home() {
  return (
    <div
      className={"bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white"}
    >
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
