import {
  Contact,
  Footer,
  Hero,
  Navbar,
  Services,
  Experience,
} from "@/components";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function page() {
  return (
    <main className="transition-all duration-300">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <div className="flex flex-col gap-[60px] lg:flex-row lg:gap-[36px] lg:justify-center">
        <Skills />
        <Experience />
      </div>
      <Contact />
      <Footer />
    </main>
  );
}
