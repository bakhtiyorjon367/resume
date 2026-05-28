import { About } from "../components/resume/About";
import { Education } from "../components/resume/Education";
import { Experience } from "../components/resume/Experience";
import { Hero } from "../components/resume/Hero";
import { Skills } from "../components/resume/Skills";

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
    </>
  );
}
